/**
 * Tests for Action Availability Engine
 * 
 * Tests the dynamic action availability system including:
 * - Location-based restrictions
 * - Time-based restrictions
 * - Weather-based restrictions
 * - Player status requirements
 * - Equipment requirements
 * - Cooldown system
 */

// Import the ActionAvailabilityEngine
const { ActionAvailabilityEngine } = require('../engine/systems/ActionAvailabilityEngine');

// Mock systems for testing
class MockLocationSystem {
    constructor() {
        this.currentLocation = {
            globe: 'earth',
            continent: 'europe',
            country: 'england',
            region: 'forest',
            spot: 'oak_grove'
        };
    }

    getCurrentLocation() {
        return this.currentLocation;
    }

    getCurrentSpot() {
        return {
            id: 'oak_grove',
            name: 'Oak Grove',
            biome: 'forest'
        };
    }
}

class MockInventoryManager {
    constructor() {
        this.items = new Map();
    }

    hasItem(itemId, quantity) {
        const item = this.items.get(itemId);
        return item && item.quantity >= quantity;
    }

    addItem(itemId, quantity) {
        const current = this.items.get(itemId) || { quantity: 0 };
        this.items.set(itemId, { quantity: current.quantity + quantity });
    }

    getGameObject(itemId) {
        return {
            id: itemId,
            displayName: itemId.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())
        };
    }
}

class MockEventSystem {
    constructor() {
        this.listeners = new Map();
    }

    on(event, callback) {
        if (!this.listeners.has(event)) {
            this.listeners.set(event, []);
        }
        this.listeners.get(event).push(callback);
    }

    emit(event, data) {
        const callbacks = this.listeners.get(event) || [];
        callbacks.forEach(callback => callback(data));
    }
}

class MockStateManager {
    constructor() {
        this.state = {};
    }

    getState() {
        return this.state;
    }

    setState(newState) {
        this.state = { ...this.state, ...newState };
    }
}

describe('Action Availability Engine', () => {
    let availabilityEngine;
    let eventSystem;
    let stateManager;
    let locationSystem;
    let inventoryManager;

    beforeEach(() => {
        eventSystem = new MockEventSystem();
        stateManager = new MockStateManager();
        locationSystem = new MockLocationSystem();
        inventoryManager = new MockInventoryManager();
        
        availabilityEngine = new ActionAvailabilityEngine(eventSystem, stateManager);
    });

    describe('Location-based restrictions', () => {
        test('should allow action when location requirement is met', () => {
            const action = {
                name: 'Chop Oak',
                locationRestrictions: [
                    { type: 'biome', biomeType: 'forest' }
                ]
            };

            const context = { currentLocation: locationSystem.getCurrentLocation(), locationSystem };
            const result = availabilityEngine.checkActionAvailability(action, context);

            expect(result.available).toBe(true);
        });

        test('should deny action when location requirement is not met', () => {
            const action = {
                name: 'Chop Willow',
                locationRestrictions: [
                    { type: 'biome', biomeType: 'swamp' }
                ]
            };

            const context = { currentLocation: locationSystem.getCurrentLocation(), locationSystem };
            const result = availabilityEngine.checkActionAvailability(action, context);

            expect(result.available).toBe(false);
            expect(result.reasons).toContain('Failed location check');
        });

        test('should allow action when multiple location restrictions are provided (OR logic)', () => {
            const action = {
                name: 'Cook Stew',
                locationRestrictions: [
                    { type: 'spot', spotId: 'kitchen' },
                    { type: 'spot', spotId: 'campfire' }
                ]
            };

            const context = { currentLocation: locationSystem.getCurrentLocation(), locationSystem };
            const result = availabilityEngine.checkActionAvailability(action, context);

            expect(result.available).toBe(false); // Neither spot matches current location
        });
    });

    describe('Time-based restrictions', () => {
        test('should allow action during allowed time period', () => {
            availabilityEngine.updateGameTime({ hour: 14 }); // 2 PM

            const action = {
                name: 'Chop Oak',
                timeRestrictions: [
                    { type: 'timeOfDay', timeOfDay: 'day' }
                ]
            };

            const context = {};
            const result = availabilityEngine.checkActionAvailability(action, context);

            expect(result.available).toBe(true);
        });

        test('should deny action outside allowed time period', () => {
            availabilityEngine.updateGameTime({ hour: 22 }); // 10 PM

            const action = {
                name: 'Chop Oak',
                timeRestrictions: [
                    { type: 'timeOfDay', timeOfDay: 'day' }
                ]
            };

            const context = {};
            const result = availabilityEngine.checkActionAvailability(action, context);

            expect(result.available).toBe(false);
        });

        test('should handle hour range restrictions', () => {
            availabilityEngine.updateGameTime({ hour: 10 });

            const action = {
                name: 'Special Action',
                timeRestrictions: [
                    { type: 'hour', min: 8, max: 18 }
                ]
            };

            const context = {};
            const result = availabilityEngine.checkActionAvailability(action, context);

            expect(result.available).toBe(true);
        });
    });

    describe('Weather-based restrictions', () => {
        test('should allow action during allowed weather', () => {
            availabilityEngine.updateWeather({ type: 'clear' });

            const action = {
                name: 'Chop Oak',
                weatherRestrictions: [
                    { type: 'weatherType', allowedTypes: ['clear', 'cloudy'] }
                ]
            };

            const context = {};
            const result = availabilityEngine.checkActionAvailability(action, context);

            expect(result.available).toBe(true);
        });

        test('should deny action during disallowed weather', () => {
            availabilityEngine.updateWeather({ type: 'stormy' });

            const action = {
                name: 'Chop Oak',
                weatherRestrictions: [
                    { type: 'weatherType', allowedTypes: ['clear', 'cloudy'] }
                ]
            };

            const context = {};
            const result = availabilityEngine.checkActionAvailability(action, context);

            expect(result.available).toBe(false);
        });

        test('should handle temperature restrictions', () => {
            availabilityEngine.updateWeather({ temperature: 25 });

            const action = {
                name: 'Cold Weather Action',
                weatherRestrictions: [
                    { type: 'temperature', min: 0, max: 30 }
                ]
            };

            const context = {};
            const result = availabilityEngine.checkActionAvailability(action, context);

            expect(result.available).toBe(true);
        });
    });

    describe('Player status requirements', () => {
        test('should allow action when player status meets requirements', () => {
            availabilityEngine.updatePlayerStatus({ energy: 50, health: 80 });

            const action = {
                name: 'Chop Oak',
                playerStatusRequirements: {
                    energy: { min: 20 },
                    health: { min: 50 }
                }
            };

            const context = {};
            const result = availabilityEngine.checkActionAvailability(action, context);

            expect(result.available).toBe(true);
        });

        test('should deny action when player status does not meet requirements', () => {
            availabilityEngine.updatePlayerStatus({ energy: 10, health: 80 });

            const action = {
                name: 'Chop Oak',
                playerStatusRequirements: {
                    energy: { min: 20 }
                }
            };

            const context = {};
            const result = availabilityEngine.checkActionAvailability(action, context);

            expect(result.available).toBe(false);
            expect(result.missingRequirements).toContain('energy >= 20 (current: 10)');
        });

        test('should handle maximum value restrictions', () => {
            availabilityEngine.updatePlayerStatus({ hunger: 80 });

            const action = {
                name: 'Eat Food',
                playerStatusRequirements: {
                    hunger: { max: 90 }
                }
            };

            const context = {};
            const result = availabilityEngine.checkActionAvailability(action, context);

            expect(result.available).toBe(true);
        });
    });

    describe('Equipment requirements', () => {
        test('should allow action when required equipment is available', () => {
            inventoryManager.addItem('axe', 1);

            const action = {
                name: 'Chop Oak',
                equipmentRequirements: {
                    axe: { quantity: 1 }
                }
            };

            const context = { inventoryManager };
            const result = availabilityEngine.checkActionAvailability(action, context);

            expect(result.available).toBe(true);
        });

        test('should deny action when required equipment is missing', () => {
            const action = {
                name: 'Chop Oak',
                equipmentRequirements: {
                    axe: { quantity: 1 }
                }
            };

            const context = { inventoryManager };
            const result = availabilityEngine.checkActionAvailability(action, context);

            expect(result.available).toBe(false);
            expect(result.missingRequirements).toContain('Axe (1)');
        });

        test('should handle multiple equipment requirements', () => {
            inventoryManager.addItem('axe', 1);
            inventoryManager.addItem('rope', 2);

            const action = {
                name: 'Complex Action',
                equipmentRequirements: {
                    axe: { quantity: 1 },
                    rope: { quantity: 2 }
                }
            };

            const context = { inventoryManager };
            const result = availabilityEngine.checkActionAvailability(action, context);

            expect(result.available).toBe(true);
        });
    });

    describe('Cooldown system', () => {
        test('should allow action when cooldown has expired', () => {
            const action = {
                name: 'Chop Oak',
                cooldown: 1000 // 1 second
            };

            const context = {};
            const result = availabilityEngine.checkActionAvailability(action, context);

            expect(result.available).toBe(true);
        });

        test('should deny action when cooldown is active', () => {
            const action = {
                name: 'Chop Oak',
                cooldown: 10000 // 10 seconds
            };

            // Record action usage
            availabilityEngine.recordActionUsage('Chop Oak');

            const context = {};
            const result = availabilityEngine.checkActionAvailability(action, context);

            expect(result.available).toBe(false);
        });

        test('should return correct remaining cooldown time', () => {
            const action = {
                name: 'Chop Oak',
                cooldown: 10000 // 10 seconds
            };

            // Record action usage
            availabilityEngine.recordActionUsage('Chop Oak');

            const remaining = availabilityEngine.getRemainingCooldown('Chop Oak', 10000);
            expect(remaining).toBeGreaterThan(0);
            expect(remaining).toBeLessThanOrEqual(10000);
        });
    });

    describe('Complex availability scenarios', () => {
        test('should handle multiple restriction types', () => {
            // Set up conditions
            availabilityEngine.updateGameTime({ hour: 14 });
            availabilityEngine.updateWeather({ type: 'clear' });
            availabilityEngine.updatePlayerStatus({ energy: 50 });
            inventoryManager.addItem('axe', 1);

            const action = {
                name: 'Chop Oak',
                locationRestrictions: [
                    { type: 'biome', biomeType: 'forest' }
                ],
                timeRestrictions: [
                    { type: 'timeOfDay', timeOfDay: 'day' }
                ],
                weatherRestrictions: [
                    { type: 'weatherType', allowedTypes: ['clear', 'cloudy'] }
                ],
                playerStatusRequirements: {
                    energy: { min: 20 }
                },
                equipmentRequirements: {
                    axe: { quantity: 1 }
                }
            };

            const context = { 
                currentLocation: locationSystem.getCurrentLocation(), 
                locationSystem,
                inventoryManager 
            };
            const result = availabilityEngine.checkActionAvailability(action, context);

            expect(result.available).toBe(true);
        });

        test('should provide detailed failure information', () => {
            // Set up conditions that will fail
            availabilityEngine.updateGameTime({ hour: 22 }); // Night time
            availabilityEngine.updateWeather({ type: 'stormy' });
            availabilityEngine.updatePlayerStatus({ energy: 10 });

            const action = {
                name: 'Chop Oak',
                timeRestrictions: [
                    { type: 'timeOfDay', timeOfDay: 'day' }
                ],
                weatherRestrictions: [
                    { type: 'weatherType', allowedTypes: ['clear', 'cloudy'] }
                ],
                playerStatusRequirements: {
                    energy: { min: 20 }
                },
                equipmentRequirements: {
                    axe: { quantity: 1 }
                }
            };

            const context = { inventoryManager };
            const result = availabilityEngine.checkActionAvailability(action, context);

            expect(result.available).toBe(false);
            expect(result.reasons.length).toBeGreaterThan(0);
            expect(result.missingRequirements).toContain('energy >= 20 (current: 10)');
            expect(result.missingRequirements).toContain('Axe (1)');
        });
    });

    describe('Event system integration', () => {
        test('should emit events when conditions change', () => {
            const eventSpy = jest.fn();
            eventSystem.on('action:availability:changed', eventSpy);

            availabilityEngine.updateGameTime({ hour: 15 });
            availabilityEngine.updateWeather({ type: 'rainy' });
            availabilityEngine.updatePlayerStatus({ energy: 75 });

            expect(eventSpy).toHaveBeenCalledTimes(3);
        });

        test('should update internal state when events are received', () => {
            eventSystem.emit('time:update', { hour: 16 });
            eventSystem.emit('weather:change', { type: 'sunny' });
            eventSystem.emit('player:status:update', { health: 90 });

            expect(availabilityEngine.gameTime.hour).toBe(16);
            expect(availabilityEngine.weather.type).toBe('sunny');
            expect(availabilityEngine.playerStatus.health).toBe(90);
        });
    });

    describe('Debug information', () => {
        test('should provide debug information', () => {
            availabilityEngine.updateGameTime({ hour: 12 });
            availabilityEngine.updateWeather({ type: 'clear' });
            availabilityEngine.updatePlayerStatus({ energy: 100 });
            availabilityEngine.recordActionUsage('Test Action');

            const debugInfo = availabilityEngine.getDebugInfo();

            expect(debugInfo.gameTime.hour).toBe(12);
            expect(debugInfo.weather.type).toBe('clear');
            expect(debugInfo.playerStatus.energy).toBe(100);
            expect(debugInfo.activeCooldowns.length).toBe(1);
            expect(debugInfo.ruleCount).toBeGreaterThan(0);
        });
    });
}); 