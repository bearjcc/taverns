import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { InventoryGrid } from "./InventoryGrid";
import { VitalsDisplay } from "./VitalsDisplay";
import type { GameEngineWrapper } from "@/lib/game-engine/GameEngineWrapper";

interface GameState {
  skills?: Record<string, unknown>;
  inventory?: Record<string, unknown>;
  achievements?: unknown[];
  location?: string;
}

interface SidebarPanelProps {
  gameState: GameState | null;
  engine?: GameEngineWrapper | null;
}

export function SidebarPanel({ gameState, engine }: SidebarPanelProps) {
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

  // Enhanced inventory data with proper structure for InventoryGrid
  const inventory = [
    { id: "rusty-sword", name: "rusty_sword", displayName: "Rusty Sword", icon: "⚔️", quantity: 1, type: "weapon", description: "A weathered blade that's seen better days" },
    { id: "health-potion", name: "health_potion", displayName: "Health Potion", icon: "🧪", quantity: 3, type: "consumable", description: "Restores health when consumed" },
    { id: "copper-coins", name: "copper_coins", displayName: "Copper Coins", icon: "🪙", quantity: 25, type: "currency", description: "Basic currency for trading" },
    { id: "bread", name: "bread", displayName: "Bread", icon: "🍞", quantity: 5, type: "food", description: "Fresh baked bread" },
    { id: "wooden-bow", name: "wooden_bow", displayName: "Wooden Bow", icon: "🏹", quantity: 1, type: "weapon", description: "A simple bow made of oak wood" },
    { id: "torch", name: "torch", displayName: "Torch", icon: "🕯️", quantity: 8, type: "tool", description: "Provides light in dark places" }
  ];

  const achievements = [
    { name: "First Steps", description: "Begin your adventure", unlocked: true },
    { name: "Skilled Crafter", description: "Reach level 2 in Crafting", unlocked: true },
    { name: "Tavern Regular", description: "Visit 5 different taverns", unlocked: false }
  ];

  const handleItemClick = (item: any) => {
    console.log("Item clicked:", item);
    // Handle item interaction (use, equip, etc.)
  };

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

        <Tabs defaultValue="character" className="flex-1 flex flex-col">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="character">Character</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="inventory">Items</TabsTrigger>
            <TabsTrigger value="achievements">Awards</TabsTrigger>
          </TabsList>
          
          <TabsContent value="character" className="flex-1 overflow-y-auto mt-3">
            <div className="space-y-4">
              <VitalsDisplay engine={engine || null} />
              
              {/* Character info section */}
              <Card className="p-4 bg-background border border-amber-300/20">
                <h3 className="text-lg font-bold text-amber-300 mb-3 flex items-center gap-2">
                  <span>👤</span>
                  Character Info
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-amber-300/70">Name:</span>
                    <span className="text-amber-300">{playerStats.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-amber-300/70">Level:</span>
                    <span className="text-amber-300">{playerStats.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-amber-300/70">Location:</span>
                    <span className="text-amber-300">Village Tavern</span>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>
          
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
          
          <TabsContent value="inventory" className="flex-1 mt-3">
            <InventoryGrid 
              items={inventory}
              onItemClick={handleItemClick}
              searchable={true}
              gridColumns={3}
            />
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