/**
 * Event System
 * 
 * Handles all event communication between different parts of the game engine.
 * Provides decoupled communication and event management.
 */

class EventSystem {
    constructor() {
        this.listeners = new Map();
        this.onceListeners = new Map();
        this.eventHistory = [];
        this.maxHistorySize = 100;
        this.enabled = true;
    }
    
    /**
     * Subscribe to an event
     * @param {string} event - Event name
     * @param {Function} callback - Callback function
     * @param {Object} options - Event options
     */
    on(event, callback, options = {}) {
        if (!this.enabled) return;
        
        if (!this.listeners.has(event)) {
            this.listeners.set(event, []);
        }
        
        const listener = {
            callback,
            options,
            id: this._generateListenerId()
        };
        
        this.listeners.get(event).push(listener);
        
        return listener.id; // Return listener ID for removal
    }
    
    /**
     * Subscribe to an event once (auto-removes after first trigger)
     * @param {string} event - Event name
     * @param {Function} callback - Callback function
     * @param {Object} options - Event options
     */
    once(event, callback, options = {}) {
        if (!this.enabled) return;
        
        const onceCallback = (data) => {
            callback(data);
            this.off(event, onceCallback);
        };
        
        return this.on(event, onceCallback, options);
    }
    
    /**
     * Unsubscribe from an event
     * @param {string} event - Event name
     * @param {Function|string} callbackOrId - Callback function or listener ID
     */
    off(event, callbackOrId) {
        if (!this.listeners.has(event)) return;
        
        const listeners = this.listeners.get(event);
        
        if (typeof callbackOrId === 'string') {
            // Remove by listener ID
            const index = listeners.findIndex(listener => listener.id === callbackOrId);
            if (index > -1) {
                listeners.splice(index, 1);
            }
        } else {
            // Remove by callback function
            const index = listeners.findIndex(listener => listener.callback === callbackOrId);
            if (index > -1) {
                listeners.splice(index, 1);
            }
        }
    }
    
    /**
     * Emit an event to all listeners
     * @param {string} event - Event name
     * @param {Object} data - Event data
     * @param {Object} options - Emission options
     */
    emit(event, data = {}, options = {}) {
        if (!this.enabled) return;
        
        const timestamp = Date.now();
        const eventInfo = {
            event,
            data,
            timestamp,
            options
        };
        
        // Add to history
        this._addToHistory(eventInfo);
        
        // Get listeners for this event
        const listeners = this.listeners.get(event) || [];
        
        // Emit to all listeners
        listeners.forEach(listener => {
            try {
                // Check if listener should be called based on options
                if (this._shouldCallListener(listener, options)) {
                    listener.callback(data, eventInfo);
                }
            } catch (error) {
                console.error(`Error in event listener for ${event}:`, error);
                this.emit('error', { 
                    error, 
                    event, 
                    listenerId: listener.id 
                });
            }
        });
        
        // Emit to wildcard listeners
        this._emitToWildcards(event, data, eventInfo);
    }
    
    /**
     * Emit an event asynchronously
     * @param {string} event - Event name
     * @param {Object} data - Event data
     * @param {Object} options - Emission options
     */
    async emitAsync(event, data = {}, options = {}) {
        if (!this.enabled) return;
        
        const timestamp = Date.now();
        const eventInfo = {
            event,
            data,
            timestamp,
            options
        };
        
        // Add to history
        this._addToHistory(eventInfo);
        
        // Get listeners for this event
        const listeners = this.listeners.get(event) || [];
        
        // Emit to all listeners asynchronously
        const promises = listeners.map(async listener => {
            try {
                if (this._shouldCallListener(listener, options)) {
                    await listener.callback(data, eventInfo);
                }
            } catch (error) {
                console.error(`Error in async event listener for ${event}:`, error);
                this.emit('error', { 
                    error, 
                    event, 
                    listenerId: listener.id 
                });
            }
        });
        
        await Promise.all(promises);
        
        // Emit to wildcard listeners
        await this._emitToWildcardsAsync(event, data, eventInfo);
    }
    
    /**
     * Remove all listeners for an event
     * @param {string} event - Event name
     */
    removeAllListeners(event) {
        if (event) {
            this.listeners.delete(event);
        } else {
            this.listeners.clear();
        }
    }
    
    /**
     * Get all listeners for an event
     * @param {string} event - Event name
     * @returns {Array} Array of listeners
     */
    getListeners(event) {
        return this.listeners.get(event) || [];
    }
    
    /**
     * Get listener count for an event
     * @param {string} event - Event name
     * @returns {number} Number of listeners
     */
    getListenerCount(event) {
        return this.getListeners(event).length;
    }
    
    /**
     * Get all registered events
     * @returns {Array} Array of event names
     */
    getEvents() {
        return Array.from(this.listeners.keys());
    }
    
    /**
     * Get event history
     * @param {string} event - Optional event filter
     * @param {number} limit - Maximum number of events to return
     * @returns {Array} Array of recent events
     */
    getHistory(event = null, limit = null) {
        let history = this.eventHistory;
        
        if (event) {
            history = history.filter(item => item.event === event);
        }
        
        if (limit) {
            history = history.slice(-limit);
        }
        
        return history;
    }
    
    /**
     * Clear event history
     */
    clearHistory() {
        this.eventHistory = [];
    }
    
    /**
     * Enable or disable the event system
     * @param {boolean} enabled - Whether events should be enabled
     */
    setEnabled(enabled) {
        this.enabled = enabled;
    }
    
    /**
     * Check if event system is enabled
     * @returns {boolean} Whether events are enabled
     */
    isEnabled() {
        return this.enabled;
    }
    
    /**
     * Set maximum history size
     * @param {number} size - Maximum number of events to keep in history
     */
    setMaxHistorySize(size) {
        this.maxHistorySize = size;
        this._trimHistory();
    }
    
    /**
     * Get event system statistics
     * @returns {Object} Event system statistics
     */
    getStats() {
        const totalListeners = Array.from(this.listeners.values())
            .reduce((sum, listeners) => sum + listeners.length, 0);
        
        return {
            totalEvents: this.listeners.size,
            totalListeners,
            historySize: this.eventHistory.length,
            maxHistorySize: this.maxHistorySize,
            enabled: this.enabled
        };
    }
    
    // Private methods
    
    /**
     * Add event to history
     * @param {Object} eventInfo - Event information
     */
    _addToHistory(eventInfo) {
        this.eventHistory.push(eventInfo);
        this._trimHistory();
    }
    
    /**
     * Trim history to maximum size
     */
    _trimHistory() {
        if (this.eventHistory.length > this.maxHistorySize) {
            this.eventHistory = this.eventHistory.slice(-this.maxHistorySize);
        }
    }
    
    /**
     * Generate unique listener ID
     * @returns {string} Unique listener ID
     */
    _generateListenerId() {
        return `listener_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }
    
    /**
     * Check if listener should be called based on options
     * @param {Object} listener - Listener object
     * @param {Object} options - Emission options
     * @returns {boolean} Whether listener should be called
     */
    _shouldCallListener(listener, options) {
        // Add filtering logic here if needed
        return true;
    }
    
    /**
     * Emit to wildcard listeners
     * @param {string} event - Event name
     * @param {Object} data - Event data
     * @param {Object} eventInfo - Event information
     */
    _emitToWildcards(event, data, eventInfo) {
        const wildcardListeners = this.listeners.get('*') || [];
        
        wildcardListeners.forEach(listener => {
            try {
                listener.callback({ event, data }, eventInfo);
            } catch (error) {
                console.error(`Error in wildcard event listener:`, error);
            }
        });
    }
    
    /**
     * Emit to wildcard listeners asynchronously
     * @param {string} event - Event name
     * @param {Object} data - Event data
     * @param {Object} eventInfo - Event information
     */
    async _emitToWildcardsAsync(event, data, eventInfo) {
        const wildcardListeners = this.listeners.get('*') || [];
        
        const promises = wildcardListeners.map(async listener => {
            try {
                await listener.callback({ event, data }, eventInfo);
            } catch (error) {
                console.error(`Error in async wildcard event listener:`, error);
            }
        });
        
        await Promise.all(promises);
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EventSystem;
} 