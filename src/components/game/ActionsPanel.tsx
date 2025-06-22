import { GameEngineWrapper } from "@/lib/game-engine/GameEngineWrapper";

interface ActionsPanelProps {
  engine: GameEngineWrapper | null;
  gameState: any;
  setGameState: (state: any) => void;
}

export function ActionsPanel({ engine, gameState, setGameState }: ActionsPanelProps) {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">Actions</h2>
      <div className="text-sm">
        {engine ? 'Action buttons will appear here.' : 'Engine not loaded...'}
      </div>
    </div>
  );
} 