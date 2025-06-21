# Species System Documentation

## Overview

The Species System is a modular, well-structured implementation that handles species data for the Taverns game. It follows the **Separation of Concerns** principle by dividing functionality into distinct layers:

- **Data Layer**: Raw species data and configuration
- **Engine Layer**: Business logic and data management
- **UI Layer**: User interface and interaction handling

## Architecture

### 1. Data Layer (`data/species.json`)

**Purpose**: Stores all species data in a structured JSON format.

**Structure**:
```json
{
  "playable": {
    "species_id": {
      "name": "Species Name",
      "description": "Species description",
      "attributes": {
        "strength": { "min": 1, "max": 100 },
        "dexterity": { "min": 1, "max": 100 }
      },
      "bonuses": {
        "luck": 0,
        "survival": 0,
        "combat": 0
      },
      "professions": ["Profession1", "Profession2"],
      "playable": true
    }
  },
  "non_playable": {
    // Similar structure for non-playable species
  }
}
```

**Responsibilities**:
- Store species definitions
- Define attribute ranges
- Specify bonuses and professions
- Separate playable from non-playable species

### 2. Engine Layer

#### Species Class (`species.js`)

**Purpose**: Represents individual species with business logic.

**Key Methods**:
- `generateAttributes()`: Generate random attributes within species ranges
- `validateAttributes(attributes)`: Validate attribute values
- `getAttributeRange(attributeName)`: Get min/max for specific attribute
- `getBonus(bonusType)`: Get bonus value for specific type
- `hasProfession(profession)`: Check if species has specific profession

**Responsibilities**:
- Individual species data management
- Attribute generation and validation
- Bonus and profession queries
- Data encapsulation

#### SpeciesManager Class (`species-manager.js`)

**Purpose**: Manages all species data and provides high-level operations.

**Key Methods**:
- `loadSpeciesData(path)`: Load species data from JSON file
- `getSpecies(speciesId)`: Get species by ID
- `getPlayableSpecies()`: Get all playable species
- `getSpeciesByProfession(profession)`: Filter species by profession
- `getRandomPlayableSpecies()`: Get random playable species
- `searchSpecies(term)`: Search species by name/description

**Responsibilities**:
- Data loading and caching
- Species filtering and searching
- Statistics and validation
- High-level species operations

### 3. UI Layer

#### SpeciesUI Class (`species-ui.js`)

**Purpose**: Handles all species-related user interface operations.

**Key Methods**:
- `initialize(elementIds)`: Setup UI elements and event listeners
- `updateSpeciesSelector()`: Update dropdown with available species
- `createSpeciesCard(species)`: Create species display card
- `updateSpeciesInfo(species)`: Update detailed species information
- `onSpeciesSelected(speciesId)`: Handle species selection
- `filterSpecies(searchTerm)`: Filter species by search term

**Responsibilities**:
- UI element management
- Event handling
- Display updates
- User interaction

## Usage Examples

### Basic Setup

```javascript
// Create instances
const speciesManager = new SpeciesManager();
const speciesUI = new SpeciesUI(speciesManager);

// Load data and initialize
async function initializeSpeciesSystem() {
    const success = await speciesManager.loadSpeciesData();
    if (success) {
        speciesUI.initialize({
            speciesSelector: 'species-selector',
            speciesInfo: 'species-info',
            speciesList: 'species-list'
        });
    }
}
```

### Species Selection

```javascript
// Get species by ID
const dragonborn = speciesManager.getSpecies('dragonborn');

// Get species by name
const elf = speciesManager.getSpeciesByName('Elf');

// Get random playable species
const randomSpecies = speciesManager.getRandomPlayableSpecies();
```

### Attribute Generation

```javascript
// Generate random attributes for a species
const attributes = dragonborn.generateAttributes();
console.log(attributes);
// Output: { strength: 45, dexterity: 23, ... }

// Validate attributes
const validation = dragonborn.validateAttributes(attributes);
if (validation.isValid) {
    console.log('Attributes are valid');
} else {
    console.log('Validation errors:', validation.errors);
}
```

### Filtering and Searching

```javascript
// Get species with specific profession
const magicUsers = speciesManager.getSpeciesByProfession('Adv. Magic');

// Get species with high strength
const strongSpecies = speciesManager.getSpeciesByAttributeRange('strength', 50, 100);

// Search species by name/description
const searchResults = speciesManager.searchSpecies('elf');
```

### UI Integration

```javascript
// Handle species selection
speciesUI.on('onSpeciesSelected', (species) => {
    console.log(`Selected: ${species.name}`);
    // Update game state, character creation, etc.
});

// Update displays
speciesUI.updateDisplay();

// Show loading/error states
speciesUI.showLoading();
speciesUI.showError('Failed to load data');
```

## File Structure

```
taverns/
├── data/
│   └── species.json          # Species data (Data Layer)
├── species.js               # Species class (Engine Layer)
├── species-manager.js       # SpeciesManager class (Engine Layer)
├── species-ui.js            # SpeciesUI class (UI Layer)
├── species.css              # Species UI styles (UI Layer)
├── species-example.html     # Example implementation
└── SPECIES_SYSTEM.md        # This documentation
```

## Integration with Main Game

### Adding to Main Game

1. **Include files in HTML**:
```html
<link rel="stylesheet" href="species.css">
<script src="species.js"></script>
<script src="species-manager.js"></script>
<script src="species-ui.js"></script>
```

2. **Initialize in game.js**:
```javascript
// Add to game state
let speciesManager;
let speciesUI;

// Initialize in initGame()
async function initGame() {
    // ... existing initialization ...
    
    // Initialize species system
    speciesManager = new SpeciesManager();
    speciesUI = new SpeciesUI(speciesManager);
    
    const speciesLoaded = await speciesManager.loadSpeciesData();
    if (speciesLoaded) {
        speciesUI.initialize({
            speciesSelector: 'species-selector',
            speciesInfo: 'species-info',
            speciesList: 'species-list'
        });
    }
}
```

3. **Add to game state persistence**:
```javascript
// Save species selection
function saveGameState() {
    const gameState = {
        // ... existing state ...
        selectedSpecies: speciesUI.getCurrentSpecies()?.id || null
    };
    localStorage.setItem('tavernsGameState', JSON.stringify(gameState));
}

// Load species selection
function loadGameState() {
    // ... existing loading ...
    if (gameState.selectedSpecies) {
        speciesUI.onSpeciesSelected(gameState.selectedSpecies);
    }
}
```

## Benefits of This Architecture

### 1. Separation of Concerns
- **Data**: Pure data storage, no logic
- **Engine**: Business logic, no UI dependencies
- **UI**: Presentation logic, no data manipulation

### 2. Maintainability
- Easy to modify species data without touching code
- UI changes don't affect business logic
- Engine logic is reusable across different UIs

### 3. Testability
- Each layer can be tested independently
- Mock data can be easily substituted
- UI can be tested without real data

### 4. Extensibility
- Easy to add new species to data file
- New UI components can reuse engine logic
- Additional features can be added to any layer

### 5. Performance
- Data is loaded once and cached
- Efficient filtering and searching
- Minimal DOM manipulation

## Best Practices

### 1. Data Management
- Always validate data before use
- Use consistent naming conventions
- Provide fallback values for missing data

### 2. Error Handling
- Graceful degradation when data fails to load
- User-friendly error messages
- Console logging for debugging

### 3. UI Design
- Follow existing dark theme
- Use consistent font (Courier New)
- Provide loading and error states

### 4. Code Organization
- Single responsibility for each class
- Clear method names and documentation
- Consistent code style

## Future Enhancements

### 1. Additional Features
- Species-specific abilities
- Attribute modifiers from equipment
- Species evolution/progression

### 2. UI Improvements
- Drag-and-drop species selection
- Attribute point allocation
- Visual attribute charts

### 3. Data Enhancements
- Species relationships/alliances
- Cultural information
- Historical data

### 4. Integration
- Character creation system
- Save/load functionality
- Multiplayer considerations

## Troubleshooting

### Common Issues

1. **Data not loading**: Check file path and JSON syntax
2. **UI not updating**: Verify element IDs match initialization
3. **Attributes out of range**: Validate species data structure
4. **Performance issues**: Check for memory leaks in event listeners

### Debug Tips

1. Use browser console to check for errors
2. Verify data loading with `speciesManager.getStatistics()`
3. Test individual components in isolation
4. Check network tab for failed requests

This species system provides a solid foundation for character creation and species management in the Taverns game, with clear separation of concerns and extensible architecture. 