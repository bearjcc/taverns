/**
 * Location System Tests
 * 
 * Tests for the LocationSystem class functionality including:
 * - Location hierarchy management
 * - Spot navigation and connections
 * - Action availability based on location
 * - Travel requirements and costs
 */

// Mock dependencies
class MockStateManager {
    constructor() {
        this.state = {};
    }
    
    getState(key) {
        return this.state[key];
    }
    
    setState(key, value) {
        this.state[key] = value;
    }
}

class MockEventSystem {
    constructor() {
        this.events = {};
    }
    
    emit(event, data) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(data);
    }
    
    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }
    
    getEventCount(event) {
        return this.events[event] ? this.events[event].length : 0;
    }
}

// Test location data
const testLocationData = {
    "earth": {
        "name": "Earth",
        "description": "A diverse world with many lands and peoples",
        "continents": {
            "europe": {
                "name": "Europe",
                "description": "A continent of ancient kingdoms and modern nations",
                "countries": {
                    "britain": {
                        "name": "Britain",
                        "description": "A green and pleasant land with rolling hills",
                        "regions": {
                            "southwest": {
                                "name": "Southwest England",
                                "description": "A region of moors, coasts, and ancient stone circles",
                                "spots": {
                                    "river_avon_bank": {
                                        "name": "River Avon Bank",
                                        "description": "You stand beside the gentle River Avon.",
                                        "actions": [
                                            "swim_across",
                                            "net_fish",
                                            "line_fish", 
                                            "look_around",
                                            "leave"
                                        ],
                                        "connections": [
                                            {
                                                "spotId": "avon_bridge",
                                                "travelTime": 5,
                                                "description": "Walk to the bridge"
                                            },
                                            {
                                                "spotId": "woodland_path",
                                                "travelTime": 3,
                                                "description": "Follow the path into the woods"
                                            }
                                        ]
                                    },
                                    "avon_bridge": {
                                        "name": "Avon Bridge",
                                        "description": "A sturdy wooden bridge spans the River Avon.",
                                        "actions": [
                                            "cross_bridge",
                                            "look_downstream",
                                            "look_upstream",
                                            "leave"
                                        ],
                                        "connections": [
                                            {
                                                "spotId": "river_avon_bank",
                                                "travelTime": 5,
                                                "description": "Return to the river bank"
                                            }
                                        ]
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};

// Test suite
describe('LocationSystem', () => {
    let locationSystem;
    let stateManager;
    let eventSystem;
    
    beforeEach(() => {
        stateManager = new MockStateManager();
        eventSystem = new MockEventSystem();
        locationSystem = new LocationSystem(testLocationData, stateManager, eventSystem);
    });
    
    describe('Initialization', () => {
        test('should initialize with location data', async () => {
            await locationSystem.initialize();
            
            expect(locationSystem.locationData).toBe(testLocationData);
            expect(locationSystem.currentLocation.spot).toBeTruthy();
            expect(eventSystem.getEventCount('location:initialized')).toBe(1);
        });
        
        test('should set default location if none exists', async () => {
            await locationSystem.initialize();
            
            const currentLocation = locationSystem.getCurrentLocation();
            expect(currentLocation.globe).toBe('earth');
            expect(currentLocation.continent).toBe('europe');
            expect(currentLocation.country).toBe('britain');
            expect(currentLocation.region).toBe('southwest');
            expect(currentLocation.spot).toBeTruthy();
        });
        
        test('should load saved location state', async () => {
            const savedLocation = {
                globe: 'earth',
                continent: 'europe',
                country: 'britain',
                region: 'southwest',
                spot: 'avon_bridge'
            };
            stateManager.setState('location', savedLocation);
            
            await locationSystem.initialize();
            
            const currentLocation = locationSystem.getCurrentLocation();
            expect(currentLocation).toEqual(savedLocation);
        });
    });
    
    describe('Location Navigation', () => {
        beforeEach(async () => {
            await locationSystem.initialize();
        });
        
        test('should get current spot', () => {
            const currentSpot = locationSystem.getCurrentSpot();
            expect(currentSpot).toBeTruthy();
            expect(currentSpot.name).toBeTruthy();
            expect(currentSpot.description).toBeTruthy();
            expect(currentSpot.actions).toBeInstanceOf(Array);
        });
        
        test('should get available actions for current spot', () => {
            const availableActions = locationSystem.getAvailableActions();
            expect(availableActions).toBeInstanceOf(Array);
            expect(availableActions.length).toBeGreaterThan(0);
        });
        
        test('should move to new spot', () => {
            const initialLocation = locationSystem.getCurrentLocation();
            const success = locationSystem.moveToSpot('avon_bridge');
            
            expect(success).toBe(true);
            
            const newLocation = locationSystem.getCurrentLocation();
            expect(newLocation.spot).toBe('avon_bridge');
            expect(newLocation).not.toEqual(initialLocation);
            
            expect(eventSystem.getEventCount('location:changed')).toBe(1);
        });
        
        test('should fail to move to non-existent spot', () => {
            const success = locationSystem.moveToSpot('non_existent_spot');
            expect(success).toBe(false);
        });
        
        test('should get available spots from current location', () => {
            const availableSpots = locationSystem.getAvailableSpots();
            expect(availableSpots).toBeInstanceOf(Array);
            
            if (availableSpots.length > 0) {
                const spot = availableSpots[0];
                expect(spot.id).toBeTruthy();
                expect(spot.name).toBeTruthy();
                expect(spot.travelTime).toBeGreaterThanOrEqual(0);
            }
        });
    });
    
    describe('Location Hierarchy', () => {
        beforeEach(async () => {
            await locationSystem.initialize();
        });
        
        test('should get full location hierarchy', () => {
            const hierarchy = locationSystem.getLocationHierarchy();
            expect(hierarchy).toBe(testLocationData);
        });
        
        test('should get specific location path', () => {
            const europe = locationSystem.getLocationHierarchy('earth.europe');
            expect(europe).toBeTruthy();
            expect(europe.name).toBe('Europe');
        });
        
        test('should return null for invalid path', () => {
            const invalid = locationSystem.getLocationHierarchy('invalid.path');
            expect(invalid).toBeNull();
        });
        
        test('should get spot by path', () => {
            const spot = locationSystem.getSpotByPath('earth.europe.britain.southwest.river_avon_bank');
            expect(spot).toBeTruthy();
            expect(spot.name).toBe('River Avon Bank');
        });
        
        test('should return null for invalid spot path', () => {
            const spot = locationSystem.getSpotByPath('invalid.path');
            expect(spot).toBeNull();
        });
    });
    
    describe('Travel Requirements', () => {
        beforeEach(async () => {
            await locationSystem.initialize();
        });
        
        test('should check travel requirements', () => {
            const playerState = {
                skills: {
                    swimming: { level: 5 }
                },
                inventory: {
                    rope: { quantity: 2 }
                }
            };
            
            const travelCheck = locationSystem.canTravelToSpot('avon_bridge', playerState);
            expect(travelCheck.canTravel).toBe(true);
        });
        
        test('should fail travel check for missing skill', () => {
            const playerState = {
                skills: {
                    swimming: { level: 1 }
                },
                inventory: {}
            };
            
            // Create a connection with skill requirements
            const currentSpot = locationSystem.getCurrentSpot();
            if (currentSpot.connections) {
                currentSpot.connections[0].requirements = {
                    skills: { swimming: 5 }
                };
                
                const travelCheck = locationSystem.canTravelToSpot(currentSpot.connections[0].spotId, playerState);
                expect(travelCheck.canTravel).toBe(false);
                expect(travelCheck.reason).toContain('Requires swimming level 5');
            }
        });
        
        test('should fail travel check for missing items', () => {
            const playerState = {
                skills: {},
                inventory: {}
            };
            
            // Create a connection with item requirements
            const currentSpot = locationSystem.getCurrentSpot();
            if (currentSpot.connections) {
                currentSpot.connections[0].travelCost = {
                    items: { rope: 1 }
                };
                
                const travelCheck = locationSystem.canTravelToSpot(currentSpot.connections[0].spotId, playerState);
                expect(travelCheck.canTravel).toBe(false);
                expect(travelCheck.reason).toContain('Need rope x1');
            }
        });
    });
    
    describe('Spot Actions', () => {
        beforeEach(async () => {
            await locationSystem.initialize();
        });
        
        test('should get actions for specific spot', () => {
            const spotActions = locationSystem.getSpotByPath('earth.europe.britain.southwest.river_avon_bank');
            expect(spotActions.actions).toContain('swim_across');
            expect(spotActions.actions).toContain('net_fish');
            expect(spotActions.actions).toContain('line_fish');
        });
        
        test('should handle spots without actions', () => {
            // Create a spot without actions
            const spotWithoutActions = {
                name: "Empty Spot",
                description: "A spot with no actions",
                connections: []
            };
            
            const actions = locationSystem.getAvailableActions();
            // Should still return an array (empty or with default actions)
            expect(Array.isArray(actions)).toBe(true);
        });
    });
    
    describe('State Persistence', () => {
        test('should save location state', async () => {
            await locationSystem.initialize();
            
            const testLocation = {
                globe: 'earth',
                continent: 'europe',
                country: 'britain',
                region: 'southwest',
                spot: 'avon_bridge'
            };
            
            locationSystem.currentLocation = testLocation;
            locationSystem._saveLocationState();
            
            const savedState = stateManager.getState('location');
            expect(savedState).toEqual(testLocation);
        });
        
        test('should load location state', async () => {
            const savedLocation = {
                globe: 'earth',
                continent: 'europe',
                country: 'britain',
                region: 'southwest',
                spot: 'avon_bridge'
            };
            
            stateManager.setState('location', savedLocation);
            await locationSystem.initialize();
            
            const currentLocation = locationSystem.getCurrentLocation();
            expect(currentLocation).toEqual(savedLocation);
        });
    });
    
    describe('Error Handling', () => {
        test('should handle invalid location data gracefully', async () => {
            const invalidLocationSystem = new LocationSystem(null, stateManager, eventSystem);
            await expect(invalidLocationSystem.initialize()).resolves.not.toThrow();
        });
        
        test('should handle missing spot gracefully', () => {
            const spot = locationSystem._findSpotById('non_existent_spot');
            expect(spot).toBeNull();
        });
        
        test('should handle invalid spot path gracefully', () => {
            const spot = locationSystem._getSpotByPath('invalid.path');
            expect(spot).toBeNull();
        });
    });
});

// Run tests if this file is executed directly
if (typeof window === 'undefined') {
    // Node.js environment
    const { describe, test, expect, beforeEach } = require('jest');
    module.exports = { describe, test, expect, beforeEach };
} 