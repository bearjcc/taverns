/**
 * State Manager
 * 
 * Handles all game state management, including save/load functionality,
 * state persistence, and state change notifications.
 */

class StateManager {
    constructor() {
        this.state = {
            skills: {},
            inventory: {},
            gameSettings: {},
            lastSaved: null,
            version: '1.0.0'
        };
        
        this.listeners = new Map();
        this.autoSaveInterval = null;
        this.autoSaveEnabled = true;
        this.autoSaveIntervalMs = 120000; // 2 minutes default
    }
    
    /**
     * Initialize the state manager
     * @param {Object} initialState - Initial state to load
     */
    initialize(initialState = {}) {
        this.state = {
            ...this.state,
            ...initialState
        };
        
        // Load saved state if available
        this.load();
        
        // Start auto-save
        this.startAutoSave();
    }
    
    /**
     * Get a value from state
     * @param {string} path - Dot notation path to the value
     * @param {*} defaultValue - Default value if not found
     * @returns {*} The value at the path
     */
    get(path, defaultValue = null) {
        const keys = path.split('.');
        let current = this.state;
        
        for (const key of keys) {
            if (current && typeof current === 'object' && key in current) {
                current = current[key];
            } else {
                return defaultValue;
            }
        }
        
        return current;
    }
    
    /**
     * Set a value in state
     * @param {string} path - Dot notation path to the value
     * @param {*} value - Value to set
     * @param {boolean} save - Whether to save immediately
     */
    set(path, value, save = true) {
        const keys = path.split('.');
        const lastKey = keys.pop();
        let current = this.state;
        
        // Navigate to the parent object
        for (const key of keys) {
            if (!(key in current) || typeof current[key] !== 'object') {
                current[key] = {};
            }
            current = current[key];
        }
        
        // Set the value
        current[lastKey] = value;
        
        // Emit change event
        this.emit('state:changed', { path, value, state: this.state });
        
        // Save if requested
        if (save) {
            this.save();
        }
    }
    
    /**
     * Update multiple values in state
     * @param {Object} updates - Object with path-value pairs
     * @param {boolean} save - Whether to save immediately
     */
    update(updates, save = true) {
        for (const [path, value] of Object.entries(updates)) {
            this.set(path, value, false);
        }
        
        // Emit change event for batch update
        this.emit('state:changed', { updates, state: this.state });
        
        // Save if requested
        if (save) {
            this.save();
        }
    }
    
    /**
     * Get the entire state object
     * @returns {Object} The complete state
     */
    getState() {
        return JSON.parse(JSON.stringify(this.state)); // Deep copy
    }
    
    /**
     * Set the entire state object
     * @param {Object} newState - New state object
     * @param {boolean} save - Whether to save immediately
     */
    setState(newState, save = true) {
        this.state = JSON.parse(JSON.stringify(newState)); // Deep copy
        
        // Emit change event
        this.emit('state:changed', { state: this.state });
        
        // Save if requested
        if (save) {
            this.save();
        }
    }
    
    /**
     * Save the current state to localStorage
     */
    save() {
        try {
            this.state.lastSaved = new Date().toISOString();
            localStorage.setItem('tavernsGameState', JSON.stringify(this.state));
            this.emit('state:saved', { state: this.state });
        } catch (error) {
            console.error('Failed to save game state:', error);
            this.emit('state:saveError', { error });
        }
    }
    
    /**
     * Load state from localStorage
     * @returns {boolean} Whether loading was successful
     */
    load() {
        try {
            const savedState = localStorage.getItem('tavernsGameState');
            if (savedState) {
                const parsedState = JSON.parse(savedState);
                
                // Merge with current state to handle new fields
                this.state = this.deepMerge(this.state, parsedState);
                
                this.emit('state:loaded', { state: this.state });
                return true;
            } else {
                this.emit('state:noSaveFound', {});
                return false;
            }
        } catch (error) {
            console.error('Failed to load game state:', error);
            this.emit('state:loadError', { error });
            return false;
        }
    }
    
    /**
     * Clear saved state
     */
    clear() {
        try {
            localStorage.removeItem('tavernsGameState');
            this.state = {
                skills: {},
                inventory: {},
                gameSettings: {},
                lastSaved: null,
                version: '1.0.0'
            };
            this.emit('state:cleared', {});
        } catch (error) {
            console.error('Failed to clear game state:', error);
            this.emit('state:clearError', { error });
        }
    }
    
    /**
     * Start auto-save functionality
     * @param {number} intervalMs - Auto-save interval in milliseconds
     */
    startAutoSave(intervalMs = null) {
        if (intervalMs) {
            this.autoSaveIntervalMs = intervalMs;
        }
        
        if (this.autoSaveInterval) {
            clearInterval(this.autoSaveInterval);
        }
        
        if (this.autoSaveEnabled) {
            this.autoSaveInterval = setInterval(() => {
                this.save();
            }, this.autoSaveIntervalMs);
        }
    }
    
    /**
     * Stop auto-save functionality
     */
    stopAutoSave() {
        if (this.autoSaveInterval) {
            clearInterval(this.autoSaveInterval);
            this.autoSaveInterval = null;
        }
    }
    
    /**
     * Enable or disable auto-save
     * @param {boolean} enabled - Whether auto-save should be enabled
     */
    setAutoSaveEnabled(enabled) {
        this.autoSaveEnabled = enabled;
        if (enabled) {
            this.startAutoSave();
        } else {
            this.stopAutoSave();
        }
    }
    
    /**
     * Get auto-save status
     * @returns {Object} Auto-save configuration
     */
    getAutoSaveStatus() {
        return {
            enabled: this.autoSaveEnabled,
            intervalMs: this.autoSaveIntervalMs,
            lastSaved: this.state.lastSaved
        };
    }
    
    /**
     * Subscribe to state change events
     * @param {string} event - Event name
     * @param {Function} callback - Callback function
     */
    on(event, callback) {
        if (!this.listeners.has(event)) {
            this.listeners.set(event, []);
        }
        this.listeners.get(event).push(callback);
    }
    
    /**
     * Unsubscribe from state change events
     * @param {string} event - Event name
     * @param {Function} callback - Callback function
     */
    off(event, callback) {
        if (this.listeners.has(event)) {
            const callbacks = this.listeners.get(event);
            const index = callbacks.indexOf(callback);
            if (index > -1) {
                callbacks.splice(index, 1);
            }
        }
    }
    
    /**
     * Emit an event to all listeners
     * @param {string} event - Event name
     * @param {Object} data - Event data
     */
    emit(event, data) {
        if (this.listeners.has(event)) {
            this.listeners.get(event).forEach(callback => {
                try {
                    callback(data);
                } catch (error) {
                    console.error(`Error in state manager event listener for ${event}:`, error);
                }
            });
        }
    }
    
    /**
     * Deep merge two objects
     * @param {Object} target - Target object
     * @param {Object} source - Source object
     * @returns {Object} Merged object
     */
    deepMerge(target, source) {
        const result = { ...target };
        
        for (const key in source) {
            if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
                result[key] = this.deepMerge(result[key] || {}, source[key]);
            } else {
                result[key] = source[key];
            }
        }
        
        return result;
    }
    
    /**
     * Get state statistics
     * @returns {Object} State statistics
     */
    getStats() {
        return {
            skillsCount: Object.keys(this.state.skills || {}).length,
            inventoryItemsCount: Object.keys(this.state.inventory || {}).length,
            lastSaved: this.state.lastSaved,
            version: this.state.version,
            autoSaveEnabled: this.autoSaveEnabled,
            autoSaveIntervalMs: this.autoSaveIntervalMs
        };
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = StateManager;
} 