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
    
    // Create left toolbar
    createLeftToolbar(gameConfig);
    
    // Set up achievement notification system
    setupAchievementNotifications();
    
    // Update all displays
    updateAllDisplays();
}

/**
 * Sets up achievement notification system
 */
function setupAchievementNotifications() {
    if (!gameEngine) return;
    
    const eventSystem = gameEngine.getSystem('events');
    if (!eventSystem) return;
    
    // Listen for achievement unlocks
    eventSystem.on('achievement:unlocked', (data) => {
        const { achievement, points, totalPoints } = data;
        
        // Show achievement notification
        if (typeof showAchievementUnlocked === 'function') {
            showAchievementUnlocked(achievement, points, totalPoints);
        }
        
        // Show toast notification
        const ui = gameEngine.getSystem('ui');
        if (ui) {
            ui.showToast(`Achievement Unlocked: ${achievement.name}! +${points} points`, 'success');
        }
        
        // Add narration message
        if (ui) {
            ui.addNarrationMessage(`🏆 Achievement unlocked: ${achievement.name} (+${points} points)`);
        }
        
        // Update achievements display
        updateAllDisplays();
    });
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
 * Creates the left toolbar with utility buttons.
 * @param {Object} gameConfig - The game configuration
 */
function createLeftToolbar(gameConfig) {
    const toolbar = document.getElementById('left-toolbar');
    if (!toolbar) return;

    // Create Encyclopedia Button
    const encyclopediaButton = createToolbarButton({
        id: 'encyclopedia-btn',
        icon: '📚',
        title: 'Encyclopedia',
        onClick: openEncyclopedia
    });

    // Create Save Button
    const saveButton = createToolbarButton({
        id: 'save-btn',
        icon: '💾',
        title: 'Save Game',
        onClick: handleManualSave
    });

    // Add buttons to toolbar
    toolbar.appendChild(encyclopediaButton);
    toolbar.appendChild(saveButton);
}

/**
 * Creates a toolbar button with the specified configuration.
 * @param {Object} config - Button configuration
 * @param {string} config.id - Button ID
 * @param {string} config.icon - Button icon
 * @param {string} config.title - Button tooltip title
 * @param {Function} config.onClick - Click handler function
 * @returns {HTMLElement} The created button element
 */
function createToolbarButton(config) {
    const button = document.createElement('button');
    button.id = config.id;
    button.className = 'toolbar-button';
    button.innerHTML = config.icon;
    button.title = config.title;
    
    // Add tooltip
    const tooltip = document.createElement('span');
    tooltip.className = 'toolbar-button-title';
    tooltip.textContent = config.title;
    button.appendChild(tooltip);
    
    // Add click handler
    button.addEventListener('click', config.onClick);
    
    return button;
}

/**
 * Handles manual save functionality.
 */
function handleManualSave() {
    if (!gameEngine) {
        console.error('Game engine not initialized');
        return;
    }
    
    try {
        const skillManager = gameEngine.getSystem('skills');
        const inventoryManager = gameEngine.getSystem('inventory');
        const traitManager = gameEngine.getSystem('traits');
        const stateManager = gameEngine.getSystem('state');
        
        const success = stateManager.saveGameState(skillManager, inventoryManager, traitManager);
        
        if (success) {
            gameEngine.getSystem('ui').showToast('Game saved successfully!', 'success');
        } else {
            gameEngine.getSystem('ui').showToast('Failed to save game', 'error');
        }
    } catch (error) {
        console.error('Error saving game:', error);
        gameEngine.getSystem('ui').showToast('An error occurred while saving', 'error');
    }
}

/**
 * Opens the encyclopedia interface.
 */
function openEncyclopedia() {
    if (!encyclopediaUI) {
        console.error('Encyclopedia UI not initialized');
        return;
    }
    
    try {
        encyclopediaUI.show();
    } catch (error) {
        console.error('Error opening encyclopedia:', error);
        if (gameEngine && gameEngine.getSystem('ui')) {
            gameEngine.getSystem('ui').showToast('Failed to open encyclopedia', 'error');
        }
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