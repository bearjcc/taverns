/**
 * Action System
 * 
 * Manages skill actions, their execution, and coordination between
 * different game systems (skills, inventory, etc.).
 */

class ActionSystem {
    constructor(actionsConfig, skillSystem, inventorySystem, stateManager, eventSystem) {
        this.actionsConfig = actionsConfig;
        this.skillSystem = skillSystem;
        this.inventorySystem = inventorySystem;
        this.stateManager = stateManager;
        this.eventSystem = eventSystem;
        
        this.actions = new Map(); // Map of actionName -> Action
        this.actionHistory = [];
        this.maxHistorySize = 50;
        
        // Bind methods to maintain context
        this.executeAction = this.executeAction.bind(this);
        this.getAvailableActions = this.getAvailableActions.bind(this);
    }
    
    /**
     * Initialize the action system
     */
    async initialize() {
        try {
            console.log('Initializing action system...');
            
            // Load actions from configuration
            this.loadFromConfig();
            
            // Set up event listeners
            this._setupEventListeners();
            
            console.log('Action system initialized successfully');
            this.eventSystem.emit('actionSystem:initialized', { 
                actionsCount: this.actions.size 
            });
            
        } catch (error) {
            console.error('Failed to initialize action system:', error);
            this.eventSystem.emit('actionSystem:initError', { error });
            throw error;
        }
    }
    
    /**
     * Load actions from configuration
     */
    loadFromConfig() {
        try {
            console.log('Loading actions from configuration...');
            this.actions.clear();
    
            // Load actions from gameConfig
            if (this.actionsConfig && this.actionsConfig.skills) {
                Object.entries(this.actionsConfig.skills).forEach(([skillKey, skillData]) => {
                    const actions = skillData.actions || [];
                    actions.forEach(actionData => {
                        const action = {
                            name: actionData.name,
                            description: actionData.description,
                            levelRequired: actionData.levelRequired,
                            xpReward: actionData.xpReward,
                            itemReward: actionData.itemReward,
                            itemCount: actionData.itemCount || 1,
                            skillType: skillKey,
                            unlockMessage: actionData.unlockMessage,
                            flavorText: actionData.flavorText,
                            requirements: actionData.requirements || {},
                            cooldown: actionData.cooldown || 0,
                            lastUsed: 0
                        };
                        
                        this.actions.set(action.name, action);
                    });
                });
            }
            
            console.log('Actions loaded:', this.actions.size);
    
        } catch (error) {
            console.error('Error loading actions into ActionSystem:', error);
            throw error;
        }
    }
    
    /**
     * Execute a skill action
     * @param {string} actionName - Name of the action to execute
     * @returns {Object} Result of the action execution
     */
    executeAction(actionName) {
        const action = this.actions.get(actionName);
        if (!action) {
            console.error(`Action '${actionName}' not found`);
            return { success: false, error: 'Action not found' };
        }
        
        // Check if action is available
        const availableActions = this.getAvailableActions();
        const isAvailable = availableActions.some(a => a.name === actionName);
        
        if (!isAvailable) {
            console.warn(`Action '${actionName}' is not available`);
            return { success: false, error: 'Action not available' };
        }
        
        // Check cooldown
        const now = Date.now();
        if (action.cooldown > 0 && (now - action.lastUsed) < action.cooldown) {
            const remainingCooldown = action.cooldown - (now - action.lastUsed);
            return { 
                success: false, 
                error: 'Action on cooldown', 
                remainingCooldown 
            };
        }
        
        // Check requirements
        const requirementsCheck = this._checkRequirements(action);
        if (!requirementsCheck.met) {
            return { 
                success: false, 
                error: 'Requirements not met', 
                missingRequirements: requirementsCheck.missing 
            };
        }
        
        try {
            // Execute the action
            const result = this._performAction(action);
            
            // Update last used time
            action.lastUsed = now;
            
            // Add to history
            this._addToHistory(actionName, result);
            
            // Emit action executed event
            this.eventSystem.emit('action:executed', {
                actionName,
                action,
                result
            });
            
            return { success: true, result };
            
        } catch (error) {
            console.error(`Error executing action '${actionName}':`, error);
            return { success: false, error: error.message };
        }
    }
    
    /**
     * Get all available actions
     * @returns {Array} Array of available actions
     */
    getAvailableActions() {
        return this.skillSystem.getAllAvailableActions();
    }
    
    /**
     * Get action by name
     * @param {string} actionName - Name of the action
     * @returns {Object|null} Action object or null if not found
     */
    getAction(actionName) {
        return this.actions.get(actionName);
    }
    
    /**
     * Get all actions
     * @returns {Array} Array of all actions
     */
    getAllActions() {
        return Array.from(this.actions.values());
    }
    
    /**
     * Get actions for a specific skill
     * @param {string} skillName - Name of the skill
     * @returns {Array} Array of actions for the skill
     */
    getActionsForSkill(skillName) {
        return Array.from(this.actions.values())
            .filter(action => action.skillType === skillName);
    }
    
    /**
     * Get action history
     * @param {number} limit - Maximum number of actions to return
     * @returns {Array} Array of recent actions
     */
    getHistory(limit = null) {
        let history = this.actionHistory;
        
        if (limit) {
            history = history.slice(-limit);
        }
        
        return history;
    }
    
    /**
     * Clear action history
     */
    clearHistory() {
        this.actionHistory = [];
    }
    
    /**
     * Get action statistics
     * @returns {Object} Action system statistics
     */
    getStats() {
        const totalExecutions = this.actionHistory.length;
        const uniqueActions = new Set(this.actionHistory.map(h => h.actionName)).size;
        
        return {
            totalActions: this.actions.size,
            totalExecutions,
            uniqueActionsExecuted: uniqueActions,
            historySize: this.actionHistory.length
        };
    }
    
    // Private methods
    
    /**
     * Check if action requirements are met
     * @param {Object} action - Action object
     * @returns {Object} Requirements check result
     */
    _checkRequirements(action) {
        const requirements = action.requirements || {};
        const missing = [];
        
        // Check skill level requirements
        if (requirements.skillLevel) {
            for (const [skillName, level] of Object.entries(requirements.skillLevel)) {
                const skill = this.skillSystem.getSkill(skillName);
                if (!skill || skill.level < level) {
                    missing.push(`Skill ${skillName} level ${level}`);
                }
            }
        }
        
        // Check item requirements
        if (requirements.items) {
            for (const [itemId, quantity] of Object.entries(requirements.items)) {
                if (!this.inventorySystem.hasItem(itemId, quantity)) {
                    missing.push(`Item ${itemId} x${quantity}`);
                }
            }
        }
        
        return {
            met: missing.length === 0,
            missing
        };
    }
    
    /**
     * Perform the actual action
     * @param {Object} action - Action object
     * @returns {Object} Action result
     */
    _performAction(action) {
        const result = {
            xpGained: 0,
            itemsGained: [],
            itemsConsumed: [],
            messages: []
        };
        
        // Add XP to skill
        if (action.xpReward > 0) {
            const levelUps = this.skillSystem.addSkillXp(action.skillType, action.xpReward);
            result.xpGained = action.xpReward;
            result.levelUps = levelUps;
            
            if (levelUps > 0) {
                result.messages.push(`🎉 ${action.skillType} level up!`);
            }
        }
        
        // Consume required items
        if (action.requirements && action.requirements.items) {
            for (const [itemId, quantity] of Object.entries(action.requirements.items)) {
                if (this.inventorySystem.removeItem(itemId, quantity)) {
                    result.itemsConsumed.push({ itemId, quantity });
                }
            }
        }
        
        // Add reward items
        if (action.itemReward) {
            if (this.inventorySystem.addItem(action.itemReward, action.itemCount)) {
                result.itemsGained.push({ 
                    itemId: action.itemReward, 
                    quantity: action.itemCount 
                });
            }
        }
        
        // Add flavor text
        if (action.flavorText) {
            result.messages.push(action.flavorText);
        }
        
        return result;
    }
    
    /**
     * Add action to history
     * @param {string} actionName - Name of the action
     * @param {Object} result - Action result
     */
    _addToHistory(actionName, result) {
        const historyEntry = {
            actionName,
            timestamp: Date.now(),
            result
        };
        
        this.actionHistory.push(historyEntry);
        
        // Trim history if too long
        if (this.actionHistory.length > this.maxHistorySize) {
            this.actionHistory = this.actionHistory.slice(-this.maxHistorySize);
        }
    }
    
    /**
     * Set up event listeners
     */
    _setupEventListeners() {
        // Listen for skill level ups to check for new action unlocks
        this.eventSystem.on('skill:xpGained', (data) => {
            if (data.levelUps > 0) {
                // Check if any new actions were unlocked
                const skillActions = this.getActionsForSkill(data.skillName);
                const newUnlocks = skillActions.filter(action => 
                    action.levelRequired === data.newLevel
                );
                
                newUnlocks.forEach(action => {
                    this.eventSystem.emit('action:unlocked', {
                        actionName: action.name,
                        skillName: data.skillName,
                        level: action.levelRequired,
                        unlockMessage: action.unlockMessage
                    });
                });
            }
        });
        
        // Listen for inventory changes
        this.eventSystem.on('inventory:itemAdded', (data) => {
            // Could trigger actions that depend on having certain items
        });
        
        this.eventSystem.on('inventory:itemRemoved', (data) => {
            // Could disable actions that require certain items
        });
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ActionSystem;
} 