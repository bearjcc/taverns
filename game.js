// Game configuration - will be loaded asynchronously
let gameConfig = null;
let skillsConfig = null;
let traitsConfig = null;

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
        loadError: '⚠️ Failed to load saved game',
        actionInsufficientItems: 'Insufficient items to perform the action: {itemName}',
        actionItemsConsumed: 'You consumed {itemCount}x {itemName}',
        actionItemsGained: 'You gained {itemCount}x {itemName}',
        actionTimeRequired: 'This action requires {time} {timeUnit} to complete'
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

// Trait class for managing individual traits (fundamental character attributes)
class Trait {
    constructor(name, level = null, xp = null, description = '', icon = '') {
        this.name = name;
        this.level = level !== null ? level : 1;
        this.xp = xp !== null ? xp : 0;
        this.description = description;
        this.icon = icon;
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

// TraitManager class for managing all traits
class TraitManager {
    constructor() {
        this.traits = new Map();
    }

    loadFromConfig(traitsConfig) {
        try {
            console.log('Loading traits...');
            this.traits.clear();

            if (traitsConfig && traitsConfig.traits) {
                for (const [traitName, traitData] of Object.entries(traitsConfig.traits)) {
                    const trait = new Trait(
                        traitName,
                        traitData.level,
                        traitData.experience,
                        traitData.description || '',
                        traitData.icon || ''
                    );
                    this.traits.set(traitName, trait);
                }
            }
            
            console.log(`Loaded ${this.traits.size} traits`);
        } catch (error) {
            console.error('Error loading traits:', error);
        }
    }

    getTrait(traitName) {
        return this.traits.get(traitName);
    }

    getAllTraits() {
        return Array.from(this.traits.values());
    }

    addTraitXp(traitName, xpAmount) {
        const trait = this.traits.get(traitName);
        if (trait) {
            const fromLevel = trait.level;
            const levelUps = trait.addXp(xpAmount);
            
            if (levelUps > 0) {
                addNarrationMessage(`🎉 ${traitName} trait increased! You are now level ${trait.level}.`);
                flashXpGain(traitName, xpAmount);
            }
            
            return levelUps;
        }
        return 0;
    }
}

// Action class for managing individual actions
class Action {
    constructor(name, displayName, description, icon, tooltip, levelRequired, xpReward, timeRequired, timeUnit, itemReward, itemCount, itemConsumption, unlockMessage, flavorText, skillType, variables = null) {
        this.name = name;
        this.displayName = displayName;
        this.description = description;
        this.icon = icon;
        this.tooltip = tooltip;
        this.levelRequired = levelRequired;
        this.xpReward = xpReward;
        this.timeRequired = timeRequired;
        this.timeUnit = timeUnit;
        this.itemReward = itemReward;
        this.itemCount = itemCount;
        this.itemConsumption = itemConsumption || {};
        this.unlockMessage = unlockMessage;
        this.flavorText = flavorText;
        this.skillType = skillType;
        this.variables = variables; // For actions with multiple options (e.g., sleep in bed vs cot)
        this.isNewlyUnlocked = false;
    }

    canPerform(skillLevel, inventoryManager) {
        // Check skill level requirement
        if (skillLevel < this.levelRequired) {
            return false;
        }

        // Check if player has required items
        for (const [itemId, requiredCount] of Object.entries(this.itemConsumption)) {
            if (!inventoryManager.hasItem(itemId, requiredCount)) {
                return false;
            }
        }

        return true;
    }

    getTimeDisplay() {
        if (!this.timeRequired) return '';
        return `${this.timeRequired} ${this.timeUnit}`;
    }

    hasVariables() {
        return this.variables && this.variables.length > 0;
    }
}

// ActionManager class for managing all actions
class ActionManager {
    constructor() {
        this.actions = new Map();
        this.newlyUnlockedActions = new Set();
    }

    loadFromConfig(actionsConfig) {
        try {
            console.log('Loading actions...');
            this.actions.clear();

            // Load actions from the new actions section
            if (actionsConfig && actionsConfig.actions) {
                for (const [categoryName, categoryData] of Object.entries(actionsConfig.actions)) {
                    if (categoryData.actions) {
                        for (const actionData of categoryData.actions) {
                            const action = new Action(
                                actionData.name,
                                actionData.displayName,
                                actionData.description,
                                actionData.icon,
                                actionData.tooltip,
                                actionData.levelRequired,
                                actionData.xpReward,
                                actionData.timeRequired,
                                actionData.timeUnit,
                                actionData.itemReward,
                                actionData.itemCount,
                                actionData.itemConsumption,
                                actionData.unlockMessage,
                                actionData.flavorText,
                                actionData.skillType,
                                actionData.variables
                            );
                            this.actions.set(actionData.name, action);
                        }
                    }
                }
            }
            
            console.log(`Loaded ${this.actions.size} actions`);
        } catch (error) {
            console.error('Error loading actions:', error);
        }
    }

    getAction(actionName) {
        return this.actions.get(actionName);
    }

    getAllActions() {
        return Array.from(this.actions.values());
    }

    getAvailableActions(skillManager, inventoryManager) {
        const availableActions = [];
        
        console.log('Checking available actions...');
        console.log('All skills:', Array.from(skillManager.skills.keys()));
        
        for (const action of this.actions.values()) {
            const skill = skillManager.getSkill(action.skillType);
            const skillLevel = skill ? skill.level : 0;
            
            console.log(`Action ${action.name} requires skill ${action.skillType} at level ${action.levelRequired}, player has level ${skillLevel}`);
            
            if (action.canPerform(skillLevel, inventoryManager)) {
                availableActions.push(action);
            }
        }
        
        return availableActions;
    }

    markActionAsNewlyUnlocked(actionName) {
        this.newlyUnlockedActions.add(actionName);
    }

    isNewlyUnlocked(actionName) {
        return this.newlyUnlockedActions.has(actionName);
    }

    markActionUsed(actionName) {
        this.newlyUnlockedActions.delete(actionName);
    }

    checkForNewUnlocks(skillName, fromLevel, toLevel) {
        for (const action of this.actions.values()) {
            if (action.skillType === skillName && 
                action.levelRequired > fromLevel && 
                action.levelRequired <= toLevel) {
                this.markActionAsNewlyUnlocked(action.name);
            }
        }
    }
}

// Game Object class for items in the game
class GameObject {
    constructor(id, name, displayName, description, icon, examineText, stackable = true, maxStack = 999) {
        this.id = id;
        this.name = name;
        this.displayName = displayName;
        this.description = description;
        this.icon = icon;
        this.examineText = examineText;
        this.stackable = stackable;
        this.maxStack = maxStack;
    }
}

// Inventory Item class for items in player's inventory
class InventoryItem {
    constructor(gameObject, quantity = 1) {
        this.gameObject = gameObject;
        this.quantity = quantity;
    }

    addQuantity(amount) {
        const newQuantity = this.quantity + amount;
        if (newQuantity <= this.gameObject.maxStack) {
            this.quantity = newQuantity;
            return true;
        }
        return false;
    }

    removeQuantity(amount) {
        if (this.quantity >= amount) {
            this.quantity -= amount;
            return true;
        }
        return false;
    }

    getDisplayName() {
        if (this.quantity > 1 && this.gameObject.stackable) {
            return `${this.gameObject.displayName} (${this.quantity})`;
        }
        return this.gameObject.displayName;
    }
}

// Inventory Manager class for managing player's inventory
class InventoryManager {
    constructor() {
        this.items = new Map(); // Map of itemId -> InventoryItem
        this.gameObjects = new Map(); // Map of itemId -> GameObject
    }

    // Register a game object definition
    registerGameObject(gameObject) {
        this.gameObjects.set(gameObject.id, gameObject);
    }

    // Add items to inventory
    addItem(itemId, quantity = 1) {
        const gameObject = this.gameObjects.get(itemId);
        if (!gameObject) {
            console.error(`GameObject with id '${itemId}' not found`);
            return false;
        }

        if (gameObject.stackable) {
            // Try to add to existing stack
            const existingItem = this.items.get(itemId);
            if (existingItem) {
                return existingItem.addQuantity(quantity);
            } else {
                // Create new stack
                this.items.set(itemId, new InventoryItem(gameObject, quantity));
                return true;
            }
        } else {
            // Non-stackable items - add as separate entries
            for (let i = 0; i < quantity; i++) {
                const uniqueId = `${itemId}_${Date.now()}_${i}`;
                this.items.set(uniqueId, new InventoryItem(gameObject, 1));
            }
            return true;
        }
    }

    // Remove items from inventory
    removeItem(itemId, quantity = 1) {
        const existingItem = this.items.get(itemId);
        if (!existingItem) {
            return false;
        }

        if (existingItem.removeQuantity(quantity)) {
            if (existingItem.quantity <= 0) {
                this.items.delete(itemId);
            }
            return true;
        }
        return false;
    }

    // Get item by ID
    getItem(itemId) {
        return this.items.get(itemId);
    }

    // Get all items
    getAllItems() {
        return Array.from(this.items.entries());
    }

    // Get item count
    getItemCount(itemId) {
        const item = this.items.get(itemId);
        return item ? item.quantity : 0;
    }

    // Check if player has item
    hasItem(itemId, quantity = 1) {
        return this.getItemCount(itemId) >= quantity;
    }

    // Get game object definition
    getGameObject(itemId) {
        return this.gameObjects.get(itemId);
    }
}

// SkillManager class for managing all skills and their actions
class SkillManager {
    constructor() {
        this.skills = new Map();
        this.newlyUnlockedActions = new Set();
    }

    loadFromConfig(skillsConfig, gameConfig) {
        try {
            console.log('Loading skills and actions...');
            this.skills.clear();

            // Process skills from the skills configuration
            if (skillsConfig) {
                Object.entries(skillsConfig).forEach(([categoryName, categoryData]) => {
                    const processCategory = (categoryData) => {
                        Object.entries(categoryData).forEach(([skillName, skillData]) => {
                            if (skillData.level !== undefined) {
                                // This is a skill
                                const skill = new Skill(skillName, skillData.level, skillData.experience);
                                this.skills.set(skillName, skill);
                            } else if (skillData.sub_skills) {
                                // This is a category with sub-skills
                                processCategory(skillData.sub_skills);
                            }
                        });
                    };
                    
                    processCategory(categoryData);
                });
            }
            
            console.log('Skills loaded:', this.skills);
    
        } catch (error) {
            console.error('Error loading configuration into SkillManager:', error);
        }
    }

    addSkill(skillName, skill) {
        this.skills.set(skillName, skill);
    }

    getSkill(skillName) {
        return this.skills.get(skillName);
    }

    addSkillXp(skillName, xpAmount) {
        const skill = this.skills.get(skillName);
        if (!skill) return 0;
        
        const oldLevel = skill.level;
        const levelUps = skill.addXp(xpAmount);
        
        return levelUps;
    }

    getAllSkills() {
        return Array.from(this.skills.values());
    }
}

// Game state object to track all player data
let gameState = {
    skillManager: new SkillManager(),
    traitManager: new TraitManager(),
    inventoryManager: new InventoryManager(),
    actionManager: new ActionManager(),
    inventory: {},
    lastSaved: null
};

// Load and register all game objects from items.json
async function initializeGameObjects() {
    try {
        const response = await fetch('data/items.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const itemsData = await response.json();
        Object.values(itemsData).forEach(item => {
            const gameObject = new GameObject(
                item.id,
                item.name,
                item.displayName,
                item.description,
                item.icon,
                item.examineText,
                item.stackable,
                item.maxStack
            );
            gameState.inventoryManager.registerGameObject(gameObject);
        });
        console.log('Game objects loaded from items.json');
    } catch (error) {
        console.error('Error loading items.json:', error);
        addNarrationMessage('Error: Could not load item data. Some items may not function correctly.');
    }
}

// Game state persistence functions
function saveGameState() {
    try {
        const saveData = {
            skills: {},
            traits: {},
            inventory: {},
            newlyUnlockedActions: Array.from(gameState.actionManager.newlyUnlockedActions),
            lastSaved: new Date().getTime()
        };
        
        // Save skills data
        gameState.skillManager.skills.forEach((skill, name) => {
            saveData.skills[name] = {
                level: skill.level,
                xp: skill.xp
            };
        });
        
        // Save traits data
        gameState.traitManager.traits.forEach((trait, name) => {
            saveData.traits[name] = {
                level: trait.level,
                xp: trait.xp
            };
        });
        
        // Save inventory data
        gameState.inventoryManager.getAllItems().forEach(([itemId, inventoryItem]) => {
            saveData.inventory[itemId] = {
                quantity: inventoryItem.quantity
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
        
        // Load traits data
        if (parsedData.traits) {
            Object.entries(parsedData.traits).forEach(([name, data]) => {
                const trait = gameState.traitManager.getTrait(name);
                if (trait) {
                    trait.level = data.level;
                    trait.xp = data.xp;
                    trait.xpToNext = trait.getXpToNextLevel(trait.level);
                }
            });
        }
        
        // Load inventory data
        if (parsedData.inventory) {
            Object.entries(parsedData.inventory).forEach(([itemId, data]) => {
                gameState.inventoryManager.addItem(itemId, data.quantity);
            });
        }
        
        // Load newly unlocked actions
        if (parsedData.newlyUnlockedActions) {
            parsedData.newlyUnlockedActions.forEach(actionName => {
                gameState.actionManager.markActionAsNewlyUnlocked(actionName);
            });
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
        const response = await fetch('game-config.json');
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

async function loadTraitsConfig() {
    try {
        const response = await fetch('data/traits.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        traitsConfig = await response.json();
        console.log('Traits configuration loaded successfully');
    } catch (error) {
        console.error('Error loading traits config:', error);
        // In case of error, traitsConfig will remain null
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
    
    const allActions = gameState.actionManager.getAllActions();
    
    if (allActions.length === 0) {
        actionsContent.innerHTML = '<p class="text-muted">No actions available. Level up your skills to unlock more actions!</p>';
        return;
    }
    
    allActions.forEach(action => {
        const button = document.createElement('button');
        button.className = gameConfig.ui.cssClasses.actionButton;
        button.title = action.tooltip || action.description;
        
        // Check if action is available
        const skill = gameState.skillManager.getSkill(action.skillType);
        const skillLevel = skill ? skill.level : 0;
        const canPerform = action.canPerform(skillLevel, gameState.inventoryManager);
        
        // Disable button if action is not available
        if (!canPerform) {
            button.disabled = true;
        }
        
        // Add new unlock styling if this action was recently unlocked
        if (gameState.actionManager.isNewlyUnlocked(action.name)) {
            button.classList.add(gameConfig.ui.cssClasses.newUnlock);
        }
        
        // Create action header with icon, title, and time
        const header = document.createElement('div');
        header.className = 'action-header';
        
        const icon = document.createElement('span');
        icon.className = 'action-icon';
        icon.textContent = action.icon;
        
        const title = document.createElement('span');
        title.className = 'action-title';
        title.textContent = action.displayName;
        
        const time = document.createElement('span');
        time.className = 'action-time';
        time.textContent = action.getTimeDisplay();
        
        header.appendChild(icon);
        header.appendChild(title);
        header.appendChild(time);
        
        // Create description
        const description = document.createElement('div');
        description.className = 'action-description';
        description.textContent = action.description;
        
        // Add requirement info if action is not available
        if (!canPerform) {
            const requirement = document.createElement('div');
            requirement.className = 'action-requirement';
            requirement.style.color = '#888';
            requirement.style.fontSize = '12px';
            requirement.style.fontStyle = 'italic';
            
            if (skillLevel < action.levelRequired) {
                requirement.textContent = `Requires ${action.skillType} level ${action.levelRequired} (you have ${skillLevel})`;
            } else {
                // Check for missing items
                const missingItems = [];
                for (const [itemId, requiredCount] of Object.entries(action.itemConsumption)) {
                    if (!gameState.inventoryManager.hasItem(itemId, requiredCount)) {
                        const gameObject = gameState.inventoryManager.getGameObject(itemId);
                        const itemName = gameObject ? gameObject.displayName : itemId;
                        missingItems.push(`${itemName} x${requiredCount}`);
                    }
                }
                if (missingItems.length > 0) {
                    requirement.textContent = `Missing: ${missingItems.join(', ')}`;
                }
            }
            
            description.appendChild(requirement);
        }
        
        button.appendChild(header);
        button.appendChild(description);
        
        // Add variable options if the action has them
        if (action.hasVariables()) {
            const variablesContainer = document.createElement('div');
            variablesContainer.className = 'action-variables';
            
            action.variables.forEach(variable => {
                const variableButton = document.createElement('div');
                variableButton.className = 'action-variable';
                variableButton.title = variable.description;
                
                // Disable variable if main action is disabled
                if (!canPerform) {
                    variableButton.style.opacity = '0.5';
                    variableButton.style.pointerEvents = 'none';
                }
                
                const variableIcon = document.createElement('span');
                variableIcon.className = 'action-variable-icon';
                variableIcon.textContent = variable.icon;
                
                const variableInfo = document.createElement('div');
                variableInfo.className = 'action-variable-info';
                
                const variableName = document.createElement('div');
                variableName.className = 'action-variable-name';
                variableName.textContent = variable.displayName;
                
                const variableDescription = document.createElement('div');
                variableDescription.className = 'action-variable-description';
                variableDescription.textContent = variable.description;
                
                const variableTime = document.createElement('span');
                variableTime.className = 'action-variable-time';
                variableTime.textContent = `${variable.timeRequired} ${action.timeUnit}`;
                
                variableInfo.appendChild(variableName);
                variableInfo.appendChild(variableDescription);
                variableButton.appendChild(variableIcon);
                variableButton.appendChild(variableInfo);
                variableButton.appendChild(variableTime);
                
                // Add click handler for variable option
                variableButton.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (canPerform) {
                        handleAction(action, variable);
                    }
                });
                
                variablesContainer.appendChild(variableButton);
            });
            
            button.appendChild(variablesContainer);
        } else {
            // Add click handler for regular action
            button.addEventListener('click', () => {
                if (canPerform) {
                    handleAction(action);
                }
            });
        }
        
        actionsContent.appendChild(button);
    });
}

// Update inventory display
function updateInventoryDisplay() {
    const inventoryContent = document.getElementById('inventory-content');
    if (!inventoryContent) return;
    
    const items = gameState.inventoryManager.getAllItems();
    
    if (items.length === 0) {
        inventoryContent.innerHTML = '<p class="text-muted">Your inventory is empty.</p>';
        return;
    }
    
    inventoryContent.innerHTML = '';
    
    items.forEach(([itemId, inventoryItem]) => {
        const itemElement = document.createElement('div');
        itemElement.className = 'inventory-item';
        itemElement.setAttribute('data-item-id', itemId);
        
        const gameObject = inventoryItem.gameObject;
        
        itemElement.innerHTML = `
            <div class="item-icon">${gameObject.icon}</div>
            <div class="item-info">
                <div class="item-name">${inventoryItem.getDisplayName()}</div>
                <div class="item-description">${gameObject.description}</div>
            </div>
        `;
        
        // Add tooltip
        itemElement.title = gameObject.description;
        
        // Add right-click context menu
        itemElement.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            showItemContextMenu(e, itemId, inventoryItem);
        });
        
        inventoryContent.appendChild(itemElement);
    });
}

// Update character display to show traits
function updateCharacterDisplay() {
    const characterContent = document.getElementById('character-content');
    if (!characterContent) {
        console.error('Character content element not found');
        return;
    }
    
    const traits = gameState.traitManager.getAllTraits();
    
    if (traits.length === 0) {
        characterContent.innerHTML = '<p class="text-muted">No traits available.</p>';
        return;
    }
    
    let html = '<div class="traits-section">';
    html += '<h3>Character Traits</h3>';
    html += '<p class="trait-description">These are your fundamental character attributes that affect all aspects of your abilities.</p>';
    
    traits.forEach(trait => {
        const progress = trait.getProgress();
        html += `
            <div class="trait-item" data-trait="${trait.name}">
                <div class="trait-header">
                    <span class="trait-icon">${trait.icon}</span>
                    <span class="trait-name">${trait.name}</span>
                    <span class="trait-level">Level ${trait.level}</span>
                </div>
                <div class="trait-description">${trait.description}</div>
                <div class="trait-progress-container">
                    <div class="trait-progress-bar">
                        <div class="trait-progress-fill" style="width: ${progress}%"></div>
                    </div>
                    <span class="trait-xp">${trait.xp}/${trait.xpToNext} XP</span>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    
    // Add save game section
    html += `
        <div class="save-game-container">
            <button id="save-game-button" class="save-button">💾 Save Game</button>
            <p id="last-saved-time"></p>
        </div>
    `;
    
    characterContent.innerHTML = html;
    
    // Re-add event listener for save button
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
}

// Show context menu for inventory items
function showItemContextMenu(event, itemId, inventoryItem) {
    // Remove any existing context menu
    removeContextMenu();
    
    const gameObject = inventoryItem.gameObject;
    
    const contextMenu = document.createElement('div');
    contextMenu.className = 'context-menu';
    contextMenu.id = 'item-context-menu';
    
    contextMenu.innerHTML = `
        <div class="context-menu-item" data-action="use">Use</div>
        <div class="context-menu-item" data-action="examine">Examine</div>
        <div class="context-menu-item" data-action="drop">Drop</div>
    `;
    
    // Position the menu
    contextMenu.style.left = event.pageX + 'px';
    contextMenu.style.top = event.pageY + 'px';
    
    // Add event listeners
    contextMenu.addEventListener('click', (e) => {
        const action = e.target.getAttribute('data-action');
        if (action) {
            handleItemAction(action, itemId, inventoryItem);
        }
        removeContextMenu();
    });
    
    document.body.appendChild(contextMenu);
    
    // Close menu when clicking outside
    setTimeout(() => {
        document.addEventListener('click', removeContextMenu, { once: true });
    }, 0);
}

// Remove context menu
function removeContextMenu() {
    const existingMenu = document.getElementById('item-context-menu');
    if (existingMenu) {
        existingMenu.remove();
    }
}

// Handle item actions
function handleItemAction(action, itemId, inventoryItem) {
    const gameObject = inventoryItem.gameObject;
    
    switch (action) {
        case 'use':
            // Use action - for now just show a message
            addNarrationMessage(`You attempt to use the ${gameObject.displayName}, but nothing happens.`);
            break;
            
        case 'examine':
            // Examine action - show examine text in narration
            addNarrationMessage(gameObject.examineText);
            break;
            
        case 'drop':
            // Drop action - remove item from inventory
            const success = gameState.inventoryManager.removeItem(itemId, 1);
            if (success) {
                addNarrationMessage(`You drop the ${gameObject.displayName}.`);
                updateInventoryDisplay();
                saveGameState();
            }
            break;
    }
}

// Generic action handler for any skill
function handleAction(action, variable = null) {
    // Check if player has required items
    for (const [itemId, requiredCount] of Object.entries(action.itemConsumption)) {
        if (!gameState.inventoryManager.hasItem(itemId, requiredCount)) {
            const gameObject = gameState.inventoryManager.getGameObject(itemId);
            const itemName = gameObject ? gameObject.displayName : itemId;
            const message = gameConfig.messages.actionInsufficientItems.replace('{itemName}', itemName);
            addNarrationMessage(message);
            showToast(message, 'error');
            return;
        }
    }
    
    // Consume required items
    for (const [itemId, requiredCount] of Object.entries(action.itemConsumption)) {
        const success = gameState.inventoryManager.removeItem(itemId, requiredCount);
        if (success) {
            const gameObject = gameState.inventoryManager.getGameObject(itemId);
            const itemName = gameObject ? gameObject.displayName : itemId;
            const message = gameConfig.messages.actionItemsConsumed
                .replace('{itemName}', itemName)
                .replace('{itemCount}', requiredCount);
            addNarrationMessage(message);
        }
    }
    
    // Get the skill associated with this action
    const skill = gameState.skillManager.getSkill(action.skillType);
    if (!skill) {
        console.error(`Skill ${action.skillType} not found for action ${action.name}`);
        return;
    }
    
    // Add XP to the skill
    const levelUps = gameState.skillManager.addSkillXp(action.skillType, action.xpReward);
    
    // Add items to inventory using the inventory manager
    if (action.itemReward && action.itemCount > 0) {
        const success = gameState.inventoryManager.addItem(action.itemReward, action.itemCount);
        if (success) {
            const gameObject = gameState.inventoryManager.getGameObject(action.itemReward);
            if (gameObject) {
                const message = gameConfig.messages.actionItemsGained
                    .replace('{itemName}', gameObject.displayName)
                    .replace('{itemCount}', action.itemCount);
                addNarrationMessage(message);
            }
        }
    }
    
    // Display time requirement message
    if (action.timeRequired) {
        const timeMessage = gameConfig.messages.actionTimeRequired
            .replace('{time}', action.timeRequired)
            .replace('{timeUnit}', action.timeUnit);
        addNarrationMessage(timeMessage);
    }
    
    // Display flavor text message in narration
    if (action.flavorText) {
        addNarrationMessage(action.flavorText);
    }
    
    // Flash XP gain in the skill UI
    flashXpGain(action.skillType, action.xpReward);
    
    // If there were level ups, display those messages and check for new unlocks
    if (levelUps > 0) {
        const levelUpMessage = gameConfig.messages.levelUp
            .replace('{skillName}', action.skillType)
            .replace('{level}', skill.level);
        
        addNarrationMessage(levelUpMessage);
        
        // Check for new action unlocks
        const fromLevel = skill.level - levelUps;
        gameState.actionManager.checkForNewUnlocks(action.skillType, fromLevel, skill.level);
    }
    
    // Mark this action as no longer newly unlocked
    gameState.actionManager.markActionUsed(action.name);
    
    // Update the UI
    updateSkillsDisplay();
    updateActionsDisplay();
    updateInventoryDisplay();
    updateCharacterDisplay();
    
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
        updateInventoryDisplay();
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
    characterPanel.innerHTML = `
        <h2>Character</h2>
        <div id="character-content">
            <p>Your character information will appear here.</p>
        </div>
    `;
    tabContent.appendChild(characterPanel);
    
    // Add achievements tab panel
    const achievementsPanel = document.createElement('div');
    achievementsPanel.id = 'achievements-panel';
    achievementsPanel.className = gameConfig.ui.cssClasses.tabPanel;
    achievementsPanel.innerHTML = `
        <h2>Achievements</h2>
        <div id="achievements-content">
            <p>Track your progress and unlock achievements!</p>
            <button id="open-achievements-modal" class="achievement-button">🏆 View All Achievements</button>
        </div>
    `;
    tabContent.appendChild(achievementsPanel);
    
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
    
    // Add event listener for achievements modal button
    const achievementsButton = document.getElementById('open-achievements-modal');
    if (achievementsButton) {
        achievementsButton.addEventListener('click', () => {
            // Open the achievements modal using the global modal system
            if (window.openAchievementsModal) {
                const achievementsData = gameConfig.achievements;
                const unlockedAchievements = gameState.achievementSystem.unlockedAchievements;
                const achievementProgress = gameState.achievementSystem.progress;
                window.openAchievementsModal(achievementsData, unlockedAchievements, achievementProgress);
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
        await loadTraitsConfig();
        
        // Check for config loading errors
        if (!gameConfig || !skillsConfig) {
            addNarrationMessage('Critical Error: Game configuration could not be loaded.');
            return;
        }
        
        // Initialize game state
        gameState = {
            skillManager: new SkillManager(),
            traitManager: new TraitManager(),
            inventoryManager: new InventoryManager(),
            actionManager: new ActionManager(),
            inventory: {},
            lastSaved: null
        };
        
        // Initialize game objects
        await initializeGameObjects();
        
        // Initialize UI component system
        gameState.ui = new GameUI();
        
        // Initialize Achievement System
        gameState.achievementSystem = new AchievementSystem(gameConfig.achievements);

        // Load skills and actions from configs
        gameState.skillManager.loadFromConfig(skillsConfig, gameConfig);
        
        // Load actions from config
        gameState.actionManager.loadFromConfig(gameConfig);
        
        // Load traits from config
        gameState.traitManager.loadFromConfig(traitsConfig);
        
        // Try to load saved game state
        const loaded = loadGameState();
        
        // If no saved state, show welcome message
        if (!loaded) {
            // Add welcome message to narration
            addNarrationMessage('Welcome to Taverns and Treasures! Your adventure in this fantasy world begins now. Choose your path - master combat and magic, learn trades and crafts, or explore the world seeking rare treasures. But remember, danger lurks around every corner and death is permanent!');
            
            // Add a test oak log for testing the inventory system
            gameState.inventoryManager.addItem('oak_logs', 3);
            addNarrationMessage('You find 3 oak logs in your inventory. Right-click on them to see the context menu!');

            // Test achievement
            gameState.achievementSystem.unlock('first_login');
        }
        
        // Generate UI
        generateTabsFromConfig();
        updateSkillsDisplay();
        updateActionsDisplay();
        updateInventoryDisplay();
        updateCharacterDisplay();
        
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

// Test function for inventory system (can be called from browser console)
function testInventorySystem() {
    console.log('Testing inventory system...');
    
    // Test adding items
    gameState.inventoryManager.addItem('oak_logs', 5);
    console.log('Added 5 oak logs');
    
    // Test getting items
    const items = gameState.inventoryManager.getAllItems();
    console.log('All items:', items);
    
    // Test item count
    const count = gameState.inventoryManager.getItemCount('oak_logs');
    console.log('Oak logs count:', count);
    
    // Test has item
    const hasItem = gameState.inventoryManager.hasItem('oak_logs', 3);
    console.log('Has 3 oak logs:', hasItem);
    
    // Update display
    updateInventoryDisplay();
    
    console.log('Inventory system test complete!');
}

// Test function for traits system (can be called from browser console)
function testTraitsSystem() {
    console.log('Testing traits system...');
    
    // Test getting all traits
    const traits = gameState.traitManager.getAllTraits();
    console.log('All traits:', traits);
    
    // Test adding XP to a trait
    const strengthTrait = gameState.traitManager.getTrait('Strength');
    if (strengthTrait) {
        console.log('Strength trait before XP:', strengthTrait.level, strengthTrait.xp);
        gameState.traitManager.addTraitXp('Strength', 50);
        console.log('Strength trait after XP:', strengthTrait.level, strengthTrait.xp);
    }
    
    // Update display
    updateCharacterDisplay();
    
    console.log('Traits system test complete!');
}

// Simple AchievementSystem for browser compatibility
class AchievementSystem {
    constructor(achievementsData) {
        this.achievementsData = achievementsData || {};
        this.unlockedAchievements = new Set();
        this.progress = {};
    }

    unlock(achievementId) {
        if (this.achievementsData[achievementId]) {
            this.unlockedAchievements.add(achievementId);
            console.log(`Achievement unlocked: ${achievementId}`);
        }
    }

    isUnlocked(achievementId) {
        return this.unlockedAchievements.has(achievementId);
    }

    getAllAchievements() {
        return this.achievementsData;
    }

    getUnlockedAchievements() {
        return this.unlockedAchievements;
    }

    getAchievementProgress() {
        return this.progress;
    }
} 