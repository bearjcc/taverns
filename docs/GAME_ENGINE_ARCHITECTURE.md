# GameEngine Architecture - Best Practices

## Overview

The Taverns and Treasures game has been refactored to use a proper GameEngine architecture that centralizes system management and eliminates dependency on global variables. This document explains the new architecture and best practices for loading and managing game systems.

## Problem Solved

### Previous Issues
- **Individual Script Loading**: Each engine component was loaded separately via individual `<script>` tags
- **Manual Initialization**: Each manager was manually created and initialized independently
- **Global Variable Dependencies**: Systems relied on global variables like `configManager`, `uiManager`, etc.
- **No Central Orchestration**: No single point of control for system initialization and lifecycle
- **Tight Coupling**: Systems were tightly coupled to global state

### Current Solution
- **Centralized GameEngine**: Single orchestrator class that manages all systems
- **Dependency Injection**: Systems receive their dependencies through proper injection
- **Proper Loading Order**: Scripts loaded in dependency order with clear separation
- **System Registry**: Central registry for accessing all game systems
- **Clean Architecture**: Clear separation of concerns and loose coupling

## Architecture Components

### 1. GameEngine Class
The central orchestrator that manages all game systems:

```javascript
class GameEngine {
    constructor(config = {}) {
        // Core systems
        this.stateManager = null;
        this.eventSystem = null;
        this.assetLoader = null;
        this.localization = null;
        this.configManager = null;
        
        // Game systems
        this.skillManager = null;
        this.inventoryManager = null;
        this.actionManager = null;
        this.traitManager = null;
        this.uiManager = null;
        // ... other systems
    }
}
```

### 2. System Loading Order
Scripts are loaded in proper dependency order:

```html
<!-- Engine Core Dependencies (load in dependency order) -->
<script src="engine/utils/Localization.js"></script>
<script src="engine/core/EventSystem.js"></script>
<script src="engine/core/StateManager.js"></script>
<script src="engine/core/AssetLoader.js"></script>
<script src="engine/core/ConfigManager.js"></script>
<script src="engine/core/GameStateManager.js"></script>

<!-- Engine Systems (load in dependency order) -->
<script src="engine/systems/SkillManager.js"></script>
<script src="engine/systems/InventoryManager.js"></script>
<script src="engine/systems/ActionManager.js"></script>
<!-- ... other systems -->

<!-- Main Game Engine -->
<script src="engine/core/GameEngine.js"></script>
```

### 3. System Initialization
Systems are initialized through the GameEngine with proper dependency injection:

```javascript
async _initializeGameSystems() {
    // Load configurations first
    const configs = await this.configManager.loadAllConfigs();
    
    // Initialize game systems
    this.skillManager = new SkillManager();
    this.inventoryManager = new InventoryManager();
    this.actionManager = new ActionManager();
    // ... other systems
    
    // Load configurations into managers
    this.skillManager.loadFromConfig(configs.skillsConfig, configs.gameConfig);
    this.traitManager.loadFromConfig(configs.traitsConfig);
    this.actionManager.loadFromConfig(configs.actionsConfig);
}
```

### 4. Dependency Injection
Systems receive their dependencies through setter methods:

```javascript
_setupSystemReferences() {
    // Set up manager references
    if (this.skillManager && this.configManager) {
        this.skillManager.setConfigManager(this.configManager);
    }
    
    if (this.skillManager && this.uiManager) {
        this.skillManager.setUIManager(this.uiManager);
    }
    
    // ... other system references
}
```

## Best Practices

### 1. System Design
- **No Global Dependencies**: Systems should not rely on global variables
- **Dependency Injection**: Use setter methods to inject dependencies
- **Single Responsibility**: Each system should have a clear, single purpose
- **Interface Consistency**: All systems should follow similar patterns

### 2. Loading Order
- **Dependencies First**: Load core dependencies before systems that use them
- **Clear Separation**: Group related systems together
- **Error Handling**: Handle missing dependencies gracefully
- **Async Loading**: Use async/await for configuration loading

### 3. System Communication
- **Event System**: Use the EventSystem for cross-system communication
- **System Registry**: Access systems through `gameEngine.getSystem(name)`
- **Loose Coupling**: Systems should not directly reference each other
- **Interface Contracts**: Define clear interfaces between systems

### 4. Configuration Management
- **Centralized Config**: Use ConfigManager for all configuration access
- **Fallback Values**: Provide sensible defaults for missing configuration
- **Validation**: Validate configuration data on load
- **Hot Reloading**: Support configuration updates without restart

## Usage Examples

### Initializing the Game
```javascript
// Create and configure the game engine
const gameEngine = new GameEngine({
    autoSaveInterval: 120000, // 2 minutes
    defaultLanguage: 'en',
    assetCacheSize: 100
});

// Initialize with base game mod
await gameEngine.initialize('base-game', {
    loadSavedState: true,
    showWelcomeMessage: true
});

// Start the game
gameEngine.start();
```

### Accessing Systems
```javascript
// Get a specific system
const skillManager = gameEngine.getSystem('skills');
const inventoryManager = gameEngine.getSystem('inventory');
const uiManager = gameEngine.getSystem('ui');

// Use systems
const skills = skillManager.getAllSkills();
const items = inventoryManager.getItems();
uiManager.showToast('Game loaded!', 'success');
```

### System Communication
```javascript
// Using the event system
gameEngine.getSystem('events').on('skill:levelUp', (data) => {
    const ui = gameEngine.getSystem('ui');
    ui.showToast(`Level up! ${data.skillName} is now level ${data.level}`, 'success');
});

// Emitting events
gameEngine.getSystem('events').emit('action:performed', {
    actionName: 'mine_ore',
    xpGained: 10
});
```

## Migration Guide

### For Existing Systems
1. **Remove Global Dependencies**: Replace global variable usage with injected dependencies
2. **Add Setter Methods**: Add methods to inject ConfigManager and UIManager
3. **Update Constructor**: Accept dependencies through constructor or setter methods
4. **Test Integration**: Verify systems work with the new GameEngine

### For New Systems
1. **Follow Patterns**: Use the established patterns from existing systems
2. **Dependency Injection**: Always use dependency injection, never global variables
3. **Event Communication**: Use the EventSystem for cross-system communication
4. **Register System**: Add the system to the GameEngine's system registry

## Benefits

### 1. Maintainability
- **Clear Dependencies**: Easy to see what each system depends on
- **Modular Design**: Systems can be developed and tested independently
- **Consistent Patterns**: All systems follow the same architectural patterns

### 2. Testability
- **Isolated Testing**: Systems can be tested in isolation
- **Mock Dependencies**: Easy to mock dependencies for testing
- **Clear Interfaces**: Well-defined interfaces between systems

### 3. Extensibility
- **Plugin Architecture**: Easy to add new systems
- **Mod Support**: Support for different game mods
- **Configuration Driven**: Systems can be configured without code changes

### 4. Performance
- **Lazy Loading**: Systems can be loaded on demand
- **Resource Management**: Centralized resource management
- **Memory Efficiency**: Better memory usage through proper lifecycle management

## Future Considerations

### 1. Module System
- **ES6 Modules**: Consider migrating to ES6 modules for better dependency management
- **Dynamic Imports**: Support for dynamic loading of systems
- **Code Splitting**: Split code into smaller, loadable chunks

### 2. Plugin Architecture
- **System Plugins**: Allow third-party systems to be loaded
- **Mod Support**: Support for game modifications
- **Extension Points**: Well-defined extension points for customization

### 3. Performance Optimization
- **System Pooling**: Pool system instances for better performance
- **Caching**: Implement intelligent caching strategies
- **Background Processing**: Move heavy operations to background threads

## Conclusion

The new GameEngine architecture provides a solid foundation for the Taverns and Treasures game. It eliminates the problems of global variable dependencies and provides a clean, maintainable, and extensible architecture. By following the established patterns and best practices, developers can easily add new systems and features while maintaining code quality and performance. 