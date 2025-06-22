/**
 * Action Availability Engine
 * 
 * Handles dynamic action availability based on various conditions:
 * - Location-based availability
 * - Time-of-day restrictions
 * - Weather/environmental modifiers
 * - Quest-based unlocks
 * - NPC interaction requirements
 * - Action cooldowns
 * - Prerequisites and dependencies
 * - Player status (health, energy, etc.)
 * - Equipment and tool requirements
 */

class ActionAvailabilityEngine {
    constructor(eventSystem, stateManager) {
        this.eventSystem = eventSystem;
        this.stateManager = stateManager;
        
        // Rules registry
        this.availabilityRules = new Map();
        
        // Cooldown tracking
        this.actionCooldowns = new Map();
        
        // Time tracking
        this.gameTime = {
            hour: 12,
            minute: 0,
            day: 1,
            season: 'spring'
        };
        
        // Weather system
        this.weather = {
            type: 'clear',
            intensity: 0,
            temperature: 20
        };
        
        // Player status
        this.playerStatus = {
            health: 100,
            energy: 100,
            hunger: 0,
            thirst: 0,
            temperature: 20
        };
        
        this._initializeDefaultRules();
        this._setupEventListeners();
    }

    /**
     * Initialize default availability rules
     */
    _initializeDefaultRules() {
        // Location-based rules
        this.addRule('location', (action, context) => {
            const { currentLocation, locationSystem } = context;
            if (!action.locationRestrictions) return true;
            
            return action.locationRestrictions.some(restriction => {
                return this._checkLocationRestriction(restriction, currentLocation, locationSystem);
            });
        });

        // Time-based rules
        this.addRule('time', (action, context) => {
            if (!action.timeRestrictions) return true;
            
            return action.timeRestrictions.every(restriction => {
                return this._checkTimeRestriction(restriction, this.gameTime);
            });
        });

        // Weather-based rules
        this.addRule('weather', (action, context) => {
            if (!action.weatherRestrictions) return true;
            
            return action.weatherRestrictions.every(restriction => {
                return this._checkWeatherRestriction(restriction, this.weather);
            });
        });

        // Player status rules
        this.addRule('playerStatus', (action, context) => {
            if (!action.playerStatusRequirements) return true;
            
            return this._checkPlayerStatusRequirements(action.playerStatusRequirements, this.playerStatus);
        });

        // Equipment rules
        this.addRule('equipment', (action, context) => {
            if (!action.equipmentRequirements) return true;
            
            const { inventoryManager } = context;
            return this._checkEquipmentRequirements(action.equipmentRequirements, inventoryManager);
        });

        // Cooldown rules
        this.addRule('cooldown', (action, context) => {
            if (!action.cooldown) return true;
            
            return this._checkCooldown(action.name, action.cooldown);
        });

        // Quest rules
        this.addRule('quest', (action, context) => {
            if (!action.questRequirements) return true;
            
            const { questSystem } = context;
            return this._checkQuestRequirements(action.questRequirements, questSystem);
        });

        // NPC interaction rules
        this.addRule('npc', (action, context) => {
            if (!action.npcRequirements) return true;
            
            const { npcSystem } = context;
            return this._checkNPCRequirements(action.npcRequirements, npcSystem);
        });
    }

    /**
     * Setup event listeners for dynamic updates
     */
    _setupEventListeners() {
        if (this.eventSystem) {
            this.eventSystem.on('time:update', (data) => {
                this.gameTime = { ...this.gameTime, ...data };
                this._notifyAvailabilityChange();
            });

            this.eventSystem.on('weather:change', (data) => {
                this.weather = { ...this.weather, ...data };
                this._notifyAvailabilityChange();
            });

            this.eventSystem.on('player:status:update', (data) => {
                this.playerStatus = { ...this.playerStatus, ...data };
                this._notifyAvailabilityChange();
            });

            this.eventSystem.on('location:change', (data) => {
                this._notifyAvailabilityChange();
            });

            this.eventSystem.on('quest:update', (data) => {
                this._notifyAvailabilityChange();
            });

            this.eventSystem.on('npc:interaction', (data) => {
                this._notifyAvailabilityChange();
            });
        }
    }

    /**
     * Add a custom availability rule
     * @param {string} ruleName - Name of the rule
     * @param {Function} ruleFunction - Function that returns boolean
     */
    addRule(ruleName, ruleFunction) {
        this.availabilityRules.set(ruleName, ruleFunction);
    }

    /**
     * Check if an action is available given the current context
     * @param {Object} action - The action to check
     * @param {Object} context - Current game context
     * @returns {Object} Availability result with details
     */
    checkActionAvailability(action, context) {
        const result = {
            available: true,
            reasons: [],
            missingRequirements: []
        };

        // Check each rule
        for (const [ruleName, ruleFunction] of this.availabilityRules) {
            try {
                const ruleResult = ruleFunction(action, context);
                
                if (typeof ruleResult === 'boolean') {
                    if (!ruleResult) {
                        result.available = false;
                        result.reasons.push(`Failed ${ruleName} check`);
                    }
                } else if (ruleResult && typeof ruleResult === 'object') {
                    if (!ruleResult.available) {
                        result.available = false;
                        result.reasons.push(ruleResult.reason || `Failed ${ruleName} check`);
                        if (ruleResult.missingRequirements) {
                            result.missingRequirements.push(...ruleResult.missingRequirements);
                        }
                    }
                }
            } catch (error) {
                console.error(`Error checking ${ruleName} rule for action ${action.name}:`, error);
                result.available = false;
                result.reasons.push(`Error in ${ruleName} check`);
            }
        }

        return result;
    }

    /**
     * Check location restriction
     * @param {Object} restriction - Location restriction object
     * @param {Object} currentLocation - Current player location
     * @param {Object} locationSystem - Location system instance
     * @returns {boolean} Whether location requirement is met
     */
    _checkLocationRestriction(restriction, currentLocation, locationSystem) {
        if (!currentLocation || !locationSystem) return false;

        switch (restriction.type) {
            case 'spot':
                return currentLocation.spot === restriction.spotId;
            case 'region':
                return currentLocation.region === restriction.regionId;
            case 'country':
                return currentLocation.country === restriction.countryId;
            case 'continent':
                return currentLocation.continent === restriction.continentId;
            case 'globe':
                return currentLocation.globe === restriction.globeId;
            case 'biome':
                const currentSpot = locationSystem.getCurrentSpot();
                return currentSpot && currentSpot.biome === restriction.biomeType;
            default:
                return false;
        }
    }

    /**
     * Check time restriction
     * @param {Object} restriction - Time restriction object
     * @param {Object} gameTime - Current game time
     * @returns {boolean} Whether time requirement is met
     */
    _checkTimeRestriction(restriction, gameTime) {
        switch (restriction.type) {
            case 'hour':
                return gameTime.hour >= restriction.min && gameTime.hour <= restriction.max;
            case 'day':
                return gameTime.day >= restriction.min && gameTime.day <= restriction.max;
            case 'season':
                return restriction.seasons.includes(gameTime.season);
            case 'timeOfDay':
                const hour = gameTime.hour;
                switch (restriction.timeOfDay) {
                    case 'dawn': return hour >= 5 && hour < 8;
                    case 'morning': return hour >= 8 && hour < 12;
                    case 'afternoon': return hour >= 12 && hour < 17;
                    case 'evening': return hour >= 17 && hour < 20;
                    case 'night': return hour >= 20 || hour < 5;
                    default: return false;
                }
            default:
                return false;
        }
    }

    /**
     * Check weather restriction
     * @param {Object} restriction - Weather restriction object
     * @param {Object} weather - Current weather
     * @returns {boolean} Whether weather requirement is met
     */
    _checkWeatherRestriction(restriction, weather) {
        switch (restriction.type) {
            case 'weatherType':
                return restriction.allowedTypes.includes(weather.type);
            case 'temperature':
                return weather.temperature >= restriction.min && weather.temperature <= restriction.max;
            case 'intensity':
                return weather.intensity >= restriction.min && weather.intensity <= restriction.max;
            default:
                return false;
        }
    }

    /**
     * Check player status requirements
     * @param {Object} requirements - Player status requirements
     * @param {Object} playerStatus - Current player status
     * @returns {Object} Check result with details
     */
    _checkPlayerStatusRequirements(requirements, playerStatus) {
        const result = { available: true, missingRequirements: [] };

        for (const [stat, requirement] of Object.entries(requirements)) {
            const currentValue = playerStatus[stat];
            if (currentValue === undefined) continue;

            if (requirement.min !== undefined && currentValue < requirement.min) {
                result.available = false;
                result.missingRequirements.push(`${stat} >= ${requirement.min} (current: ${currentValue})`);
            }

            if (requirement.max !== undefined && currentValue > requirement.max) {
                result.available = false;
                result.missingRequirements.push(`${stat} <= ${requirement.max} (current: ${currentValue})`);
            }
        }

        return result;
    }

    /**
     * Check equipment requirements
     * @param {Object} requirements - Equipment requirements
     * @param {Object} inventoryManager - Inventory manager instance
     * @returns {Object} Check result with details
     */
    _checkEquipmentRequirements(requirements, inventoryManager) {
        const result = { available: true, missingRequirements: [] };

        for (const [itemId, requirement] of Object.entries(requirements)) {
            const hasItem = inventoryManager && inventoryManager.hasItem(itemId, requirement.quantity || 1);
            
            if (!hasItem) {
                result.available = false;
                const itemName = inventoryManager ? 
                    inventoryManager.getGameObject(itemId)?.displayName || itemId : 
                    itemId;
                result.missingRequirements.push(`${itemName} (${requirement.quantity || 1})`);
            }
        }

        return result;
    }

    /**
     * Check cooldown for an action
     * @param {string} actionName - Name of the action
     * @param {number} cooldownTime - Cooldown time in milliseconds
     * @returns {boolean} Whether cooldown has expired
     */
    _checkCooldown(actionName, cooldownTime) {
        const lastUsed = this.actionCooldowns.get(actionName);
        if (!lastUsed) return true;

        const timeSinceLastUse = Date.now() - lastUsed;
        return timeSinceLastUse >= cooldownTime;
    }

    /**
     * Check quest requirements
     * @param {Object} requirements - Quest requirements
     * @param {Object} questSystem - Quest system instance
     * @returns {boolean} Whether quest requirements are met
     */
    _checkQuestRequirements(requirements, questSystem) {
        if (!questSystem) return true;

        for (const requirement of requirements) {
            switch (requirement.type) {
                case 'questCompleted':
                    if (!questSystem.isQuestCompleted(requirement.questId)) {
                        return false;
                    }
                    break;
                case 'questActive':
                    if (!questSystem.isQuestActive(requirement.questId)) {
                        return false;
                    }
                    break;
                case 'questStage':
                    if (!questSystem.isQuestAtStage(requirement.questId, requirement.stage)) {
                        return false;
                    }
                    break;
                default:
                    return false;
            }
        }

        return true;
    }

    /**
     * Check NPC requirements
     * @param {Object} requirements - NPC requirements
     * @param {Object} npcSystem - NPC system instance
     * @returns {boolean} Whether NPC requirements are met
     */
    _checkNPCRequirements(requirements, npcSystem) {
        if (!npcSystem) return true;

        for (const requirement of requirements) {
            switch (requirement.type) {
                case 'npcPresent':
                    if (!npcSystem.isNPCPresent(requirement.npcId)) {
                        return false;
                    }
                    break;
                case 'npcRelationship':
                    const relationship = npcSystem.getNPCRelationship(requirement.npcId);
                    if (relationship < requirement.minRelationship) {
                        return false;
                    }
                    break;
                case 'npcQuest':
                    if (!npcSystem.hasNPCQuest(requirement.npcId, requirement.questId)) {
                        return false;
                    }
                    break;
                default:
                    return false;
            }
        }

        return true;
    }

    /**
     * Record action usage for cooldown tracking
     * @param {string} actionName - Name of the action used
     */
    recordActionUsage(actionName) {
        this.actionCooldowns.set(actionName, Date.now());
    }

    /**
     * Get remaining cooldown time for an action
     * @param {string} actionName - Name of the action
     * @param {number} cooldownTime - Cooldown time in milliseconds
     * @returns {number} Remaining cooldown time in milliseconds
     */
    getRemainingCooldown(actionName, cooldownTime) {
        const lastUsed = this.actionCooldowns.get(actionName);
        if (!lastUsed) return 0;

        const timeSinceLastUse = Date.now() - lastUsed;
        const remaining = cooldownTime - timeSinceLastUse;
        return Math.max(0, remaining);
    }

    /**
     * Update game time
     * @param {Object} timeData - New time data
     */
    updateGameTime(timeData) {
        this.gameTime = { ...this.gameTime, ...timeData };
        if (this.eventSystem) {
            this.eventSystem.emit('time:update', timeData);
        }
    }

    /**
     * Update weather
     * @param {Object} weatherData - New weather data
     */
    updateWeather(weatherData) {
        this.weather = { ...this.weather, ...weatherData };
        if (this.eventSystem) {
            this.eventSystem.emit('weather:change', weatherData);
        }
    }

    /**
     * Update player status
     * @param {Object} statusData - New status data
     */
    updatePlayerStatus(statusData) {
        this.playerStatus = { ...this.playerStatus, ...statusData };
        if (this.eventSystem) {
            this.eventSystem.emit('player:status:update', statusData);
        }
    }

    /**
     * Notify systems of availability changes
     */
    _notifyAvailabilityChange() {
        if (this.eventSystem) {
            this.eventSystem.emit('action:availability:changed', {
                gameTime: this.gameTime,
                weather: this.weather,
                playerStatus: this.playerStatus
            });
        }
    }

    /**
     * Get current game state for debugging
     * @returns {Object} Current state information
     */
    getDebugInfo() {
        return {
            gameTime: this.gameTime,
            weather: this.weather,
            playerStatus: this.playerStatus,
            activeCooldowns: Array.from(this.actionCooldowns.entries()).map(([action, timestamp]) => ({
                action,
                lastUsed: new Date(timestamp).toISOString(),
                timeSince: Date.now() - timestamp
            })),
            ruleCount: this.availabilityRules.size
        };
    }
}

if (typeof window !== 'undefined') window.ActionAvailabilityEngine = ActionAvailabilityEngine;

// ES Module exports
export { ActionAvailabilityEngine }; 