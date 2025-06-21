# Taverns and Treasures

A text-based RPG inspired by "A Dark Room" with skill-based progression and RPG elements. Features a 3-column layout with narration, actions, and character information.

## Project Structure

```
taverns/
├── index.html              # Main game interface
├── package.json            # Project dependencies and scripts
├── .gitignore             # Git ignore rules
├── .cursorrules           # Cursor IDE configuration
├── assets/                # Static assets
│   ├── css/              # Stylesheets
│   │   ├── styles.css    # Main game styles
│   │   ├── components.css # Component styles
│   │   └── species.css   # Species-specific styles
│   └── js/               # JavaScript files
│       ├── game.js       # Main game logic
│       ├── components.js # UI components
│       ├── species.js    # Species system
│       ├── species-manager.js # Species management
│       └── species-ui.js # Species UI components
├── data/                  # Game data and configuration
│   ├── config/           # Configuration files
│   │   ├── game-config.json # Main game configuration
│   │   └── manifest.json # Game manifest
│   ├── skills.json       # Skill definitions
│   ├── items.json        # Item definitions
│   ├── species.json      # Species definitions
│   └── traits.json       # Trait definitions
├── engine/               # Game engine
│   ├── core/            # Core engine components
│   ├── systems/         # Game systems
│   ├── ui/              # UI management
│   └── utils/           # Utility functions
├── tests/               # Test files
│   ├── *.test.js        # Unit tests
│   ├── test-utils.js    # Test utilities
│   └── *.html           # Test pages
└── docs/                # Documentation
    ├── README.md        # Main documentation
    ├── TODO.md          # Development tasks
    ├── DEVELOPMENT_ROADMAP.md # Development plan
    └── *.md             # Other documentation
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   The development server will automatically open the game in your browser.

## Development

- **Frontend**: Plain HTML/CSS/JavaScript (no frameworks)
- **Development Server**: live-server with hot reloading
- **Data Storage**: localStorage for game state persistence
- **Testing**: Jest for unit tests

## Key Features

- **3-Column Layout**: Narration, actions, and character information
- **Skill System**: XP-based progression with configurable skills
- **Species System**: Multiple playable species with unique traits
- **Inventory Management**: Item collection and management
- **Action System**: Dynamic actions based on skill levels
- **Dark Theme**: Consistent dark UI with monospace font

## Architecture

The game follows a modular architecture with:
- **Engine Core**: Configuration and state management
- **Systems**: Skill, inventory, action, and trait management
- **UI Layer**: Component-based interface management
- **Data-Driven**: Configuration files define game content

## Contributing

1. Follow the existing code style and conventions
2. Add tests for new features
3. Update documentation as needed
4. Use incremental development approach

## License

MIT License - see LICENSE file for details. 