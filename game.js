// Game configuration
let gameConfig = null;

// Skill class for managing individual skills
class Skill {
    constructor(name, level = null, xp = null) {
        this.name = name;
        this.level = level ?? gameConfig.constants.defaultLevel;
        this.xp = x ?? gameConfig.constants.defaultXp;
        this.xpToNext = this.getXpToNextLevel(this.level);
    }

    getXpToNextLevel(level) {
        return level * gameConfig.constants.xpMultiplier;
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
        return (this.xp / this.xpToNext) * gameConfig.constants.progressMax;
    }
}

// Action class for skill actions
class SkillAction {
    constructor(name, description, levelRequired, xpReward, itemReward, itemCount = 1, skillType, unlockMessage) {
        this.name = name;
        this.description = description;
        this.levelRequired = levelRequired;
        this.xpReward = xpReward;
        this.itemReward = itemReward;
        this.itemCount = itemCount;
        this.skillType = skillType;
        this.unlockMessage = unlockMessage;
    }
}

// SkillManager class for managing all skills and their actions
class SkillManager {
    constructor() {
        this.skills = new Map();
        this.skillActions = new Map();
        this.newlyUnlockedActions = new Set();
    }

    loadFromConfig(config) {
        this.skills.clear();
        this.skillActions.clear();
        
        // Load skills from configuration
        Object.entries(config.skills).forEach(([skillKey, skillData]) => {
            // Create skill
            this.skills.set(skillKey, new Skill(skillData.name));
            
            // Create actions for this skill
            const actions = skillData.actions.map(actionData => 
                new SkillAction(
                    actionData.name,
                    actionData.description,
                    actionData.levelRequired,
                    actionData.xpReward,
                    actionData.itemReward,
                    actionData.itemCount,
                    skillKey,
                    actionData.unlockMessage
                )
            );
            
            this.skillActions.set(skillKey, actions);
        });
    }

    addSkill(skillName, skill) {
        this.skills.set(skillName, skill);
    }

    addSkillActions(skillName, actions) {
        this.skillActions.set(skillName, actions);
    }

    getSkill(skillName) {
        return this.skills.get(skillName);
    }

    getAvailableActions(skillName) {
        const skill = this.skills.get(skillName);
        const actions = this.skillActions.get(skillName);
        
        if (!skill || !actions) return [];
        
        return actions.filter(action => skill.level >= action.levelRequired);
    }

    addSkillXp(skillName, xpAmount) {
        const skill = this.skills.get(skillName);
        if (!skill) return 0;
        
        const oldLevel = skill.level;
        const levelUps = skill.addXp(xpAmount);
        
        // Check for new unlocks
        if (levelUps > 0) {
            this.checkForNewUnlocks(skillName, oldLevel + 1, skill.level);
        }
        
        return levelUps;
    }

    checkForNewUnlocks(skillName, fromLevel, toLevel) {
        const actions = this.skillActions.get(skillName);
        if (!actions) return;
        
        for (let level = fromLevel; level <= toLevel; level++) {
            const unlock = actions.find(action => action.levelRequired === level);
            if (unlock) {
                this.newlyUnlockedActions.add(unlock.name);
                
                // Use custom unlock message if available, otherwise use default
                const message = unlock.unlockMessage || 
                    gameConfig.messages.actionUnlocked
                        .replace('{actionName}', unlock.name)
                        .replace('{level}', level);
                
                addNarrationMessage(message);
            }
        }
    }

    isNewlyUnlocked(actionName) {
        return this.newlyUnlockedActions.has(actionName);
    }

    markActionUsed(actionName) {
        this.newlyUnlockedActions.delete(actionName);
    }

    getAllSkills() {
        return Array.from(this.skills.values());
    }

    // Get all available actions from all skills
    getAllAvailableActions() {
        const allActions = [];
        for (const [skillName, actions] of this.skillActions) {
            const availableActions = this.getAvailableActions(skillName);
            allActions.push(...availableActions);
        }
        return allActions;
    }
}

// Game state
const gameState = {
    narration: [],
    woodCount: 0,
    inventory: {},
    skillManager: new SkillManager()
};

// Load game configuration
async function loadGameConfig() {
    try {
        const response = await fetch('data/game-config.json');
        gameConfig = await response.json();
        gameState.skillManager.loadFromConfig(gameConfig);
        console.log(gameConfig.messages.configLoaded);
    } catch (error) {
        console.error('Failed to load game configuration:', error);
        // Fallback to hardcoded config if JSON fails to load
        loadFallbackConfig();
    }
}

// Fallback configuration if JSON fails to load
function loadFallbackConfig() {
    console.log('Loading fallback configuration');
    // This would contain the original hardcoded data
    // For now, we'll just show an error message
    addNarrationMessage(gameConfig?.messages?.configError || 'Error: Could not load game configuration. Please refresh the page.');
}

// Update the skills display in the sidebar
function updateSkillsDisplay() {
    const skillsContent = document.getElementById(gameConfig.ui.elementIds.skillsContent);
    if (!skillsContent) return;
    
    skillsContent.innerHTML = '';
    
    gameState.skillManager.getAllSkills().forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = gameConfig.ui.cssClasses.skillItem;
        
        const progress = skill.getProgress();
        
        skillElement.innerHTML = `
            <div class="${gameConfig.ui.cssClasses.skillHeader}">
                <span class="${gameConfig.ui.cssClasses.skillName}">${skill.name}</span>
                <span class="${gameConfig.ui.cssClasses.skillLevel}">Level ${skill.level}</span>
            </div>
            <div class="${gameConfig.ui.cssClasses.skillProgressContainer}">
                <div class="${gameConfig.ui.cssClasses.skillProgressBar}">
                    <div class="${gameConfig.ui.cssClasses.skillProgressFill}" style="width: ${progress}%"></div>
                </div>
                <span class="${gameConfig.ui.cssClasses.skillXp}">${skill.xp}/${skill.xpToNext} XP</span>
            </div>
        `;
        
        skillsContent.appendChild(skillElement);
    });
}

// Update the actions display
function updateActionsDisplay() {
    const actionsContent = document.querySelector('.actions-content');
    if (!actionsContent) return;
    
    actionsContent.innerHTML = '';
    
    // Get all available actions from all skills
    const allActions = gameState.skillManager.getAllAvailableActions();
    
    allActions.forEach(action => {
        const actionButton = document.createElement('button');
        actionButton.className = gameConfig.ui.cssClasses.actionButton;
        actionButton.textContent = `${action.name} (${action.xpReward} XP)`;
        actionButton.setAttribute('data-action', action.name.toLowerCase().replace(/\s+/g, '-'));
        actionButton.setAttribute('data-xp', action.xpReward);
        actionButton.setAttribute('data-item', action.itemReward);
        actionButton.setAttribute('data-count', action.itemCount);
        actionButton.setAttribute('data-skill', action.skillType);
        
        // Add visual feedback for newly unlocked actions
        if (gameState.skillManager.isNewlyUnlocked(action.name)) {
            actionButton.classList.add(gameConfig.ui.cssClasses.newUnlock);
        }
        
        actionButton.addEventListener('click', () => handleSkillAction(action));
        actionsContent.appendChild(actionButton);
    });
}

// Generic action handler for any skill
function handleSkillAction(action) {
    // Use the skill type from the action to determine which skill to add XP to
    const skillName = action.skillType;
    
    // Add XP to the skill
    const levelUps = gameState.skillManager.addSkillXp(skillName, action.xpReward);
    
    // Add item to inventory
    if (!gameState.inventory[action.itemReward]) {
        gameState.inventory[action.itemReward] = 0;
    }
    gameState.inventory[action.itemReward] += action.itemCount;
    
    // Add narration message using config template
    const message = gameConfig.messages.actionCompleted
        .replace('{actionName}', action.name.toLowerCase())
        .replace('{xpReward}', action.xpReward)
        .replace('{itemReward}', action.itemReward)
        .replace('{itemCount}', gameState.inventory[action.itemReward]);
    
    addNarrationMessage(message);
    
    // Remove from newly unlocked actions after first use
    if (gameState.skillManager.isNewlyUnlocked(action.name)) {
        gameState.skillManager.markActionUsed(action.name);
        updateActionsDisplay(); // Refresh to remove the visual effect
    }
    
    // Update displays
    updateSkillsDisplay();
    updateActionsDisplay();
}

// Tab switching functionality
function switchTab(tabName) {
    // Remove active class from all tabs and panels
    document.querySelectorAll(`.${gameConfig.ui.cssClasses.tabButton}`).forEach(btn => 
        btn.classList.remove(gameConfig.ui.cssClasses.active)
    );
    document.querySelectorAll(`.${gameConfig.ui.cssClasses.tabPanel}`).forEach(panel => 
        panel.classList.remove(gameConfig.ui.cssClasses.active)
    );
    
    // Add active class to selected tab and panel
    document.querySelector(`[data-tab="${tabName}"]`).classList.add(gameConfig.ui.cssClasses.active);
    document.getElementById(`${tabName}-tab`).classList.add(gameConfig.ui.cssClasses.active);
}

// DOM elements
const narrationContent = document.getElementById(gameConfig?.ui?.elementIds?.narrationContent || 'narration-content');

// Narration system
function addNarrationMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.className = gameConfig?.ui?.cssClasses?.narrationMessage || 'narration-message';
    messageElement.textContent = message;
    
    narrationContent.appendChild(messageElement);
    
    // Auto-scroll to bottom
    narrationContent.scrollTop = narrationContent.scrollHeight;
    
    // Store in game state
    gameState.narration.push(message);
}

// Initialize game
async function initGame() {
    // Load configuration first
    await loadGameConfig();
    
    // Generate UI from configuration
    generateTabsFromConfig();
    
    // Add welcome message from config
    const welcomeMessage = gameConfig.messages.welcome;
    addNarrationMessage(welcomeMessage);
    
    updateSkillsDisplay();
    updateActionsDisplay();
}

// Generate tabs dynamically from configuration
function generateTabsFromConfig() {
    const sidebarTabs = document.getElementById('sidebar-tabs');
    const tabContent = document.getElementById('tab-content');
    
    if (!sidebarTabs || !tabContent) return;
    
    // Clear existing content
    sidebarTabs.innerHTML = '';
    tabContent.innerHTML = '';
    
    // Generate tabs from configuration
    gameConfig.ui.tabs.forEach((tab, index) => {
        // Create tab button
        const tabButton = document.createElement('button');
        tabButton.className = gameConfig.ui.cssClasses.tabButton;
        tabButton.setAttribute('data-tab', tab.id);
        tabButton.innerHTML = `${tab.icon} ${tab.displayName}`;
        
        // Make first tab active by default
        if (index === 0) {
            tabButton.classList.add(gameConfig.ui.cssClasses.active);
        }
        
        sidebarTabs.appendChild(tabButton);
        
        // Create tab panel
        const tabPanel = document.createElement('div');
        tabPanel.id = `${tab.id}-tab`;
        tabPanel.className = gameConfig.ui.cssClasses.tabPanel;
        
        // Make first panel active by default
        if (index === 0) {
            tabPanel.classList.add(gameConfig.ui.cssClasses.active);
        }
        
        // Add content based on tab type
        switch (tab.id) {
            case 'skills':
                tabPanel.innerHTML = `
                    <h3>${tab.displayName}</h3>
                    <div id="${gameConfig.ui.elementIds.skillsContent}">
                        <!-- Skills will be populated by JavaScript -->
                    </div>
                `;
                break;
            case 'inventory':
                tabPanel.innerHTML = `
                    <h3>${tab.displayName}</h3>
                    <p>Inventory system coming soon...</p>
                `;
                break;
            case 'character':
                tabPanel.innerHTML = `
                    <h3>${tab.displayName}</h3>
                    <p>Character info coming soon...</p>
                `;
                break;
            default:
                tabPanel.innerHTML = `
                    <h3>${tab.displayName}</h3>
                    <p>Content for ${tab.displayName} coming soon...</p>
                `;
        }
        
        tabContent.appendChild(tabPanel);
    });
    
    // Add event listeners to tabs
    document.querySelectorAll(`.${gameConfig.ui.cssClasses.tabButton}`).forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            switchTab(tabName);
        });
    });
}

// Start the game when page loads
document.addEventListener('DOMContentLoaded', initGame); 