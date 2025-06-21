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
        skillsConfigError: 'Error: Could not load skills configuration.'
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
    skillsContent.innerHTML = ''; // Clear previous content

    const { cssClasses } = gameConfig.ui;
    const playerSkills = gameState.skillManager.skills;

    const createSkillHtml = (skillName, skill) => {
        if (!skill) return '';
        const progress = skill.getProgress();
        return `
            <div class="${cssClasses.skillItem}" data-skill-name="${skillName}">
                <div class="${cssClasses.skillHeader}">
                    <span class="${cssClasses.skillName}">${skill.name}</span>
                    <span class="${cssClasses.skillLevel}">Lvl ${skill.level}</span>
                </div>
                <div class="${cssClasses.skillProgressContainer}">
                    <div class="${cssClasses.skillProgressBar}">
                        <div class="${cssClasses.skillProgressFill}" style="width: ${progress}%"></div>
                    </div>
                </div>
                <div class="${cssClasses.skillXp}">${skill.xp.toFixed(0)} / ${skill.xpToNext} XP</div>
            </div>
        `;
    };

    const generateHtmlForCategory = (categoryName, categoryData) => {
        let categoryHtml = `<div class="skill-category" data-category-name="${categoryName}"><h2>${categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}</h2>`;

        for (const [key, data] of Object.entries(categoryData)) {
            const skill = playerSkills.get(key);
            if (skill) {
                categoryHtml += createSkillHtml(key, skill);
            }

            if (data.sub_skills) {
                let subcategoryName = key;
                if (data.description) {
                    subcategoryName = `<span title="${data.description}">${key}</span>`;
                }
                if (data.requires) {
                    subcategoryName += ` <span class="skill-requirement">(${data.requires.skill} ${data.requires.level}+)</span>`;
                }

                categoryHtml += `<div class="skill-subcategory" data-subcategory-name="${key}"><h3>${subcategoryName}</h3>`;
                categoryHtml += generateHtmlForCategory(key, data.sub_skills); // Recursive call
                categoryHtml += `</div>`;
            } else if (data.requires && !playerSkills.has(key)) {
                // This is for professional skills without sub-skills that are not yet unlocked.
                // We can choose to show them as locked. For now, we'll just not show them until they are a "skill".
                // The logic to unlock them needs to be implemented.
            }
        }

        categoryHtml += `</div>`;
        return categoryHtml;
    };
    
    if (skillsConfig) {
        for (const categoryName in skillsConfig) {
            skillsContent.innerHTML += generateHtmlForCategory(categoryName, skillsConfig[categoryName]);
        }
    }
}

// Update the actions display
function updateActionsDisplay() {
    const config = gameConfig || DEFAULT_CONFIG;
    const actionsContent = document.querySelector('.actions-content');
    if (!actionsContent) return;
    
    actionsContent.innerHTML = '';
    
    // Get all available actions from all skills
    const allActions = gameState.skillManager.getAllAvailableActions();
    
    allActions.forEach(action => {
        const actionButton = document.createElement('button');
        actionButton.className = config.ui.cssClasses.actionButton;
        actionButton.textContent = `${action.name} (${action.xpReward} XP)`;
        actionButton.setAttribute('data-action', action.name.toLowerCase().replace(/\s+/g, '-'));
        actionButton.setAttribute('data-xp', action.xpReward);
        actionButton.setAttribute('data-item', action.itemReward);
        actionButton.setAttribute('data-count', action.itemCount);
        actionButton.setAttribute('data-skill', action.skillType);
        
        // Add visual feedback for newly unlocked actions
        if (gameState.skillManager.isNewlyUnlocked(action.name)) {
            actionButton.classList.add(config.ui.cssClasses.newUnlock);
        }
        
        actionButton.addEventListener('click', () => handleSkillAction(action));
        actionsContent.appendChild(actionButton);
    });
}

// Generic action handler for any skill
function handleSkillAction(action) {
    const config = gameConfig || DEFAULT_CONFIG;
    
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
    const message = config.messages.actionCompleted
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
    const config = gameConfig || DEFAULT_CONFIG;
    
    // Remove active class from all tabs and panels
    document.querySelectorAll(`.${config.ui.cssClasses.tabButton}`).forEach(btn => 
        btn.classList.remove(config.ui.cssClasses.active)
    );
    document.querySelectorAll(`.${config.ui.cssClasses.tabPanel}`).forEach(panel => 
        panel.classList.remove(config.ui.cssClasses.active)
    );
    
    // Add active class to selected tab and panel
    document.querySelector(`[data-tab="${tabName}"]`).classList.add(config.ui.cssClasses.active);
    document.getElementById(`${tabName}-tab`).classList.add(config.ui.cssClasses.active);
}

// DOM elements
const narrationContent = document.getElementById('narration-content');

// Narration system
function addNarrationMessage(message) {
    const config = gameConfig || DEFAULT_CONFIG;
    
    const messageElement = document.createElement('div');
    messageElement.className = config.ui.cssClasses.narrationMessage;
    messageElement.textContent = message;
    
    narrationContent.appendChild(messageElement);
    
    // Auto-scroll to bottom
    narrationContent.scrollTop = narrationContent.scrollHeight;
    
    // Store in game state
    gameState.narration.push(message);
}

// Generate tabs dynamically from configuration
function generateTabsFromConfig() {
    const config = gameConfig || DEFAULT_CONFIG;
    const sidebarTabs = document.getElementById('sidebar-tabs');
    const tabContent = document.getElementById('tab-content');
    
    if (!sidebarTabs || !tabContent) return;
    
    // Clear existing content
    sidebarTabs.innerHTML = '';
    tabContent.innerHTML = '';
    
    // Generate tabs from configuration
    config.ui.tabs.forEach((tab, index) => {
        // Create tab button
        const tabButton = document.createElement('button');
        tabButton.className = config.ui.cssClasses.tabButton;
        tabButton.setAttribute('data-tab', tab.id);
        tabButton.innerHTML = `${tab.icon} ${tab.displayName}`;
        
        // Make first tab active by default
        if (index === 0) {
            tabButton.classList.add(config.ui.cssClasses.active);
        }
        
        sidebarTabs.appendChild(tabButton);
        
        // Create tab panel
        const tabPanel = document.createElement('div');
        tabPanel.id = `${tab.id}-tab`;
        tabPanel.className = config.ui.cssClasses.tabPanel;
        
        // Make first panel active by default
        if (index === 0) {
            tabPanel.classList.add(config.ui.cssClasses.active);
        }
        
        // Add content based on tab type
        switch (tab.id) {
            case 'skills':
                tabPanel.innerHTML = `
                    <h3>${tab.displayName}</h3>
                    <div id="${config.ui.elementIds.skillsContent}">
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
    document.querySelectorAll(`.${config.ui.cssClasses.tabButton}`).forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            switchTab(tabName);
        });
    });
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
        if (!gameConfig) {
            addNarrationMessage('Critical Error: Game configuration could not be loaded.');
            return;
        }

        // Load skill data into the manager
        gameState.skillManager.loadFromConfig(skillsConfig, gameConfig);

        // Generate tabs from config
        generateTabsFromConfig();
        
        // Initial UI setup
        updateSkillsDisplay();
        updateActionsDisplay();
        switchTab('skills'); 
        addNarrationMessage(gameConfig.messages.welcome);

    } catch (error) {
        console.error('An error occurred during game initialization:', error);
        addNarrationMessage('A critical error occurred. Please refresh the page.');
    } finally {
        // Hide loading indicator
        document.getElementById('loading').style.display = 'none';
    }
}

// Start the game when page loads
document.addEventListener('DOMContentLoaded', initGame); 