/**
 * @fileoverview Main game initialization and management for Taverns and Treasures.
 * Handles game startup, configuration loading, and core game loop management.
 * 
 * @author bearjcc
 * @version 1.0.0
 */

// Global game engine instance
/** @type {GameEngine} Global game engine instance */
let gameEngine;

// Legacy global references for backward compatibility
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

/** @type {EncyclopediaSystem} Global encyclopedia system instance */
let encyclopediaSystem;

/** @type {EncyclopediaUI} Global encyclopedia UI instance */
let encyclopediaUI;

/** @type {AchievementSystem} Global achievement system instance */
let achievementSystem;

/**
 * Initializes the game using the GameEngine as the central orchestrator.
 * This is the main entry point for the game and should be called when the page loads.
 * 
 * @async
 * @returns {Promise<void>}
 * @throws {Error} If game initialization fails
 */
async function initGame() {
    try {
        console.log('Initializing Taverns and Treasures with GameEngine...');
        
        // Create and configure the game engine
        gameEngine = new GameEngine({
            autoSaveInterval: 120000, // 2 minutes
            defaultLanguage: 'en',
            assetCacheSize: 100
        });
        
        // Initialize the engine with the base game mod
        await gameEngine.initialize('base-game', {
            loadSavedState: true,
            showWelcomeMessage: true
        });
        
        // Set up legacy global references for backward compatibility
        setupLegacyReferences();
        
        // Initialize UI components
        await initializeUI();
        
        // Start the game engine
        gameEngine.start();
        
        // Show welcome message
        const welcomeMessage = gameEngine.getSystem('config').getMessage('welcome');
        gameEngine.getSystem('ui').addNarrationMessage(welcomeMessage);
        
        // Check if save was loaded
        const saveLoaded = gameEngine.getSystem('state').hasSavedState();
        if (saveLoaded) {
            gameEngine.getSystem('ui').showToast(gameEngine.getSystem('config').getMessage('gameLoaded'), 'success');
        } else {
            gameEngine.getSystem('ui').showToast(gameEngine.getSystem('config').getMessage('noSaveFound'), 'info');
        }
        
        console.log('Game initialized successfully with GameEngine');
        
        // Hide loading indicator
        const loadingIndicator = document.getElementById('loading');
        if (loadingIndicator) {
            loadingIndicator.style.display = 'none';
        }
        
    } catch (error) {
        console.error('Failed to initialize game:', error);
        const loadingIndicator = document.getElementById('loading');
        if (loadingIndicator) {
            loadingIndicator.innerHTML = 'Failed to load game. Please refresh the page.';
        }
        throw error;
    }
}

/**
 * Sets up legacy global references for backward compatibility with existing code.
 * This allows existing functions to continue working while we transition to the new architecture.
 */
function setupLegacyReferences() {
    // Set up global references to engine systems
    configManager = gameEngine.getSystem('config');
    skillManager = gameEngine.getSystem('skills');
    inventoryManager = gameEngine.getSystem('inventory');
    traitManager = gameEngine.getSystem('traits');
    actionManager = gameEngine.getSystem('actions');
    uiManager = gameEngine.getSystem('ui');
    gameStateManager = gameEngine.getSystem('state');
    encyclopediaSystem = gameEngine.getSystem('encyclopedia');
    achievementSystem = gameEngine.getSystem('achievements');
    
    // Set up encyclopedia UI
    encyclopediaUI = new EncyclopediaUI(encyclopediaSystem);
    encyclopediaUI.initialize();
    
    // Set up global window references for backward compatibility
    window.configManager = configManager;
    window.achievementSystem = achievementSystem;
    window.gameEngine = gameEngine;
}

/**
 * Initializes UI components and sets up the game interface.
 */
async function initializeUI() {
    const gameConfig = gameEngine.getSystem('config').getGameConfig();
    
    // Generate UI tabs from configuration
    gameEngine.getSystem('ui').generateTabsFromConfig(gameConfig);
    
    // Create encyclopedia button
    createEncyclopediaButton(gameConfig);
    
    // Update all displays
    updateAllDisplays();
}

/**
 * Updates all game displays (skills, actions, inventory, etc.).
 * This function is called after any significant game state change.
 */
function updateAllDisplays() {
    if (!gameEngine) return;
    
    const ui = gameEngine.getSystem('ui');
    const skills = gameEngine.getSystem('skills');
    const actions = gameEngine.getSystem('actions');
    const inventory = gameEngine.getSystem('inventory');
    const traits = gameEngine.getSystem('traits');
    const achievements = gameEngine.getSystem('achievements');
    const config = gameEngine.getSystem('config');
    
    // Get configurations
    const gameConfig = config.getGameConfig();
    const skillsConfig = config.getSkillsConfig();
    
    // Update skill displays
    ui.updateSkillsDisplay(skills, skillsConfig);
    
    // Update action displays
    ui.updateActionsDisplay(actions, skills, inventory, gameConfig);
    
    // Update inventory display
    ui.updateInventoryDisplay(inventory, gameConfig);
    
    // Update character display
    ui.updateCharacterDisplay(traits, gameConfig);
    
    // Update achievements display
    ui.updateAchievementsDisplay(achievements, gameConfig);
}

/**
 * Handles action execution through the game engine.
 * @param {string} actionName - The name of the action to execute
 * @param {*} variable - Optional variable parameter for the action
 */
function handleAction(actionName, variable = null) {
    if (!gameEngine) return;
    
    try {
        const actionSystem = gameEngine.getSystem('actions');
        const result = actionSystem.executeAction(actionName, variable);
        
        if (result.success) {
            // Update displays after successful action
            updateAllDisplays();
            
            // Show success message
            if (result.message) {
                gameEngine.getSystem('ui').addNarrationMessage(result.message);
            }
            
            // Show XP gain if applicable
            if (result.xpGained) {
                gameEngine.getSystem('ui').showToast(`+${result.xpGained} XP`, 'success');
            }
            
            // Show item gained if applicable
            if (result.itemGained) {
                gameEngine.getSystem('ui').showToast(`Gained: ${result.itemGained}`, 'success');
            }
        } else {
            // Show error message
            gameEngine.getSystem('ui').showToast(result.message || 'Action failed', 'error');
        }
    } catch (error) {
        console.error('Error executing action:', error);
        gameEngine.getSystem('ui').showToast('An error occurred while executing the action', 'error');
    }
}

/**
 * Handles item-specific actions through the game engine.
 * @param {string} action - The action to perform on the item
 * @param {string} itemId - The ID of the item
 */
function handleItemAction(action, itemId) {
    if (!gameEngine) return;
    
    try {
        const inventory = gameEngine.getSystem('inventory');
        const result = inventory.performItemAction(action, itemId);
        
        if (result.success) {
            // Update displays after successful action
            updateAllDisplays();
            
            // Show success message
            if (result.message) {
                gameEngine.getSystem('ui').addNarrationMessage(result.message);
            }
        } else {
            // Show error message
            gameEngine.getSystem('ui').showToast(result.message || 'Item action failed', 'error');
        }
    } catch (error) {
        console.error('Error performing item action:', error);
        gameEngine.getSystem('ui').showToast('An error occurred while performing the item action', 'error');
    }
}

/**
 * Creates the encyclopedia button in the UI.
 * @param {Object} gameConfig - The game configuration
 */
function createEncyclopediaButton(gameConfig) {
    const encyclopediaButton = document.createElement('button');
    encyclopediaButton.id = 'encyclopedia-btn';
    encyclopediaButton.innerHTML = '📚';
    encyclopediaButton.title = 'Encyclopedia';
    encyclopediaButton.className = 'encyclopedia-button';
    
    // Position the button
    encyclopediaButton.style.cssText = `
        position: fixed;
        bottom: 32px;
        right: 100px;
        z-index: 2100;
        min-width: 48px;
        min-height: 48px;
        font-size: 1.5em;
        border-radius: 50%;
        background: #333;
        color: #fff;
        border: none;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        cursor: pointer;
        transition: all 0.2s ease;
    `;
    
    // Add hover effects
    encyclopediaButton.addEventListener('mouseenter', () => {
        encyclopediaButton.style.background = '#555';
        encyclopediaButton.style.transform = 'scale(1.1)';
    });
    
    encyclopediaButton.addEventListener('mouseleave', () => {
        encyclopediaButton.style.background = '#333';
        encyclopediaButton.style.transform = 'scale(1)';
    });
    
    // Add click handler
    encyclopediaButton.addEventListener('click', openEncyclopedia);
    
    document.body.appendChild(encyclopediaButton);
}

/**
 * Opens the encyclopedia interface.
 */
function openEncyclopedia() {
    if (!gameEngine) return;
    
    try {
        const encyclopediaUI = gameEngine.getSystem('encyclopedia').getUI();
        if (encyclopediaUI) {
            encyclopediaUI.open();
        }
    } catch (error) {
        console.error('Error opening encyclopedia:', error);
        gameEngine.getSystem('ui').showToast('Failed to open encyclopedia', 'error');
    }
}

/**
 * Shows a context menu for items.
 * @param {Event} event - The click event
 * @param {string} itemId - The item ID
 * @param {Object} inventoryItem - The inventory item object
 */
function showItemContextMenu(event, itemId, inventoryItem) {
    if (!gameEngine) return;
    
    try {
        const inventory = gameEngine.getSystem('inventory');
        inventory.showContextMenu(event, itemId, inventoryItem);
    } catch (error) {
        console.error('Error showing context menu:', error);
    }
}

/**
 * Removes the context menu from the DOM.
 */
function removeContextMenu() {
    if (!gameEngine) return;
    
    try {
        const inventory = gameEngine.getSystem('inventory');
        inventory.removeContextMenu();
    } catch (error) {
        console.error('Error removing context menu:', error);
    }
}

// Legacy functions for backward compatibility
// These will be removed once all code is migrated to use the GameEngine

/**
 * @deprecated Use gameEngine.getSystem('config').loadAllConfigs() instead
 */
async function loadAllConfigs() {
    if (gameEngine) {
        return gameEngine.getSystem('config').loadAllConfigs();
    }
    throw new Error('GameEngine not initialized');
}

/**
 * @deprecated Use gameEngine.getSystem('state').saveGameState() instead
 */
function saveGameState() {
    if (gameEngine) {
        return gameEngine.getSystem('state').save();
    }
    throw new Error('GameEngine not initialized');
}

/**
 * @deprecated Use gameEngine.getSystem('state').loadGameState() instead
 */
function loadGameState() {
    if (gameEngine) {
        return gameEngine.getSystem('state').load();
    }
    throw new Error('GameEngine not initialized');
}

// Note: Game initialization is handled in index.html
// Remove duplicate event listener to prevent double initialization 