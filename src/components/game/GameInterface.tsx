"use client";

import { useState, useEffect, Suspense, lazy } from "react";
import { Card } from "@/components/ui/card";
import { GameEngineWrapper } from "@/lib/game-engine/GameEngineWrapper";

// Lazy load components for better performance
const NarrationPanel = lazy(() => import("./NarrationPanel").then(module => ({ default: module.NarrationPanel })));
const ActionsPanel = lazy(() => import("./ActionsPanel").then(module => ({ default: module.ActionsPanel })));
const SidebarPanel = lazy(() => import("./SidebarPanel").then(module => ({ default: module.SidebarPanel })));

interface GameState {
  skills?: Record<string, unknown>;
  inventory?: Record<string, unknown>;
  achievements?: unknown[];
  location?: string;
}

// Loading component for lazy-loaded panels
function PanelLoading() {
  return (
    <div className="p-4">
      <div className="animate-pulse">
        <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
        <div className="h-3 bg-gray-300 rounded w-3/4"></div>
      </div>
    </div>
  );
}

export function GameInterface() {
  const [engine, setEngine] = useState<GameEngineWrapper | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [gameState, setGameState] = useState<GameState | null>(null);

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
          <Suspense fallback={<PanelLoading />}>
            <NarrationPanel gameState={gameState} />
          </Suspense>
        </Card>
      </div>
      <div className="flex-[2] p-2">
        <Card className="h-full">
          <Suspense fallback={<PanelLoading />}>
            <ActionsPanel engine={engine} gameState={gameState} setGameState={setGameState} />
          </Suspense>
        </Card>
      </div>
      <div className="flex-1 p-2 max-w-xs">
        <Card className="h-full">
          <Suspense fallback={<PanelLoading />}>
            <SidebarPanel gameState={gameState} />
          </Suspense>
        </Card>
      </div>
    </div>
  );
} 