class GameStateManager {
    constructor() {
        this.autoSaveInterval = null;
        this.autoSaveIntervalMinutes = 2;
    }

    saveGameState(skillManager, inventoryManager, traitManager) {
        try {
            const gameState = {
                skills: {},
                inventory: {},
                traits: {},
                lastSaved: new Date().toISOString()
            };

            // Save skills
            const skills = skillManager.getAllSkills();
            for (const skill of skills) {
                gameState.skills[skill.name] = {
                    level: skill.level,
                    experience: skill.xp
                };
            }

            // Save inventory
            const items = inventoryManager.getAllItems();
            for (const item of items) {
                gameState.inventory[item.gameObject.id] = {
                    quantity: item.quantity
                };
            }

            // Save traits
            const traits = traitManager.getAllTraits();
            for (const trait of traits) {
                gameState.traits[trait.name] = {
                    level: trait.level,
                    experience: trait.xp
                };
            }

            // Save achievements if achievementSystem exists
            if (window.achievementSystem) {
                gameState.achievements = {
                    unlocked: Array.from(window.achievementSystem.getUnlockedAchievements()),
                    progress: window.achievementSystem.getAchievementProgress()
                };
            }

            localStorage.setItem('tavernsGameState', JSON.stringify(gameState));
            console.log('Game state saved successfully');
            return true;
        } catch (error) {
            console.error('Failed to save game state:', error);
            return false;
        }
    }

    loadGameState(skillManager, inventoryManager, traitManager) {
        try {
            const savedState = localStorage.getItem('tavernsGameState');
            if (!savedState) {
                console.log('No saved game state found');
                return false;
            }

            const gameState = JSON.parse(savedState);
            console.log('Loading saved game state:', gameState);

            // Load skills
            if (gameState.skills) {
                for (const [skillName, skillData] of Object.entries(gameState.skills)) {
                    const skill = skillManager.getSkill(skillName);
                    if (skill) {
                        skill.level = skillData.level || 1;
                        skill.xp = skillData.experience || 0;
                        skill.xpToNext = skill.getXpToNextLevel(skill.level);
                    }
                }
            }

            // Load inventory
            if (gameState.inventory) {
                for (const [itemId, itemData] of Object.entries(gameState.inventory)) {
                    inventoryManager.addItem(itemId, itemData.quantity || 1);
                }
            }

            // Load traits
            if (gameState.traits) {
                for (const [traitName, traitData] of Object.entries(gameState.traits)) {
                    const trait = traitManager.getTrait(traitName);
                    if (trait) {
                        trait.level = traitData.level || 1;
                        trait.xp = traitData.experience || 0;
                        trait.xpToNext = trait.getXpToNextLevel(trait.level);
                    }
                }
            }

            // Load achievements if achievementSystem exists
            if (gameState.achievements && window.achievementSystem) {
                const achievementState = gameState.achievements;
                if (achievementState.unlocked) {
                    window.achievementSystem.unlockedAchievements = new Set(achievementState.unlocked);
                }
                if (achievementState.progress) {
                    window.achievementSystem.achievementProgress = achievementState.progress;
                }
            }

            console.log('Game state loaded successfully');
            return true;
        } catch (error) {
            console.error('Failed to load game state:', error);
            return false;
        }
    }

    setupAutoSave(skillManager, inventoryManager, traitManager, uiManager) {
        if (this.autoSaveInterval) {
            clearInterval(this.autoSaveInterval);
        }

        this.autoSaveInterval = setInterval(() => {
            const success = this.saveGameState(skillManager, inventoryManager, traitManager);
            if (success) {
                uiManager.updateLastSavedTime();
            }
        }, this.autoSaveIntervalMinutes * 60 * 1000);

        console.log(`Auto-save enabled (every ${this.autoSaveIntervalMinutes} minutes)`);
    }

    stopAutoSave() {
        if (this.autoSaveInterval) {
            clearInterval(this.autoSaveInterval);
            this.autoSaveInterval = null;
            console.log('Auto-save disabled');
        }
    }

    clearGameState() {
        try {
            localStorage.removeItem('tavernsGameState');
            console.log('Game state cleared');
            return true;
        } catch (error) {
            console.error('Failed to clear game state:', error);
            return false;
        }
    }

    getLastSavedTime() {
        try {
            const savedState = localStorage.getItem('tavernsGameState');
            if (savedState) {
                const gameState = JSON.parse(savedState);
                return gameState.lastSaved ? new Date(gameState.lastSaved) : null;
            }
            return null;
        } catch (error) {
            console.error('Failed to get last saved time:', error);
            return null;
        }
    }

    exportGameState() {
        try {
            const savedState = localStorage.getItem('tavernsGameState');
            if (savedState) {
                const gameState = JSON.parse(savedState);
                const dataStr = JSON.stringify(gameState, null, 2);
                const dataBlob = new Blob([dataStr], { type: 'application/json' });
                
                const link = document.createElement('a');
                link.href = URL.createObjectURL(dataBlob);
                link.download = `taverns-save-${new Date().toISOString().split('T')[0]}.json`;
                link.click();
                
                console.log('Game state exported successfully');
                return true;
            }
            return false;
        } catch (error) {
            console.error('Failed to export game state:', error);
            return false;
        }
    }

    importGameState(gameStateData) {
        try {
            const gameState = typeof gameStateData === 'string' 
                ? JSON.parse(gameStateData) 
                : gameStateData;

            // Validate the game state structure
            if (!gameState || typeof gameState !== 'object') {
                throw new Error('Invalid game state format');
            }

            localStorage.setItem('tavernsGameState', JSON.stringify(gameState));
            console.log('Game state imported successfully');
            return true;
        } catch (error) {
            console.error('Failed to import game state:', error);
            return false;
        }
    }

    /**
     * Get a specific state value by key
     * @param {string} key - The state key to retrieve
     * @returns {*} The state value or null if not found
     */
    getState(key) {
        try {
            const savedState = localStorage.getItem('tavernsGameState');
            if (savedState) {
                const gameState = JSON.parse(savedState);
                return gameState[key] || null;
            }
            return null;
        } catch (error) {
            console.error(`Failed to get state for key '${key}':`, error);
            return null;
        }
    }

    /**
     * Set a specific state value by key
     * @param {string} key - The state key to set
     * @param {*} value - The value to store
     * @returns {boolean} Success status
     */
    setState(key, value) {
        try {
            const savedState = localStorage.getItem('tavernsGameState');
            let gameState = savedState ? JSON.parse(savedState) : {};
            
            gameState[key] = value;
            gameState.lastSaved = new Date().toISOString();
            
            localStorage.setItem('tavernsGameState', JSON.stringify(gameState));
            return true;
        } catch (error) {
            console.error(`Failed to set state for key '${key}':`, error);
            return false;
        }
    }

    /**
     * Save the current state (alias for saveGameState for compatibility)
     */
    save() {
        // This is a simplified save that just updates the timestamp
        // Full save should be done through saveGameState with managers
        try {
            const savedState = localStorage.getItem('tavernsGameState');
            if (savedState) {
                const gameState = JSON.parse(savedState);
                gameState.lastSaved = new Date().toISOString();
                localStorage.setItem('tavernsGameState', JSON.stringify(gameState));
            }
            return true;
        } catch (error) {
            console.error('Failed to save state:', error);
            return false;
        }
    }

    /**
     * Check if there's a saved state
     * @returns {boolean} True if saved state exists
     */
    hasSavedState() {
        try {
            const savedState = localStorage.getItem('tavernsGameState');
            return savedState !== null;
        } catch (error) {
            console.error('Failed to check saved state:', error);
            return false;
        }
    }
} 