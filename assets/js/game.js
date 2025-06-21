// Global managers
let configManager;
let skillManager;
let inventoryManager;
let traitManager;
let actionManager;
let uiManager;
let gameStateManager;

// Game initialization
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
        
        // Initialize game objects
        await initializeGameObjects();
        
        // Load configurations into managers
        skillManager.loadFromConfig(skillsConfig, gameConfig);
        traitManager.loadFromConfig(traitsConfig);
        actionManager.loadFromConfig(gameConfig.actions);
        
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

// Initialize game objects from items.json
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

// Update all UI displays
function updateAllDisplays() {
    const gameConfig = configManager.getGameConfig();
    uiManager.updateSkillsDisplay(skillManager, gameConfig);
    uiManager.updateActionsDisplay(actionManager, skillManager, inventoryManager, gameConfig);
    uiManager.updateInventoryDisplay(inventoryManager, gameConfig);
    uiManager.updateCharacterDisplay(traitManager, gameConfig);
}

// Handle action execution
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
            uiManager.showToast(`Requires ${action.skillType} level ${action.levelRequired}`, 'warning');
            return;
        }
        
        // Handle item consumption
        for (const [itemId, requiredQuantity] of Object.entries(action.itemConsumption)) {
            if (!inventoryManager.hasItem(itemId, requiredQuantity)) {
                const itemName = inventoryManager.getGameObject(itemId)?.displayName || itemId;
                const message = configManager.getMessage('actionInsufficientItems', { itemName });
                uiManager.showToast(message, 'warning');
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
        
        // Show completion message
        const itemName = action.itemReward ? 
            inventoryManager.getGameObject(action.itemReward)?.displayName || action.itemReward : 
            'nothing';
        const message = configManager.getMessage('actionCompleted', {
            actionName: action.displayName,
            xpReward: action.xpReward,
            itemReward: itemName,
            itemCount: action.itemCount
        });
        uiManager.showToast(message, 'success');
        
        // Flash XP gain
        uiManager.flashXpGain(action.skillType, action.xpReward);
        
        // Update displays
        updateAllDisplays();
        
        // Save game state
        gameStateManager.saveGameState(skillManager, inventoryManager, traitManager);
        
    } catch (error) {
        console.error('Error handling action:', error);
        uiManager.showToast('An error occurred while performing the action', 'error');
    }
}

// Handle item actions (examine, use, drop)
function handleItemAction(action, itemId) {
    try {
        const inventoryItem = inventoryManager.getItem(itemId);
        if (!inventoryItem) {
            console.error(`Item not found: ${itemId}`);
            return;
        }
        
        const gameObject = inventoryItem.gameObject;
        
        switch (action) {
            case 'examine':
                uiManager.addNarrationMessage(gameObject.examineText || gameObject.description);
                break;
                
            case 'use':
                uiManager.addNarrationMessage(`You use the ${gameObject.displayName}.`);
                break;
                
            case 'drop':
                inventoryManager.removeItem(itemId, 1);
                uiManager.addNarrationMessage(`You drop the ${gameObject.displayName}.`);
                updateAllDisplays();
                gameStateManager.saveGameState(skillManager, inventoryManager, traitManager);
                break;
                
            default:
                console.error(`Unknown item action: ${action}`);
        }
        
    } catch (error) {
        console.error('Error handling item action:', error);
        uiManager.showToast('An error occurred while handling the item', 'error');
    }
}

// Global functions for UI interaction
function showItemContextMenu(event, itemId, inventoryItem) {
    uiManager.showItemContextMenu(event, itemId, inventoryItem);
}

function removeContextMenu() {
    uiManager.removeContextMenu();
}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', initGame); 