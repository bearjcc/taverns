/**
 * Test setup file for Next.js migration
 * Updated for new engine structure and module system
 */

// Mock Next.js environment for tests
global.window = global.window || {};
global.document = global.document || {
    readyState: 'complete',
    addEventListener: () => {},
    removeEventListener: () => {}
};

// Mock fetch for API tests
global.fetch = global.fetch || jest.fn();

// Mock localStorage with proper Jest functions
const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn()
};

Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
    writable: true
});

Object.defineProperty(global, 'localStorage', {
    value: localStorageMock,
    writable: true
});

// Mock sessionStorage
const sessionStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn()
};

Object.defineProperty(window, 'sessionStorage', {
    value: sessionStorageMock,
    writable: true
});

Object.defineProperty(global, 'sessionStorage', {
    value: sessionStorageMock,
    writable: true
});

// Mock console methods for cleaner test output
global.console = {
    ...console,
    log: jest.fn(),
    error: jest.fn(),
    warn: jest.fn()
};

// Setup test environment
beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
});

// Cleanup after tests
afterEach(() => {
    // Clean up any remaining mocks
    jest.clearAllMocks();
});

// Export test utilities
module.exports = {
    testUtils: {
        mockGameState: () => ({
            skills: {},
            inventory: {},
            achievements: [],
            location: 'tavern'
        }),
        
        mockGameConfig: () => ({
            ui: {
                tabs: [],
                cssClasses: {},
                elementIds: {}
            },
            constants: {
                xpMultiplier: 100,
                defaultLevel: 1,
                progressMax: 100
            },
            skills: {},
            messages: {}
        })
    }
}; 