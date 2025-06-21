/**
 * @fileoverview Main game initialization and management for Taverns and Treasures.
 * Handles game startup, configuration loading, and core game loop management.
 * 
 * @author bearjcc
 * @version 1.0.0
 */

// Global managers
/** @type {ConfigManager} Global configuration manager instance */
let configManager;

/** @type {SkillManager} Global skill manager instance */
let skillManager;

/** @type {InventoryManager} Global inventory manager instance */
let inventoryManager;

/** @type {TraitManager} Global trait manager instance */
let traitManager;

/** @type {ActionManager} Global action manager instance */
let actionManager;

/** @type {UIManager} Global UI manager instance */
let uiManager;

/** @type {GameStateManager} Global game state manager instance */
let gameStateManager;

/**
 * Initializes the game by loading configurations, setting up managers, and starting the game loop.
 * This is the main entry point for the game and should be called when the page loads.
 * 
 * @async
 * @returns {Promise<void>}
 * @throws {Error} If game initialization fails
 */
async function initGame() {
    try {
        console.log('Initializing Taverns and Treasures...');
        
        // Initialize managers
        configManager = new ConfigManager();
        skillManager = new SkillManager();
        inventoryManager = new InventoryManager();
        traitManager = new TraitManager();
        actionManager = new ActionManager();
        uiManager = new UIManager();
        gameStateManager = new GameStateManager();
        
        // Load configurations
        const configs = await configManager.loadAllConfigs();
        const gameConfig = configs.gameConfig;
        const skillsConfig = configs.skillsConfig;
        const traitsConfig = configs.traitsConfig;
        const actionsConfig = configs.actionsConfig;
        
        // Initialize game objects
        await initializeGameObjects();
        
        // Load configurations into managers
        skillManager.loadFromConfig(skillsConfig, gameConfig);
        traitManager.loadFromConfig(traitsConfig);
        actionManager.loadFromConfig(actionsConfig);
        
        // Load saved game state
        const saveLoaded = gameStateManager.loadGameState(skillManager, inventoryManager, traitManager);
        
        // Setup UI
        uiManager.generateTabsFromConfig(gameConfig);
        
        // Update displays
        updateAllDisplays();
        
        // Setup auto-save
        gameStateManager.setupAutoSave(skillManager, inventoryManager, traitManager, uiManager);
        
        // Show welcome message
        const welcomeMessage = configManager.getMessage('welcome');
        uiManager.addNarrationMessage(welcomeMessage);
        
        if (saveLoaded) {
            uiManager.showToast(configManager.getMessage('gameLoaded'), 'success');
        } else {
            uiManager.showToast(configManager.getMessage('noSaveFound'), 'info');
        }
        
        console.log('Game initialized successfully');
        
        // Hide loading indicator
        const loadingIndicator = document.getElementById('loading');
        if (loadingIndicator) {
            loadingIndicator.style.display = 'none';
        }
        
    } catch (error) {
        console.error('Failed to initialize game:', error);
        uiManager.showToast(configManager.getMessage('configError'), 'error');
    }
}

/**
 * Initializes game objects from the items.json configuration file.
 * Creates GameObject instances for all items defined in the configuration.
 * 
 * @async
 * @returns {Promise<void>}
 * @throws {Error} If items configuration cannot be loaded or parsed
 */
async function initializeGameObjects() {
    try {
        const response = await fetch('../data/items.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const itemsData = await response.json();
        
        for (const [itemId, itemData] of Object.entries(itemsData)) {
            const gameObject = new GameObject(
                itemId,
                itemData.name || itemId,
                itemData.displayName || itemData.name || itemId,
                itemData.description || '',
                itemData.icon || '📦',
                itemData.examineText || itemData.description || '',
                itemData.stackable !== false,
                itemData.maxStack || 999
            );
            
            inventoryManager.registerGameObject(gameObject);
        }
        
        console.log(`Initialized ${Object.keys(itemsData).length} game objects`);
        
    } catch (error) {
        console.error('Failed to initialize game objects:', error);
    }
}

/**
 * Updates all UI displays to reflect the current game state.
 * This includes skills, actions, inventory, and character information.
 */
function updateAllDisplays() {
    const gameConfig = configManager.getGameConfig();
    const skillsConfig = configManager.getSkillsConfig();
    uiManager.updateSkillsDisplay(skillManager, skillsConfig);
    uiManager.updateActionsDisplay(actionManager, skillManager, inventoryManager, gameConfig);
    uiManager.updateInventoryDisplay(inventoryManager, gameConfig);
    uiManager.updateCharacterDisplay(traitManager, gameConfig);
}

/**
 * Handles the execution of a skill action, including requirements checking,
 * item consumption, XP rewards, and UI updates.
 * 
 * @param {string} actionName - The name/ID of the action to execute
 * @param {string|null} [variable=null] - Optional variable parameter for the action
 * @returns {void}
 */
function handleAction(actionName, variable = null) {
    try {
        const action = actionManager.getAction(actionName);
        if (!action) {
            console.error(`Action not found: ${actionName}`);
            return;
        }
        
        const skill = skillManager.getSkill(action.skillType);
        if (!skill) {
            console.error(`Skill not found: ${action.skillType}`);
            return;
        }
        
        // Check if player can perform the action
        if (!action.canPerform(skill.level, inventoryManager)) {
            uiManager.addNarrationMessage(`Requires ${action.skillType} level ${action.levelRequired}`);
            return;
        }
        
        // Handle item consumption
        for (const [itemId, requiredQuantity] of Object.entries(action.itemConsumption)) {
            if (!inventoryManager.hasItem(itemId, requiredQuantity)) {
                const itemName = inventoryManager.getGameObject(itemId)?.displayName || itemId;
                const message = configManager.getMessage('actionInsufficientItems', { itemName });
                uiManager.addNarrationMessage(message);
                return;
            }
        }
        
        // Consume items
        for (const [itemId, quantity] of Object.entries(action.itemConsumption)) {
            inventoryManager.removeItem(itemId, quantity);
            const itemName = inventoryManager.getGameObject(itemId)?.displayName || itemId;
            const message = configManager.getMessage('actionItemsConsumed', { 
                itemName, 
                itemCount: quantity 
            });
            uiManager.addNarrationMessage(message);
        }
        
        // Add XP to skill
        const fromLevel = skill.level;
        const levelUps = skillManager.addSkillXp(action.skillType, action.xpReward);
        
        // Add item reward
        if (action.itemReward) {
            inventoryManager.addItem(action.itemReward, action.itemCount);
            const itemName = inventoryManager.getGameObject(action.itemReward)?.displayName || action.itemReward;
            const message = configManager.getMessage('actionItemsGained', { 
                itemName, 
                itemCount: action.itemCount 
            });
            uiManager.addNarrationMessage(message);
        }
        
        // Check for new unlocks
        actionManager.checkForNewUnlocks(action.skillType, fromLevel, skill.level);
        
        // Add narration
        uiManager.addNarrationMessage(action.flavorText);
        
        // Show completion message in narration instead of toast
        const itemName = action.itemReward ? 
            inventoryManager.getGameObject(action.itemReward)?.displayName || action.itemReward : 
            'nothing';
        const message = configManager.getMessage('actionCompleted', {
            actionName: action.displayName,
            xpReward: action.xpReward,
            itemReward: itemName,
            itemCount: action.itemCount
        });
        uiManager.addNarrationMessage(message);
        
        // Flash XP gain
        uiManager.flashXpGain(action.skillType, action.xpReward);
        
        // Update displays
        updateAllDisplays();
        
        // Save game state
        gameStateManager.saveGameState(skillManager, inventoryManager, traitManager);
        
    } catch (error) {
        console.error('Error executing action:', error);
        uiManager.showToast('An error occurred while executing the action', 'error');
    }
}

/**
 * Handles item-specific actions like using, examining, or dropping items.
 * 
 * @param {Object} action - The action object containing action details
 * @param {string} itemId - The ID of the item to act upon
 * @returns {void}
 */
function handleItemAction(action, itemId) {
    try {
        const item = inventoryManager.getGameObject(itemId);
        if (!item) {
            console.error(`Item not found: ${itemId}`);
            return;
        }
        
        switch (action.type) {
            case 'examine':
                uiManager.addNarrationMessage(item.examineText);
                break;
            case 'use':
                // Handle item usage logic
                uiManager.addNarrationMessage(`You use the ${item.displayName}`);
                break;
            case 'drop':
                inventoryManager.removeItem(itemId, 1);
                uiManager.addNarrationMessage(`You drop the ${item.displayName}`);
                updateAllDisplays();
                break;
            default:
                console.warn(`Unknown item action type: ${action.type}`);
        }
    } catch (error) {
        console.error('Error handling item action:', error);
    }
}

/**
 * Shows a context menu for an item in the inventory.
 * 
 * @param {Event} event - The mouse event that triggered the context menu
 * @param {string} itemId - The ID of the item
 * @param {Object} inventoryItem - The inventory item object
 * @returns {void}
 */
function showItemContextMenu(event, itemId, inventoryItem) {
    // Implementation for context menu display
    console.log('Context menu for item:', itemId);
}

/**
 * Removes any active context menu from the UI.
 * 
 * @returns {void}
 */
function removeContextMenu() {
    // Implementation for context menu removal
    console.log('Removing context menu');
}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', initGame); 