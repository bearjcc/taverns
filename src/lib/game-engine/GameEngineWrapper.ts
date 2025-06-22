import { GameEngine as IGameEngine } from "@/lib/types/engine";
// @ts-ignore: JS import
import GameEngine from "./core/GameEngine.js";

export class GameEngineWrapper {
  private engine: IGameEngine;

  constructor() {
    // @ts-ignore: JS constructor
    this.engine = new GameEngine();
  }

  init() {
    this.engine.init();
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