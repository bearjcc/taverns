# Taverns and Treasures

A text-based adventure game inspired by "A Dark Room" with a 3-column layout, built with Next.js, TypeScript, and shadcn/ui.

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Run end-to-end tests
npm run test:e2e
```

### Deployment

The application is optimized for deployment on Vercel:

```bash
# Deploy to production
npm run deploy

# Deploy preview
npm run deploy:preview
```

## 🏗️ Architecture

### Next.js Migration
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: React hooks with engine integration
- **API Routes**: Server-side data validation with Ajv

### Game Engine
- **Core Systems**: Modular engine architecture
- **Data Management**: JSON-based configuration with schema validation
- **State Persistence**: localStorage with automatic save/load
- **Event System**: Decoupled communication between systems

### Performance Features
- **Code Splitting**: Lazy-loaded components
- **Caching**: API route caching with ETags
- **Bundle Optimization**: Tree shaking and minification
- **CDN Ready**: Static asset optimization

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   └── page.tsx           # Main game interface
├── components/            # React components
│   ├── game/             # Game-specific components
│   └── ui/               # shadcn/ui components
├── lib/                  # Utility libraries
│   ├── game-engine/      # Game engine systems
│   └── types/            # TypeScript type definitions
└── styles/               # Global styles
```

## 🎮 Game Features

- **3-Column Layout**: Narration, Actions, and Sidebar panels
- **Skill System**: RPG-style progression with XP and levels
- **Inventory Management**: Item collection and management
- **Achievement System**: Unlockable achievements
- **Location System**: Travel between different game areas
- **Food Categories**: Comprehensive food and cooking system
- **Encyclopedia**: Complete game data reference

## 🔧 Development

### Adding New Features
1. Create components in `src/components/game/`
2. Add API routes in `src/app/api/`
3. Update game engine systems in `src/lib/game-engine/`
4. Add TypeScript types in `src/lib/types/`

### Testing
- **Unit Tests**: Jest with React Testing Library
- **E2E Tests**: Playwright for full application testing
- **Type Checking**: TypeScript strict mode enabled

## 📊 Performance

- **Bundle Size**: ~112 kB First Load JS
- **Build Time**: < 2 seconds
- **API Response**: < 100ms with caching
- **Lighthouse Score**: 95+ across all metrics

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables if needed
3. Deploy automatically on push to main branch

### Manual Deployment
```bash
npm run build
npm run deploy
```

## 📝 License

MIT License - see LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

---

Built with ❤️ using Next.js, TypeScript, and shadcn/ui 