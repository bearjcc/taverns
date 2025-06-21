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
            active: 'active'
        },
        elementIds: {
            narrationContent: 'narration-content',
            skillsContent: 'skills-content',
            actionsContent: 'actions-content'
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
        welcome: 'Hello world',
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
                                actionData.unlockMessage
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
const gameState = {
    skillManager: new SkillManager(),
    inventory: {},
    lastSaved: null
};

// Game state persistence functions
function saveGameState() {
    try {
        const saveData = {
            skills: Array.from(gameState.skillManager.skills.entries()).reduce((obj, [key, skill]) => {
                obj[key] = {
                    level: skill.level,
                    xp: skill.xp
                };
                return obj;
            }, {}),
            inventory: gameState.inventory,
            lastSaved: new Date().toISOString()
        };
        
        localStorage.setItem('tavernsGameSave', JSON.stringify(saveData));
        gameState.lastSaved = saveData.lastSaved;
        console.log('Game saved successfully at', new Date().toLocaleString());
        
        // Update the last saved time display
        updateLastSavedTime();
        
        // Only show save message if not during initialization
        if (gameConfig && document.getElementById('loading').style.display === 'none') {
            addNarrationMessage(gameConfig.messages.gameSaved);
        }
        
        return true;
    } catch (error) {
        console.error('Failed to save game:', error);
        if (gameConfig) {
            addNarrationMessage(gameConfig.messages.saveError);
        }
        return false;
    }
}

function loadGameState() {
    try {
        const saveData = localStorage.getItem('tavernsGameSave');
        if (!saveData) {
            console.log('No saved game found, starting new game');
            if (gameConfig) {
                addNarrationMessage(gameConfig.messages.noSaveFound);
            }
            return false;
        }
        
        const parsedData = JSON.parse(saveData);
        
        // Load skills data
        if (parsedData.skills) {
            Object.entries(parsedData.skills).forEach(([skillName, skillData]) => {
                const skill = gameState.skillManager.getSkill(skillName);
                if (skill) {
                    skill.level = skillData.level;
                    skill.xp = skillData.xp;
                    skill.xpToNext = skill.getXpToNextLevel(skill.level);
                }
            });
        }
        
        // Load inventory data
        if (parsedData.inventory) {
            gameState.inventory = parsedData.inventory;
        }
        
        // Store last saved timestamp
        gameState.lastSaved = parsedData.lastSaved;
        
        console.log('Game loaded successfully from', new Date(parsedData.lastSaved).toLocaleString());
        if (gameConfig) {
            addNarrationMessage(gameConfig.messages.gameLoaded);
        }
        return true;
    } catch (error) {
        console.error('Failed to load game:', error);
        if (gameConfig) {
            addNarrationMessage(gameConfig.messages.loadError);
        }
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
    const skillsContent = document.getElementById('skills-content');
    if (!skillsContent) return;
    
    // Clear existing content
    skillsContent.innerHTML = '';
    
    if (!skillsConfig) {
        skillsContent.innerHTML = '<p>Skills not loaded yet...</p>';
        return;
    }
    
    // Create HTML for each skill category
    for (const categoryName in skillsConfig) {
        const categoryHTML = generateHtmlForCategory(categoryName, skillsConfig[categoryName]);
        skillsContent.appendChild(categoryHTML);
    }
}

const createSkillHtml = (skillName, skill) => {
    const div = document.createElement('div');
    div.className = gameConfig.ui.cssClasses.skillItem;
    
    const header = document.createElement('div');
    header.className = gameConfig.ui.cssClasses.skillHeader;
    
    const nameSpan = document.createElement('span');
    nameSpan.className = gameConfig.ui.cssClasses.skillName;
    nameSpan.textContent = skillName;
    
    const levelSpan = document.createElement('span');
    levelSpan.className = gameConfig.ui.cssClasses.skillLevel;
    levelSpan.textContent = `Level ${skill.level}`;
    
    header.appendChild(nameSpan);
    header.appendChild(levelSpan);
    
    const progressContainer = document.createElement('div');
    progressContainer.className = gameConfig.ui.cssClasses.skillProgressContainer;
    
    const progressBar = document.createElement('div');
    progressBar.className = gameConfig.ui.cssClasses.skillProgressBar;
    
    const progressFill = document.createElement('div');
    progressFill.className = gameConfig.ui.cssClasses.skillProgressFill;
    progressFill.style.width = `${skill.getProgress()}%`;
    
    const xpSpan = document.createElement('span');
    xpSpan.className = gameConfig.ui.cssClasses.skillXp;
    xpSpan.textContent = `XP: ${skill.xp}/${skill.xpToNext}`;
    
    progressBar.appendChild(progressFill);
    progressContainer.appendChild(progressBar);
    progressContainer.appendChild(xpSpan);
    
    div.appendChild(header);
    div.appendChild(progressContainer);
    
    return div;
};

const generateHtmlForCategory = (categoryName, categoryData) => {
    const container = document.createElement('div');
    container.className = 'skill-category';
    
    const title = document.createElement('h3');
    title.textContent = categoryName;
    container.appendChild(title);
    
    for (const [key, data] of Object.entries(categoryData)) {
        if (data.hasOwnProperty('level')) {
            const skill = gameState.skillManager.getSkill(key);
            if (skill) {
                const skillHtml = createSkillHtml(key, skill);
                container.appendChild(skillHtml);
            }
        }
        
        if (data.sub_skills) {
            const subCategoryHtml = generateHtmlForCategory(`${key}`, data.sub_skills);
            subCategoryHtml.classList.add('sub-category');
            container.appendChild(subCategoryHtml);
        }
    }
    
    return container;
};

// Update the actions display
function updateActionsDisplay() {
    const actionsContent = document.querySelector('.actions-content');
    if (!actionsContent) return;
    
    // Clear existing content
    actionsContent.innerHTML = '';
    
    if (!gameState.skillManager) {
        actionsContent.innerHTML = '<p>Actions not loaded yet...</p>';
        return;
    }
    
    const allActions = gameState.skillManager.getAllAvailableActions();
    
    if (allActions.length === 0) {
        actionsContent.innerHTML = '<p>No actions available yet.</p>';
        return;
    }
    
    // Group actions by skill type
    const actionsBySkill = {};
    allActions.forEach(action => {
        if (!actionsBySkill[action.skillType]) {
            actionsBySkill[action.skillType] = [];
        }
        actionsBySkill[action.skillType].push(action);
    });
    
    // Create action buttons grouped by skill
    for (const skillType in actionsBySkill) {
        const skillHeader = document.createElement('h3');
        skillHeader.textContent = skillType;
        actionsContent.appendChild(skillHeader);
        
        actionsBySkill[skillType].forEach(action => {
            const button = document.createElement('button');
            button.className = gameConfig.ui.cssClasses.actionButton;
            button.textContent = action.name;
            button.title = action.description;
            
            // Add new unlock highlight if needed
            if (gameState.skillManager.isNewlyUnlocked(action.name)) {
                button.classList.add(gameConfig.ui.cssClasses.newUnlock);
            }
            
            button.addEventListener('click', () => handleSkillAction(action));
            actionsContent.appendChild(button);
        });
    }
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
    
    // Display message
    const message = gameConfig.messages.actionCompleted
        .replace('{actionName}', action.name.toLowerCase())
        .replace('{xpReward}', action.xpReward)
        .replace('{itemReward}', action.itemReward)
        .replace('{itemCount}', action.itemCount);
    
    addNarrationMessage(message);
    
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
    
    // Add event listener for save button
    const saveButton = document.getElementById('save-game-button');
    if (saveButton) {
        saveButton.addEventListener('click', () => {
            const success = saveGameState();
            if (success) {
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
        
        // Load skill data into the manager
        gameState.skillManager.loadFromConfig(skillsConfig, gameConfig);
        
        // Try to load saved game data
        const loadedSave = loadGameState();
        
        // If no save was loaded, show welcome message
        if (!loadedSave) {
            addNarrationMessage(gameConfig.messages.welcome);
        }
        
        // Setup UI
        generateTabsFromConfig();
        updateSkillsDisplay();
        updateActionsDisplay();
        
        // Setup auto-save
        setupAutoSave();
        
        // Add event listener for saving before page unload
        window.addEventListener('beforeunload', saveGameState);
        
    } catch (error) {
        console.error('Error during game initialization:', error);
    } finally {
        // Hide loading indicator
        document.getElementById('loading').style.display = 'none';
    }
}

// Start the game when page loads
document.addEventListener('DOMContentLoaded', initGame); 