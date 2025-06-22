import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

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
  // Sample data - in real implementation, this would come from gameState
  const playerStats = {
    name: "Adventurer",
    level: 1,
    experience: 150,
    experienceToNext: 300,
    health: 100,
    maxHealth: 100,
    energy: 80,
    maxEnergy: 100
  };

  const skills = [
    { name: "Combat", level: 1, experience: 0, maxExperience: 100 },
    { name: "Magic", level: 1, experience: 25, maxExperience: 100 },
    { name: "Crafting", level: 2, experience: 50, maxExperience: 200 }
  ];

  const inventory = [
    { name: "Rusty Sword", quantity: 1, type: "weapon" },
    { name: "Health Potion", quantity: 3, type: "consumable" },
    { name: "Copper Coins", quantity: 25, type: "currency" }
  ];

  const achievements = [
    { name: "First Steps", description: "Begin your adventure", unlocked: true },
    { name: "Skilled Crafter", description: "Reach level 2 in Crafting", unlocked: true },
    { name: "Tavern Regular", description: "Visit 5 different taverns", unlocked: false }
  ];

  return (
    <Card className="h-full">
      <div className="p-4 h-full flex flex-col">
        <div className="mb-4">
          <h2 className="text-lg font-bold text-foreground">{playerStats.name}</h2>
          <div className="text-sm text-muted-foreground">Level {playerStats.level}</div>
          <Progress 
            value={(playerStats.experience / playerStats.experienceToNext) * 100} 
            className="mt-1 h-2"
          />
          <div className="text-xs text-muted-foreground mt-1">
            {playerStats.experience}/{playerStats.experienceToNext} XP
          </div>
        </div>

        <Tabs defaultValue="skills" className="flex-1 flex flex-col">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="inventory">Items</TabsTrigger>
            <TabsTrigger value="achievements">Awards</TabsTrigger>
          </TabsList>
          
          <TabsContent value="skills" className="flex-1 overflow-y-auto mt-3">
            <div className="space-y-3">
              {skills.map((skill) => (
                <div key={skill.name} className="p-2 border rounded">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <Badge variant="secondary">{skill.level}</Badge>
                  </div>
                  <Progress 
                    value={(skill.experience / skill.maxExperience) * 100} 
                    className="h-1"
                  />
                  <div className="text-xs text-muted-foreground mt-1">
                    {skill.experience}/{skill.maxExperience} XP
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="inventory" className="flex-1 overflow-y-auto mt-3">
            <div className="space-y-2">
              {inventory.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-2 border rounded">
                  <div>
                    <div className="text-sm font-medium">{item.name}</div>
                    <div className="text-xs text-muted-foreground capitalize">{item.type}</div>
                  </div>
                  <Badge variant="outline">{item.quantity}</Badge>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="achievements" className="flex-1 overflow-y-auto mt-3">
            <div className="space-y-2">
              {achievements.map((achievement, index) => (
                <div key={index} className={`p-2 border rounded ${
                  achievement.unlocked ? 'bg-green-50 dark:bg-green-950/30' : 'opacity-50'
                }`}>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="text-sm font-medium">{achievement.name}</div>
                      <div className="text-xs text-muted-foreground">{achievement.description}</div>
                    </div>
                    {achievement.unlocked && (
                      <Badge variant="default" className="ml-2">✓</Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Card>
  );
} 