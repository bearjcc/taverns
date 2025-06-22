/**
 * Manages all game configuration files and provides centralized access to game settings.
 * Handles loading, validation, and merging of configuration data with fallback defaults.
 * 
 * @class ConfigManager
 */
class ConfigManager {
    /**
     * Creates a new ConfigManager instance.
     * Initializes configuration storage and loads default configuration.
     */
    constructor() {
        /** @type {Object|null} The loaded game configuration */
        this.gameConfig = null;
        
        /** @type {Object|null} The loaded skills configuration */
        this.skillsConfig = null;
        
        /** @type {Object|null} The loaded traits configuration */
        this.traitsConfig = null;
        
        /** @type {Object|null} The loaded actions configuration */
        this.actionsConfig = null;
        
        /** @type {Object} The default configuration fallback */
        this.defaultConfig = this.getDefaultConfig();
    }

    /**
     * Returns the default configuration object used as fallback when loading fails.
     * 
     * @returns {Object} The default configuration object
     */
    getDefaultConfig() {
        return {
            ui: {
                cssClasses: {
                    skillItem: 'skill-item',
                    skillHeader: 'skill-header',
                    skillName: 'skill-name',
                    skillLevel: 'skill-level',
                    skillProgressContainer: 'skill-progress-container',
                    skillProgressBar: 'skill-progress-bar',
                    skillProgressFill: 'skill-progress-fill',
                    skillXp: 'skill-xp',
                    actionButton: 'action-button',
                    newUnlock: 'new-unlock',
                    narrationMessage: 'narration-message',
                    tabButton: 'tab-button',
                    tabPanel: 'tab-panel',
                    active: 'active',
                    toast: 'toast',
                    toastContainer: 'toast-container'
                },
                elementIds: {
                    narrationContent: 'narration-content',
                    skillsContent: 'skills-content',
                    actionsContent: 'actions-content',
                    toastContainer: 'toast-container'
                },
                tabs: [
                    {
                        id: 'skills',
                        displayName: 'Skills',
                        icon: '⚔️'
                    },
                    {
                        id: 'inventory',
                        displayName: 'Inventory',
                        icon: '🎒'
                    },
                    {
                        id: 'character',
                        displayName: 'Character',
                        icon: '👤'
                    },
                    {
                        id: 'quests',
                        displayName: 'Quests',
                        icon: '🗺️'
                    }
                ]
            },
            constants: {
                xpMultiplier: 100,
                defaultLevel: 1,
                defaultXp: 0,
                progressMax: 100
            },
            skills: {},
            messages: {
                welcome: 'Welcome to Taverns and Treasures! Your adventure begins...',
                levelUp: '🎉 {skillName} level up! You are now level {level}.',
                actionUnlocked: '🔓 New action unlocked: {actionName} (Level {level})',
                actionCompleted: 'You {actionName} and gained {xpReward} XP. ({itemReward}: {itemCount})',
                configError: 'Error: Could not load game configuration. Please refresh the page.',
                configLoaded: 'Game configuration loaded successfully',
                skillsConfigLoaded: 'Skills configuration loaded successfully',
                skillsConfigError: 'Error: Could not load skills configuration.',
                gameSaved: '🔄 Game progress saved',
                gameLoaded: '📥 Welcome back! Your progress has been loaded',
                noSaveFound: '🆕 No saved game found. Starting a new game',
                saveError: '⚠️ Failed to save game progress',
                loadError: '⚠️ Failed to load saved game',
                actionInsufficientItems: 'Insufficient items to perform the action: {itemName}',
                actionItemsConsumed: 'You consumed {itemCount}x {itemName}',
                actionItemsGained: 'You gained {itemCount}x {itemName}',
                actionTimeRequired: 'This action requires {time} {timeUnit} to complete'
            },
            gameSettings: {
                initialWood: 0
            }
        };
    }

    /**
     * Loads the game configuration file from data/config/game-config.json.
     * 
     * @async
     * @returns {Promise<Object>} The loaded and merged game configuration
     * @throws {Error} If the configuration file cannot be loaded or parsed
     */
    async loadGameConfig() {
        try {
            const response = await fetch('data/config/game-config.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const config = await response.json();
            this.gameConfig = this.deepMerge(this.defaultConfig, config);
            console.log('Game configuration loaded successfully');
            return this.gameConfig;
        } catch (error) {
            console.error('Failed to load game configuration:', error);
            this.gameConfig = this.defaultConfig;
            return this.gameConfig;
        }
    }

    /**
     * Loads the skills configuration file from data/skills.json.
     * 
     * @async
     * @returns {Promise<Object>} The loaded skills configuration
     * @throws {Error} If the skills configuration file cannot be loaded or parsed
     */
    async loadSkillsConfig() {
        try {
            const response = await fetch('data/skills.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            this.skillsConfig = await response.json();
            console.log('Skills configuration loaded successfully');
            return this.skillsConfig;
        } catch (error) {
            console.error('Failed to load skills configuration:', error);
            this.skillsConfig = {};
            return this.skillsConfig;
        }
    }

    /**
     * Loads the traits configuration file from data/traits.json.
     * 
     * @async
     * @returns {Promise<Object>} The loaded traits configuration
     * @throws {Error} If the traits configuration file cannot be loaded or parsed
     */
    async loadTraitsConfig() {
        try {
            const response = await fetch('data/traits.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            this.traitsConfig = await response.json();
            console.log('Traits configuration loaded successfully');
            return this.traitsConfig;
        } catch (error) {
            console.error('Failed to load traits configuration:', error);
            this.traitsConfig = { traits: {} };
            return this.traitsConfig;
        }
    }

    /**
     * Loads the actions configuration file from data/config/actions.json.
     * 
     * @async
     * @returns {Promise<Object>} The loaded actions configuration
     * @throws {Error} If the actions configuration file cannot be loaded or parsed
     */
    async loadActionsConfig() {
        try {
            const response = await fetch('data/config/actions.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            this.actionsConfig = await response.json();
            console.log('Actions configuration loaded successfully');
            return this.actionsConfig;
        } catch (error) {
            console.error('Failed to load actions configuration:', error);
            this.actionsConfig = {};
            return this.actionsConfig;
        }
    }

    /**
     * Loads all configuration files concurrently.
     * 
     * @async
     * @returns {Promise<Object>} Object containing all loaded configurations
     */
    async loadAllConfigs() {
        const [gameConfig, skillsConfig, traitsConfig, actionsConfig] = await Promise.all([
            this.loadGameConfig(),
            this.loadSkillsConfig(),
            this.loadTraitsConfig(),
            this.loadActionsConfig()
        ]);

        return {
            gameConfig,
            skillsConfig,
            traitsConfig,
            actionsConfig
        };
    }

    /**
     * Gets the current game configuration, falling back to default if not loaded.
     * 
     * @returns {Object} The game configuration object
     */
    getGameConfig() {
        return this.gameConfig || this.defaultConfig;
    }

    /**
     * Gets the current skills configuration, falling back to empty object if not loaded.
     * 
     * @returns {Object} The skills configuration object
     */
    getSkillsConfig() {
        return this.skillsConfig || {};
    }

    /**
     * Gets the current traits configuration, falling back to empty object if not loaded.
     * 
     * @returns {Object} The traits configuration object
     */
    getTraitsConfig() {
        return this.traitsConfig || { traits: {} };
    }

    /**
     * Gets the current actions configuration, falling back to empty object if not loaded.
     * 
     * @returns {Object} The actions configuration object
     */
    getActionsConfig() {
        return this.actionsConfig || {};
    }

    /**
     * Gets a message from the configuration and replaces placeholders with provided values.
     * 
     * @param {string} key - The message key to retrieve
     * @param {Object} [replacements={}] - Object containing placeholder replacements
     * @returns {string} The processed message with replacements applied
     */
    getMessage(key, replacements = {}) {
        const messages = this.getGameConfig().messages || {};
        let message = messages[key] || key;
        
        for (const [placeholder, value] of Object.entries(replacements)) {
            message = message.replace(new RegExp(`{${placeholder}}`, 'g'), value);
        }
        
        return message;
    }

    /**
     * Gets a constant value from the configuration with optional default fallback.
     * 
     * @param {string} key - The constant key to retrieve
     * @param {*} [defaultValue=null] - Default value if key is not found
     * @returns {*} The constant value or default
     */
    getConstant(key, defaultValue = null) {
        const constants = this.getGameConfig().constants || {};
        return constants[key] !== undefined ? constants[key] : defaultValue;
    }

    /**
     * Gets the UI configuration section from the game configuration.
     * 
     * @returns {Object} The UI configuration object
     */
    getUIConfig() {
        return this.getGameConfig().ui || {};
    }

    /**
     * Performs a deep merge of two objects, with source properties overriding target properties.
     * Arrays in the source completely replace arrays in the target.
     *
     * @param {Object} target - The target object to merge into
     * @param {Object} source - The source object to merge from
     * @returns {Object} The merged object
     */
    deepMerge(target, source) {
        const result = { ...target };
        for (const key in source) {
            if (source.hasOwnProperty(key)) {
                if (Array.isArray(source[key])) {
                    // Replace arrays entirely
                    result[key] = source[key].slice();
                } else if (
                    source[key] instanceof Object &&
                    key in target &&
                    target[key] instanceof Object &&
                    !Array.isArray(target[key])
                ) {
                    result[key] = this.deepMerge(target[key], source[key]);
                } else {
                    result[key] = source[key];
                }
            }
        }
        return result;
    }

    /**
     * Updates the current configuration with new configuration data.
     * 
     * @param {Object} newConfig - The new configuration to merge
     */
    updateConfig(newConfig) {
        this.gameConfig = this.deepMerge(this.gameConfig || this.defaultConfig, newConfig);
    }

    /**
     * Resets the configuration to the default values.
     */
    resetToDefault() {
        this.gameConfig = this.defaultConfig;
    }
}

if (typeof window !== 'undefined') window.ConfigManager = ConfigManager;

// ES Module exports
export { ConfigManager }; 