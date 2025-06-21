class ActionManager {
    constructor() {
        this.actions = new Map();
        this.newlyUnlockedActions = new Set();
        this.locationSystem = null;
    }

    loadFromConfig(actionsConfig) {
        try {
            console.log('Loading actions...');
            this.actions.clear();

            if (actionsConfig) {
                for (const [skillType, skillData] of Object.entries(actionsConfig)) {
                    if (skillData.actions) {
                        for (const actionData of skillData.actions) {
                            const action = new Action(
                                actionData.name,
                                actionData.displayName,
                                actionData.description,
                                actionData.icon,
                                actionData.tooltip,
                                actionData.levelRequired,
                                actionData.xpReward,
                                actionData.timeRequired,
                                actionData.timeUnit,
                                actionData.itemReward,
                                actionData.itemCount,
                                actionData.itemConsumption,
                                actionData.unlockMessage,
                                actionData.flavorText,
                                actionData.skillType,
                                actionData.variables
                            );
                            this.actions.set(actionData.name, action);
                        }
                    }
                }
            }
            
            console.log(`Loaded ${this.actions.size} actions`);
        } catch (error) {
            console.error('Error loading actions:', error);
        }
    }

    /**
     * Set the location system reference
     * @param {LocationSystem} locationSystem - The location system instance
     */
    setLocationSystem(locationSystem) {
        this.locationSystem = locationSystem;
    }

    getAction(actionName) {
        return this.actions.get(actionName);
    }

    getAllActions() {
        return Array.from(this.actions.values());
    }

    getAvailableActions(skillManager, inventoryManager) {
        const availableActions = [];
        
        // Get location-based actions if location system is available
        let locationActions = [];
        if (this.locationSystem) {
            locationActions = this.locationSystem.getAvailableActions();
        }
        
        for (const action of this.actions.values()) {
            const skill = skillManager.getSkill(action.skillType);
            if (skill) {
                // Check if action is available at current location
                if (locationActions.length === 0 || locationActions.includes(action.name)) {
                    availableActions.push(action);
                }
            }
        }
        
        return availableActions;
    }

    /**
     * Get actions available at a specific spot
     * @param {string} spotId - The spot ID
     * @param {SkillManager} skillManager - The skill manager
     * @param {InventoryManager} inventoryManager - The inventory manager
     * @returns {Array} Array of available actions
     */
    getActionsForSpot(spotId, skillManager, inventoryManager) {
        if (!this.locationSystem) {
            return this.getAvailableActions(skillManager, inventoryManager);
        }

        const spot = this.locationSystem._findSpotById(spotId);
        if (!spot || !spot.actions) {
            return [];
        }

        const availableActions = [];
        for (const actionName of spot.actions) {
            const action = this.actions.get(actionName);
            if (action) {
                const skill = skillManager.getSkill(action.skillType);
                if (skill) {
                    availableActions.push(action);
                }
            }
        }

        return availableActions;
    }

    /**
     * Get travel actions for current location
     * @param {LocationSystem} locationSystem - The location system
     * @param {Object} playerState - Current player state
     * @returns {Array} Array of travel actions
     */
    getTravelActions(locationSystem, playerState) {
        if (!locationSystem) return [];

        const availableSpots = locationSystem.getAvailableSpots();
        const travelActions = [];

        for (const spot of availableSpots) {
            const travelCheck = locationSystem.canTravelToSpot(spot.id, playerState);
            if (travelCheck.canTravel) {
                travelActions.push({
                    name: `travel_to_${spot.id}`,
                    displayName: `Travel to ${spot.name}`,
                    description: spot.description,
                    icon: "🚶",
                    tooltip: `Travel to ${spot.name} (${spot.travelTime} minutes)`,
                    levelRequired: 1,
                    xpReward: 0,
                    timeRequired: spot.travelTime || 1,
                    timeUnit: "minutes",
                    itemReward: null,
                    itemCount: 0,
                    itemConsumption: spot.travelCost?.items || {},
                    unlockMessage: "",
                    flavorText: `You travel to ${spot.name}.`,
                    skillType: "travel",
                    isTravelAction: true,
                    targetSpotId: spot.id
                });
            }
        }

        return travelActions;
    }

    markActionAsNewlyUnlocked(actionName) {
        this.newlyUnlockedActions.add(actionName);
    }

    isNewlyUnlocked(actionName) {
        return this.newlyUnlockedActions.has(actionName);
    }

    markActionUsed(actionName) {
        this.newlyUnlockedActions.delete(actionName);
    }

    checkForNewUnlocks(skillName, fromLevel, toLevel) {
        for (const action of this.actions.values()) {
            if (action.skillType === skillName && 
                action.levelRequired > fromLevel && 
                action.levelRequired <= toLevel) {
                this.markActionAsNewlyUnlocked(action.name);
                const message = configManager.getMessage('actionUnlocked', {
                    actionName: action.displayName,
                    level: action.levelRequired
                });
                uiManager.addNarrationMessage(message);
            }
        }
    }
}

// Action class for defining game actions
class Action {
    constructor(name, displayName, description, icon, tooltip, levelRequired, xpReward, timeRequired, timeUnit, itemReward, itemCount, itemConsumption, unlockMessage, flavorText, skillType, variables = null) {
        this.name = name;
        this.displayName = displayName;
        this.description = description;
        this.icon = icon;
        this.tooltip = tooltip;
        this.levelRequired = levelRequired;
        this.xpReward = xpReward;
        this.timeRequired = timeRequired || 0;
        this.timeUnit = timeUnit || 'minutes';
        this.itemReward = itemReward;
        this.itemCount = itemCount || 1;
        this.itemConsumption = itemConsumption || {};
        this.unlockMessage = unlockMessage;
        this.flavorText = flavorText;
        this.skillType = skillType;
        this.variables = variables;
        this.isTravelAction = false;
        this.targetSpotId = null;
    }

    canPerform(skillLevel, inventoryManager) {
        if (skillLevel < this.levelRequired) {
            return false;
        }

        // Check if player has required items
        for (const [itemId, requiredQuantity] of Object.entries(this.itemConsumption)) {
            if (!inventoryManager.hasItem(itemId, requiredQuantity)) {
                return false;
            }
        }

        return true;
    }

    getTimeDisplay() {
        if (this.timeRequired <= 0) return '';
        
        const timeValue = this.timeRequired === Math.floor(this.timeRequired) 
            ? this.timeRequired 
            : this.timeRequired.toFixed(1);
        
        return `${timeValue} ${this.timeUnit}`;
    }

    hasVariables() {
        return this.variables !== null && Object.keys(this.variables).length > 0;
    }
} 