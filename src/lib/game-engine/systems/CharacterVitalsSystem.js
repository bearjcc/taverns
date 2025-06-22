/**
 * Character Vitals System
 * 
 * Manages character vitals (Health, Mana, Stamina) including:
 * - Current and maximum values
 * - Natural regeneration over time
 * - Consumption and restoration through actions
 * - Integration with game events and systems
 */

class CharacterVitalsSystem {
    constructor() {
        this.vitals = new Map();
        this.regenerationTimers = new Map();
        this.configManager = null;
        this.eventSystem = null;
        this.stateManager = null;
        
        // Default vital types
        this.vitalTypes = ['health', 'mana', 'stamina'];
        
        // Initialize default vitals
        this._initializeVitals();
    }

    /**
     * Set the configuration manager reference
     * @param {ConfigManager} configManager - The configuration manager instance
     */
    setConfigManager(configManager) {
        this.configManager = configManager;
    }

    /**
     * Set the event system reference
     * @param {EventSystem} eventSystem - The event system instance
     */
    setEventSystem(eventSystem) {
        this.eventSystem = eventSystem;
        this._setupEventListeners();
    }

    /**
     * Set the state manager reference
     * @param {Object} stateManager - The state manager instance
     */
    setStateManager(stateManager) {
        this.stateManager = stateManager;
    }

    /**
     * Initialize default vitals with base values
     */
    _initializeVitals() {
        const defaults = {
            health: { current: 100, max: 100, regenRate: 1, regenInterval: 10000 }, // Regen 1 HP every 10 seconds
            mana: { current: 70, max: 100, regenRate: 2, regenInterval: 8000 },    // Regen 2 MP every 8 seconds
            stamina: { current: 50, max: 100, regenRate: 3, regenInterval: 5000 }  // Regen 3 SP every 5 seconds
        };

        for (const [type, config] of Object.entries(defaults)) {
            this.vitals.set(type, new CharacterVital(type, config));
        }
    }

    /**
     * Load vitals configuration from game config
     * @param {Object} vitalsConfig - Vitals configuration data
     */
    loadFromConfig(vitalsConfig = {}) {
        try {
            console.log('Loading character vitals configuration...');
            
            // Update existing vitals with config values
            for (const [type, vital] of this.vitals) {
                if (vitalsConfig[type]) {
                    vital.updateFromConfig(vitalsConfig[type]);
                }
            }
            
            // Start regeneration timers
            this._startRegeneration();
            
            console.log('Character vitals system loaded successfully');
        } catch (error) {
            console.error('Error loading vitals configuration:', error);
        }
    }

    /**
     * Get a specific vital
     * @param {string} vitalType - The type of vital (health, mana, stamina)
     * @returns {CharacterVital|null} The vital object
     */
    getVital(vitalType) {
        return this.vitals.get(vitalType) || null;
    }

    /**
     * Get all vitals as an object
     * @returns {Object} All vitals data
     */
    getAllVitals() {
        const result = {};
        for (const [type, vital] of this.vitals) {
            result[type] = vital.toObject();
        }
        return result;
    }

    /**
     * Modify a vital by a specific amount
     * @param {string} vitalType - The type of vital
     * @param {number} amount - Amount to change (positive for increase, negative for decrease)
     * @returns {boolean} Success status
     */
    modifyVital(vitalType, amount) {
        const vital = this.vitals.get(vitalType);
        if (!vital) {
            console.warn(`Unknown vital type: ${vitalType}`);
            return false;
        }

        const oldValue = vital.current;
        const changed = vital.modify(amount);
        
        if (changed && this.eventSystem) {
            this.eventSystem.emit('vitals:changed', {
                vitalType,
                oldValue,
                newValue: vital.current,
                maxValue: vital.max,
                change: amount
            });

            // Emit specific events for critical states
            if (vital.current <= 0) {
                this.eventSystem.emit('vitals:depleted', { vitalType, vital: vital.toObject() });
            } else if (vital.current === vital.max) {
                this.eventSystem.emit('vitals:maxed', { vitalType, vital: vital.toObject() });
            }
        }

        return changed;
    }

    /**
     * Set a vital to a specific value
     * @param {string} vitalType - The type of vital
     * @param {number} value - The value to set
     * @returns {boolean} Success status
     */
    setVital(vitalType, value) {
        const vital = this.vitals.get(vitalType);
        if (!vital) return false;

        const oldValue = vital.current;
        vital.setCurrent(value);
        
        if (this.eventSystem) {
            this.eventSystem.emit('vitals:changed', {
                vitalType,
                oldValue,
                newValue: vital.current,
                maxValue: vital.max,
                change: vital.current - oldValue
            });
        }

        return true;
    }

    /**
     * Increase maximum value for a vital
     * @param {string} vitalType - The type of vital
     * @param {number} amount - Amount to increase max by
     * @returns {boolean} Success status
     */
    increaseMaxVital(vitalType, amount) {
        const vital = this.vitals.get(vitalType);
        if (!vital) return false;

        vital.increaseMax(amount);
        
        if (this.eventSystem) {
            this.eventSystem.emit('vitals:maxIncreased', {
                vitalType,
                newMax: vital.max,
                increase: amount
            });
        }

        return true;
    }

    /**
     * Check if a vital is at or below a threshold
     * @param {string} vitalType - The type of vital
     * @param {number} threshold - The threshold to check
     * @returns {boolean} True if at or below threshold
     */
    isVitalLow(vitalType, threshold = 20) {
        const vital = this.vitals.get(vitalType);
        return vital ? vital.current <= threshold : false;
    }

    /**
     * Get vital percentage (0-100)
     * @param {string} vitalType - The type of vital
     * @returns {number} Percentage of vital (0-100)
     */
    getVitalPercentage(vitalType) {
        const vital = this.vitals.get(vitalType);
        return vital ? (vital.current / vital.max) * 100 : 0;
    }

    /**
     * Setup event listeners for system integration
     */
    _setupEventListeners() {
        if (!this.eventSystem) return;

        // Listen for actions that affect vitals
        this.eventSystem.on('action:completed', (data) => {
            this._handleActionCompleted(data);
        });

        // Listen for skill level ups that might increase vitals
        this.eventSystem.on('skill:levelUp', (data) => {
            this._handleSkillLevelUp(data);
        });
    }

    /**
     * Handle completed actions that affect vitals
     * @param {Object} actionData - Action completion data
     */
    _handleActionCompleted(actionData) {
        // Example: Combat actions drain stamina, magic actions drain mana
        if (actionData.actionType === 'combat') {
            this.modifyVital('stamina', -5);
        } else if (actionData.actionType === 'magic') {
            this.modifyVital('mana', -10);
        } else if (actionData.actionType === 'rest') {
            // Resting restores vitals faster
            this.modifyVital('health', 20);
            this.modifyVital('stamina', 30);
        }
    }

    /**
     * Handle skill level ups that might increase max vitals
     * @param {Object} skillData - Skill level up data
     */
    _handleSkillLevelUp(skillData) {
        // Example: Combat levels increase max health, Magic levels increase max mana
        if (skillData.skillName === 'Combat' || skillData.skillName === 'Melee combat') {
            this.increaseMaxVital('health', 5);
        } else if (skillData.skillName === 'Magic' || skillData.skillName === 'Basic Magic') {
            this.increaseMaxVital('mana', 10);
        }
    }

    /**
     * Start natural regeneration for all vitals
     */
    _startRegeneration() {
        for (const [type, vital] of this.vitals) {
            this._startVitalRegeneration(type, vital);
        }
    }

    /**
     * Start regeneration for a specific vital
     * @param {string} type - Vital type
     * @param {CharacterVital} vital - Vital object
     */
    _startVitalRegeneration(type, vital) {
        // Clear existing timer
        if (this.regenerationTimers.has(type)) {
            clearInterval(this.regenerationTimers.get(type));
        }

        // Start new regeneration timer
        const timer = setInterval(() => {
            if (vital.current < vital.max) {
                const oldValue = vital.current;
                vital.regenerate();
                
                if (this.eventSystem && vital.current !== oldValue) {
                    this.eventSystem.emit('vitals:regenerated', {
                        vitalType: type,
                        amount: vital.regenRate,
                        current: vital.current,
                        max: vital.max
                    });
                }
            }
        }, vital.regenInterval);

        this.regenerationTimers.set(type, timer);
    }

    /**
     * Stop all regeneration timers
     */
    _stopRegeneration() {
        for (const timer of this.regenerationTimers.values()) {
            clearInterval(timer);
        }
        this.regenerationTimers.clear();
    }

    /**
     * Get state data for saving
     * @returns {Object} State data
     */
    getStateData() {
        const vitalsData = {};
        for (const [type, vital] of this.vitals) {
            vitalsData[type] = {
                current: vital.current,
                max: vital.max
            };
        }
        return { vitals: vitalsData };
    }

    /**
     * Load state data
     * @param {Object} stateData - Previously saved state data
     */
    loadStateData(stateData) {
        if (stateData && stateData.vitals) {
            for (const [type, data] of Object.entries(stateData.vitals)) {
                const vital = this.vitals.get(type);
                if (vital) {
                    vital.current = Math.max(0, Math.min(data.current || vital.current, data.max || vital.max));
                    if (data.max) vital.max = data.max;
                }
            }
        }
    }
}

/**
 * Individual Character Vital (Health, Mana, Stamina)
 */
class CharacterVital {
    constructor(type, config = {}) {
        this.type = type;
        this.current = config.current || 100;
        this.max = config.max || 100;
        this.regenRate = config.regenRate || 1;
        this.regenInterval = config.regenInterval || 10000; // milliseconds
    }

    /**
     * Update vital from configuration
     * @param {Object} config - Configuration object
     */
    updateFromConfig(config) {
        if (config.max !== undefined) this.max = config.max;
        if (config.current !== undefined) this.current = Math.min(config.current, this.max);
        if (config.regenRate !== undefined) this.regenRate = config.regenRate;
        if (config.regenInterval !== undefined) this.regenInterval = config.regenInterval;
    }

    /**
     * Modify vital by amount
     * @param {number} amount - Amount to change
     * @returns {boolean} True if value changed
     */
    modify(amount) {
        const oldValue = this.current;
        this.current = Math.max(0, Math.min(this.current + amount, this.max));
        return this.current !== oldValue;
    }

    /**
     * Set current value directly
     * @param {number} value - Value to set
     */
    setCurrent(value) {
        this.current = Math.max(0, Math.min(value, this.max));
    }

    /**
     * Increase maximum value
     * @param {number} amount - Amount to increase by
     */
    increaseMax(amount) {
        this.max += amount;
        // Ensure current doesn't exceed new max
        this.current = Math.min(this.current, this.max);
    }

    /**
     * Natural regeneration
     */
    regenerate() {
        if (this.current < this.max) {
            this.current = Math.min(this.current + this.regenRate, this.max);
        }
    }

    /**
     * Get vital as percentage
     * @returns {number} Percentage (0-100)
     */
    getPercentage() {
        return (this.current / this.max) * 100;
    }

    /**
     * Convert to plain object
     * @returns {Object} Vital data
     */
    toObject() {
        return {
            type: this.type,
            current: this.current,
            max: this.max,
            percentage: this.getPercentage(),
            regenRate: this.regenRate,
            regenInterval: this.regenInterval
        };
    }
}

// Browser compatibility
if (typeof window !== 'undefined') {
    window.CharacterVitalsSystem = CharacterVitalsSystem;
    window.CharacterVital = CharacterVital;
}

// ES Module exports
export { CharacterVitalsSystem, CharacterVital }; 