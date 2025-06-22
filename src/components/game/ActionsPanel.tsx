import { GameEngineWrapper } from "@/lib/game-engine/GameEngineWrapper";

interface GameState {
  skills?: Record<string, unknown>;
  inventory?: Record<string, unknown>;
  achievements?: unknown[];
  location?: string;
}

interface ActionsPanelProps {
  engine: GameEngineWrapper | null;
  gameState: GameState | null;
  setGameState: (state: GameState | null) => void;
}

export function ActionsPanel({ engine }: ActionsPanelProps) {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">Actions</h2>
      <div className="text-sm">
        {engine ? 'Action buttons will appear here.' : 'Engine not loaded...'}
      </div>
    </div>
  );
} 