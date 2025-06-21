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
        
        // Game systems
        this.skillSystem = null;
        this.inventorySystem = null;
        this.speciesSystem = null;
        this.actionSystem = null;
        this.achievementSystem = null;
        this.locationSystem = null;
        this.encyclopediaSystem = null;
        
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
            skills: this.skillSystem,
            inventory: this.inventorySystem,
            species: this.speciesSystem,
            actions: this.actionSystem,
            achievements: this.achievementSystem,
            locations: this.locationSystem,
            encyclopedia: this.encyclopediaSystem,
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
        // Initialize core systems (these would be imported from separate files)
        this.stateManager = new StateManager();
        this.eventSystem = new EventSystem();
        this.assetLoader = new AssetLoader(this.config.assetCacheSize);
        this.localization = new Localization(this.config.defaultLanguage);
    }
    
    async _initializeGameSystems() {
        // Initialize game systems with mod data
        this.skillSystem = new SkillSystem(this.gameData.skills, this.stateManager, this.eventSystem);
        this.inventorySystem = new InventorySystem(this.gameData.items, this.stateManager, this.eventSystem);
        this.speciesSystem = new SpeciesSystem(this.gameData.species, this.stateManager, this.eventSystem);
        this.actionSystem = new ActionSystem(this.gameData.actions, this.stateManager, this.eventSystem);
        this.achievementSystem = new AchievementSystem(this.gameData.achievements, this.stateManager, this.eventSystem);
        this.locationSystem = new LocationSystem(this.gameData.locations, this.stateManager, this.eventSystem);
        this.encyclopediaSystem = new EncyclopediaSystem();
        
        // Initialize each system
        await Promise.all([
            this.skillSystem.initialize(),
            this.inventorySystem.initialize(),
            this.speciesSystem.initialize(),
            this.actionSystem.initialize(),
            this.achievementSystem.initialize(),
            this.locationSystem.initialize(),
            this.encyclopediaSystem.initialize(this.gameData)
        ]);
    }
    
    /**
     * Set up cross-system references
     */
    _setupSystemReferences() {
        // Set location system reference in action system
        if (this.actionSystem && this.locationSystem) {
            this.actionSystem.setLocationSystem(this.locationSystem);
        }
        
        // Set up cross-system references
        this.skillSystem.setInventorySystem(this.inventorySystem);
        this.actionSystem.setSkillSystem(this.skillSystem);
        this.actionSystem.setInventorySystem(this.inventorySystem);
        this.achievementSystem.setSkillSystem(this.skillSystem);
        this.achievementSystem.setInventorySystem(this.inventorySystem);
    }
    
    async _loadMod(modId) {
        // Load mod manifest and data
        const modManifest = await this._loadModManifest(modId);
        const modData = await this._loadModData(modId);
        
        return {
            id: modId,
            manifest: modManifest,
            data: modData
        };
    }
    
    async _loadModManifest(modId) {
        // Load mod manifest from data/config/manifest.json
        const response = await fetch('data/config/manifest.json');
        return await response.json();
    }
    
    async _loadModData(modId) {
        // Load all mod data files
        const dataFiles = ['skills', 'items', 'species', 'actions', 'locations', 'config', 'achievements'];
        const data = {};
        
        for (const file of dataFiles) {
            try {
                const response = await fetch(`data/${file}.json`);
                data[file] = await response.json();
            } catch (error) {
                console.warn(`Could not load ${file}.json:`, error);
                data[file] = {};
            }
        }
        
        return data;
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