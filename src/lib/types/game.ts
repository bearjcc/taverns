// Skill type
export interface Skill {
  name: string;
  level: number;
  experience: number;
  sub_skills?: Record<string, Skill>;
  requires?: Record<string, unknown>;
}

// Item type
export interface Item {
  id: string;
  name: string;
  displayName: string;
  description: string;
  icon: string;
  stackable?: boolean;
  maxStack?: number;
  [key: string]: unknown;
}

// Species type
export interface Species {
  id: string;
  name: string;
  description: string;
  icon: string;
  traits?: string[];
  [key: string]: unknown;
}

// Trait type
export interface Trait {
  id: string;
  name: string;
  description: string;
  [key: string]: unknown;
}

// GameConfig type
export interface GameConfig {
  ui: {
    tabs: unknown[];
    cssClasses: Record<string, string>;
    elementIds: Record<string, string>;
  };
  constants: {
    xpMultiplier: number;
    defaultLevel: number;
    progressMax: number;
  };
  skills: Record<string, { actions: string[] }>;
  messages: Record<string, string>;
}

// Action type
export interface Action {
  name: string;
  description: string;
  levelRequired: number;
  xpReward: number;
  itemReward?: string;
  [key: string]: unknown;
}

// Achievement type
export interface Achievement {
  id: string;
  name: string;
  description: string;
  progress: number;
  goal: number;
  unlocked: boolean;
  [key: string]: unknown;
}

// Location type
export interface Location {
  id: string;
  name: string;
  description: string;
  actions?: string[];
  [key: string]: unknown;
} 