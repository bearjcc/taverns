class ActionManager {
    constructor() {
        this.actions = new Map();
        this.newlyUnlockedActions = new Set();
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
                                actionData.skillType
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

    getAvailableActions(skillManager, inventoryManager) {
        const availableActions = [];
        
        for (const action of this.actions.values()) {
            const skill = skillManager.getSkill(action.skillType);
            if (skill) {
                availableActions.push(action);
            }
        }
        
        return availableActions;
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
                uiManager.showToast(message, 'success');
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