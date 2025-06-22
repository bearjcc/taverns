/**
 * Core Game Engine
 * 
 * This is the main engine class that orchestrates all game systems.
 * It maintains clean separation between engine logic and game data,
 * allowing the same engine to run different games with different data sets.
 */

class GameEngine {
    constructor(config = {}) {
        this.config = {
            autoSaveInterval: 120000, // 2 minutes
            defaultLanguage: 'en',
            assetCacheSize: 100,
            ...config
        };
        
        // Core systems
        this.stateManager = null;
        this.eventSystem = null;
        this.assetLoader = null;
        this.localization = null;
        this.configManager = null;
        
        // Game systems
        this.skillManager = null;
        this.inventoryManager = null;
        this.speciesSystem = null;
        this.actionManager = null;
        this.achievementSystem = null;
        this.locationSystem = null;
        this.encyclopediaSystem = null;
        this.traitManager = null;
        this.uiManager = null;
        
        // Game state
        this.isRunning = false;
        this.currentMod = null;
        this.gameData = null;
        
        // Initialize core systems
        this._initializeCoreSystems();
    }
    
    /**
     * Initialize the game with a specific mod/data set
     * @param {string} modId - The mod to load (e.g., 'base-game', 'fantasy-mod')
     * @param {Object} options - Additional initialization options
     */
    async initialize(modId, options = {}) {
        try {
            console.log(`Initializing game engine with mod: ${modId}`);
            
            // Load mod data
            this.currentMod = await this._loadMod(modId);
            this.gameData = this.currentMod.data;
            
            // Initialize game systems with mod data
            await this._initializeGameSystems();
            
            // Set up cross-system references
            this._setupSystemReferences();
            
            // Set up event listeners
            this._setupEventListeners();
            
            // Load saved state if requested
            if (options.loadSavedState !== false) {
                this.stateManager.loadGameState(this.skillManager, this.inventoryManager, this.traitManager);
            }
            
            // Start auto-save
            this._startAutoSave();
            
            this.isRunning = true;
            console.log('Game engine initialized successfully');
            
            // Emit initialization complete event
            this.eventSystem.emit('engine:initialized', { modId, gameData: this.gameData });
            
        } catch (error) {
            console.error('Failed to initialize game engine:', error);
            throw error;
        }
    }
    
    /**
     * Start the game
     */
    start() {
        if (!this.isRunning) {
            throw new Error('Game engine must be initialized before starting');
        }
        
        console.log('Starting game engine');
        this.eventSystem.emit('engine:started');
    }
    
    /**
     * Pause the game
     */
    pause() {
        console.log('Pausing game engine');
        this.eventSystem.emit('engine:paused');
    }
    
    /**
     * Resume the game
     */
    resume() {
        console.log('Resuming game engine');
        this.eventSystem.emit('engine:resumed');
    }
    
    /**
     * Stop the game and clean up
     */
    stop() {
        console.log('Stopping game engine');
        
        // Stop auto-save
        this._stopAutoSave();
        
        // Save final state
        this.stateManager.save();
        
        // Clean up event listeners
        this._cleanupEventListeners();
        
        this.isRunning = false;
        this.eventSystem.emit('engine:stopped');
    }
    
    /**
     * Switch to a different mod/game
     * @param {string} modId - The new mod to load
     */
    async switchMod(modId) {
        console.log(`Switching to mod: ${modId}`);
        
        // Stop current game
        this.stop();
        
        // Initialize with new mod
        await this.initialize(modId);
        
        // Start new game
        this.start();
    }
    
    /**
     * Get a game system by name
     * @param {string} systemName - Name of the system to get
     * @returns {Object} The requested system
     */
    getSystem(systemName) {
        const systems = {
            skills: this.skillManager,
            inventory: this.inventoryManager,
            species: this.speciesSystem,
            actions: this.actionManager,
            achievements: this.achievementSystem,
            locations: this.locationSystem,
            encyclopedia: this.encyclopediaSystem,
            traits: this.traitManager,
            ui: this.uiManager,
            config: this.configManager,
            state: this.stateManager,
            events: this.eventSystem,
            assets: this.assetLoader,
            localization: this.localization
        };
        
        return systems[systemName];
    }
    
    /**
     * Get current game data
     * @returns {Object} Current game data
     */
    getGameData() {
        return this.gameData;
    }
    
    /**
     * Get current mod information
     * @returns {Object} Current mod data
     */
    getCurrentMod() {
        return this.currentMod;
    }
    
    // Private methods
    
    _initializeCoreSystems() {
        // Initialize core systems
        this.stateManager = new GameStateManager();
        this.eventSystem = new EventSystem();
        this.assetLoader = new AssetLoader(this.config.assetCacheSize);
        this.localization = new Localization(this.config.defaultLanguage);
        this.configManager = new ConfigManager();
    }
    
    async _initializeGameSystems() {
        // Load configurations first
        const configs = await this.configManager.loadAllConfigs();
        
        // Load all required system modules dynamically
        await this._loadSystemModules();
        
        // Initialize game systems with mod data
        this.skillManager = new SkillManager();
        this.inventoryManager = new InventoryManager();
        this.actionManager = new ActionManager(this.eventSystem, this.stateManager);
        this.traitManager = new TraitManager();
        this.uiManager = new UIManager();
        this.speciesSystem = new SpeciesSystem(null, this.stateManager, this.eventSystem);
        this.locationSystem = new LocationSystem(null, this.stateManager, this.eventSystem);
        this.encyclopediaSystem = new EncyclopediaSystem();
        
        // Load configurations into managers
        this.skillManager.loadFromConfig(configs.skillsConfig, configs.gameConfig);
        this.traitManager.loadFromConfig(configs.traitsConfig);
        this.actionManager.loadFromConfig(configs.actionsConfig);
        
        // Initialize achievement system with data
        const achievementsData = await this._loadAchievementsData();
        const achievementStateManager = {
            getState: () => {
                try {
                    const savedState = localStorage.getItem('tavernsGameState');
                    if (savedState) {
                        const gameState = JSON.parse(savedState);
                        return gameState.achievements || { unlocked: [], progress: {} };
                    }
                    return { unlocked: [], progress: {} };
                } catch (error) {
                    console.warn('Failed to load achievement state:', error);
                    return { unlocked: [], progress: {} };
                }
            },
            setState: (newState) => {
                try {
                    const savedState = localStorage.getItem('tavernsGameState');
                    let gameState = savedState ? JSON.parse(savedState) : {};
                    gameState.achievements = newState;
                    localStorage.setItem('tavernsGameState', JSON.stringify(gameState));
                } catch (error) {
                    console.error('Failed to save achievement state:', error);
                }
            }
        };
        
        this.achievementSystem = new AchievementSystem(achievementsData, achievementStateManager, this.eventSystem);
        await this.achievementSystem.initialize();
        
        // Initialize encyclopedia with game data
        await this.encyclopediaSystem.initialize({
            skills: configs.skillsConfig,
            items: await this._loadItemsData(),
            species: await this._loadSpeciesData(),
            traits: configs.traitsConfig,
            locations: await this._loadLocationsData(),
            actions: configs.actionsConfig
        });
        
        // Initialize other systems
        await Promise.all([
            this.speciesSystem.initialize(),
            this.locationSystem.initialize()
        ]);
    }
    
    /**
     * Load all required system modules dynamically
     */
    async _loadSystemModules() {
        const systemModules = [
            'engine/systems/SkillManager.js',
            'engine/systems/InventoryManager.js',
            'engine/systems/ActionAvailabilityEngine.js',
            'engine/systems/ActionManager.js',
            'engine/systems/TraitManager.js',
            'engine/systems/AchievementSystem.js',
            'engine/systems/LocationSystem.js',
            'engine/systems/SpeciesSystem.js',
            'engine/systems/EncyclopediaSystem.js',
            'engine/ui/UIManager.js',
            'engine/ui/EncyclopediaUI.js',
            'engine/ui/FoodCategoryUI.js',
            'assets/js/components.js'
        ];

        console.log('Loading system modules...');
        
        try {
            const results = await this.assetLoader.loadJavaScriptModules(systemModules);
            
            // Check for any failed loads
            const failed = results.filter(result => result.status === 'rejected');
            if (failed.length > 0) {
                console.warn('Some system modules failed to load:', failed.map(f => f.reason));
            }
            
            const successful = results.filter(result => result.status === 'fulfilled');
            console.log(`Successfully loaded ${successful.length}/${systemModules.length} system modules`);
            
        } catch (error) {
            console.error('Failed to load system modules:', error);
            throw error;
        }
    }
    
    /**
     * Set up cross-system references
     */
    _setupSystemReferences() {
        // Set up cross-system references
        if (this.actionManager && this.locationSystem) {
            this.actionManager.setLocationSystem(this.locationSystem);
        }
        
        if (this.skillManager && this.inventoryManager) {
            this.skillManager.setInventorySystem(this.inventoryManager);
        }
        
        if (this.actionManager && this.skillManager) {
            this.actionManager.setSkillSystem(this.skillManager);
        }
        
        if (this.actionManager && this.inventoryManager) {
            this.actionManager.setInventorySystem(this.inventoryManager);
        }
        
        // Set up quest and NPC system references (placeholder for future systems)
        if (this.actionManager) {
            // TODO: Add actual quest and NPC systems when implemented
            // this.actionManager.setQuestSystem(this.questSystem);
            // this.actionManager.setNPCSystem(this.npcSystem);
        }
        
        if (this.achievementSystem && this.skillManager) {
            this.achievementSystem.setSkillSystem(this.skillManager);
        }
        
        if (this.achievementSystem && this.inventoryManager) {
            this.achievementSystem.setInventorySystem(this.inventoryManager);
        }
        
        // Set up manager references
        if (this.skillManager && this.configManager) {
            this.skillManager.setConfigManager(this.configManager);
        }
        
        if (this.skillManager && this.uiManager) {
            this.skillManager.setUIManager(this.uiManager);
        }
        
        if (this.actionManager && this.configManager) {
            this.actionManager.setConfigManager(this.configManager);
        }
        
        if (this.actionManager && this.uiManager) {
            this.actionManager.setUIManager(this.uiManager);
        }
        
        if (this.inventoryManager && this.configManager) {
            this.inventoryManager.setConfigManager(this.configManager);
        }
        
        if (this.inventoryManager && this.uiManager) {
            this.inventoryManager.setUIManager(this.uiManager);
        }
        
        if (this.traitManager && this.configManager) {
            this.traitManager.setConfigManager(this.configManager);
        }
        
        if (this.traitManager && this.uiManager) {
            this.traitManager.setUIManager(this.uiManager);
        }
    }
    
    async _loadMod(modId) {
        // For now, just return the base game data
        // In the future, this could load different mods
        return {
            id: modId,
            manifest: { name: 'Base Game', version: '1.0.0' },
            data: {}
        };
    }
    
    async _loadItemsData() {
        try {
            const response = await fetch('data/items.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Failed to load items data:', error);
            return {};
        }
    }
    
    async _loadSpeciesData() {
        try {
            const response = await fetch('data/species.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Failed to load species data:', error);
            return {};
        }
    }
    
    async _loadLocationsData() {
        try {
            const response = await fetch('data/locations.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Failed to load locations data:', error);
            return {};
        }
    }
    
    async _loadAchievementsData() {
        try {
            const response = await fetch('data/achievements.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Failed to load achievements data:', error);
            return {};
        }
    }
    
    _setupEventListeners() {
        // Set up global event listeners
        this.eventSystem.on('state:changed', () => {
            this.stateManager.save();
        });
        
        this.eventSystem.on('error', (error) => {
            console.error('Game engine error:', error);
        });
        
        // Set up location change events
        this.eventSystem.on('location:changed', (data) => {
            console.log('Location changed:', data);
            // Emit event for UI updates
            this.eventSystem.emit('ui:locationChanged', data);
        });
    }
    
    _cleanupEventListeners() {
        // Clean up event listeners
        this.eventSystem.removeAllListeners();
    }
    
    _startAutoSave() {
        this.autoSaveInterval = setInterval(() => {
            this.stateManager.save();
        }, this.config.autoSaveInterval);
    }
    
    _stopAutoSave() {
        if (this.autoSaveInterval) {
            clearInterval(this.autoSaveInterval);
            this.autoSaveInterval = null;
        }
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GameEngine;
} 