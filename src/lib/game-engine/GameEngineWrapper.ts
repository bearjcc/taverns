import { GameEngine } from "./core/GameEngine.js";

export class GameEngineWrapper {
  private engine: any; // Use any type for the JS engine until we have proper types
  private isInitialized: boolean = false;

  constructor() {
    this.engine = new GameEngine();
  }

  async init() {
    try {
      await this.engine.initialize('base-game');
      this.isInitialized = true;
      console.log('Game engine initialized successfully');
    } catch (error) {
      console.error('Failed to initialize game engine:', error);
      throw error;
    }
  }

  start() {
    if (!this.isInitialized) {
      throw new Error('Engine must be initialized before starting');
    }
    this.engine.start();
  }

  stop() {
    this.engine.stop();
  }

  // Game state access methods
  getGameData() {
    return this.engine.getGameData();
  }

  getSystem(systemName: string) {
    return this.engine.getSystem(systemName);
  }

  // Skills system methods
  getSkills() {
    const skillManager = this.engine.getSystem('skills');
    return skillManager ? skillManager.getAllSkills() : {};
  }

  getSkillLevel(skillName: string) {
    const skillManager = this.engine.getSystem('skills');
    return skillManager ? skillManager.getSkillLevel(skillName) : 1;
  }

  // Inventory system methods
  getInventory() {
    const inventoryManager = this.engine.getSystem('inventory');
    return inventoryManager ? inventoryManager.getAllItems() : {};
  }

  // Action system methods
  getAvailableActions() {
    const actionManager = this.engine.getSystem('actions');
    return actionManager ? actionManager.getAvailableActions() : [];
  }

  async performAction(actionId: string) {
    const actionManager = this.engine.getSystem('actions');
    if (actionManager && actionManager.performAction) {
      return await actionManager.performAction(actionId);
    }
    throw new Error('Action system not available');
  }

  // Achievement system methods
  getAchievements() {
    const achievementSystem = this.engine.getSystem('achievements');
    return achievementSystem ? achievementSystem.getAllAchievements() : [];
  }

  // State persistence
  saveGame() {
    const stateManager = this.engine.getSystem('state');
    if (stateManager && stateManager.save) {
      stateManager.save();
    }
  }

  loadGame() {
    const stateManager = this.engine.getSystem('state');
    if (stateManager && stateManager.load) {
      return stateManager.load();
    }
  }

  // Event system access
  on(event: string, callback: Function) {
    const eventSystem = this.engine.getSystem('events');
    if (eventSystem && eventSystem.on) {
      eventSystem.on(event, callback);
    }
  }

  off(event: string, callback: Function) {
    const eventSystem = this.engine.getSystem('events');
    if (eventSystem && eventSystem.off) {
      eventSystem.off(event, callback);
    }
  }

  emit(event: string, data?: any) {
    const eventSystem = this.engine.getSystem('events');
    if (eventSystem && eventSystem.emit) {
      eventSystem.emit(event, data);
    }
  }

  // Check if engine is ready
  isReady() {
    return this.isInitialized;
  }
} 