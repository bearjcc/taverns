// Jest setup file for Taverns game testing
// This file runs before each test file

// Mock localStorage for testing with internal store
let localStorageStore = {};
const localStorageMock = {
  getItem: jest.fn((key) => {
    return Object.prototype.hasOwnProperty.call(localStorageStore, key)
      ? localStorageStore[key]
      : null;
  }),
  setItem: jest.fn((key, value) => {
    localStorageStore[key] = value;
  }),
  removeItem: jest.fn((key) => {
    delete localStorageStore[key];
  }),
  clear: jest.fn(() => {
    localStorageStore = {};
  })
};

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

// Mock DOM elements that the game expects
document.body.innerHTML = `
  <div id="narration-content"></div>
  <div id="skills-content"></div>
  <div id="actions-content"></div>
  <div id="inventory-content"></div>
  <div id="character-content"></div>
  <div id="toast-container"></div>
  <div id="skills-tab"></div>
  <div id="inventory-tab"></div>
  <div id="character-tab"></div>
`;

// Mock console methods to avoid noise in tests
global.console = {
  ...console,
  log: jest.fn(),
  error: jest.fn(),
  warn: jest.fn(),
};

// Mock fetch for async operations
global.fetch = jest.fn();

// Reset all mocks before each test
beforeEach(() => {
  jest.clearAllMocks();
  localStorageMock.getItem.mockClear();
  localStorageMock.setItem.mockClear();
  localStorageMock.removeItem.mockClear();
  localStorageMock.clear.mockClear();
  localStorageStore = {};
  // Clear DOM content
  document.getElementById('narration-content').innerHTML = '';
  document.getElementById('skills-content').innerHTML = '';
  document.getElementById('actions-content').innerHTML = '';
  document.getElementById('inventory-content').innerHTML = '';
  document.getElementById('character-content').innerHTML = '';
  document.getElementById('toast-container').innerHTML = '';
});

// Helper function to load game modules for testing
global.loadGameForTesting = () => {
  // This will be used to load the game.js file in tests
  // We'll need to handle the module loading carefully
}; 