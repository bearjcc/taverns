"use client";

import { useState, useEffect, Suspense, lazy } from "react";
import { Card } from "@/components/ui/card";
import { GameEngineWrapper } from "@/lib/game-engine/GameEngineWrapper";
import { GameHeader, AboutModal } from "./GameHeader";
import { BackgroundAnimation, type LocationType } from "./BackgroundAnimation";
import { AccountModal } from "./AccountModal";

// Lazy load components for better performance
const NarrationPanel = lazy(() => import("./NarrationPanel").then(module => ({ default: module.NarrationPanel })));
const ActionsPanel = lazy(() => import("./ActionsPanel").then(module => ({ default: module.ActionsPanel })));
const SidebarPanel = lazy(() => import("./SidebarPanel").then(module => ({ default: module.SidebarPanel })));

interface GameMessage {
  id: number;
  text: string;
  type: 'action' | 'story' | 'system' | 'achievement';
  timestamp: Date;
}

interface GameState {
  skills?: Record<string, unknown>;
  inventory?: Record<string, unknown>;
  achievements?: unknown[];
  location?: string;
  messages?: GameMessage[];
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
  const [messages, setMessages] = useState<GameMessage[]>([]);
  const [currentLocation, setCurrentLocation] = useState<LocationType>('tavern');
  const [isHeaderCollapsed, setIsHeaderCollapsed] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showAccountModal, setShowAccountModal] = useState(false);

  // Initialize game engine
  useEffect(() => {
    const initializeEngine = async () => {
      try {
        const gameEngine = new GameEngineWrapper();
        await gameEngine.init();
        
        // Set up event listeners for game state changes
        gameEngine.on('state:changed', (data: any) => {
          updateGameState(gameEngine);
        });

        gameEngine.on('message:add', (message: any) => {
          setMessages(prev => [...prev, {
            id: Date.now(),
            text: message.text,
            type: (message.type as 'action' | 'story' | 'system' | 'achievement') || 'system',
            timestamp: new Date()
          }]);
        });

        // Load initial game state
        updateGameState(gameEngine);
        
        // Add welcome messages
        setMessages([
          {
            id: 1,
            text: "Welcome to Taverns and Treasures! Your adventure begins in a cozy village tavern.",
            type: 'story' as const,
            timestamp: new Date()
          },
          {
            id: 2,
            text: "The warmth of the fireplace fills the room as the innkeeper looks at you with curiosity. What will you do?",
            type: 'story' as const,
            timestamp: new Date()
          }
        ]);

        setEngine(gameEngine);
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to initialize game engine');
        setIsLoading(false);
      }
    };

    initializeEngine();
  }, []);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowAboutModal(false);
        setShowAccountModal(false);
      } else if (event.key === 'h' || event.key === 'H') {
        setIsHeaderCollapsed(!isHeaderCollapsed);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isHeaderCollapsed]);

  const updateGameState = (gameEngine: GameEngineWrapper) => {
    try {
      const newState: GameState = {
        skills: gameEngine.getSkills(),
        inventory: gameEngine.getInventory(),
        achievements: gameEngine.getAchievements(),
        location: 'village_tavern',
        messages: messages
      };
      setGameState(newState);
    } catch (error) {
      console.error('Failed to update game state:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-background text-foreground font-mono dark">
        <div className="text-center space-y-4">
          <div className="text-4xl">🏰</div>
          <div>Loading your adventure...</div>
          <div className="text-sm text-amber-300/70">Preparing the tavern...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-background text-foreground font-mono dark">
        <div className="text-center space-y-4">
          <div className="text-4xl">⚠️</div>
          <div className="text-red-500">Adventure Interrupted</div>
          <div className="text-sm text-amber-300/70">Error: {error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-background text-foreground font-mono dark relative overflow-hidden">
      {/* Background Animation */}
      <BackgroundAnimation location={currentLocation} />
      
      {/* Game Header */}
      <GameHeader
        onShowAbout={() => setShowAboutModal(true)}
        onShowSettings={() => {/* TODO: Implement settings modal */}}
        onShowAccount={() => setShowAccountModal(true)}
        isCollapsed={isHeaderCollapsed}
        onToggleCollapse={() => setIsHeaderCollapsed(!isHeaderCollapsed)}
      />

      {/* Main Game Content */}
      <div className={`flex flex-row transition-all duration-500 ${
        isHeaderCollapsed ? 'pt-12' : 'pt-32'
      }`}>
        <div className="flex-1 p-2 max-w-xs">
          <Suspense fallback={<PanelLoading />}>
            <NarrationPanel gameState={gameState} />
          </Suspense>
        </div>
        <div className="flex-[2] p-2">
          <Suspense fallback={<PanelLoading />}>
            <ActionsPanel engine={engine} gameState={gameState} setGameState={setGameState} />
          </Suspense>
        </div>
        <div className="flex-1 p-2 max-w-xs">
          <Suspense fallback={<PanelLoading />}>
            <SidebarPanel gameState={gameState} engine={engine} />
          </Suspense>
        </div>
      </div>

      {/* Modals */}
      <AboutModal 
        isOpen={showAboutModal} 
        onClose={() => setShowAboutModal(false)} 
      />
      <AccountModal 
        isOpen={showAccountModal} 
        onClose={() => setShowAccountModal(false)} 
      />
    </div>
  );
} 