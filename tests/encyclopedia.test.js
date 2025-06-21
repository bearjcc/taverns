/**
 * Encyclopedia System Tests
 * Tests the encyclopedia system functionality
 */

// Mock DOM environment for testing
if (typeof document === 'undefined') {
    global.document = {
        createElement: (tag) => ({
            id: '',
            className: '',
            style: {},
            innerHTML: '',
            addEventListener: () => {},
            appendChild: () => {},
            querySelector: () => null,
            querySelectorAll: () => [],
            getElementById: () => null
        }),
        body: {
            appendChild: () => {}
        },
        getElementById: () => null
    };
}

describe('EncyclopediaSystem', () => {
    let encyclopediaSystem;
    
    beforeEach(() => {
        encyclopediaSystem = new EncyclopediaSystem();
    });
    
    test('should initialize with empty state', () => {
        expect(encyclopediaSystem.entries.size).toBe(0);
        expect(encyclopediaSystem.categories.size).toBe(0);
        expect(encyclopediaSystem.initialized).toBe(false);
    });
    
    test('should load skills data correctly', async () => {
        const mockSkillsData = {
            combat: {
                'Melee Combat': {
                    description: 'Close-quarters fighting with weapons'
                }
            }
        };
        
        await encyclopediaSystem.loadSkillsData(mockSkillsData);
        
        expect(encyclopediaSystem.categories.has('Skills')).toBe(true);
        expect(encyclopediaSystem.entries.has('skill_melee_combat')).toBe(true);
        
        const entry = encyclopediaSystem.entries.get('skill_melee_combat');
        expect(entry.name).toBe('Melee Combat');
        expect(entry.category).toBe('Skills');
        expect(entry.subcategory).toBe('combat');
    });
    
    test('should load items data correctly', async () => {
        const mockItemsData = {
            'iron_sword': {
                id: 'iron_sword',
                name: 'iron_sword',
                displayName: 'Iron Sword',
                description: 'A basic iron sword',
                icon: '🗡️',
                stackable: false,
                maxStack: 1
            }
        };
        
        await encyclopediaSystem.loadItemsData(mockItemsData);
        
        expect(encyclopediaSystem.categories.has('Items')).toBe(true);
        expect(encyclopediaSystem.entries.has('item_iron_sword')).toBe(true);
        
        const entry = encyclopediaSystem.entries.get('item_iron_sword');
        expect(entry.name).toBe('Iron Sword');
        expect(entry.category).toBe('Items');
        expect(entry.icon).toBe('🗡️');
    });
    
    test('should search entries correctly', async () => {
        const mockData = {
            skills: {
                combat: {
                    'Melee Combat': {
                        description: 'Close-quarters fighting with weapons'
                    }
                }
            },
            items: {
                'iron_sword': {
                    id: 'iron_sword',
                    name: 'iron_sword',
                    displayName: 'Iron Sword',
                    description: 'A basic iron sword',
                    icon: '🗡️'
                }
            }
        };
        
        await encyclopediaSystem.initialize(mockData);
        
        const results = encyclopediaSystem.search('sword');
        expect(results.length).toBeGreaterThan(0);
        expect(results[0].name).toBe('Iron Sword');
    });
    
    test('should get entries by category', async () => {
        const mockData = {
            skills: {
                combat: {
                    'Melee Combat': {
                        description: 'Close-quarters fighting with weapons'
                    }
                }
            }
        };
        
        await encyclopediaSystem.initialize(mockData);
        
        const skillsEntries = encyclopediaSystem.getEntriesByCategory('Skills');
        expect(skillsEntries.length).toBe(1);
        expect(skillsEntries[0].name).toBe('Melee Combat');
    });
    
    test('should build cross-references correctly', async () => {
        const mockData = {
            skills: {
                combat: {
                    'Basic Combat': {
                        description: 'Basic fighting skills'
                    },
                    'Advanced Combat': {
                        description: 'Advanced fighting techniques',
                        requires: {
                            skill: 'Basic Combat',
                            level: 10
                        }
                    }
                }
            }
        };
        
        await encyclopediaSystem.initialize(mockData);
        
        const advancedCombatEntry = encyclopediaSystem.getEntry('skill_advanced_combat');
        const crossRefs = encyclopediaSystem.getCrossReferences('skill_advanced_combat');
        
        expect(crossRefs.length).toBeGreaterThan(0);
        expect(crossRefs[0].type).toBe('requirement');
    });
    
    test('should get statistics correctly', async () => {
        const mockData = {
            skills: {
                combat: {
                    'Melee Combat': {
                        description: 'Close-quarters fighting with weapons'
                    }
                }
            },
            items: {
                'iron_sword': {
                    id: 'iron_sword',
                    name: 'iron_sword',
                    displayName: 'Iron Sword',
                    description: 'A basic iron sword',
                    icon: '🗡️'
                }
            }
        };
        
        await encyclopediaSystem.initialize(mockData);
        
        const stats = encyclopediaSystem.getStatistics();
        expect(stats.totalEntries).toBe(2);
        expect(stats.categories).toBe(2);
        expect(stats.Skills).toBe(1);
        expect(stats.Items).toBe(1);
    });
});

describe('EncyclopediaUI', () => {
    let encyclopediaSystem;
    let encyclopediaUI;
    
    beforeEach(() => {
        encyclopediaSystem = new EncyclopediaSystem();
        encyclopediaUI = new EncyclopediaUI(encyclopediaSystem);
    });
    
    test('should initialize UI correctly', () => {
        expect(encyclopediaUI.encyclopedia).toBe(encyclopediaSystem);
        expect(encyclopediaUI.currentEntry).toBe(null);
        expect(encyclopediaUI.searchQuery).toBe('');
    });
    
    test('should show and hide encyclopedia', () => {
        encyclopediaUI.initialize();
        
        encyclopediaUI.show();
        expect(encyclopediaUI.isVisible()).toBe(true);
        
        encyclopediaUI.hide();
        expect(encyclopediaUI.isVisible()).toBe(false);
    });
    
    test('should handle search functionality', async () => {
        const mockData = {
            skills: {
                combat: {
                    'Melee Combat': {
                        description: 'Close-quarters fighting with weapons'
                    }
                }
            }
        };
        
        await encyclopediaSystem.initialize(mockData);
        encyclopediaUI.initialize();
        
        encyclopediaUI.searchQuery = 'melee';
        encyclopediaUI.performSearch();
        
        // The search should work without errors
        expect(encyclopediaUI.searchQuery).toBe('melee');
    });
    
    test('should navigate through encyclopedia', async () => {
        const mockData = {
            skills: {
                combat: {
                    'Melee Combat': {
                        description: 'Close-quarters fighting with weapons'
                    }
                }
            }
        };
        
        await encyclopediaSystem.initialize(mockData);
        encyclopediaUI.initialize();
        
        // Test navigation methods
        encyclopediaUI.showMainView();
        expect(encyclopediaUI.currentEntry).toBe(null);
        expect(encyclopediaUI.currentCategory).toBe(null);
        
        encyclopediaUI.showCategory('Skills');
        expect(encyclopediaUI.currentCategory).toBe('Skills');
        
        encyclopediaUI.showEntry('skill_melee_combat');
        expect(encyclopediaUI.currentEntry).not.toBe(null);
        expect(encyclopediaUI.currentEntry.name).toBe('Melee Combat');
    });
});

// Run tests if in Node.js environment
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { EncyclopediaSystem, EncyclopediaUI };
} 