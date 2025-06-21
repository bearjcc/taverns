class ConfigManager {
    constructor() {
        this.gameConfig = null;
        this.skillsConfig = null;
        this.traitsConfig = null;
        this.defaultConfig = this.getDefaultConfig();
    }

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

    async loadAllConfigs() {
        const [gameConfig, skillsConfig, traitsConfig] = await Promise.all([
            this.loadGameConfig(),
            this.loadSkillsConfig(),
            this.loadTraitsConfig()
        ]);

        return {
            gameConfig,
            skillsConfig,
            traitsConfig
        };
    }

    getGameConfig() {
        return this.gameConfig || this.defaultConfig;
    }

    getSkillsConfig() {
        return this.skillsConfig || {};
    }

    getTraitsConfig() {
        return this.traitsConfig || { traits: {} };
    }

    getMessage(key, replacements = {}) {
        const messages = this.getGameConfig().messages || {};
        let message = messages[key] || key;
        
        for (const [placeholder, value] of Object.entries(replacements)) {
            message = message.replace(new RegExp(`{${placeholder}}`, 'g'), value);
        }
        
        return message;
    }

    getConstant(key, defaultValue = null) {
        const constants = this.getGameConfig().constants || {};
        return constants[key] !== undefined ? constants[key] : defaultValue;
    }

    getUIConfig() {
        return this.getGameConfig().ui || {};
    }

    getActionsConfig() {
        return this.getGameConfig().actions || {};
    }

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

    updateConfig(newConfig) {
        this.gameConfig = this.deepMerge(this.gameConfig || this.defaultConfig, newConfig);
        return this.gameConfig;
    }

    resetToDefault() {
        this.gameConfig = this.defaultConfig;
        return this.gameConfig;
    }
} 