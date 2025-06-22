/**
 * Asset Loader
 * 
 * Handles just-in-time loading of game assets (icons, images, audio)
 * with intelligent caching and fallback handling.
 */

class AssetLoader {
    constructor(cacheSize = 100) {
        this.cacheSize = cacheSize;
        this.cache = new Map();
        this.loadingPromises = new Map();
        this.currentMod = null;
        
        // Asset type handlers
        this.handlers = {
            'image': this._loadImage.bind(this),
            'icon': this._loadIcon.bind(this),
            'audio': this._loadAudio.bind(this),
            'json': this._loadJSON.bind(this),
            'js': this._loadJavaScriptModule.bind(this)
        };
    }
    
    /**
     * Set the current mod for asset path resolution
     * @param {Object} mod - Current mod data
     */
    setMod(mod) {
        this.currentMod = mod;
    }
    
    /**
     * Load an asset by type and path
     * @param {string} type - Asset type (image, icon, audio, json)
     * @param {string} path - Asset path relative to mod
     * @param {Object} options - Loading options
     * @returns {Promise} Promise that resolves to the loaded asset
     */
    async load(type, path, options = {}) {
        const cacheKey = `${type}:${path}`;
        
        // Check cache first
        if (this.cache.has(cacheKey)) {
            return this.cache.get(cacheKey);
        }
        
        // Check if already loading
        if (this.loadingPromises.has(cacheKey)) {
            return this.loadingPromises.get(cacheKey);
        }
        
        // Start loading
        const loadPromise = this._loadAsset(type, path, options);
        this.loadingPromises.set(cacheKey, loadPromise);
        
        try {
            const asset = await loadPromise;
            
            // Cache the result
            this._addToCache(cacheKey, asset);
            
            // Remove from loading promises
            this.loadingPromises.delete(cacheKey);
            
            return asset;
            
        } catch (error) {
            // Remove from loading promises on error
            this.loadingPromises.delete(cacheKey);
            throw error;
        }
    }
    
    /**
     * Preload a list of assets
     * @param {Array} assets - Array of {type, path, options} objects
     * @returns {Promise} Promise that resolves when all assets are loaded
     */
    async preload(assets) {
        const loadPromises = assets.map(asset => 
            this.load(asset.type, asset.path, asset.options || {})
        );
        
        return Promise.allSettled(loadPromises);
    }
    
    /**
     * Load an icon for a specific item/skill/species
     * @param {string} category - Icon category (items, skills, species)
     * @param {string} name - Asset name
     * @param {Object} options - Loading options
     * @returns {Promise} Promise that resolves to the icon
     */
    async loadIcon(category, name, options = {}) {
        const path = this._resolveIconPath(category, name);
        return this.load('icon', path, options);
    }
    
    /**
     * Load localized text for an asset
     * @param {string} category - Text category (items, skills, species)
     * @param {string} name - Asset name
     * @param {string} language - Language code
     * @returns {Promise} Promise that resolves to localized text
     */
    async loadLocalizedText(category, name, language = 'en') {
        const path = this._resolveLocalizationPath(category, language);
        
        try {
            const localizationData = await this.load('json', path);
            return localizationData[category]?.[name] || {};
        } catch (error) {
            console.warn(`Failed to load localized text for ${category}/${name} in ${language}:`, error);
            return {};
        }
    }
    
    /**
     * Load a JavaScript module dynamically
     * @param {string} path - Path to the JavaScript file
     * @param {Object} options - Loading options
     * @returns {Promise} Promise that resolves when the module is loaded
     */
    async loadJavaScriptModule(path, options = {}) {
        const cacheKey = `js:${path}`;
        
        // Check cache first
        if (this.cache.has(cacheKey)) {
            return this.cache.get(cacheKey);
        }
        
        // Check if already loading
        if (this.loadingPromises.has(cacheKey)) {
            return this.loadingPromises.get(cacheKey);
        }
        
        // Start loading
        const loadPromise = this._loadJavaScriptModule(path, options);
        this.loadingPromises.set(cacheKey, loadPromise);
        
        try {
            const result = await loadPromise;
            
            // Cache the result
            this._addToCache(cacheKey, result);
            
            // Remove from loading promises
            this.loadingPromises.delete(cacheKey);
            
            return result;
            
        } catch (error) {
            // Remove from loading promises on error
            this.loadingPromises.delete(cacheKey);
            throw error;
        }
    }
    
    /**
     * Load multiple JavaScript modules
     * @param {Array} modules - Array of module paths
     * @param {Object} options - Loading options
     * @returns {Promise} Promise that resolves when all modules are loaded
     */
    async loadJavaScriptModules(modules, options = {}) {
        const loadPromises = modules.map(modulePath => 
            this.loadJavaScriptModule(modulePath, options)
        );
        
        return Promise.allSettled(loadPromises);
    }
    
    /**
     * Clear the asset cache
     */
    clearCache() {
        this.cache.clear();
    }
    
    /**
     * Get cache statistics
     * @returns {Object} Cache statistics
     */
    getCacheStats() {
        return {
            size: this.cache.size,
            maxSize: this.cacheSize,
            loading: this.loadingPromises.size
        };
    }
    
    // Private methods
    
    async _loadAsset(type, path, options) {
        const handler = this.handlers[type];
        if (!handler) {
            throw new Error(`Unknown asset type: ${type}`);
        }
        
        const fullPath = this._resolveAssetPath(path);
        return handler(fullPath, options);
    }
    
    _resolveAssetPath(path) {
        if (!this.currentMod) {
            throw new Error('No mod set for asset loading');
        }
        
        // If path is already absolute, return as is
        if (path.startsWith('http://') || path.startsWith('https://')) {
            return path;
        }
        
        // Resolve relative to mod path
        return `mods/${this.currentMod.id}/${path}`;
    }
    
    _resolveIconPath(category, name) {
        if (!this.currentMod?.manifest?.assets?.icons?.[category]) {
            throw new Error(`Icon category '${category}' not found in mod manifest`);
        }
        
        const basePath = this.currentMod.manifest.assets.icons[category];
        return `${basePath}${name}.png`;
    }
    
    _resolveLocalizationPath(category, language) {
        if (!this.currentMod?.manifest?.localization?.path) {
            throw new Error('Localization path not found in mod manifest');
        }
        
        const basePath = this.currentMod.manifest.localization.path;
        return `${basePath}${language}/${category}.json`;
    }
    
    async _loadImage(path, options) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            
            img.onload = () => resolve(img);
            img.onerror = () => reject(new Error(`Failed to load image: ${path}`));
            
            if (options.crossOrigin) {
                img.crossOrigin = options.crossOrigin;
            }
            
            img.src = path;
        });
    }
    
    async _loadIcon(path, options) {
        // Icons are just images with specific handling
        return this._loadImage(path, options);
    }
    
    async _loadAudio(path, options) {
        return new Promise((resolve, reject) => {
            const audio = new Audio();
            
            audio.oncanplaythrough = () => resolve(audio);
            audio.onerror = () => reject(new Error(`Failed to load audio: ${path}`));
            
            if (options.preload) {
                audio.preload = options.preload;
            }
            
            audio.src = path;
        });
    }
    
    async _loadJSON(path, options) {
        try {
            const response = await fetch(path);
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            
            return await response.json();
        } catch (error) {
            throw new Error(`Failed to load JSON: ${path} - ${error.message}`);
        }
    }
    
    async _loadJavaScriptModule(path, options) {
        return new Promise((resolve, reject) => {
            // Create a script element
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            
            script.onload = () => {
                // Script loaded successfully
                resolve({ loaded: true, path });
            };
            
            script.onerror = () => {
                reject(new Error(`Failed to load JavaScript module: ${path}`));
            };
            
            // Set the source and append to document
            script.src = path;
            document.head.appendChild(script);
        });
    }
    
    _addToCache(key, asset) {
        // Implement LRU cache eviction
        if (this.cache.size >= this.cacheSize) {
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }
        
        this.cache.set(key, asset);
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AssetLoader;
} 