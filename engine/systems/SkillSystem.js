/**
 * Skill System
 * 
 * Manages all skill-related functionality including skill progression,
 * action unlocking, and XP management.
 */

class Skill {
    constructor(name, level = null, xp = null) {
        this.name = name;
        this.level = level !== null ? level : 1;
        this.xp = xp !== null ? xp : 0;
        this.xpToNext = this.getXpToNextLevel(this.level);
    }

    getXpToNextLevel(level) {
        const multiplier = 100; // Default multiplier, can be overridden by config
        return level * multiplier;
    }

    addXp(amount) {
        this.xp += amount;
        let levelUps = 0;
        
        while (this.xp >= this.xpToNext) {
            this.level++;
            this.xp -= this.xpToNext;
            this.xpToNext = this.getXpToNextLevel(this.level);
            levelUps++;
        }
        
        return levelUps;
    }

    getProgress() {
        const progressMax = 100; // Default progress max, can be overridden by config
        return (this.xp / this.xpToNext) * progressMax;
    }
}

class SkillAction {
    constructor(name, description, levelRequired, xpReward, itemReward, itemCount = 1, skillType, unlockMessage, flavorText) {
        this.name = name;
        this.description = description;
        this.levelRequired = levelRequired;
        this.xpReward = xpReward;
        this.itemReward = itemReward;
        this.itemCount = itemCount;
        this.skillType = skillType;
        this.unlockMessage = unlockMessage;
        this.flavorText = flavorText;
    }
}

class SkillSystem {
    constructor(skillsConfig, gameConfig, stateManager, eventSystem) {
        this.skillsConfig = skillsConfig;
        this.gameConfig = gameConfig;
        this.stateManager = stateManager;
        this.eventSystem = eventSystem;
        
        this.skills = new Map();
        this.skillActions = new Map();
        this.newlyUnlockedActions = new Set();
        
        // Bind methods to maintain context
        this.addSkillXp = this.addSkillXp.bind(this);
        this.getSkill = this.getSkill.bind(this);
        this.getAvailableActions = this.getAvailableActions.bind(this);
    }
    
    /**
     * Initialize the skill system
     */
    async initialize() {
        try {
            console.log('Initializing skill system...');
            
            // Load skills from configuration
            this.loadFromConfig();
            
            // Load skills from state
            this.loadFromState();
            
            // Set up event listeners
            this._setupEventListeners();
            
            console.log('Skill system initialized successfully');
            this.eventSystem.emit('skillSystem:initialized', { 
                skillsCount: this.skills.size,
                actionsCount: this.skillActions.size 
            });
            
        } catch (error) {
            console.error('Failed to initialize skill system:', error);
            this.eventSystem.emit('skillSystem:initError', { error });
            throw error;
        }
    }
    
    /**
     * Load skills and actions from configuration
     */
    loadFromConfig() {
        try {
            console.log('Loading skills and actions from configuration...');
            this.skills.clear();
            this.skillActions.clear();
    
            // Load all skills from skillsConfig
            const processCategory = (categoryData) => {
                for (const [key, data] of Object.entries(categoryData)) {
                    if (data.hasOwnProperty('level')) {
                        this.skills.set(key, new Skill(key, data.level, data.experience));
                    }
                    if (data.sub_skills) {
                        processCategory(data.sub_skills);
                    }
                }
            };
    
            if (this.skillsConfig) {
                for (const category in this.skillsConfig) {
                    processCategory(this.skillsConfig[category]);
                }
            } else {
                console.error("Skills configuration is missing.");
            }
    
            // Load actions from gameConfig and associate them with skills
            if (this.gameConfig && this.gameConfig.skills) {
                Object.entries(this.gameConfig.skills).forEach(([skillKey, skillData]) => {
                    const managerSkillKey = Array.from(this.skills.keys()).find(k => k.toLowerCase() === skillKey.toLowerCase());
    
                    if (managerSkillKey) {
                        const actions = (skillData.actions || []).map(actionData => {
                            return new SkillAction(
                                actionData.name,
                                actionData.description,
                                actionData.levelRequired,
                                actionData.xpReward,
                                actionData.itemReward,
                                actionData.itemCount,
                                managerSkillKey,
                                actionData.unlockMessage,
                                actionData.flavorText
                            );
                        });
                        this.skillActions.set(managerSkillKey, actions);
                    }
                });
            }
            
            console.log('Skills loaded:', this.skills.size);
            console.log('Skill actions loaded:', this.skillActions.size);
    
        } catch (error) {
            console.error('Error loading configuration into SkillSystem:', error);
            throw error;
        }
    }
    
    /**
     * Load skills from state manager
     */
    loadFromState() {
        const savedSkills = this.stateManager.get('skills', {});
        
        for (const [skillName, skillData] of Object.entries(savedSkills)) {
            const skill = this.skills.get(skillName);
            if (skill) {
                skill.level = skillData.level || skill.level;
                skill.xp = skillData.xp || skill.xp;
                skill.xpToNext = skill.getXpToNextLevel(skill.level);
            }
        }
    }
    
    /**
     * Save skills to state manager
     */
    saveToState() {
        const skillsData = {};
        
        this.skills.forEach((skill, name) => {
            skillsData[name] = {
                level: skill.level,
                xp: skill.xp
            };
        });
        
        this.stateManager.set('skills', skillsData);
    }
    
    /**
     * Add a skill to the system
     * @param {string} skillName - Name of the skill
     * @param {Skill} skill - Skill object
     */
    addSkill(skillName, skill) {
        this.skills.set(skillName, skill);
        this.eventSystem.emit('skill:added', { skillName, skill });
    }
    
    /**
     * Add actions to a skill
     * @param {string} skillName - Name of the skill
     * @param {Array} actions - Array of SkillAction objects
     */
    addSkillActions(skillName, actions) {
        this.skillActions.set(skillName, actions);
        this.eventSystem.emit('skillActions:added', { skillName, actions });
    }
    
    /**
     * Get a skill by name
     * @param {string} skillName - Name of the skill
     * @returns {Skill|null} Skill object or null if not found
     */
    getSkill(skillName) {
        return this.skills.get(skillName);
    }
    
    /**
     * Get all skills
     * @returns {Array} Array of all skills
     */
    getAllSkills() {
        return Array.from(this.skills.values());
    }
    
    /**
     * Get available actions for a skill
     * @param {string} skillName - Name of the skill
     * @returns {Array} Array of available actions
     */
    getAvailableActions(skillName) {
        const skill = this.skills.get(skillName);
        const actions = this.skillActions.get(skillName);
        
        if (!skill || !actions) return [];
        
        return actions.filter(action => skill.level >= action.levelRequired);
    }
    
    /**
     * Get all available actions across all skills
     * @returns {Array} Array of all available actions
     */
    getAllAvailableActions() {
        const allActions = [];
        this.skills.forEach((skill, skillName) => {
            const availableActions = this.getAvailableActions(skillName);
            allActions.push(...availableActions);
        });
        return allActions;
    }
    
    /**
     * Add XP to a skill
     * @param {string} skillName - Name of the skill
     * @param {number} xpAmount - Amount of XP to add
     * @returns {number} Number of level ups
     */
    addSkillXp(skillName, xpAmount) {
        const skill = this.skills.get(skillName);
        if (!skill) return 0;
        
        const oldLevel = skill.level;
        const levelUps = skill.addXp(xpAmount);
        
        // Emit XP gain event
        this.eventSystem.emit('skill:xpGained', { 
            skillName, 
            xpAmount, 
            newLevel: skill.level,
            levelUps 
        });
        
        // Check for new unlocks
        if (levelUps > 0) {
            this.checkForNewUnlocks(skillName, oldLevel + 1, skill.level);
        }
        
        // Save to state
        this.saveToState();
        
        return levelUps;
    }
    
    /**
     * Check for new action unlocks
     * @param {string} skillName - Name of the skill
     * @param {number} fromLevel - Starting level
     * @param {number} toLevel - Ending level
     */
    checkForNewUnlocks(skillName, fromLevel, toLevel) {
        const actions = this.skillActions.get(skillName);
        if (!actions) return;
        
        for (let level = fromLevel; level <= toLevel; level++) {
            const unlock = actions.find(action => action.levelRequired === level);
            if (unlock) {
                this.newlyUnlockedActions.add(unlock.name);
                
                // Emit unlock event
                this.eventSystem.emit('skill:actionUnlocked', {
                    skillName,
                    actionName: unlock.name,
                    level,
                    unlockMessage: unlock.unlockMessage
                });
            }
        }
    }
    
    /**
     * Check if an action was newly unlocked
     * @param {string} actionName - Name of the action
     * @returns {boolean} Whether the action was newly unlocked
     */
    isNewlyUnlocked(actionName) {
        return this.newlyUnlockedActions.has(actionName);
    }
    
    /**
     * Mark an action as used (no longer newly unlocked)
     * @param {string} actionName - Name of the action
     */
    markActionUsed(actionName) {
        this.newlyUnlockedActions.delete(actionName);
    }
    
    /**
     * Get skill statistics
     * @returns {Object} Skill system statistics
     */
    getStats() {
        const totalXp = Array.from(this.skills.values())
            .reduce((sum, skill) => sum + skill.xp, 0);
        
        const totalLevel = Array.from(this.skills.values())
            .reduce((sum, skill) => sum + skill.level, 0);
        
        return {
            skillsCount: this.skills.size,
            actionsCount: this.skillActions.size,
            totalXp,
            totalLevel,
            averageLevel: this.skills.size > 0 ? totalLevel / this.skills.size : 0,
            newlyUnlockedCount: this.newlyUnlockedActions.size
        };
    }
    
    /**
     * Set up event listeners
     */
    _setupEventListeners() {
        // Listen for state changes to save skills
        this.stateManager.on('state:changed', (data) => {
            if (data.path && data.path.startsWith('skills.')) {
                this.saveToState();
            }
        });
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Skill, SkillAction, SkillSystem };
} 