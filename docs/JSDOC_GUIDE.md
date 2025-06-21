# JSDoc Documentation Guide

This guide covers the JSDoc documentation standards and best practices for the Taverns and Treasures project.

## Overview

JSDoc is used to provide comprehensive documentation for all JavaScript code, including:
- Class and function documentation
- Type information and parameter descriptions
- Return value documentation
- Error handling documentation
- Usage examples and notes

## Installation and Setup

### Dependencies
The project includes JSDoc and related tools:

```json
{
  "devDependencies": {
    "jsdoc": "^4.0.2",
    "eslint-plugin-jsdoc": "^48.2.1"
  }
}
```

### Configuration
JSDoc is configured via `jsdoc.json` in the project root.

### Commands
```bash
# Generate documentation
npm run docs

# Generate and serve documentation
npm run docs:serve

# Lint JSDoc comments
npm run lint
```

## Documentation Standards

### File Documentation

Every JavaScript file should start with a file-level JSDoc comment:

```javascript
/**
 * @fileoverview Brief description of the file's purpose and contents.
 * 
 * @author bearjcc
 * @version 1.0.0
 * @since 1.0.0
 */
```

### Class Documentation

All classes must be documented with comprehensive JSDoc comments:

```javascript
/**
 * Manages game configuration and provides centralized access to settings.
 * Handles loading, validation, and merging of configuration data.
 * 
 * @class ConfigManager
 * @since 1.0.0
 * 
 * @example
 * const configManager = new ConfigManager();
 * const gameConfig = await configManager.loadGameConfig();
 */
class ConfigManager {
    /**
     * Creates a new ConfigManager instance.
     * Initializes configuration storage and loads default configuration.
     * 
     * @constructor
     * @since 1.0.0
     */
    constructor() {
        /** @type {Object|null} The loaded game configuration */
        this.gameConfig = null;
    }
}
```

### Method Documentation

All public methods must include:

```javascript
/**
 * Loads the main game configuration file from data/config/game-config.json.
 * Merges with default configuration and validates the structure.
 * 
 * @async
 * @param {string} [configPath='../data/config/game-config.json'] - Path to config file
 * @returns {Promise<Object>} The loaded and merged game configuration
 * @throws {Error} If the configuration file cannot be loaded or parsed
 * @since 1.0.0
 * 
 * @example
 * const config = await configManager.loadGameConfig();
 * console.log(config.ui.tabs);
 */
async loadGameConfig(configPath = '../data/config/game-config.json') {
    // Implementation
}
```

### Function Documentation

Standalone functions should be documented similarly:

```javascript
/**
 * Handles the execution of a skill action, including requirements checking,
 * item consumption, XP rewards, and UI updates.
 * 
 * @param {string} actionName - The name/ID of the action to execute
 * @param {string|null} [variable=null] - Optional variable parameter for the action
 * @returns {void}
 * @throws {Error} If action execution fails
 * @since 1.0.0
 * 
 * @example
 * handleAction('chop_wood', 'oak');
 * handleAction('mine_ore');
 */
function handleAction(actionName, variable = null) {
    // Implementation
}
```

### Type Definitions

Use JSDoc type annotations for better type safety:

```javascript
/**
 * @typedef {Object} GameItem
 * @property {string} id - Unique identifier for the item
 * @property {string} name - Internal name used by the game
 * @property {string} displayName - User-facing name
 * @property {string} description - Item description
 * @property {string} icon - Emoji or icon representation
 * @property {boolean} [stackable=true] - Whether item can stack
 * @property {number} [maxStack=999] - Maximum stack size
 * @property {string} [type='misc'] - Item type category
 * @property {string} [rarity='common'] - Item rarity level
 */

/**
 * Creates a new game item from validated data.
 * 
 * @param {GameItem} itemData - Validated item data
 * @returns {GameObject} The created game object
 * @throws {Error} If data validation fails
 */
function createGameItem(itemData) {
    // Implementation
}
```

### Parameter Documentation

Parameters should be thoroughly documented:

```javascript
/**
 * @param {string} key - The message key to retrieve from configuration
 * @param {Object} [replacements={}] - Object containing placeholder replacements
 * @param {string} [replacements.skillName] - Skill name for replacement
 * @param {number} [replacements.level] - Level value for replacement
 * @param {string} [defaultMessage] - Fallback message if key not found
 * @returns {string} The processed message with replacements applied
 */
function getMessage(key, replacements = {}, defaultMessage = null) {
    // Implementation
}
```

### Return Value Documentation

Always document return values:

```javascript
/**
 * @returns {Object} Object containing validation result
 * @returns {boolean} returns.isValid - Whether validation passed
 * @returns {Array} returns.errors - Array of validation errors
 * @returns {string} returns.formattedErrors - Formatted error string
 */
function validateData(data) {
    // Implementation
}
```

### Error Documentation

Document all possible errors:

```javascript
/**
 * @throws {TypeError} If data parameter is not an object
 * @throws {Error} If required fields are missing
 * @throws {ValidationError} If data fails validation rules
 */
function processData(data) {
    // Implementation
}
```

## ESLint Integration

The project uses ESLint with JSDoc plugin for consistent documentation:

### Configuration
```json
{
  "plugins": ["jsdoc"],
  "rules": {
    "jsdoc/require-jsdoc": ["error", {
      "publicOnly": true,
      "require": {
        "FunctionDeclaration": true,
        "MethodDefinition": true,
        "ClassDeclaration": true
      }
    }],
    "jsdoc/require-param": "error",
    "jsdoc/require-returns": "error",
    "jsdoc/check-param-names": "error"
  }
}
```

### Common Rules
- `jsdoc/require-jsdoc`: Requires JSDoc for public functions/classes
- `jsdoc/require-param`: Requires parameter documentation
- `jsdoc/require-returns`: Requires return value documentation
- `jsdoc/check-param-names`: Ensures parameter names match
- `jsdoc/check-types`: Validates type annotations

## Best Practices

### 1. Be Descriptive
```javascript
// Good
/**
 * Calculates the XP required to reach the next skill level.
 * Uses exponential progression formula with configurable multiplier.
 */

// Bad
/**
 * Calculates XP.
 */
```

### 2. Use Proper Types
```javascript
// Good
/**
 * @param {string} skillName - The name of the skill
 * @param {number} currentLevel - Current skill level
 * @returns {number} XP required for next level
 */

// Bad
/**
 * @param {*} skillName - Skill name
 * @param {*} currentLevel - Level
 * @returns {*} XP
 */
```

### 3. Document Complex Logic
```javascript
/**
 * Merges two configuration objects with deep recursion.
 * Source properties override target properties. Arrays are replaced entirely.
 * 
 * @param {Object} target - Base configuration object
 * @param {Object} source - Configuration to merge from
 * @returns {Object} Merged configuration object
 */
```

### 4. Include Examples
```javascript
/**
 * @example
 * const config = new ConfigManager();
 * await config.loadGameConfig();
 * const xpMultiplier = config.getConstant('xpMultiplier', 100);
 */
```

### 5. Document Side Effects
```javascript
/**
 * Saves the current game state to localStorage.
 * This operation is synchronous and may throw if storage is full.
 * 
 * @param {GameState} gameState - Current game state to save
 * @throws {QuotaExceededError} If localStorage is full
 */
```

## Common Patterns

### Async Functions
```javascript
/**
 * @async
 * @param {string} url - URL to fetch
 * @returns {Promise<Object>} Parsed JSON response
 * @throws {Error} If fetch fails or JSON is invalid
 */
async function fetchData(url) {
    // Implementation
}
```

### Event Handlers
```javascript
/**
 * Handles click events on action buttons.
 * 
 * @param {Event} event - DOM click event
 * @param {string} actionName - Name of the action to execute
 * @returns {void}
 */
function handleActionClick(event, actionName) {
    // Implementation
}
```

### Factory Functions
```javascript
/**
 * Creates a new game object based on type and data.
 * 
 * @param {string} type - Type of game object to create
 * @param {Object} data - Object data
 * @returns {GameObject} Created game object instance
 * @throws {Error} If type is not supported
 */
function createGameObject(type, data) {
    // Implementation
}
```

## Documentation Generation

### Output
JSDoc generates HTML documentation in `docs/jsdoc/` directory.

### Customization
The JSDoc configuration can be customized in `jsdoc.json`:
- Template selection
- Output directory
- Source file inclusion/exclusion
- Plugin configuration

### Continuous Integration
Documentation is automatically generated in GitHub Actions and uploaded as artifacts.

## Maintenance

### Regular Updates
- Update documentation when code changes
- Review generated docs for accuracy
- Keep examples current with code

### Quality Checks
- Run `npm run lint` to check JSDoc compliance
- Review generated documentation regularly
- Ensure all public APIs are documented

### Version Control
- Include JSDoc comments in code reviews
- Update documentation with feature changes
- Maintain consistent style across the codebase 