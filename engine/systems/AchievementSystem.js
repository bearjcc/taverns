/**
 * Achievement System
 * 
 * Manages achievements, tracks progress, and handles achievement unlocking.
 * Integrates with other systems to monitor game state and award achievements.
 */

class AchievementSystem {
    constructor(achievementsData, stateManager, eventSystem) {
        this.achievementsData = achievementsData || {};
        this.stateManager = stateManager;
        this.eventSystem = eventSystem;
        
        // System references
        this.skillManager = null;
        this.inventoryManager = null;
        
        // Achievement state
        this.unlockedAchievements = new Set();
        this.achievementProgress = {};
        
        // Initialize achievement progress tracking
        this._initializeProgress();
    }
    
    /**
     * Initialize the achievement system
     */
    async initialize() {
        console.log('Initializing Achievement System');
        
        // Load saved achievement state
        this._loadAchievementState();
        
        // Set up event listeners for achievement tracking
        this._setupEventListeners();
        
        // Check for any achievements that should already be unlocked
        this._checkInitialAchievements();
        
        console.log('Achievement System initialized');
    }
    
    /**
     * Get all achievements data
     * @returns {Object} All achievements configuration
     */
    getAllAchievements() {
        return this.achievementsData;
    }
    
    /**
     * Get unlocked achievements
     * @returns {Set} Set of unlocked achievement IDs
     */
    getUnlockedAchievements() {
        return this.unlockedAchievements;
    }
    
    /**
     * Get achievement progress
     * @returns {Object} Achievement progress data
     */
    getAchievementProgress() {
        return this.achievementProgress;
    }
    
    /**
     * Check if an achievement is unlocked
     * @param {string} achievementId - The achievement ID to check
     * @returns {boolean} True if achievement is unlocked
     */
    isAchievementUnlocked(achievementId) {
        return this.unlockedAchievements.has(achievementId);
    }
    
    /**
     * Get total achievement points earned
     * @returns {number} Total points from unlocked achievements
     */
    getTotalPoints() {
        let total = 0;
        for (const achievementId of this.unlockedAchievements) {
            const achievement = this.achievementsData[achievementId];
            if (achievement) {
                total += achievement.points || 0;
            }
        }
        return total;
    }
    
    /**
     * Check and unlock achievements based on current game state
     * This is the main method that will be called to evaluate achievements
     */
    checkAchievements() {
        const gameState = this.stateManager.getState();
        
        for (const [achievementId, achievement] of Object.entries(this.achievementsData)) {
            if (this.unlockedAchievements.has(achievementId)) {
                continue; // Already unlocked
            }
            
            if (this._evaluateAchievement(achievement, gameState)) {
                this._unlockAchievement(achievementId);
            }
        }
    }
    
    /**
     * Force unlock an achievement (for testing or special cases)
     * @param {string} achievementId - The achievement ID to unlock
     */
    forceUnlockAchievement(achievementId) {
        if (!this.achievementsData[achievementId]) {
            console.warn(`Attempted to unlock non-existent achievement: ${achievementId}`);
            return;
        }
        
        this._unlockAchievement(achievementId);
    }
    
    /**
     * Reset all achievements (for testing or new game)
     */
    resetAchievements() {
        this.unlockedAchievements.clear();
        this.achievementProgress = {};
        this._initializeProgress();
        this._saveAchievementState();
        this.eventSystem.emit('achievements:reset');
    }
    
    /**
     * Set the skill manager reference
     * @param {SkillManager} skillManager - The skill manager instance
     */
    setSkillSystem(skillManager) {
        this.skillManager = skillManager;
    }
    
    /**
     * Set the inventory manager reference
     * @param {InventoryManager} inventoryManager - The inventory manager instance
     */
    setInventorySystem(inventoryManager) {
        this.inventoryManager = inventoryManager;
    }
    
    // Private methods
    
    _initializeProgress() {
        // Initialize progress tracking for each achievement
        for (const achievementId of Object.keys(this.achievementsData)) {
            this.achievementProgress[achievementId] = {
                current: 0,
                required: this._getRequiredValue(this.achievementsData[achievementId]),
                completed: false
            };
        }
    }
    
    _loadAchievementState() {
        try {
            const savedState = this.stateManager.getState().achievements;
            if (savedState) {
                this.unlockedAchievements = new Set(savedState.unlocked || []);
                this.achievementProgress = savedState.progress || this.achievementProgress;
            }
        } catch (error) {
            console.warn('Failed to load achievement state:', error);
        }
    }
    
    _saveAchievementState() {
        try {
            const currentState = this.stateManager.getState();
            currentState.achievements = {
                unlocked: Array.from(this.unlockedAchievements),
                progress: this.achievementProgress
            };
            this.stateManager.setState(currentState);
        } catch (error) {
            console.error('Failed to save achievement state:', error);
        }
    }
    
    _setupEventListeners() {
        // Listen for skill level ups
        this.eventSystem.on('skill:levelUp', (data) => {
            this._updateSkillLevelProgress(data.skillName, data.newLevel);
            this.checkAchievements();
        });
        
        // Listen for inventory changes
        this.eventSystem.on('inventory:itemAdded', (data) => {
            this._updateInventoryProgress(data.itemId);
            this.checkAchievements();
        });
        
        // Listen for trading events
        this.eventSystem.on('trade:completed', (data) => {
            this._updateTradingProgress(data);
            this.checkAchievements();
        });
        
        // Listen for consumption events
        this.eventSystem.on('item:consumed', (data) => {
            this._updateConsumptionProgress(data);
            this.checkAchievements();
        });
        
        // Listen for crafting events
        this.eventSystem.on('craft:completed', (data) => {
            this._updateCraftingProgress(data);
            this.checkAchievements();
        });
        
        // Listen for location visits
        this.eventSystem.on('location:visited', (data) => {
            this._updateLocationProgress(data);
            this.checkAchievements();
        });
        
        // Listen for pet capture events
        this.eventSystem.on('pet:captured', (data) => {
            this._updatePetProgress(data);
            this.checkAchievements();
        });
        
        // Listen for cooking events
        this.eventSystem.on('cooking:completed', (data) => {
            this._updateCookingProgress(data);
            this.checkAchievements();
        });
        
        // Listen for game state changes that might affect achievements
        this.eventSystem.on('state:changed', () => {
            this.checkAchievements();
        });
    }
    
    _checkInitialAchievements() {
        // Check for achievements that should be unlocked based on current state
        this.checkAchievements();
    }
    
    _evaluateAchievement(achievement, gameState) {
        const requirements = achievement.requirements;
        
        if (!requirements) {
            return false;
        }
        
        // Check skill level requirements
        if (requirements.skillLevel) {
            for (const [skillName, requiredLevel] of Object.entries(requirements.skillLevel)) {
                const skill = gameState.skills?.[skillName];
                if (!skill || skill.level < requiredLevel) {
                    return false;
                }
            }
        }
        
        // Check any skill level requirement
        if (requirements.anySkillLevel) {
            const requiredLevel = requirements.anySkillLevel;
            const hasAnySkillAtLevel = Object.values(gameState.skills || {}).some(skill => skill.level >= requiredLevel);
            if (!hasAnySkillAtLevel) {
                return false;
            }
        }
        
        // Check multiple skill levels requirement
        if (requirements.multipleSkillLevels) {
            const { count, level } = requirements.multipleSkillLevels;
            const skillsAtLevel = Object.values(gameState.skills || {}).filter(skill => skill.level >= level).length;
            if (skillsAtLevel < count) {
                return false;
            }
        }
        
        // Check unique items requirement
        if (requirements.uniqueItems) {
            const requiredCount = requirements.uniqueItems;
            const uniqueItemCount = Object.keys(gameState.inventory || {}).length;
            if (uniqueItemCount < requiredCount) {
                return false;
            }
        }
        
        // Check custom requirements
        if (requirements.custom) {
            return this._evaluateCustomRequirement(requirements.custom, gameState);
        }
        
        return true;
    }
    
    _evaluateCustomRequirement(requirementType, gameState) {
        switch (requirementType) {
            case 'secret_discovery':
                // This is a placeholder for secret achievements
                // In a real implementation, this would check for specific game events
                return false;
            case 'trade_syrup_maple_run':
                // Check if player has traded syrup in Maple Run
                // This would need to be tracked in game state
                return gameState.tradingHistory?.some(trade => 
                    trade.itemId === 'syrup' && trade.location === 'maple_run'
                ) || false;
            case 'consume_red_mushroom':
                // Check if player has consumed a red mushroom
                return gameState.consumptionHistory?.some(consumption => 
                    consumption.itemId === 'red_mushroom'
                ) || false;
            case 'animate_mushroom_pet':
                // Check if player has used Animation spell on mushroom and captured as pet
                return gameState.petHistory?.some(pet => 
                    pet.source === 'animated_mushroom'
                ) || false;
            case 'cook_moss_mossy_glade':
                // Check if player has cooked with moss in Mossy Glade
                return gameState.cookingHistory?.some(cooking => 
                    cooking.ingredients?.includes('moss') && cooking.location === 'mossy_glade'
                ) || false;
            case 'first_craft':
                // Check if player has crafted any item
                return gameState.craftingHistory?.length > 0 || false;
            case 'visit_locations':
                // Check if player has visited enough locations
                const visitedLocations = gameState.visitedLocations || [];
                const requiredCount = gameState.achievementRequirements?.locationCount || 5;
                return visitedLocations.length >= requiredCount;
            default:
                return false;
        }
    }
    
    _getRequiredValue(achievement) {
        const requirements = achievement.requirements;
        
        if (requirements.skillLevel) {
            return Math.max(...Object.values(requirements.skillLevel));
        }
        
        if (requirements.anySkillLevel) {
            return requirements.anySkillLevel;
        }
        
        if (requirements.multipleSkillLevels) {
            return requirements.multipleSkillLevels.level;
        }
        
        if (requirements.uniqueItems) {
            return requirements.uniqueItems;
        }
        
        return 1; // Default required value
    }
    
    _unlockAchievement(achievementId) {
        const achievement = this.achievementsData[achievementId];
        if (!achievement) {
            console.warn(`Attempted to unlock non-existent achievement: ${achievementId}`);
            return;
        }
        this.unlockedAchievements.add(achievementId);
        if (!this.achievementProgress[achievementId]) {
            this.achievementProgress[achievementId] = {
                current: 0,
                required: this._getRequiredValue(achievement),
                completed: false
            };
        }
        this.achievementProgress[achievementId].completed = true;
        this.achievementProgress[achievementId].current = this.achievementProgress[achievementId].required;
        // Save state
        this._saveAchievementState();
        // Emit achievement unlocked event
        this.eventSystem.emit('achievement:unlocked', {
            achievementId,
            achievement,
            points: achievement.points || 0,
            totalPoints: this.getTotalPoints()
        });
        console.log(`Achievement unlocked: ${achievement.name} (${achievementId})`);
    }
    
    _updateSkillLevelProgress(skillName, level) {
        for (const [achievementId, achievement] of Object.entries(this.achievementsData)) {
            if (this.unlockedAchievements.has(achievementId)) {
                continue;
            }
            const requirements = achievement.requirements;
            if (requirements.skillLevel && requirements.skillLevel[skillName]) {
                const requiredLevel = requirements.skillLevel[skillName];
                if (!this.achievementProgress[achievementId]) {
                    this.achievementProgress[achievementId] = {
                        current: 0,
                        required: this._getRequiredValue(achievement),
                        completed: false
                    };
                }
                this.achievementProgress[achievementId].current = Math.min(level, requiredLevel);
            }
            if (requirements.anySkillLevel) {
                const requiredLevel = requirements.anySkillLevel;
                if (!this.achievementProgress[achievementId]) {
                    this.achievementProgress[achievementId] = {
                        current: 0,
                        required: this._getRequiredValue(achievement),
                        completed: false
                    };
                }
                this.achievementProgress[achievementId].current = Math.min(level, requiredLevel);
            }
        }
    }
    
    _updateInventoryProgress(itemId) {
        for (const [achievementId, achievement] of Object.entries(this.achievementsData)) {
            if (this.unlockedAchievements.has(achievementId)) {
                continue;
            }
            const requirements = achievement.requirements;
            if (requirements.uniqueItems) {
                const gameState = this.stateManager.getState();
                const uniqueItemCount = Object.keys(gameState.inventory || {}).length;
                if (!this.achievementProgress[achievementId]) {
                    this.achievementProgress[achievementId] = {
                        current: 0,
                        required: this._getRequiredValue(achievement),
                        completed: false
                    };
                }
                this.achievementProgress[achievementId].current = Math.min(uniqueItemCount, requirements.uniqueItems);
            }
        }
    }
    
    _updateTradingProgress(data) {
        // Update trading history in game state
        const gameState = this.stateManager.getState();
        if (!gameState.tradingHistory) {
            gameState.tradingHistory = [];
        }
        gameState.tradingHistory.push({
            itemId: data.itemId,
            location: data.location,
            type: data.type, // buy/sell
            timestamp: Date.now()
        });
        this.stateManager.setState(gameState);
    }
    
    _updateConsumptionProgress(data) {
        // Update consumption history in game state
        const gameState = this.stateManager.getState();
        if (!gameState.consumptionHistory) {
            gameState.consumptionHistory = [];
        }
        gameState.consumptionHistory.push({
            itemId: data.itemId,
            timestamp: Date.now()
        });
        this.stateManager.setState(gameState);
    }
    
    _updateCraftingProgress(data) {
        // Update crafting history in game state
        const gameState = this.stateManager.getState();
        if (!gameState.craftingHistory) {
            gameState.craftingHistory = [];
        }
        gameState.craftingHistory.push({
            itemId: data.itemId,
            timestamp: Date.now()
        });
        this.stateManager.setState(gameState);
    }
    
    _updateLocationProgress(data) {
        // Update visited locations in game state
        const gameState = this.stateManager.getState();
        if (!gameState.visitedLocations) {
            gameState.visitedLocations = [];
        }
        if (!gameState.visitedLocations.includes(data.locationId)) {
            gameState.visitedLocations.push(data.locationId);
        }
        this.stateManager.setState(gameState);
    }
    
    _updatePetProgress(data) {
        // Update pet history in game state
        const gameState = this.stateManager.getState();
        if (!gameState.petHistory) {
            gameState.petHistory = [];
        }
        gameState.petHistory.push({
            source: data.source,
            petType: data.petType,
            timestamp: Date.now()
        });
        this.stateManager.setState(gameState);
    }
    
    _updateCookingProgress(data) {
        // Update cooking history in game state
        const gameState = this.stateManager.getState();
        if (!gameState.cookingHistory) {
            gameState.cookingHistory = [];
        }
        gameState.cookingHistory.push({
            ingredients: data.ingredients,
            location: data.location,
            timestamp: Date.now()
        });
        this.stateManager.setState(gameState);
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AchievementSystem;
} 