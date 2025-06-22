interface GameState {
  skills?: Record<string, unknown>;
  inventory?: Record<string, unknown>;
  achievements?: unknown[];
  location?: string;
}

interface SidebarPanelProps {
  gameState: GameState | null;
}

export function SidebarPanel({ gameState }: SidebarPanelProps) {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">Sidebar</h2>
      <div className="text-sm">
        {gameState ? 'Player info and tabs will appear here.' : 'Loading player data...'}
      </div>
    </div>
  );
} 