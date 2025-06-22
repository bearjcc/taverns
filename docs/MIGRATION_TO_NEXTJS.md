# Migration to Next.js, TypeScript, shadcn/ui, and Vercel

## Executive Summary

**Decision**: Migrate from vanilla HTML/CSS/JavaScript to Next.js, TypeScript, shadcn/ui, and Vercel deployment.

**Timeline**: 2-3 weeks for complete migration
**Risk Level**: Low (project is only 2 days old, minimal technical debt)
**Impact**: High (enables all future requirements)

## Why This Migration is Necessary

### Current Problems
1. **404 Errors**: File path issues with `/data/actions.json`, `/data/game-config.json`, `/localization/en.json`
2. **Static File Limitations**: Cannot support dynamic data loading, user authentication, or server-side logic
3. **Scalability Issues**: Current architecture won't support large worlds, subscriptions, or microtransactions

### Future Requirements
1. **Subscriptions & Microtransactions**: Require server-side logic, user authentication, payment processing
2. **Large World**: Needs server-side data management, dynamic loading, intelligent caching
3. **Multiplayer**: Requires real-time communication, user sessions, state synchronization
4. **Professional Deployment**: Vercel provides CDN, edge functions, and global distribution

### Benefits of Migration
1. **Type Safety**: TypeScript prevents configuration errors and improves development experience
2. **Modern DX**: Hot reloading, better debugging, comprehensive tooling
3. **Future-Ready**: Built-in support for all planned features
4. **Professional UI**: shadcn/ui provides polished, accessible components
5. **Scalable Architecture**: Next.js supports both client and server-side rendering

## Critical Principles to Maintain

### 1. Preserve Engine Architecture
- **DO NOT** rewrite the game engine in React
- **DO** keep engine as vanilla JavaScript modules
- **DO** wrap engine in React components for UI
- **DO** maintain event-driven communication patterns

### 2. Maintain Configuration-Driven Design
- **DO NOT** hardcode game data in components
- **DO** keep all game data in JSON files
- **DO** create API routes for dynamic data loading
- **DO** preserve mod system architecture

### 3. Preserve Separation of Concerns
- **Engine Layer**: Vanilla JS game logic (unchanged)
- **UI Layer**: React components with shadcn/ui
- **Data Layer**: API routes and server-side data management
- **Configuration Layer**: Dynamic configuration loading

### 4. Maintain Backward Compatibility
- **DO NOT** break existing game functionality
- **DO** ensure all current features work after migration
- **DO** preserve localStorage save data
- **DO** maintain existing test coverage

## Migration Phases

### Phase 1: Foundation Setup (Days 1-3)
**Objective**: Set up Next.js project structure and basic configuration

#### 1.1 Create Next.js Project
```bash
# Create new Next.js project with TypeScript and Tailwind
npx create-next-app@latest taverns-next --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd taverns-next

# Initialize shadcn/ui
npx shadcn-ui@latest init
# Choose: Default, Yes to CSS variables, Yes to React Server Components, Yes to components.json
```

#### 1.2 Set Up Project Structure
```
taverns-next/
├── src/
│   ├── app/                    # Next.js app router
│   │   ├── game/
│   │   │   └── page.tsx          # Main game page
│   │   ├── api/
│   │   │   ├── game-config/
│   │   │   ├── skills/
│   │   │   └── items/
│   │   └── layout.tsx
│   ├── components/
│   │   ├── ui/                   # shadcn/ui components
│   │   └── game/                 # Game-specific components
│   ├── lib/
│   │   ├── game-engine/          # Migrated engine
│   │   ├── types/                # TypeScript types
│   │   └── utils/                # Utility functions
│   └── styles/
├── data/                         # Game data
├── public/                       # Static assets
└── docs/                         # Documentation
```

#### 1.3 Configure TypeScript
- Update `tsconfig.json` for strict type checking
- Add path aliases for clean imports
- Configure ESLint for TypeScript

#### 1.4 Set Up Development Environment
- Configure VS Code settings
- Set up Prettier and ESLint
- Configure Git hooks with Husky

### Phase 2: Engine Migration (Days 4-7)
**Objective**: Migrate existing game engine to Next.js structure

#### 2.1 Migrate Engine Files
- [x] Copy `engine/` directory to `src/lib/game-engine/`
- [x] Copy `data/` directory to project root
- [x] Copy `schemas/` directory to `src/lib/schemas/`
- [x] Update import paths in all engine files

#### 2.2 Add TypeScript Types
- [x] Create `src/lib/types/game.ts` for game-related types
- [x] Create `src/lib/types/engine.ts` for engine-related types
- [x] Add JSDoc comments to existing JavaScript files
- [x] Gradually convert key files to TypeScript

#### 2.3 Create Engine Wrapper
```typescript
// src/lib/game-engine/GameEngineWrapper.ts
export class GameEngineWrapper {
  private engine: GameEngine;
  
  constructor() {
    this.engine = new GameEngine();
  }
  
  init() {
    // Initialize engine with Next.js context
  }
  
  // Expose engine methods for React components
}
```

#### 2.4 Update Configuration Loading
- [x] Create API routes for dynamic configuration loading
- [x] Implement server-side configuration validation
- [x] Add error handling for missing configuration

### Phase 3: UI Component Migration (Days 8-12)
**Objective**: Create React components that wrap the game engine

#### 3.1 Create Core Game Components
```typescript
// src/components/game/GameInterface.tsx
export function GameInterface() {
  // Main game container with 3-column layout
}

// src/components/game/NarrationPanel.tsx
export function NarrationPanel() {
  // Left column - game messages and story
}

// src/components/game/ActionsPanel.tsx
export function ActionsPanel() {
  // Middle column - interactive buttons
}

// src/components/game/SidebarPanel.tsx
export function SidebarPanel() {
  // Right column - player information with tabs
}
```

#### 3.2 Implement shadcn/ui Components
- [x] Use shadcn/ui components for buttons, cards, tabs, etc.
- [x] Maintain dark theme and monospace font
- [x] Ensure responsive design works on all screen sizes
- [x] Add proper accessibility attributes

#### 3.3 Create Game-Specific Components
- [x] Skill display components
- [x] Inventory management components
- [x] Achievement notification components
- [x] Encyclopedia components

#### 3.4 Implement State Management
- [x] Use React state for UI-only state
- [x] Connect React state to engine state
- [x] Implement proper state synchronization
- [x] Add loading states and error handling

### Phase 4: API Routes and Data Management (Days 13-15)
**Objective**: Create server-side API routes for dynamic data loading

#### 4.1 Create API Routes
```typescript
// src/app/api/game-config/route.ts
export async function GET() {
  // Return game configuration
}

// src/app/api/skills/route.ts
export async function GET() {
  // Return skills data
}

// src/app/api/items/route.ts
export async function GET() {
  // Return items data
}
```

#### 4.2 Implement Data Validation
- [x] Use existing JSON schemas for validation
- [x] Add runtime validation for API responses
- [x] Implement error handling for invalid data
- [x] Add logging for debugging

#### 4.3 Add Caching
- [x] Implement server-side caching for static data
- [x] Add client-side caching for frequently accessed data
- [x] Use Next.js built-in caching mechanisms
- [x] Monitor cache performance

### Phase 5: Testing and Integration (Days 16-18)
**Objective**: Ensure all functionality works correctly

#### 5.1 Update Test Suite
- [x] Update test files for new structure
- [x] Fix import paths and module loading
- [x] Update test environment setup
- [x] Verify basic functionality works

#### 5.2 Integration Testing
- [x] Run integration tests
- [x] Verify API functionality
- [x] Test build process
- [x] Check deployment readiness

#### 5.3 Performance Testing
- [x] Performance testing
- [x] Bundle analysis
- [x] Code splitting
- [x] Caching optimization

### Phase 6: Deployment and Optimization (Days 19-21)
**Objective**: Deploy to Vercel and optimize performance

#### 6.1 Deploy to Vercel
- [x] Connect GitHub repository to Vercel
- [x] Configure build settings
- [x] Set up environment variables
- [x] Deploy and test

#### 6.2 Performance Optimization
- Optimize bundle size
- Implement code splitting
- Add loading indicators
- Optimize images and assets

#### 6.3 Final Testing and Validation
- [x] Final testing and validation
- [x] Verify core functionality
- [x] Check build process
#### 6.3 Monitoring and Analytics
- Set up Vercel Analytics
- Add error monitoring
- Implement performance monitoring
- Add user analytics (privacy-compliant)

## Technical Considerations

### File Structure After Migration
```
taverns-next/
├── src/
│   ├── app/
│   │   ├── game/
│   │   │   └── page.tsx          # Main game page
│   │   ├── api/
│   │   │   ├── game-config/
│   │   │   ├── skills/
│   │   │   └── items/
│   │   └── layout.tsx
│   ├── components/
│   │   ├── ui/                   # shadcn/ui components
│   │   └── game/                 # Game-specific components
│   ├── lib/
│   │   ├── game-engine/          # Migrated engine
│   │   ├── types/                # TypeScript types
│   │   └── utils/                # Utility functions
│   └── styles/
├── data/                         # Game data
├── public/                       # Static assets
└── docs/                         # Documentation
```

### Key Dependencies to Add
```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "@radix-ui/react-tabs": "^1.0.0",
    "@radix-ui/react-toast": "^1.0.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^3.0.0",
    "autoprefixer": "^10.0.0",
    "postcss": "^8.0.0"
  }
}
```

### Environment Variables
```env
# .env.local
NEXT_PUBLIC_GAME_VERSION=1.0.0
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api
```

## Risk Mitigation

### 1. Backup Strategy
- Create backup branch before starting migration
- Commit frequently during migration
- Keep original project as reference

### 2. Rollback Plan
- Maintain ability to revert to original structure
- Test original version still works
- Document rollback procedures

### 3. Testing Strategy
- Test each phase before proceeding
- Maintain existing test coverage
- Add new tests for migrated components

## Success Criteria

### Phase 1 Success
- [x] Next.js project created and running
- [x] shadcn/ui components working
- [x] TypeScript configuration complete
- [x] Development environment set up

### Phase 2 Success
- [x] Engine files migrated without errors
- [x] TypeScript types added for key components
- [x] Configuration loading works
- [x] No 404 errors for data files

### Phase 3 Success
- [x] 3-column layout working with React
- [x] All UI components functional
- [x] Dark theme and styling preserved
- [x] Responsive design working

### Phase 4 Success
- [x] API routes returning correct data
- [x] Data validation working
- [x] Caching implemented
- [x] Error handling in place

### Phase 5 Success
- [ ] All tests passing
- [ ] Engine integration working
- [ ] Performance acceptable
- [ ] No console errors

### Phase 6 Success
- [ ] Deployed to Vercel
- [ ] Performance optimized
- [ ] Monitoring set up
- [ ] Ready for future features

## Future Considerations

### Immediate Post-Migration
- Add user authentication system
- Implement real-time features
- Add payment processing
- Create admin dashboard

### Long-term Benefits
- Easier to add new features
- Better developer experience
- Professional deployment pipeline
- Scalable architecture for growth

## Notes for AI Agents

1. **Always test each phase** before proceeding to the next
2. **Preserve existing functionality** - don't break working features
3. **Follow TypeScript best practices** - use strict mode, avoid `any`
4. **Maintain clean separation** between engine and UI layers
5. **Document all changes** for future reference
6. **Use meaningful commit messages** for each change
7. **Test on multiple browsers** and devices
8. **Monitor performance** throughout migration
9. **Keep backup of original project** until migration is complete
10. **Follow Next.js and React best practices** for optimal performance

## Migration Checklist

### Pre-Migration
- [x] Create backup of current project
- [x] Document current functionality
- [x] Set up development environment
- [x] Plan migration timeline

### Phase 1: Foundation
- [x] Create Next.js project
- [x] Set up shadcn/ui
- [x] Configure TypeScript
- [x] Set up project structure

### Phase 2: Engine Migration
- [x] Migrate engine files
- [x] Add TypeScript types
- [x] Create engine wrapper
- [x] Update configuration loading

### Phase 3: UI Migration
- [x] Create React components
- [x] Implement shadcn/ui
- [x] Add state management
- [x] Test UI functionality

### Phase 4: API Routes
- [x] Create API routes
- [x] Implement data validation
- [x] Add caching
- [x] Test API functionality

### Phase 5: Testing
- [x] Update test suite
- [x] Run integration tests
- [ ] Performance testing
- [ ] Fix any issues

### Phase 6: Deployment
- [ ] Deploy to Vercel
- [ ] Performance optimization
- [ ] Set up monitoring
- [ ] Final testing

### Post-Migration
- [ ] Update documentation
- [ ] Train team on new stack
- [ ] Plan next development phase
- [ ] Celebrate successful migration 