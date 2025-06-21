/**
 * Achievement System Tests
 * 
 * Tests for the AchievementSystem class functionality
 */

const AchievementSystem = require('../engine/systems/AchievementSystem');

// Mock dependencies
class MockStateManager {
    constructor() {
        this.state = {
            skills: {},
            inventory: {},
            achievements: {
                unlocked: [],
                progress: {}
            }
        };
    }
    
    getState() {
        return this.state;
    }
    
    setState(newState) {
        this.state = { ...this.state, ...newState };
    }
}

class MockEventSystem {
    constructor() {
        this.listeners = {};
    }
    
    on(event, callback) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event].push(callback);
    }
    
    emit(event, data) {
        if (this.listeners[event]) {
            this.listeners[event].forEach(callback => callback(data));
        }
    }
}

// Test data
const testAchievements = {
    woodcutting_master: {
        id: 'woodcutting_master',
        name: 'Woodcutter\'s Mastery',
        description: 'Reach level 50 in Woodcutting',
        category: 'skills',
        icon: '🪓',
        points: 50,
        secret: false,
        requirements: {
            skillLevel: {
                woodcutting: 50
            }
        }
    },
    first_skill: {
        id: 'first_skill',
        name: 'Getting Started',
        description: 'Reach level 10 in any skill',
        category: 'progression',
        icon: '⭐',
        points: 10,
        secret: false,
        requirements: {
            anySkillLevel: 10
        }
    },
    skill_diversity: {
        id: 'skill_diversity',
        name: 'Jack of All Trades',
        description: 'Reach level 20 in three different skills',
        category: 'progression',
        icon: '🎭',
        points: 25,
        secret: false,
        requirements: {
            multipleSkillLevels: {
                count: 3,
                level: 20
            }
        }
    },
    inventory_collector: {
        id: 'inventory_collector',
        name: 'Collector',
        description: 'Collect 10 different types of items',
        category: 'collection',
        icon: '📦',
        points: 15,
        secret: false,
        requirements: {
            uniqueItems: 10
        }
    },
    secret_discovery: {
        id: 'secret_discovery',
        name: 'Hidden Secrets',
        description: 'Discover a secret achievement',
        category: 'secrets',
        icon: '🔍',
        points: 100,
        secret: true,
        requirements: {
            custom: 'secret_discovery'
        }
    }
};

// Mock console.warn for testing
const originalWarn = console.warn;
let warnSpy;

describe('AchievementSystem', () => {
    let achievementSystem;
    let stateManager;
    let eventSystem;
    
    beforeEach(() => {
        stateManager = new MockStateManager();
        eventSystem = new MockEventSystem();
        achievementSystem = new AchievementSystem(testAchievements, stateManager, eventSystem);
        warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    });
    
    afterEach(() => {
        achievementSystem = null;
        stateManager = null;
        eventSystem = null;
        warnSpy.mockRestore();
    });
    
    describe('Initialization', () => {
        test('should initialize with achievement data', () => {
            expect(achievementSystem.achievementsData).toEqual(testAchievements);
            expect(achievementSystem.unlockedAchievements).toBeInstanceOf(Set);
            expect(achievementSystem.achievementProgress).toBeInstanceOf(Object);
        });
        
        test('should initialize progress tracking for all achievements', () => {
            const progress = achievementSystem.getAchievementProgress();
            expect(Object.keys(progress)).toHaveLength(5);
            expect(progress.woodcutting_master).toHaveProperty('current', 0);
            expect(progress.woodcutting_master).toHaveProperty('required', 50);
            expect(progress.woodcutting_master).toHaveProperty('completed', false);
        });
        
        test('should load saved achievement state', async () => {
            // Set up saved state
            stateManager.state.achievements = {
                unlocked: ['first_skill'],
                progress: {
                    first_skill: { current: 10, required: 10, completed: true }
                }
            };
            
            await achievementSystem.initialize();
            
            expect(achievementSystem.isAchievementUnlocked('first_skill')).toBe(true);
            expect(achievementSystem.isAchievementUnlocked('woodcutting_master')).toBe(false);
        });
    });
    
    describe('Achievement Evaluation', () => {
        beforeEach(async () => {
            await achievementSystem.initialize();
        });
        
        test('should evaluate skill level requirements correctly', () => {
            // Set up game state with woodcutting level 50
            stateManager.state.skills = {
                woodcutting: { level: 50, experience: 1000 }
            };
            
            achievementSystem.checkAchievements();
            
            expect(achievementSystem.isAchievementUnlocked('woodcutting_master')).toBe(true);
        });
        
        test('should not unlock achievement when skill level is insufficient', () => {
            // Set up game state with woodcutting level 25
            stateManager.state.skills = {
                woodcutting: { level: 25, experience: 500 }
            };
            
            achievementSystem.checkAchievements();
            
            expect(achievementSystem.isAchievementUnlocked('woodcutting_master')).toBe(false);
        });
        
        test('should evaluate any skill level requirements correctly', () => {
            // Set up game state with one skill at level 10
            stateManager.state.skills = {
                woodcutting: { level: 10, experience: 200 }
            };
            
            achievementSystem.checkAchievements();
            
            expect(achievementSystem.isAchievementUnlocked('first_skill')).toBe(true);
        });
        
        test('should evaluate multiple skill levels requirements correctly', () => {
            // Set up game state with three skills at level 20
            stateManager.state.skills = {
                woodcutting: { level: 20, experience: 400 },
                fishing: { level: 20, experience: 400 },
                mining: { level: 20, experience: 400 }
            };
            
            achievementSystem.checkAchievements();
            
            expect(achievementSystem.isAchievementUnlocked('skill_diversity')).toBe(true);
        });
        
        test('should not unlock multiple skill levels achievement with insufficient skills', () => {
            // Set up game state with only two skills at level 20
            stateManager.state.skills = {
                woodcutting: { level: 20, experience: 400 },
                fishing: { level: 20, experience: 400 }
            };
            
            achievementSystem.checkAchievements();
            
            expect(achievementSystem.isAchievementUnlocked('skill_diversity')).toBe(false);
        });
        
        test('should evaluate unique items requirements correctly', () => {
            // Set up game state with 10 unique items
            stateManager.state.inventory = {
                item1: { count: 5 },
                item2: { count: 3 },
                item3: { count: 1 },
                item4: { count: 2 },
                item5: { count: 1 },
                item6: { count: 1 },
                item7: { count: 1 },
                item8: { count: 1 },
                item9: { count: 1 },
                item10: { count: 1 }
            };
            
            achievementSystem.checkAchievements();
            
            expect(achievementSystem.isAchievementUnlocked('inventory_collector')).toBe(true);
        });
        
        test('should not unlock unique items achievement with insufficient items', () => {
            // Set up game state with only 5 unique items
            stateManager.state.inventory = {
                item1: { count: 5 },
                item2: { count: 3 },
                item3: { count: 1 },
                item4: { count: 2 },
                item5: { count: 1 }
            };
            
            achievementSystem.checkAchievements();
            
            expect(achievementSystem.isAchievementUnlocked('inventory_collector')).toBe(false);
        });
        
        test('should handle custom requirements correctly', () => {
            // Custom requirements should return false by default
            achievementSystem.checkAchievements();
            
            expect(achievementSystem.isAchievementUnlocked('secret_discovery')).toBe(false);
        });
        
        test('should not unlock already unlocked achievements', () => {
            // Manually unlock an achievement
            achievementSystem.forceUnlockAchievement('first_skill');
            
            // Try to unlock it again
            achievementSystem.checkAchievements();
            
            expect(achievementSystem.isAchievementUnlocked('first_skill')).toBe(true);
        });
    });
    
    describe('Achievement Management', () => {
        beforeEach(async () => {
            await achievementSystem.initialize();
        });
        
        test('should force unlock achievements', () => {
            achievementSystem.forceUnlockAchievement('first_skill');
            
            expect(achievementSystem.isAchievementUnlocked('first_skill')).toBe(true);
        });
        
        test('should warn when trying to unlock non-existent achievement', () => {
            achievementSystem.forceUnlockAchievement('non_existent');
            
            expect(warnSpy).toHaveBeenCalled();
        });
        
        test('should reset all achievements', () => {
            // Unlock some achievements first
            achievementSystem.forceUnlockAchievement('first_skill');
            achievementSystem.forceUnlockAchievement('woodcutting_master');
            
            // Reset
            achievementSystem.resetAchievements();
            
            expect(achievementSystem.getUnlockedAchievements().size).toBe(0);
            expect(achievementSystem.isAchievementUnlocked('first_skill')).toBe(false);
            expect(achievementSystem.isAchievementUnlocked('woodcutting_master')).toBe(false);
        });
        
        test('should calculate total points correctly', () => {
            // Unlock achievements with different point values
            achievementSystem.forceUnlockAchievement('first_skill'); // 10 points
            achievementSystem.forceUnlockAchievement('woodcutting_master'); // 50 points
            
            expect(achievementSystem.getTotalPoints()).toBe(60);
        });
        
        test('should return 0 points when no achievements are unlocked', () => {
            expect(achievementSystem.getTotalPoints()).toBe(0);
        });
    });
    
    describe('Progress Tracking', () => {
        beforeEach(async () => {
            await achievementSystem.initialize();
        });
        
        test('should update skill level progress correctly', () => {
            // Simulate skill level up event
            achievementSystem._updateSkillLevelProgress('woodcutting', 25);
            
            const progress = achievementSystem.getAchievementProgress();
            expect(progress.woodcutting_master.current).toBe(25);
            expect(progress.first_skill.current).toBe(10); // Should be capped at required level
        });
        
        test('should update inventory progress correctly', () => {
            // Set up inventory state
            stateManager.state.inventory = {
                item1: { count: 1 },
                item2: { count: 1 },
                item3: { count: 1 }
            };
            // Simulate item added event and update state
            stateManager.state.inventory['item4'] = { count: 1 };
            achievementSystem._updateInventoryProgress('item4');
            const progress = achievementSystem.getAchievementProgress();
            expect(progress.inventory_collector.current).toBe(4);
        });
        
        test('should not update progress for already unlocked achievements', () => {
            // Unlock achievement first
            achievementSystem.forceUnlockAchievement('woodcutting_master');
            
            // Try to update progress
            achievementSystem._updateSkillLevelProgress('woodcutting', 60);
            
            const progress = achievementSystem.getAchievementProgress();
            expect(progress.woodcutting_master.completed).toBe(true);
        });
    });
    
    describe('Event Handling', () => {
        beforeEach(async () => {
            await achievementSystem.initialize();
        });
        
        test('should listen for skill level up events', () => {
            // Set up game state
            stateManager.state.skills = {
                woodcutting: { level: 49, experience: 980 }
            };
            // Simulate level up and update state
            stateManager.state.skills.woodcutting.level = 50;
            // Emit skill level up event
            eventSystem.emit('skill:levelUp', {
                skillName: 'woodcutting',
                newLevel: 50
            });
            // Check if achievement was unlocked
            expect(achievementSystem.isAchievementUnlocked('woodcutting_master')).toBe(true);
        });
        
        test('should listen for inventory item added events', () => {
            // Set up inventory state
            stateManager.state.inventory = {
                item1: { count: 1 },
                item2: { count: 1 },
                item3: { count: 1 },
                item4: { count: 1 },
                item5: { count: 1 },
                item6: { count: 1 },
                item7: { count: 1 },
                item8: { count: 1 },
                item9: { count: 1 }
            };
            // Simulate item added and update state
            stateManager.state.inventory['item10'] = { count: 1 };
            // Emit item added event
            eventSystem.emit('inventory:itemAdded', {
                itemId: 'item10'
            });
            // Check if achievement was unlocked
            expect(achievementSystem.isAchievementUnlocked('inventory_collector')).toBe(true);
        });
        
        test('should listen for state change events', () => {
            // Set up game state
            stateManager.state.skills = {
                woodcutting: { level: 50, experience: 1000 }
            };
            
            // Emit state changed event
            eventSystem.emit('state:changed');
            
            // Check if achievement was unlocked
            expect(achievementSystem.isAchievementUnlocked('woodcutting_master')).toBe(true);
        });
    });
    
    describe('Data Access', () => {
        test('should return all achievements data', () => {
            const allAchievements = achievementSystem.getAllAchievements();
            expect(allAchievements).toEqual(testAchievements);
        });
        
        test('should return unlocked achievements set', () => {
            achievementSystem.forceUnlockAchievement('first_skill');
            
            const unlocked = achievementSystem.getUnlockedAchievements();
            expect(unlocked).toBeInstanceOf(Set);
            expect(unlocked.has('first_skill')).toBe(true);
        });
        
        test('should return achievement progress', () => {
            const progress = achievementSystem.getAchievementProgress();
            expect(progress).toBeInstanceOf(Object);
            expect(progress.woodcutting_master).toHaveProperty('current');
            expect(progress.woodcutting_master).toHaveProperty('required');
            expect(progress.woodcutting_master).toHaveProperty('completed');
        });
        
        test('should check if specific achievement is unlocked', () => {
            expect(achievementSystem.isAchievementUnlocked('first_skill')).toBe(false);
            
            achievementSystem.forceUnlockAchievement('first_skill');
            
            expect(achievementSystem.isAchievementUnlocked('first_skill')).toBe(true);
        });
    });
}); 