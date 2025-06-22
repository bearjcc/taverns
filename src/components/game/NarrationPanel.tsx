interface GameState {
  skills?: Record<string, unknown>;
  inventory?: Record<string, unknown>;
  achievements?: unknown[];
  location?: string;
}

interface NarrationPanelProps {
  gameState: GameState | null;
}

export function NarrationPanel({ gameState }: NarrationPanelProps) {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">Narration</h2>
      <div className="text-sm">
        {gameState ? 'Game messages and story will appear here.' : 'Loading game state...'}
      </div>
    </div>
  );
} 