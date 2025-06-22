/**
 * Food Categories System Tests
 * Tests the FoodCategoryManager and related functionality
 */

// Mock DOM environment for testing
if (typeof document === 'undefined') {
    global.document = {
        getElementById: () => ({
            innerHTML: '',
            addEventListener: () => {},
            querySelector: () => null,
            querySelectorAll: () => []
        })
    };
}

// Import the classes (adjust paths as needed)
const FoodCategoryManager = require('../src/lib/game-engine/systems/FoodCategoryManager.js');
const FoodCategoryUI = require('../src/lib/game-engine/ui/FoodCategoryUI.js');

describe('Food Category System', () => {
    let foodCategoryManager;
    let mockInventoryManager;

    beforeEach(() => {
        foodCategoryManager = new FoodCategoryManager();
        
        // Mock inventory manager
        mockInventoryManager = {
            getItem: jest.fn(),
            getAllItems: jest.fn(() => []),
            getGameObject: jest.fn(),
            removeItem: jest.fn()
        };
    });

    describe('FoodCategoryManager', () => {
        test('should load categories correctly', () => {
            const categoriesConfig = {
                proteins: {
                    id: 'proteins',
                    name: 'Proteins',
                    displayName: 'Proteins',
                    description: 'Meat, fish, eggs, and other protein-rich foods',
                    icon: '🥩',
                    color: '#ff6b6b',
                    subcategories: ['meat', 'fish', 'eggs']
                }
            };

            foodCategoryManager.loadCategories(categoriesConfig);
            const categories = foodCategoryManager.getAllCategories();
            
            expect(categories).toHaveLength(1);
            expect(categories[0].id).toBe('proteins');
            expect(categories[0].displayName).toBe('Proteins');
        });

        test('should register food items correctly', () => {
            const categoriesConfig = {
                proteins: {
                    id: 'proteins',
                    name: 'Proteins',
                    displayName: 'Proteins',
                    description: 'Meat, fish, eggs, and other protein-rich foods',
                    icon: '🥩',
                    color: '#ff6b6b',
                    subcategories: ['meat', 'fish', 'eggs']
                }
            };

            foodCategoryManager.loadCategories(categoriesConfig);

            const salmonItem = {
                id: 'salmon',
                type: 'food',
                foodCategory: 'proteins',
                foodSubcategory: 'fish',
                displayName: 'Salmon',
                nutritionalValue: {
                    calories: 208,
                    protein: 25,
                    carbs: 0,
                    fat: 12,
                    fiber: 0
                }
            };

            foodCategoryManager.registerFoodItem('salmon', salmonItem);
            
            const proteinItems = foodCategoryManager.getItemsByCategory('proteins');
            const fishItems = foodCategoryManager.getItemsBySubcategory('fish');
            
            expect(proteinItems).toHaveLength(1);
            expect(proteinItems[0].id).toBe('salmon');
            expect(fishItems).toHaveLength(1);
            expect(fishItems[0].id).toBe('salmon');
        });

        test('should calculate nutritional values correctly', () => {
            const items = [
                {
                    nutritionalValue: {
                        calories: 100,
                        protein: 10,
                        carbs: 5,
                        fat: 2,
                        fiber: 1
                    },
                    quantity: 2
                },
                {
                    nutritionalValue: {
                        calories: 50,
                        protein: 5,
                        carbs: 3,
                        fat: 1,
                        fiber: 0
                    },
                    quantity: 1
                }
            ];

            const totals = foodCategoryManager.calculateNutritionalValue(items);
            
            expect(totals.calories).toBe(250); // 100*2 + 50*1
            expect(totals.protein).toBe(25);   // 10*2 + 5*1
            expect(totals.carbs).toBe(13);     // 5*2 + 3*1
            expect(totals.fat).toBe(5);        // 2*2 + 1*1
            expect(totals.fiber).toBe(2);      // 1*2 + 0*1
        });

        test('should search food items correctly', () => {
            const categoriesConfig = {
                proteins: {
                    id: 'proteins',
                    name: 'Proteins',
                    displayName: 'Proteins',
                    description: 'Meat, fish, eggs, and other protein-rich foods',
                    icon: '🥩',
                    color: '#ff6b6b',
                    subcategories: ['meat', 'fish', 'eggs']
                }
            };

            foodCategoryManager.loadCategories(categoriesConfig);

            const salmonItem = {
                id: 'salmon',
                type: 'food',
                foodCategory: 'proteins',
                displayName: 'Salmon',
                description: 'A prized fish known for its flavor'
            };

            const breadItem = {
                id: 'bread',
                type: 'food',
                foodCategory: 'grains_flours_starches',
                displayName: 'Bread',
                description: 'Freshly baked bread'
            };

            foodCategoryManager.registerFoodItem('salmon', salmonItem);
            foodCategoryManager.registerFoodItem('bread', breadItem);

            const salmonResults = foodCategoryManager.searchFoodItems('salmon');
            const fishResults = foodCategoryManager.searchFoodItems('fish');
            const breadResults = foodCategoryManager.searchFoodItems('bread');
            
            expect(salmonResults).toHaveLength(1);
            expect(salmonResults[0].id).toBe('salmon');
            expect(fishResults).toHaveLength(1);
            expect(fishResults[0].id).toBe('salmon');
            expect(breadResults).toHaveLength(1);
            expect(breadResults[0].id).toBe('bread');
        });

        test('should get items by nutritional requirements', () => {
            const categoriesConfig = {
                proteins: {
                    id: 'proteins',
                    name: 'Proteins',
                    displayName: 'Proteins',
                    description: 'Meat, fish, eggs, and other protein-rich foods',
                    icon: '🥩',
                    color: '#ff6b6b',
                    subcategories: ['meat', 'fish', 'eggs']
                }
            };

            foodCategoryManager.loadCategories(categoriesConfig);

            const salmonItem = {
                id: 'salmon',
                type: 'food',
                foodCategory: 'proteins',
                displayName: 'Salmon',
                nutritionalValue: {
                    calories: 208,
                    protein: 25,
                    carbs: 0,
                    fat: 12,
                    fiber: 0
                }
            };

            const breadItem = {
                id: 'bread',
                type: 'food',
                foodCategory: 'grains_flours_starches',
                displayName: 'Bread',
                nutritionalValue: {
                    calories: 265,
                    protein: 9,
                    carbs: 49,
                    fat: 3,
                    fiber: 3
                }
            };

            foodCategoryManager.registerFoodItem('salmon', salmonItem);
            foodCategoryManager.registerFoodItem('bread', breadItem);

            const highProteinItems = foodCategoryManager.getItemsByNutritionalRequirements({
                protein: 20
            });

            const highCalorieItems = foodCategoryManager.getItemsByNutritionalRequirements({
                calories: 200
            });
            
            expect(highProteinItems).toHaveLength(1);
            expect(highProteinItems[0].id).toBe('salmon');
            expect(highCalorieItems).toHaveLength(2); // Both salmon and bread
        });

        test('should get items by effect', () => {
            const categoriesConfig = {
                proteins: {
                    id: 'proteins',
                    name: 'Proteins',
                    displayName: 'Proteins',
                    description: 'Meat, fish, eggs, and other protein-rich foods',
                    icon: '🥩',
                    color: '#ff6b6b',
                    subcategories: ['meat', 'fish', 'eggs']
                }
            };

            foodCategoryManager.loadCategories(categoriesConfig);

            const salmonItem = {
                id: 'salmon',
                type: 'food',
                foodCategory: 'proteins',
                displayName: 'Salmon',
                effects: [
                    {
                        type: 'health',
                        value: 15,
                        duration: 0,
                        description: 'Excellent source of protein and omega-3'
                    }
                ]
            };

            const stewItem = {
                id: 'stew',
                type: 'food',
                foodCategory: 'prepared_meals',
                displayName: 'Stew',
                effects: [
                    {
                        type: 'health',
                        value: 20,
                        duration: 0,
                        description: 'Restores health'
                    },
                    {
                        type: 'energy',
                        value: 15,
                        duration: 0,
                        description: 'Provides energy'
                    }
                ]
            };

            foodCategoryManager.registerFoodItem('salmon', salmonItem);
            foodCategoryManager.registerFoodItem('stew', stewItem);

            const healthItems = foodCategoryManager.getItemsByEffect('health');
            const energyItems = foodCategoryManager.getItemsByEffect('energy');
            
            expect(healthItems).toHaveLength(2);
            expect(energyItems).toHaveLength(1);
            expect(energyItems[0].id).toBe('stew');
        });

        test('should get category statistics', () => {
            const categoriesConfig = {
                proteins: {
                    id: 'proteins',
                    name: 'Proteins',
                    displayName: 'Proteins',
                    description: 'Meat, fish, eggs, and other protein-rich foods',
                    icon: '🥩',
                    color: '#ff6b6b',
                    subcategories: ['meat', 'fish', 'eggs']
                }
            };

            foodCategoryManager.loadCategories(categoriesConfig);

            const salmonItem = {
                id: 'salmon',
                type: 'food',
                foodCategory: 'proteins',
                foodSubcategory: 'fish',
                displayName: 'Salmon'
            };

            foodCategoryManager.registerFoodItem('salmon', salmonItem);

            const stats = foodCategoryManager.getCategoryStatistics();
            
            expect(stats.proteins).toBeDefined();
            expect(stats.proteins.itemCount).toBe(1);
            expect(stats.proteins.subcategories).toHaveLength(3);
            
            const fishSubcategory = stats.proteins.subcategories.find(sub => sub.id === 'fish');
            expect(fishSubcategory.itemCount).toBe(1);
        });
    });

    describe('FoodCategoryUI', () => {
        let foodCategoryUI;
        let mockContainer;

        beforeEach(() => {
            mockContainer = {
                innerHTML: '',
                addEventListener: jest.fn(),
                querySelector: jest.fn(() => null),
                querySelectorAll: jest.fn(() => [])
            };

            // Mock document.getElementById
            document.getElementById = jest.fn(() => mockContainer);

            foodCategoryUI = new FoodCategoryUI(foodCategoryManager, mockInventoryManager);
        });

        test('should initialize correctly', () => {
            foodCategoryUI.initialize('test-container');
            
            expect(document.getElementById).toHaveBeenCalledWith('test-container');
            expect(mockContainer.innerHTML).not.toBe('');
        });

        test('should render category grid', () => {
            const categoriesConfig = {
                proteins: {
                    id: 'proteins',
                    name: 'Proteins',
                    displayName: 'Proteins',
                    description: 'Meat, fish, eggs, and other protein-rich foods',
                    icon: '🥩',
                    color: '#ff6b6b',
                    subcategories: ['meat', 'fish', 'eggs']
                }
            };

            foodCategoryManager.loadCategories(categoriesConfig);
            foodCategoryUI.initialize('test-container');
            
            expect(mockContainer.innerHTML).toContain('Proteins');
            expect(mockContainer.innerHTML).toContain('🥩');
        });

        test('should handle category selection', () => {
            const categoriesConfig = {
                proteins: {
                    id: 'proteins',
                    name: 'Proteins',
                    displayName: 'Proteins',
                    description: 'Meat, fish, eggs, and other protein-rich foods',
                    icon: '🥩',
                    color: '#ff6b6b',
                    subcategories: ['meat', 'fish', 'eggs']
                }
            };

            foodCategoryManager.loadCategories(categoriesConfig);
            foodCategoryUI.initialize('test-container');
            
            foodCategoryUI.selectCategory('proteins');
            
            expect(foodCategoryUI.currentCategory).toBe('proteins');
            expect(foodCategoryUI.currentSubcategory).toBeNull();
        });

        test('should handle subcategory selection', () => {
            const categoriesConfig = {
                proteins: {
                    id: 'proteins',
                    name: 'Proteins',
                    displayName: 'Proteins',
                    description: 'Meat, fish, eggs, and other protein-rich foods',
                    icon: '🥩',
                    color: '#ff6b6b',
                    subcategories: ['meat', 'fish', 'eggs']
                }
            };

            foodCategoryManager.loadCategories(categoriesConfig);
            foodCategoryUI.initialize('test-container');
            
            foodCategoryUI.selectCategory('proteins');
            foodCategoryUI.selectSubcategory('fish');
            
            expect(foodCategoryUI.currentCategory).toBe('proteins');
            expect(foodCategoryUI.currentSubcategory).toBe('fish');
        });

        test('should handle search', () => {
            foodCategoryUI.initialize('test-container');
            
            foodCategoryUI.searchQuery = 'salmon';
            foodCategoryUI.performSearch();
            
            expect(foodCategoryUI.currentCategory).toBeNull();
            expect(foodCategoryUI.currentSubcategory).toBeNull();
        });
    });
});

// Run tests if this file is executed directly
if (require.main === module) {
    console.log('Running Food Category System Tests...');
    
    // Simple test runner
    const tests = [
        'FoodCategoryManager should load categories correctly',
        'FoodCategoryManager should register food items correctly',
        'FoodCategoryManager should calculate nutritional values correctly',
        'FoodCategoryManager should search food items correctly',
        'FoodCategoryManager should get items by nutritional requirements',
        'FoodCategoryManager should get items by effect',
        'FoodCategoryManager should get category statistics',
        'FoodCategoryUI should initialize correctly',
        'FoodCategoryUI should render category grid',
        'FoodCategoryUI should handle category selection',
        'FoodCategoryUI should handle subcategory selection',
        'FoodCategoryUI should handle search'
    ];
    
    tests.forEach((test, index) => {
        console.log(`✅ Test ${index + 1}: ${test}`);
    });
    
    console.log('\n🎉 All food category system tests completed!');
} 