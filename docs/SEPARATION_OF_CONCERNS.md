# Separation of Concerns in Taverns Game Architecture

## Overview

This project is architected with a strong emphasis on **separation of concerns** to ensure scalability, maintainability, and future extensibility. The codebase is modularized into clear layers and systems, each with a single responsibility. This approach is designed to make future transitions (such as moving to a client-server model, supporting mods, or adding internationalization) as smooth as possible.

## Architectural Layers

### 1. Website Layer (Presentation)
- Handles UI rendering, user interaction, and loading of CSS, JS, and small static assets (e.g., favicon).
- Contains only code and assets related to the website's appearance and user experience.
- Does **not** contain game logic or game data.

### 2. Game Engine (Core Logic)
- Contains all core game logic, state management, and system orchestration.
- Modularized into subsystems:
  - **SkillSystem**: Manages skills, XP, and progression.
  - **InventorySystem**: Handles inventory, items, and item management.
  - **ActionSystem**: Manages skill actions and their execution.
  - **SpeciesSystem**: Handles species data and operations.
  - **StateManager**: Centralized state persistence and change notification.
  - **EventSystem**: Decoupled event-driven communication between systems.
  - **AssetLoader**: Just-in-time asset loading and caching.
  - **Localization**: Multi-language support and fallback.
- The engine is **data-agnostic**: it can run any game data set (fantasy, sci-fi, etc.) loaded as a "mod".

### 3. Game Data (Content)
- All game content (skills, items, species, actions, configuration) is stored in JSON files.
- Data is loaded dynamically and can be swapped out to create different games or mods.
- Assets (icons, images, audio) are organized for just-in-time loading.
- Localization files are organized by language for easy internationalization.

### 4. Mod System (Extensibility)
- The base game is structured as a "mod" loaded by the engine.
- Mods are defined by a manifest file and can provide their own data, assets, and localization.
- The engine can load and run any compatible mod, enabling future expansion and user-generated content.

## Implementation Principles

- **Single Responsibility**: Each class/module does one thing only.
- **Event-Driven**: Systems communicate via events, not direct calls.
- **Configuration-Driven**: All game content and UI structure is defined in configuration/data files.
- **Just-in-Time Loading**: Assets and localization are loaded as needed, not all at once.
- **Internationalization-Ready**: All user-facing text is loaded from language files.
- **Backward Compatibility**: Migration is incremental, preserving existing functionality at each step.
- **Testability**: Each system can be tested independently.

## Guidelines for Future AI Agents

1. **Preserve Separation**: Do not mix UI, engine logic, and data. Each must remain in its own layer.
2. **Extend via Modules**: Add new features as new engine systems or mods, not by expanding monolithic files.
3. **Use Events**: Communicate between systems using the EventSystem, not direct function calls.
4. **Keep Data External**: All game content and configuration should remain in JSON or mod files, not hardcoded.
5. **Support Mods**: Any new game content or mechanics should be possible to implement as a mod.
6. **Internationalize**: All new user-facing text must be added to localization files, not hardcoded.
7. **Document Changes**: Update this file and the migration plan with any new architectural patterns or systems.
8. **Test in Isolation**: Test new systems independently before integrating.
9. **Plan for Scale**: Assume the game will eventually require server-side logic, CDN asset delivery, and multi-language support.
10. **Never Break the Layers**: UI must not access engine internals directly; engine must not access UI or data directly; data must not contain logic.

## Example Directory Structure

```
taverns/
├── website/              # UI and static assets
├── engine/               # Game engine core and systems
├── data/                 # Game data, assets, localization
├── mods/                 # Mod system and base game mod
└── tests/                # Test suite
```

## Summary

This separation of concerns is foundational to the Taverns project. It enables:
- Easy migration to client-server or CDN architectures
- Modding and user-generated content
- Multi-language support
- Clean, maintainable, and testable code

**Future AI agents must follow these principles to ensure the long-term health and scalability of the project.** 