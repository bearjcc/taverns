/**
 * Integration test for achievement system
 * Tests the complete achievement tracking and unlocking functionality
 */

// Mock the DOM environment for testing
const { JSDOM } = require('jsdom');
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
global.window = dom.window;
global.document = dom.window.document;
global.localStorage = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn()
};

// Mock fetch
global.fetch = jest.fn();

// Import the systems
const EventSystem = require('../src/lib/game-engine/core/EventSystem');
const StateManager = require('../src/lib/game-engine/core/StateManager');
const AchievementSystem = require('../src/lib/game-engine/systems/AchievementSystem');
const SkillManager = require('../src/lib/game-engine/systems/SkillManager');
const InventoryManager = require('../src/lib/game-engine/systems/InventoryManager');

describe('Achievement System Integration', () => {
    let eventSystem;
    let stateManager;
    let achievementSystem;
    let skillManager;
    let inventoryManager;
    
    const testAchievements = {
        first_skill: {
            id: "first_skill",
            name: "Getting Started",
            description: "Reach level 10 in any skill",
            category: "progression",
            icon: "⭐",
            points: 10,
            secret: false,
            requirements: {
                anySkillLevel: 10
            }
        },
        inventory_collector: {
            id: "inventory_collector",
            name: "Collector",
            description: "Collect 10 different types of items",
            category: "collection",
            icon: "📦",
            points: 15,
            secret: false,
            requirements: {
                uniqueItems: 10
            }
        }
    };

    beforeEach(() => {
        // Set up fresh instances for each test
        eventSystem = new EventSystem();
        stateManager = new StateManager();
        achievementSystem = new AchievementSystem(testAchievements, stateManager, eventSystem);
        skillManager = new SkillManager();
        inventoryManager = new InventoryManager();
        
        // Set up event system references
        skillManager.setEventSystem(eventSystem);
        inventoryManager.setEventSystem(eventSystem);
        
        // Set up achievement system references
        achievementSystem.setSkillSystem(skillManager);
        achievementSystem.setInventorySystem(inventoryManager);
    });

    test('should unlock achievement when skill reaches required level', async () => {
        // Initialize systems
        await achievementSystem.initialize();
        
        // Add some skills to the skill manager
        skillManager.loadFromConfig({
            combat: {
                woodcutting: { level: 1, experience: 0 }
            }
        });
        
        // Add XP to trigger level up
        const levelUps = skillManager.addSkillXp('woodcutting', 1000); // Should reach level 10+
        
        // Check if achievement was unlocked
        expect(achievementSystem.isAchievementUnlocked('first_skill')).toBe(true);
    });

    test('should unlock achievement when collecting enough unique items', async () => {
        // Initialize systems
        await achievementSystem.initialize();
        
        // Add game objects to inventory manager
        for (let i = 1; i <= 10; i++) {
            const gameObject = {
                id: `item${i}`,
                name: `Item ${i}`,
                displayName: `Item ${i}`,
                description: `Test item ${i}`,
                icon: '📦'
            };
            inventoryManager.registerGameObject(gameObject);
        }
        
        // Add items to inventory
        for (let i = 1; i <= 10; i++) {
            inventoryManager.addItem(`item${i}`, 1);
        }
        
        // Check if achievement was unlocked
        expect(achievementSystem.isAchievementUnlocked('inventory_collector')).toBe(true);
    });

    test('should emit achievement unlocked event', async () => {
        // Initialize systems
        await achievementSystem.initialize();
        
        // Set up event listener
        const eventSpy = jest.fn();
        eventSystem.on('achievement:unlocked', eventSpy);
        
        // Add skills and trigger level up
        skillManager.loadFromConfig({
            combat: {
                woodcutting: { level: 1, experience: 0 }
            }
        });
        
        skillManager.addSkillXp('woodcutting', 1000);
        
        // Check if event was emitted
        expect(eventSpy).toHaveBeenCalledWith(expect.objectContaining({
            achievementId: 'first_skill',
            achievement: testAchievements.first_skill,
            points: 10
        }));
    });

    test('should track achievement progress correctly', async () => {
        // Initialize systems
        await achievementSystem.initialize();
        
        // Add skills
        skillManager.loadFromConfig({
            combat: {
                woodcutting: { level: 1, experience: 0 }
            }
        });
        
        // Add some XP but not enough to unlock
        skillManager.addSkillXp('woodcutting', 500); // Should reach around level 7
        
        // Check progress
        const progress = achievementSystem.getAchievementProgress();
        expect(progress.first_skill.current).toBeGreaterThan(0);
        expect(progress.first_skill.current).toBeLessThan(10);
        expect(achievementSystem.isAchievementUnlocked('first_skill')).toBe(false);
    });

    test('should save and load achievement state', async () => {
        // Initialize systems
        await achievementSystem.initialize();
        
        // Unlock an achievement
        achievementSystem.forceUnlockAchievement('first_skill');
        
        // Create new achievement system instance
        const newAchievementSystem = new AchievementSystem(testAchievements, stateManager, eventSystem);
        await newAchievementSystem.initialize();
        
        // Check if achievement is still unlocked
        expect(newAchievementSystem.isAchievementUnlocked('first_skill')).toBe(true);
    });
}); 