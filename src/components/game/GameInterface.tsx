"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { NarrationPanel } from "./NarrationPanel";
import { ActionsPanel } from "./ActionsPanel";
import { SidebarPanel } from "./SidebarPanel";
import { GameEngineWrapper } from "@/lib/game-engine/GameEngineWrapper";

export function GameInterface() {
  const [engine, setEngine] = useState<GameEngineWrapper | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [gameState, setGameState] = useState<any>(null);

  useEffect(() => {
    try {
      const gameEngine = new GameEngineWrapper();
      gameEngine.init();
      setEngine(gameEngine);
      setIsLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to initialize game engine');
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-background text-foreground font-mono dark">
        <div>Loading game...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-background text-foreground font-mono dark">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex flex-row bg-background text-foreground font-mono dark">
      <div className="flex-1 p-2 max-w-xs">
        <Card className="h-full">
          <NarrationPanel gameState={gameState} />
        </Card>
      </div>
      <div className="flex-[2] p-2">
        <Card className="h-full">
          <ActionsPanel engine={engine} gameState={gameState} setGameState={setGameState} />
        </Card>
      </div>
      <div className="flex-1 p-2 max-w-xs">
        <Card className="h-full">
          <SidebarPanel gameState={gameState} />
        </Card>
      </div>
    </div>
  );
} 