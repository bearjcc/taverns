import { Card } from "@/components/ui/card";

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

interface NarrationPanelProps {
  gameState: GameState | null;
}

export function NarrationPanel({ gameState }: NarrationPanelProps) {
  const messages = gameState?.messages || [
    {
      id: 1,
      text: "Welcome to the Taverns and Treasures! Your adventure begins in a small village tavern.",
      type: 'story' as const,
      timestamp: new Date()
    },
    {
      id: 2,
      text: "The innkeeper looks at you with curiosity. What will you do?",
      type: 'story' as const,
      timestamp: new Date()
    }
  ];

  return (
    <Card className="h-full">
      <div className="p-4 h-full flex flex-col">
        <h2 className="text-lg font-bold mb-3 text-foreground">Adventure Log</h2>
        <div className="flex-1 overflow-y-auto space-y-2">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`text-sm p-2 rounded ${
                message.type === 'story' ? 'bg-blue-50 dark:bg-blue-950/30 text-blue-900 dark:text-blue-100' :
                message.type === 'action' ? 'bg-green-50 dark:bg-green-950/30 text-green-900 dark:text-green-100' :
                message.type === 'achievement' ? 'bg-yellow-50 dark:bg-yellow-950/30 text-yellow-900 dark:text-yellow-100' :
                'bg-gray-50 dark:bg-gray-950/30 text-gray-900 dark:text-gray-100'
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
} 