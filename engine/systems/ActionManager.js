class ActionManager {
    constructor(eventSystem, stateManager) {
        this.actions = new Map();
        this.newlyUnlockedActions = new Set();
        this.locationSystem = null;
        this.configManager = null;
        this.uiManager = null;
        this.skillManager = null;
        this.inventoryManager = null;
        this.questSystem = null;
        this.npcSystem = null;
        this.eventSystem = eventSystem;
        this.stateManager = stateManager;
        
        // Initialize availability engine
        this.availabilityEngine = new ActionAvailabilityEngine(eventSystem, stateManager);
    }

    /**
     * Set the configuration manager reference
     * @param {ConfigManager} configManager - The configuration manager instance
     */
    setConfigManager(configManager) {
        this.configManager = configManager;
    }

    /**
     * Set the UI manager reference
     * @param {UIManager} uiManager - The UI manager instance
     */
    setUIManager(uiManager) {
        this.uiManager = uiManager;
    }

    /**
     * Set the skill manager reference
     * @param {SkillManager} skillManager - The skill manager instance
     */
    setSkillSystem(skillManager) {
        this.skillManager = skillManager;
    }

    /**
     * Set the inventory manager reference
     * @param {InventoryManager} inventoryManager - The inventory manager instance
     */
    setInventorySystem(inventoryManager) {
        this.inventoryManager = inventoryManager;
    }

    /**
     * Set the location system reference
     * @param {LocationSystem} locationSystem - The location system instance
     */
    setLocationSystem(locationSystem) {
        this.locationSystem = locationSystem;
    }

    /**
     * Set the quest system reference
     * @param {QuestSystem} questSystem - The quest system instance
     */
    setQuestSystem(questSystem) {
        this.questSystem = questSystem;
    }

    /**
     * Set the NPC system reference
     * @param {NPCSystem} npcSystem - The NPC system instance
     */
    setNPCSystem(npcSystem) {
        this.npcSystem = npcSystem;
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
                                actionData.variables,
                                actionData.availability || {}
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

    getAction(actionName) {
        return this.actions.get(actionName);
    }

    getAllActions() {
        return Array.from(this.actions.values());
    }

    getAvailableActions() {
        const availableActions = [];
        
        for (const action of this.actions.values()) {
            const skill = this.skillManager ? this.skillManager.getSkill(action.skillType) : null;
            if (!skill) continue;

            // Check basic skill level requirement
            if (skill.level < action.levelRequired) continue;

            // Check dynamic availability using the availability engine
            const context = this._buildActionContext();
            const availability = this.availabilityEngine.checkActionAvailability(action, context);
            
            if (availability.available) {
                // Add availabilityInfo to the action instance without losing prototype methods
                action.availabilityInfo = availability;
                availableActions.push(action);
            }
        }
        
        return availableActions;
    }

    /**
     * Build context object for action availability checking
     * @returns {Object} Context object with all necessary systems
     */
    _buildActionContext() {
        return {
            currentLocation: this.locationSystem ? this.locationSystem.getCurrentLocation() : null,
            locationSystem: this.locationSystem,
            inventoryManager: this.inventoryManager,
            skillManager: this.skillManager,
            questSystem: this.questSystem,
            npcSystem: this.npcSystem,
            configManager: this.configManager,
            uiManager: this.uiManager
        };
    }

    /**
     * Execute an action
     * @param {string} actionName - The name of the action to execute
     * @param {*} variable - Optional variable parameter
     * @returns {Object} Result of the action execution
     */
    executeAction(actionName, variable = null) {
        const action = this.getAction(actionName);
        if (!action) {
            return { success: false, message: 'Action not found' };
        }

        const skill = this.skillManager ? this.skillManager.getSkill(action.skillType) : null;
        if (!skill) {
            return { success: false, message: 'Skill not found' };
        }

        // Check dynamic availability before execution
        const context = this._buildActionContext();
        const availability = this.availabilityEngine.checkActionAvailability(action, context);
        
        if (!availability.available) {
            const reason = availability.reasons.length > 0 ? availability.reasons[0] : 'Action not available';
            return { success: false, message: reason };
        }

        // Check if player can perform the action (basic requirements)
        if (!action.canPerform(skill.level, this.inventoryManager)) {
            return { success: false, message: `Requires ${action.skillType} level ${action.levelRequired}` };
        }

        // Handle item consumption
        for (const [itemId, requiredQuantity] of Object.entries(action.itemConsumption)) {
            if (!this.inventoryManager || !this.inventoryManager.hasItem(itemId, requiredQuantity)) {
                const itemName = this.inventoryManager ? this.inventoryManager.getGameObject(itemId)?.displayName || itemId : itemId;
                const message = this.configManager ? this.configManager.getMessage('actionInsufficientItems', { itemName }) : `Insufficient ${itemName}`;
                return { success: false, message };
            }
        }

        // Consume items
        for (const [itemId, quantity] of Object.entries(action.itemConsumption)) {
            if (this.inventoryManager) {
                this.inventoryManager.removeItem(itemId, quantity);
                
                // Emit item consumed event for achievement tracking
                if (this.eventSystem) {
                    this.eventSystem.emit('item:consumed', {
                        itemId: itemId,
                        quantity: quantity,
                        actionName: actionName
                    });
                }
            }
        }

        // Record action usage for cooldown tracking
        if (action.availability && action.availability.cooldown) {
            this.availabilityEngine.recordActionUsage(actionName);
        }

        // Perform action and gain XP
        const xpGained = action.performAction(skill, variable);
        const itemReward = action.itemReward;
        const itemCount = action.itemRewardQuantity || 1;

        if (itemReward && this.inventoryManager) {
            this.inventoryManager.addItem(itemReward, itemCount);
            
            // Emit crafting completed event for achievement tracking
            if (this.eventSystem && action.skillType === 'crafting') {
                this.eventSystem.emit('craft:completed', {
                    itemId: itemReward,
                    quantity: itemCount,
                    actionName: actionName
                });
            }
        }

        return {
            success: true,
            xpGained,
            itemGained: itemReward,
            itemCount,
            message: action.flavorText || 'Action completed successfully'
        };
    }

    /**
     * Get actions available at a specific spot
     * @param {string} spotId - The spot ID
     * @returns {Array} Array of available actions
     */
    getActionsForSpot(spotId) {
        if (!this.locationSystem) {
            return this.getAvailableActions();
        }

        const spot = this.locationSystem._findSpotById(spotId);
        if (!spot || !spot.actions) {
            return [];
        }

        const availableActions = [];
        for (const actionName of spot.actions) {
            const action = this.actions.get(actionName);
            if (action) {
                const skill = this.skillManager ? this.skillManager.getSkill(action.skillType) : null;
                if (skill) {
                    // Check dynamic availability
                    const context = this._buildActionContext();
                    const availability = this.availabilityEngine.checkActionAvailability(action, context);
                    
                    if (availability.available) {
                        // Add availabilityInfo to the action instance without losing prototype methods
                        action.availabilityInfo = availability;
                        availableActions.push(action);
                    }
                }
            }
        }

        return availableActions;
    }

    /**
     * Get travel actions for current location
     * @param {Object} playerState - Current player state
     * @returns {Array} Array of travel actions
     */
    getTravelActions(playerState) {
        if (!this.locationSystem) return [];

        const availableSpots = this.locationSystem.getAvailableSpots();
        const travelActions = [];

        for (const spot of availableSpots) {
            const travelCheck = this.locationSystem.canTravelToSpot(spot.id, playerState);
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
                if (this.configManager && this.uiManager) {
                    const message = this.configManager.getMessage('actionUnlocked', {
                        actionName: action.displayName,
                        level: action.levelRequired
                    });
                    this.uiManager.addNarrationMessage(message);
                }
            }
        }
    }
}

// Action class for defining game actions
class Action {
    constructor(name, displayName, description, icon, tooltip, levelRequired, xpReward, timeRequired, timeUnit, itemReward, itemCount, itemConsumption, unlockMessage, flavorText, skillType, variables = null, availability = {}) {
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
        this.itemRewardQuantity = itemCount || 1;
        this.itemConsumption = itemConsumption || {};
        this.unlockMessage = unlockMessage;
        this.flavorText = flavorText;
        this.skillType = skillType;
        this.variables = variables;
        this.isTravelAction = false;
        this.targetSpotId = null;
        this.availability = availability;
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

    performAction(skill, variable = null) {
        // Calculate XP based on variable amount if provided
        let xpToGain = this.xpReward;
        if (variable && this.variables && this.variables.amount) {
            xpToGain = this.xpReward * variable;
        }
        
        // Add XP to the skill
        if (skill && xpToGain > 0) {
            skill.addXp(xpToGain);
        }
        
        return xpToGain;
    }
}

if (typeof window !== 'undefined') window.ActionManager = ActionManager; 