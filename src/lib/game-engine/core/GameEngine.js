/**
 * Core Game Engine
 * 
 * This is the main engine class that orchestrates all game systems.
 * It maintains clean separation between engine logic and game data,
 * allowing the same engine to run different games with different data sets.
 */

// Import core systems
import { GameStateManager } from './GameStateManager.js';
import { EventSystem } from './EventSystem.js';
import { AssetLoader } from './AssetLoader.js';
import { ConfigManager } from './ConfigManager.js';
import { Localization } from '../utils/Localization.js';

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
     * Get a system by name
     * @param {string} systemName - The name of the system to get
     * @returns {Object} The system instance
     */
    getSystem(systemName) {
        const systems = {
            events: this.eventSystem,
            state: this.stateManager,
            config: this.configManager,
            assets: this.assetLoader,
            mods: this.modManager,
            skills: this.skillManager,
            inventory: this.inventoryManager,
            traits: this.traitManager,
            actions: this.actionManager,
            species: this.speciesSystem,
            locations: this.locationSystem,
            achievements: this.achievementSystem,
            encyclopedia: this.encyclopediaSystem,
            ui: this.uiManager
        };
        
        return systems[systemName] || null;
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
        
        // Set up event listeners
        this._setupEventListeners();
    }
    
    /**
     * Initialize game systems
     */
    async _initializeGameSystems() {
        console.log('Initializing game systems...');
        
        // Load system modules first
        await this._loadSystemModules();
        
        // Initialize mod manager after modules are loaded
        this.modManager = new ModManager(this.eventSystem, this.assetLoader);
        await this.modManager.initialize();
        
        // Get mod data
        const modData = this.modManager.getAllModData();
        
        // Initialize systems with mod data (only create the ones that need special initialization)
        this.locationSystem = new LocationSystem(modData.locations || {}, this.stateManager, this.eventSystem);
        this.achievementSystem = new AchievementSystem(modData.achievements || {}, this.stateManager, this.eventSystem);
        this.encyclopediaSystem = new EncyclopediaSystem();
        
        // Initialize systems (only call initialize if the method exists)
        if (this.skillManager.initialize) await this.skillManager.initialize();
        if (this.inventoryManager.initialize) await this.inventoryManager.initialize();
        if (this.traitManager.initialize) await this.traitManager.initialize();
        if (this.actionManager.initialize) await this.actionManager.initialize();
        if (this.locationSystem.initialize) await this.locationSystem.initialize();
        if (this.achievementSystem.initialize) await this.achievementSystem.initialize();
        if (this.encyclopediaSystem.initialize) await this.encyclopediaSystem.initialize(modData);
        if (this.uiManager.initialize) await this.uiManager.initialize();
        
        // Load configurations from mod data
        this.skillManager.loadFromConfig(modData.skills || {}, modData.config || {});
        this.inventoryManager.loadFromConfig(modData.items || {});
        this.traitManager.loadFromConfig(modData.traits || {});
        this.actionManager.loadFromConfig(modData.actions || {});
        
        // Set up cross-system references
        this._setupSystemReferences();
        
        console.log('Game systems initialized');
    }
    
    /**
     * Load all required system modules dynamically
     */
    async _loadSystemModules() {
        // In Next.js environment, modules are imported directly
        // No need for dynamic loading since we're using ES modules
        console.log('System modules loaded via ES imports');
        
        try {
            // Import all system modules
            const { SkillManager } = await import('../systems/SkillManager.js');
            const { InventoryManager } = await import('../systems/InventoryManager.js');
            const { TraitManager } = await import('../systems/TraitManager.js');
            const { ActionAvailabilityEngine } = await import('../systems/ActionAvailabilityEngine.js');
            const { ActionManager } = await import('../systems/ActionManager.js');
            const { SpeciesSystem } = await import('../systems/SpeciesSystem.js');
            const { LocationSystem } = await import('../systems/LocationSystem.js');
            const { AchievementSystem } = await import('../systems/AchievementSystem.js');
            const { EncyclopediaSystem } = await import('../systems/EncyclopediaSystem.js');
            const { UIManager } = await import('../ui/UIManager.js');
            const { EncyclopediaUI } = await import('../ui/EncyclopediaUI.js');
            const { FoodCategoryUI } = await import('../ui/FoodCategoryUI.js');
            const { ModManager } = await import('./ModManager.js');
            
            // Initialize managers with imported classes
            this.skillManager = new SkillManager();
            this.inventoryManager = new InventoryManager();
            this.traitManager = new TraitManager();
            this.actionAvailabilityEngine = new ActionAvailabilityEngine();
            this.actionManager = new ActionManager();
            this.speciesSystem = new SpeciesSystem();
            // locationSystem, achievementSystem, and encyclopediaSystem will be initialized in _initializeGameSystems with data
            this.uiManager = new UIManager();
            this.encyclopediaUI = new EncyclopediaUI();
            this.foodCategoryUI = new FoodCategoryUI();
            this.modManager = new ModManager();
            
            console.log('Successfully loaded all system modules');
            
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
        
        if (this.skillManager && this.eventSystem) {
            this.skillManager.setEventSystem(this.eventSystem);
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
        
        if (this.inventoryManager && this.eventSystem) {
            this.inventoryManager.setEventSystem(this.eventSystem);
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

if (typeof window !== 'undefined') window.GameEngine = GameEngine;

// ES Module exports
export { GameEngine }; 