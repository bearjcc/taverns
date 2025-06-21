# Taverns and Treasures

A text-based RPG based around questing and skilling in a traditional fantasy setting made to be played on Android and Chrome. Free to play with microtransactions for new lives, and a subscription for additional content.

Play alone or with a group of friends; explore the world learning combat and magic, or learn a trade and grow your homestead. Collect rare treasures from across the globe, or master skills and create your own masterwork for all players to see. But beware, danger may lurk in any corner and death is permanent!

## 🎮 Play the Game

**Live Demo**: [Play Taverns and Treasures](https://bearjcc.github.io/taverns/)

The game is automatically deployed to GitHub Pages whenever changes are pushed to the empty-branch.

## 🏗️ Development

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will open at `http://localhost:3000` with live reload enabled.

### Project Structure
- `index.html` - Main game interface with 3-column layout
- `styles.css` - Dark theme styling and layout
- `game.js` - Game logic and narration system
- `game-config.json` - Game configuration and skill definitions
- `data/skills.json` - Skill tree structure and requirements
- `package.json` - Project configuration and dependencies

### Layout
1. **Left Column**: Narration - Game messages and story text
2. **Middle Column**: Actions - Interactive buttons for player actions
3. **Right Column**: Sidebar - Player information (Skills, Inventory, Character)

## 🚀 Deployment

The game automatically deploys to GitHub Pages via GitHub Actions when code is pushed to the empty-branch.

### Manual Deployment
```bash
npm run build
npm run deploy
```

## 🎯 Current Features

- ✅ 3-column responsive layout
- ✅ Narration system with auto-scrolling
- ✅ Skill-based progression system
- ✅ Dark theme with monospace font
- ✅ Rapid development environment
- ✅ Automatic GitHub Pages deployment
- ✅ Game state persistence (localStorage)
- ✅ Auto-save functionality
- ✅ Manual save option
- ✅ Configuration-driven skill system
- ✅ Toast notification system

## 🔮 Planned Features

### Core Gameplay
- [ ] Quest system with story-driven adventures
- [ ] Combat mechanics (melee, ranged, magic)
- [ ] Trading and economy system
- [ ] Homestead building and management
- [ ] Treasure hunting and rare item collection
- [ ] Crafting and masterwork creation
- [ ] Death and permanent consequences

### Social Features
- [ ] Multiplayer support for group play
- [ ] Player trading and marketplaces
- [ ] Guilds and alliances
- [ ] Global leaderboards for masterworks

### Business Model
- [ ] Free-to-play base game
- [ ] Microtransactions for new lives
- [ ] Subscription for additional content
- [ ] Premium features and exclusive content

### Technical Features
- [ ] Mobile-responsive design for Android
- [ ] Cloud save system
- [ ] User accounts and profiles
- [ ] Cross-platform synchronization

## 📝 Development Philosophy

This project follows incremental development practices:
- Small, testable changes
- Frequent commits
- Phase-based development
- Future-proofing with placeholders
- Clean code principles and meaningful naming

## 🤝 Contributing

This is a personal project, but feedback and suggestions are welcome!

## 📄 License

MIT License - feel free to use this code for your own projects.

## Development

- Run `npm run dev` to start the development server (live-server)
- All changes are hot-reloaded in the browser

## Testing (Core Practice)

This project uses [Jest](https://jestjs.io/) for unit testing. All core game logic is covered by unit tests, and testing is a required part of development.

### Running Tests

- Run all tests: `npm test`
- Watch mode: `npm run test:watch`
- Coverage report: `npm run test:coverage`

Test files are located in the `tests/` directory. All new features and bug fixes should include appropriate unit tests.

## Project Structure

- `index.html` - Main game interface
- `styles.css` - Dark theme styling and layout
- `game.js` - Core game logic and systems
- `data/` - Game configuration and data
- `tests/` - Unit tests and test utilities

## Contributing

- Follow clean code and incremental development practices
- Write and maintain unit tests for all core logic
- See [DEVELOPMENT_ROADMAP.md](DEVELOPMENT_ROADMAP.md) for current goals 