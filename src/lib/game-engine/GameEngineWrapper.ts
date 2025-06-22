import { GameEngine } from "./core/GameEngine.js";

export class GameEngineWrapper {
  private engine: any; // Use any type for the JS engine until we have proper types

  constructor() {
    this.engine = new GameEngine();
  }

  async init() {
    await this.engine.initialize('base-game');
  }

  start() {
    this.engine.start();
  }

  stop() {
    this.engine.stop();
  }

  // Expose more engine methods as needed
  // Placeholder for future React state integration
} 