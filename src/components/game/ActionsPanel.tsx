import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GameEngineWrapper } from "@/lib/game-engine/GameEngineWrapper";

interface GameAction {
  id: string;
  name: string;
  description: string;
  icon?: string;
  cooldown?: number;
  enabled: boolean;
}

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

export function ActionsPanel({ engine, gameState, setGameState }: ActionsPanelProps) {
  const [isPerformingAction, setIsPerformingAction] = useState(false);

  // Sample actions - in a real implementation, these would come from the engine
  const availableActions: GameAction[] = [
    {
      id: 'look_around',
      name: 'Look Around',
      description: 'Observe your surroundings carefully',
      icon: '👀',
      enabled: true
    },
    {
      id: 'talk_to_innkeeper',
      name: 'Talk to Innkeeper',
      description: 'Start a conversation with the tavern keeper',
      icon: '💬',
      enabled: true
    },
    {
      id: 'check_inventory',
      name: 'Check Inventory',
      description: 'Review your belongings',
      icon: '🎒',
      enabled: true
    },
    {
      id: 'rest',
      name: 'Rest',
      description: 'Take a moment to recover your strength',
      icon: '😴',
      enabled: true,
      cooldown: 300 // 5 minutes
    }
  ];

  const handleAction = async (action: GameAction) => {
    if (!engine || isPerformingAction) return;

    setIsPerformingAction(true);
    
    try {
      console.log(`Performing action: ${action.name}`);
      // In a real implementation, this would call engine methods
      // await engine.performAction(action.id);
      
      // Simulate action completion
      setTimeout(() => {
        setIsPerformingAction(false);
      }, 1000);
    } catch (error) {
      console.error('Action failed:', error);
      setIsPerformingAction(false);
    }
  };

  return (
    <Card className="h-full">
      <div className="p-4 h-full flex flex-col">
        <h2 className="text-lg font-bold mb-3 text-foreground">Available Actions</h2>
        <div className="flex-1 overflow-y-auto">
          <div className="grid gap-3">
            {availableActions.map((action) => (
              <Button
                key={action.id}
                variant={action.enabled ? "default" : "secondary"}
                className="w-full justify-start text-left p-3 h-auto"
                disabled={!action.enabled || isPerformingAction || !engine}
                onClick={() => handleAction(action)}
              >
                <div className="flex items-center gap-3 w-full">
                  {action.icon && (
                    <span className="text-lg flex-shrink-0">{action.icon}</span>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm">{action.name}</div>
                    <div className="text-xs opacity-70 truncate">
                      {action.description}
                    </div>
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </div>
        {!engine && (
          <div className="mt-3 text-xs text-yellow-600 dark:text-yellow-400 text-center">
            Game engine loading...
          </div>
        )}
      </div>
    </Card>
  );
} 