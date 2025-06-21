# Taverns Game

A text-based adventure game with a 3-column layout inspired by "A Dark Room".

## 🎮 Play the Game

**Live Demo**: [Play Taverns Game](https://bearjcc.github.io/taverns/)

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
- `package.json` - Project configuration and dependencies

### Layout
1. **Left Column**: Narration - Game messages and story text
2. **Middle Column**: Actions - Interactive buttons for player actions
3. **Right Column**: Sidebar - Player information (backpack, gear, etc.)

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
- ✅ Basic action system (Chop Wood)
- ✅ Dark theme with monospace font
- ✅ Rapid development environment
- ✅ Automatic GitHub Pages deployment

## 🔮 Future Features

- [ ] Sidebar tabs (backpack, gear, character info)
- [ ] Advanced action system
- [ ] Game state persistence
- [ ] More complex game mechanics
- [ ] Social features (planned for later phases)

## 📝 Development Philosophy

This project follows incremental development practices:
- Small, testable changes
- Frequent commits
- Phase-based development
- Future-proofing with placeholders

## 🤝 Contributing

This is a personal project, but feedback and suggestions are welcome!

## 📄 License

MIT License - feel free to use this code for your own projects. 