// Game configuration - will be loaded asynchronously
let gameConfig = null;
let skillsConfig = null;

// Default configuration values for fallback
const DEFAULT_CONFIG = {
    ui: {
        cssClasses: {
            skillItem: 'skill-item',
            skillHeader: 'skill-header',
            skillName: 'skill-name',
            skillLevel: 'skill-level',
            skillProgressContainer: 'skill-progress-container',
            skillProgressBar: 'skill-progress-bar',
            skillProgressFill: 'skill-progress-fill',
            skillXp: 'skill-xp',
            actionButton: 'action-button',
            newUnlock: 'new-unlock',
            narrationMessage: 'narration-message',
            tabButton: 'tab-button',
            tabPanel: 'tab-panel',
            active: 'active',
            toast: 'toast',
            toastContainer: 'toast-container'
        },
        elementIds: {
            narrationContent: 'narration-content',
            skillsContent: 'skills-content',
            actionsContent: 'actions-content',
            toastContainer: 'toast-container'
        },
        tabs: [
            {
                id: 'skills',
                displayName: 'Skills',
                icon: '⚔️'
            },
            {
                id: 'inventory',
                displayName: 'Inventory',
                icon: '🎒'
            },
            {
                id: 'character',
                displayName: 'Character',
                icon: '👤'
            },
            {
                id: 'quests',
                displayName: 'Quests',
                icon: '🗺️'
            }
        ]
    },
    constants: {
        xpMultiplier: 100,
        defaultLevel: 1,
        defaultXp: 0,
        progressMax: 100
    },
    skills: {},
    messages: {
        welcome: 'Welcome to Taverns and Treasures! Your adventure begins...',
        levelUp: '🎉 {skillName} level up! You are now level {level}.',
        actionUnlocked: '🔓 New action unlocked: {actionName} (Level {level})',
        actionCompleted: 'You {actionName} and gained {xpReward} XP. ({itemReward}: {itemCount})',
        configError: 'Error: Could not load game configuration. Please refresh the page.',
        configLoaded: 'Game configuration loaded successfully',
        skillsConfigLoaded: 'Skills configuration loaded successfully',
        skillsConfigError: 'Error: Could not load skills configuration.',
        gameSaved: '🔄 Game progress saved',
        gameLoaded: '📥 Welcome back! Your progress has been loaded',
        noSaveFound: '🆕 No saved game found. Starting a new game',
        saveError: '⚠️ Failed to save game progress',
        loadError: '⚠️ Failed to load saved game'
    },
    gameSettings: {
        initialWood: 0
    }
};

// Skill class for managing individual skills
class Skill {
    constructor(name, level = null, xp = null) {
        this.name = name;
        // Use provided values or hardcoded defaults
        this.level = level !== null ? level : 1;
        this.xp = xp !== null ? xp : 0;
        this.xpToNext = this.getXpToNextLevel(this.level);
    }

    getXpToNextLevel(level) {
        const multiplier = (gameConfig && gameConfig.constants && gameConfig.constants.xpMultiplier) ? gameConfig.constants.xpMultiplier : 100;
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
        const progressMax = (gameConfig && gameConfig.constants && gameConfig.constants.progressMax) ? gameConfig.constants.progressMax : 100;
        return (this.xp / this.xpToNext) * progressMax;
    }
}

// Action class for skill actions
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

// SkillManager class for managing all skills and their actions
class SkillManager {
    constructor() {
        this.skills = new Map();
        this.skillActions = new Map();
        this.newlyUnlockedActions = new Set();
    }

    loadFromConfig(skillsConfig, gameConfig) {
        try {
            console.log('Loading skills and actions...');
            this.skills.clear();
            this.skillActions.clear();
    
            // 1. Load all skills from skillsConfig
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
    
            if (skillsConfig) {
                for (const category in skillsConfig) {
                    processCategory(skillsConfig[category]);
                }
            } else {
                 console.error("Skills configuration is missing.");
            }
    
            // 2. Load actions from gameConfig and associate them with skills
            if (gameConfig && gameConfig.skills) {
                Object.entries(gameConfig.skills).forEach(([skillKey, skillData]) => {
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
                                managerSkillKey, // Use the key from the skills map
                                actionData.unlockMessage,
                                actionData.flavorText
                            );
                        });
                        this.skillActions.set(managerSkillKey, actions);
                    }
                });
            }
            
            console.log('Skills loaded:', this.skills);
            console.log('Skill actions loaded:', this.skillActions);
    
        } catch (error) {
            console.error('Error loading configuration into SkillManager:', error);
        }
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

    getAllAvailableActions() {
        const allActions = [];
        this.skills.forEach((skill, skillName) => {
            const availableActions = this.getAvailableActions(skillName);
            allActions.push(...availableActions);
        });
        return allActions;
    }
}

// Game state object to track all player data
let gameState = {
    skillManager: new SkillManager(),
    inventory: {},
    lastSaved: null
};

// Game state persistence functions
function saveGameState() {
    try {
        const saveData = {
            skills: {},
            inventory: gameState.inventory,
            lastSaved: new Date().getTime()
        };
        
        // Save skills data
        gameState.skillManager.skills.forEach((skill, name) => {
            saveData.skills[name] = {
                level: skill.level,
                xp: skill.xp
            };
        });
        
        // Save to localStorage
        localStorage.setItem('tavernsGameSave', JSON.stringify(saveData));
        
        // Update last saved time
        gameState.lastSaved = saveData.lastSaved;
        
        return true;
    } catch (error) {
        console.error('Error saving game:', error);
        showToast(gameConfig.messages.saveError, 'error');
        return false;
    }
}

function loadGameState() {
    try {
        const saveData = localStorage.getItem('tavernsGameSave');
        
        if (!saveData) {
            showToast(gameConfig.messages.noSaveFound, 'info');
            return false;
        }
        
        const parsedData = JSON.parse(saveData);
        
        // Load skills data
        if (parsedData.skills) {
            Object.entries(parsedData.skills).forEach(([name, data]) => {
                const skill = gameState.skillManager.getSkill(name);
                if (skill) {
                    skill.level = data.level;
                    skill.xp = data.xp;
                    skill.xpToNext = skill.getXpToNextLevel(skill.level);
                }
            });
        }
        
        // Load inventory data
        if (parsedData.inventory) {
            gameState.inventory = parsedData.inventory;
        }
        
        // Load last saved timestamp
        if (parsedData.lastSaved) {
            gameState.lastSaved = parsedData.lastSaved;
        }
        
        // Show toast instead of narration
        showToast(gameConfig.messages.gameLoaded, 'info');
        
        return true;
    } catch (error) {
        console.error('Error loading game:', error);
        showToast(gameConfig.messages.loadError, 'error');
        return false;
    }
}

// Auto-save function that saves the game state periodically
function setupAutoSave(intervalMinutes = 2) {
    const intervalMs = intervalMinutes * 60 * 1000;
    setInterval(saveGameState, intervalMs);
    console.log(`Auto-save enabled, saving every ${intervalMinutes} minutes`);
}

// Utility for deep merging objects
function deepMerge(target, source) {
    for (const key in source) {
        if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
            if (!target[key]) {
                Object.assign(target, { [key]: {} });
            }
            deepMerge(target[key], source[key]);
        } else {
            Object.assign(target, { [key]: source[key] });
        }
    }
    return target;
}

// Load game configuration using proper error handling
async function loadGameConfig() {
    try {
        const response = await fetch('data/game-config.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const fetchedConfig = await response.json();
        // Deep merge fetched config into a copy of the default config
        gameConfig = deepMerge(JSON.parse(JSON.stringify(DEFAULT_CONFIG)), fetchedConfig);
        console.log(gameConfig.messages.configLoaded);
    } catch (error) {
        console.error('Error loading game config:', error);
        // Fallback to default config
        gameConfig = DEFAULT_CONFIG;
        // Also log the specific error from the config
        addNarrationMessage(gameConfig.messages.configError);
    }
}

async function loadSkillsConfig() {
    try {
        const response = await fetch('data/skills.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        skillsConfig = await response.json();
        console.log(gameConfig.messages.skillsConfigLoaded);
    } catch (error) {
        console.error(gameConfig.messages.skillsConfigError, error);
        // In case of error, skillsConfig will remain null
    }
}

// Update the skills display in the sidebar
function updateSkillsDisplay() {
    const skillsContent = document.getElementById(gameConfig.ui.elementIds.skillsContent);
    if (!skillsContent) return;
    
    // Clear existing content
    skillsContent.innerHTML = '';
    
    // Generate HTML for each skill category
    if (skillsConfig) {
        Object.entries(skillsConfig).forEach(([categoryName, categoryData]) => {
            const categoryHtml = generateHtmlForCategory(categoryName, categoryData);
            skillsContent.innerHTML += categoryHtml;
        });
    }
}

const createSkillHtml = (skillName, skill) => {
    const progress = skill.getProgress();
    
    return `
        <div class="${gameConfig.ui.cssClasses.skillItem}" data-skill="${skillName}">
            <div class="${gameConfig.ui.cssClasses.skillHeader}">
                <span class="${gameConfig.ui.cssClasses.skillName}">${skillName}</span>
                <span class="${gameConfig.ui.cssClasses.skillLevel}">Level ${skill.level}</span>
            </div>
            <div class="${gameConfig.ui.cssClasses.skillProgressContainer}">
                <div class="${gameConfig.ui.cssClasses.skillProgressBar}">
                    <div class="${gameConfig.ui.cssClasses.skillProgressFill}" style="width: ${progress}%"></div>
                </div>
                <span class="${gameConfig.ui.cssClasses.skillXp}">${skill.xp}/${skill.xpToNext} XP</span>
            </div>
        </div>
    `;
};

const generateHtmlForCategory = (categoryName, categoryData) => {
    let html = `<div class="skill-category">
        <h2>${categoryName}</h2>
    `;
    
    // Process skills in this category
    for (const [key, data] of Object.entries(categoryData)) {
        if (data.hasOwnProperty('level')) {
            const skill = gameState.skillManager.getSkill(key);
            if (skill) {
                html += createSkillHtml(key, skill);
            }
        }
    }
    
    // Process subcategories if any
    if (categoryData.sub_skills) {
        for (const [subCategoryName, subCategoryData] of Object.entries(categoryData.sub_skills)) {
            html += `<div class="skill-subcategory">
                <h3>${subCategoryName}</h3>
            `;
            
            for (const [key, data] of Object.entries(subCategoryData)) {
                if (data.hasOwnProperty('level')) {
                    const skill = gameState.skillManager.getSkill(key);
                    if (skill) {
                        html += createSkillHtml(key, skill);
                    }
                }
            }
            
            html += `</div>`;
        }
    }
    
    html += `</div>`;
    return html;
};

// Update the actions display
function updateActionsDisplay() {
    const actionsContent = document.querySelector('.actions-content');
    if (!actionsContent) return;
    
    actionsContent.innerHTML = '';
    
    const allActions = gameState.skillManager.getAllAvailableActions();
    
    if (allActions.length === 0) {
        actionsContent.innerHTML = '<p class="text-muted">No actions available. Level up your skills to unlock more actions!</p>';
        return;
    }
    
    allActions.forEach(action => {
        const button = document.createElement('button');
        button.className = gameConfig.ui.cssClasses.actionButton;
        button.textContent = action.name;
        
        // Add new unlock styling if this action was recently unlocked
        if (gameState.skillManager.isNewlyUnlocked(action.name)) {
            button.classList.add(gameConfig.ui.cssClasses.newUnlock);
        }
        
        button.addEventListener('click', () => handleSkillAction(action));
        actionsContent.appendChild(button);
    });
}

// Generic action handler for any skill
function handleSkillAction(action) {
    // Get the skill associated with this action
    const skill = gameState.skillManager.getSkill(action.skillType);
    if (!skill) {
        console.error(`Skill ${action.skillType} not found for action ${action.name}`);
        return;
    }
    
    // Add XP to the skill
    const levelUps = gameState.skillManager.addSkillXp(action.skillType, action.xpReward);
    
    // Update inventory
    if (!gameState.inventory[action.itemReward]) {
        gameState.inventory[action.itemReward] = 0;
    }
    gameState.inventory[action.itemReward] += action.itemCount;
    
    // Display flavor text message in narration
    if (action.flavorText) {
        addNarrationMessage(action.flavorText);
    } else {
        // Fallback to old message format if flavorText is not available
        const message = gameConfig.messages.actionCompleted
            .replace('{actionName}', action.name.toLowerCase())
            .replace('{xpReward}', action.xpReward)
            .replace('{itemReward}', action.itemReward)
            .replace('{itemCount}', action.itemCount);
        
        addNarrationMessage(message);
    }
    
    // Flash XP gain in the skill UI
    flashXpGain(action.skillType, action.xpReward);
    
    // If there were level ups, display those messages
    if (levelUps > 0) {
        const levelUpMessage = gameConfig.messages.levelUp
            .replace('{skillName}', action.skillType)
            .replace('{level}', skill.level);
        
        addNarrationMessage(levelUpMessage);
    }
    
    // Mark this action as no longer newly unlocked
    gameState.skillManager.markActionUsed(action.name);
    
    // Update the UI
    updateSkillsDisplay();
    updateActionsDisplay();
    
    // Save game after each action
    saveGameState();
}

// Tab switching functionality
function switchTab(tabName) {
    // Get all tab buttons and panels
    const tabButtons = document.querySelectorAll(`.${gameConfig.ui.cssClasses.tabButton}`);
    const tabPanels = document.querySelectorAll(`.${gameConfig.ui.cssClasses.tabPanel}`);
    
    // Remove active class from all buttons and panels
    tabButtons.forEach(button => button.classList.remove(gameConfig.ui.cssClasses.active));
    tabPanels.forEach(panel => panel.classList.remove(gameConfig.ui.cssClasses.active));
    
    // Add active class to selected tab button and panel
    const selectedButton = document.getElementById(`${tabName}-tab`);
    const selectedPanel = document.getElementById(`${tabName}-panel`);
    
    if (selectedButton) {
        selectedButton.classList.add(gameConfig.ui.cssClasses.active);
    }
    
    if (selectedPanel) {
        selectedPanel.classList.add(gameConfig.ui.cssClasses.active);
    }
    
    // Update UI based on selected tab
    if (tabName === 'skills') {
        updateSkillsDisplay();
    } else if (tabName === 'inventory') {
        // Update inventory display when implemented
    } else if (tabName === 'character') {
        // Update character display and last saved time
        updateLastSavedTime();
    } else if (tabName === 'quests') {
        // Update quests display when implemented
    }
}

// Narration system
function addNarrationMessage(message) {
    const narrationContent = document.getElementById('narration-content');
    if (!narrationContent) return;
    
    const messageElement = document.createElement('div');
    messageElement.className = gameConfig.ui.cssClasses.narrationMessage;
    messageElement.textContent = message;
    
    narrationContent.appendChild(messageElement);
    
    // Auto-scroll to bottom
    narrationContent.scrollTop = narrationContent.scrollHeight;
}

// Toast notification system
function showToast(message, type = 'info', duration = 3000) {
    const toastContainer = document.getElementById(gameConfig.ui.elementIds.toastContainer);
    if (!toastContainer) return;
    
    const toast = document.createElement('div');
    toast.className = `${gameConfig.ui.cssClasses.toast} ${type}`;
    toast.textContent = message;
    
    toastContainer.appendChild(toast);
    
    // Force a reflow to enable the transition
    toast.offsetHeight;
    
    // Show the toast
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    // Remove the toast after duration
    setTimeout(() => {
        toast.classList.remove('show');
        
        // Remove from DOM after transition completes
        setTimeout(() => {
            toastContainer.removeChild(toast);
        }, 300);
    }, duration);
}

// XP gain flash animation
function flashXpGain(skillName, xpAmount) {
    const skillElement = document.querySelector(`.skill-item[data-skill="${skillName}"]`);
    if (!skillElement) return;
    
    const xpFlash = document.createElement('div');
    xpFlash.className = 'xp-flash';
    xpFlash.textContent = `+${xpAmount} XP`;
    
    skillElement.appendChild(xpFlash);
    
    // Remove the element after animation completes
    setTimeout(() => {
        skillElement.removeChild(xpFlash);
    }, 1500);
}

// Generate tabs dynamically from configuration
function generateTabsFromConfig() {
    // Create tab buttons
    const tabsContainer = document.getElementById('sidebar-tabs');
    tabsContainer.innerHTML = '';
    
    // Add tabs from config
    if (gameConfig && gameConfig.ui && gameConfig.ui.tabs) {
        gameConfig.ui.tabs.forEach(tab => {
            const tabButton = document.createElement('button');
            tabButton.id = `${tab.id}-tab`;
            tabButton.className = gameConfig.ui.cssClasses.tabButton;
            tabButton.innerHTML = `${tab.icon} ${tab.displayName}`;
            tabButton.addEventListener('click', () => switchTab(tab.id));
            tabsContainer.appendChild(tabButton);
        });
    }
    
    // Create tab panels
    const tabContent = document.getElementById('tab-content');
    tabContent.innerHTML = '';
    
    // Add skills tab panel
    const skillsPanel = document.createElement('div');
    skillsPanel.id = 'skills-panel';
    skillsPanel.className = `${gameConfig.ui.cssClasses.tabPanel} ${gameConfig.ui.cssClasses.active}`;
    skillsPanel.innerHTML = `<div id="skills-content"></div>`;
    tabContent.appendChild(skillsPanel);
    
    // Add inventory tab panel
    const inventoryPanel = document.createElement('div');
    inventoryPanel.id = 'inventory-panel';
    inventoryPanel.className = gameConfig.ui.cssClasses.tabPanel;
    inventoryPanel.innerHTML = `
        <h2>Inventory</h2>
        <div id="inventory-content">
            <p>Your inventory is empty.</p>
        </div>
    `;
    tabContent.appendChild(inventoryPanel);
    
    // Add character tab panel
    const characterPanel = document.createElement('div');
    characterPanel.id = 'character-panel';
    characterPanel.className = gameConfig.ui.cssClasses.tabPanel;
    
    // Add save game button to character panel
    characterPanel.innerHTML = `
        <h2>Character</h2>
        <div id="character-content">
            <p>Your character information will appear here.</p>
            <div class="save-game-container">
                <button id="save-game-button" class="save-button">💾 Save Game</button>
                <p id="last-saved-time"></p>
            </div>
        </div>
    `;
    tabContent.appendChild(characterPanel);
    
    // Add quests tab panel
    const questsPanel = document.createElement('div');
    questsPanel.id = 'quests-panel';
    questsPanel.className = gameConfig.ui.cssClasses.tabPanel;
    questsPanel.innerHTML = `
        <h2>Quests</h2>
        <div id="quests-content">
            <p>No active quests. Quest system coming soon!</p>
        </div>
    `;
    tabContent.appendChild(questsPanel);
    
    // Add event listener for save button
    const saveButton = document.getElementById('save-game-button');
    if (saveButton) {
        saveButton.addEventListener('click', () => {
            const success = saveGameState();
            if (success) {
                showToast(gameConfig.messages.gameSaved, 'success');
                updateLastSavedTime();
            }
        });
    }
    
    // Set initial active tab
    switchTab('skills');
    
    // Update last saved time if available
    updateLastSavedTime();
}

// Update the last saved time display
function updateLastSavedTime() {
    const lastSavedElement = document.getElementById('last-saved-time');
    if (lastSavedElement && gameState.lastSaved) {
        const date = new Date(gameState.lastSaved);
        lastSavedElement.textContent = `Last saved: ${date.toLocaleString()}`;
    } else if (lastSavedElement) {
        lastSavedElement.textContent = 'Game not saved yet';
    }
}

// Initialize game
async function initGame() {
    // Show loading indicator
    document.getElementById('loading').style.display = 'block';
    
    try {
        // Load game and skills configurations
        await loadGameConfig();
        await loadSkillsConfig();
        
        // Check for config loading errors
        if (!gameConfig || !skillsConfig) {
            addNarrationMessage('Critical Error: Game configuration could not be loaded.');
            return;
        }
        
        // Initialize game state
        gameState = {
            skillManager: new SkillManager(),
            inventory: {},
            lastSaved: null
        };
        
        // Initialize UI component system
        gameState.ui = new GameUI();
        
        // Load skills and actions from configs
        gameState.skillManager.loadFromConfig(skillsConfig, gameConfig);
        
        // Try to load saved game state
        const loaded = loadGameState();
        
        // If no saved state, show welcome message
        if (!loaded) {
            // Add welcome message to narration
            addNarrationMessage('Welcome to Taverns and Treasures! Your adventure in this fantasy world begins now. Choose your path - master combat and magic, learn trades and crafts, or explore the world seeking rare treasures. But remember, danger lurks around every corner and death is permanent!');
        }
        
        // Generate UI
        generateTabsFromConfig();
        updateSkillsDisplay();
        updateActionsDisplay();
        
        // Setup auto-save
        setupAutoSave();
        
        // Hide loading indicator
        document.getElementById('loading').style.display = 'none';
        
    } catch (error) {
        console.error('Error initializing game:', error);
        document.getElementById('loading').style.display = 'none';
        addNarrationMessage('Error: Failed to initialize game. Please refresh the page.');
    }
}

// Start the game when page loads
document.addEventListener('DOMContentLoaded', initGame); 