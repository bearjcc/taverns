/**
 * Mod Manager
 * 
 * Handles loading and management of game mods.
 * Supports mod discovery, loading, and dependency resolution.
 */

class ModManager {
    constructor(eventSystem, assetLoader) {
        this.eventSystem = eventSystem;
        this.assetLoader = assetLoader;
        this.loadedMods = new Map();
        this.modManifests = new Map();
        this.activeMods = new Set();
        this.modLoadOrder = [];
    }
    
    /**
     * Initialize the mod manager
     */
    async initialize() {
        console.log('Initializing Mod Manager');
        
        // Discover available mods
        await this.discoverMods();
        
        // Load base game mod by default
        await this.loadMod('base-game');
        
        console.log('Mod Manager initialized');
    }
    
    /**
     * Discover available mods in the mods directory
     */
    async discoverMods() {
        try {
            // For now, we'll hardcode the base game mod
            // In the future, this could scan the mods directory
            const baseGameManifest = await this.loadModManifest('mods/base-game/manifest.json');
            this.modManifests.set('base-game', baseGameManifest);
            
            console.log(`Discovered ${this.modManifests.size} mod(s)`);
        } catch (error) {
            console.error('Error discovering mods:', error);
        }
    }
    
    /**
     * Load a mod by ID
     * @param {string} modId - The mod ID to load
     * @returns {Object} The loaded mod data
     */
    async loadMod(modId) {
        try {
            console.log(`Loading mod: ${modId}`);
            
            const manifest = this.modManifests.get(modId);
            if (!manifest) {
                throw new Error(`Mod manifest not found: ${modId}`);
            }
            
            // Check dependencies
            await this.checkDependencies(manifest);
            
            // Load mod data
            const modData = await this.loadModData(manifest);
            
            // Load mod assets
            await this.loadModAssets(manifest);
            
            // Load localization
            await this.loadModLocalization(manifest);
            
            // Store loaded mod
            this.loadedMods.set(modId, {
                manifest,
                data: modData,
                assets: {},
                localization: {}
            });
            
            this.activeMods.add(modId);
            this.modLoadOrder.push(modId);
            
            // Emit mod loaded event
            this.eventSystem.emit('mod:loaded', {
                modId,
                manifest,
                data: modData
            });
            
            console.log(`Mod loaded successfully: ${modId}`);
            return modData;
            
        } catch (error) {
            console.error(`Failed to load mod ${modId}:`, error);
            throw error;
        }
    }
    
    /**
     * Load mod manifest from file
     * @param {string} manifestPath - Path to the manifest file
     * @returns {Object} The manifest data
     */
    async loadModManifest(manifestPath) {
        try {
            const response = await fetch(manifestPath);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error(`Failed to load mod manifest ${manifestPath}:`, error);
            throw error;
        }
    }
    
    /**
     * Check mod dependencies
     * @param {Object} manifest - The mod manifest
     */
    async checkDependencies(manifest) {
        const dependencies = manifest.dependencies || [];
        
        for (const dependency of dependencies) {
            if (!this.loadedMods.has(dependency)) {
                throw new Error(`Missing dependency: ${dependency}`);
            }
        }
    }
    
    /**
     * Load mod data files
     * @param {Object} manifest - The mod manifest
     * @returns {Object} The loaded data
     */
    async loadModData(manifest) {
        const data = {};
        const dataFiles = manifest.data || {};
        
        for (const [key, path] of Object.entries(dataFiles)) {
            try {
                if (path.endsWith('/')) {
                    // Directory - load all JSON files in directory
                    data[key] = await this.loadDataDirectory(path);
                } else {
                    // Single file
                    const response = await fetch(path);
                    if (!response.ok) {
                        console.warn(`Failed to load data file: ${path}`);
                        continue;
                    }
                    data[key] = await response.json();
                }
            } catch (error) {
                console.warn(`Failed to load data file ${path}:`, error);
            }
        }
        
        return data;
    }
    
    /**
     * Load all JSON files in a directory
     * @param {string} directoryPath - Path to the directory
     * @returns {Object} Object with filename keys and data values
     */
    async loadDataDirectory(directoryPath) {
        // For now, we'll return an empty object
        // In a real implementation, this would scan the directory
        return {};
    }
    
    /**
     * Load mod assets
     * @param {Object} manifest - The mod manifest
     */
    async loadModAssets(manifest) {
        const assets = manifest.assets || {};
        
        // For now, we'll just log the asset paths
        // In a real implementation, this would preload assets
        console.log('Mod assets:', assets);
    }
    
    /**
     * Load mod localization
     * @param {Object} manifest - The mod manifest
     */
    async loadModLocalization(manifest) {
        const localization = manifest.localization || {};
        const defaultLang = localization.default || 'en';
        const langPath = localization.path || 'localization/';
        
        try {
            const response = await fetch(`${langPath}${defaultLang}.json`);
            if (response.ok) {
                const langData = await response.json();
                console.log('Loaded localization:', langData);
            }
        } catch (error) {
            console.warn('Failed to load localization:', error);
        }
    }
    
    /**
     * Get loaded mod data
     * @param {string} modId - The mod ID
     * @returns {Object} The mod data
     */
    getModData(modId) {
        const mod = this.loadedMods.get(modId);
        return mod ? mod.data : null;
    }
    
    /**
     * Get all loaded mod data merged together
     * @returns {Object} Merged data from all loaded mods
     */
    getAllModData() {
        const mergedData = {};
        
        for (const [modId, mod] of this.loadedMods) {
            for (const [key, value] of Object.entries(mod.data)) {
                if (!mergedData[key]) {
                    mergedData[key] = {};
                }
                
                // Merge data (mods loaded later override earlier ones)
                if (typeof value === 'object' && value !== null) {
                    Object.assign(mergedData[key], value);
                } else {
                    mergedData[key] = value;
                }
            }
        }
        
        return mergedData;
    }
    
    /**
     * Get active mods
     * @returns {Set} Set of active mod IDs
     */
    getActiveMods() {
        return this.activeMods;
    }
    
    /**
     * Get mod load order
     * @returns {Array} Array of mod IDs in load order
     */
    getModLoadOrder() {
        return this.modLoadOrder;
    }
    
    /**
     * Unload a mod
     * @param {string} modId - The mod ID to unload
     */
    unloadMod(modId) {
        if (this.loadedMods.has(modId)) {
            this.loadedMods.delete(modId);
            this.activeMods.delete(modId);
            
            const index = this.modLoadOrder.indexOf(modId);
            if (index > -1) {
                this.modLoadOrder.splice(index, 1);
            }
            
            this.eventSystem.emit('mod:unloaded', { modId });
            console.log(`Mod unloaded: ${modId}`);
        }
    }
    
    /**
     * Reload a mod
     * @param {string} modId - The mod ID to reload
     */
    async reloadMod(modId) {
        this.unloadMod(modId);
        await this.loadMod(modId);
    }
}

if (typeof window !== 'undefined') window.ModManager = ModManager;

// ES Module exports
export { ModManager }; 