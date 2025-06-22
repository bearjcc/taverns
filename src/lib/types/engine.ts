// GameEngine interface
export interface GameEngine {
  init: () => void;
  start: () => void;
  stop: () => void;
  // Add more methods as needed
}

// StateManager interface
export interface StateManager {
  getState: () => unknown;
  setState: (state: unknown) => void;
  subscribe: (listener: (state: unknown) => void) => void;
  // Add more methods as needed
}

// EventSystem interface
export interface EventSystem {
  on: (event: string, listener: (...args: any[]) => void) => void;
  off: (event: string, listener: (...args: any[]) => void) => void;
  emit: (event: string, ...args: any[]) => void;
}

// AssetLoader interface
export interface AssetLoader {
  load: (assetPath: string) => Promise<unknown>;
  cache: Record<string, unknown>;
}

// ConfigManager interface
export interface ConfigManager {
  loadConfig: (path: string) => Promise<unknown>;
  getConfig: () => unknown;
}

// ModManager interface
export interface ModManager {
  loadMod: (modPath: string) => Promise<unknown>;
  getLoadedMods: () => unknown[];
}

// System interfaces
export interface SkillSystem {
  // Define methods for skill management
}
export interface InventorySystem {
  // Define methods for inventory management
}
export interface SpeciesSystem {
  // Define methods for species management
}
export interface ActionSystem {
  // Define methods for action management
} 