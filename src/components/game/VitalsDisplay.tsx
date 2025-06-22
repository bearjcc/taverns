"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import type { GameEngineWrapper } from "@/lib/game-engine/GameEngineWrapper";

interface VitalData {
  type: string;
  current: number;
  max: number;
  percentage: number;
  regenRate: number;
  regenInterval: number;
}

interface VitalsDisplayProps {
  engine: GameEngineWrapper | null;
}

export function VitalsDisplay({ engine }: VitalsDisplayProps) {
  const [vitals, setVitals] = useState<Record<string, VitalData>>({});

  useEffect(() => {
    if (!engine) return;

    // Load initial vitals
    updateVitals();

    // Listen for vitals changes
    const handleVitalsChange = () => {
      updateVitals();
    };

    engine.on('vitals:changed', handleVitalsChange);
    engine.on('vitals:regenerated', handleVitalsChange);
    engine.on('vitals:maxIncreased', handleVitalsChange);

    // Update vitals periodically
    const updateInterval = setInterval(updateVitals, 1000);

    return () => {
      engine.off('vitals:changed', handleVitalsChange);
      engine.off('vitals:regenerated', handleVitalsChange);
      engine.off('vitals:maxIncreased', handleVitalsChange);
      clearInterval(updateInterval);
    };
  }, [engine]);

  const updateVitals = () => {
    if (!engine) return;
    
    try {
      const vitalsData = engine.getVitals();
      setVitals(vitalsData);
    } catch (error) {
      console.error('Failed to update vitals:', error);
    }
  };

  const getVitalColor = (vitalType: string, percentage: number) => {
    if (percentage <= 20) return 'bg-red-500';
    if (percentage <= 50) return 'bg-yellow-500';
    
    switch (vitalType) {
      case 'health':
        return 'bg-red-600';
      case 'mana':
        return 'bg-blue-500';
      case 'stamina':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getVitalIcon = (vitalType: string) => {
    switch (vitalType) {
      case 'health':
        return '❤️';
      case 'mana':
        return '🔮';
      case 'stamina':
        return '⚡';
      default:
        return '📊';
    }
  };

  const formatVitalName = (vitalType: string) => {
    return vitalType.charAt(0).toUpperCase() + vitalType.slice(1);
  };

  if (!Object.keys(vitals).length) {
    return (
      <Card className="p-4 bg-background border border-amber-300/20">
        <div className="text-center text-amber-300/70">
          <div className="animate-pulse">Loading vitals...</div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-4 bg-background border border-amber-300/20">
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-amber-300 mb-3 flex items-center gap-2">
          <span>🏃‍♂️</span>
          Character Status
        </h3>
        
        {Object.values(vitals).map((vital) => (
          <div key={vital.type} className="space-y-1">
            {/* Vital name and values */}
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <span className="text-lg">{getVitalIcon(vital.type)}</span>
                <span className="text-amber-300 font-medium">
                  {formatVitalName(vital.type)}
                </span>
              </div>
              <div className="text-amber-300/70 font-mono">
                <span className="text-white">{Math.round(vital.current)}</span>
                <span className="text-amber-300/50">/</span>
                <span className="text-amber-300/70">{vital.max}</span>
              </div>
            </div>
            
            {/* Progress bar */}
            <div className="relative">
              <div className="w-full bg-gray-800 rounded-full h-3 border border-amber-300/30">
                <div 
                  className={`h-full rounded-full transition-all duration-300 ${getVitalColor(vital.type, vital.percentage)}`}
                  style={{ width: `${Math.max(0, Math.min(100, vital.percentage))}%` }}
                />
              </div>
              
              {/* Percentage overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-bold text-white drop-shadow-md">
                  {Math.round(vital.percentage)}%
                </span>
              </div>
            </div>

            {/* Low vital warning */}
            {vital.percentage <= 20 && (
              <div className="text-xs text-red-400 animate-pulse flex items-center gap-1">
                <span>⚠️</span>
                <span>Low {vital.type}!</span>
              </div>
            )}
          </div>
        ))}

        {/* Quick actions for vitals */}
        <div className="mt-4 pt-3 border-t border-amber-300/20">
          <div className="grid grid-cols-3 gap-1 text-xs">
            <button 
              onClick={() => engine?.modifyVital('health', 20)}
              className="p-2 bg-red-900/30 hover:bg-red-900/50 border border-red-500/30 rounded text-red-300 transition-colors"
              title="Quick heal (testing)"
            >
              ❤️ +20
            </button>
            <button 
              onClick={() => engine?.modifyVital('mana', 20)}
              className="p-2 bg-blue-900/30 hover:bg-blue-900/50 border border-blue-500/30 rounded text-blue-300 transition-colors"
              title="Restore mana (testing)"
            >
              🔮 +20
            </button>
            <button 
              onClick={() => engine?.modifyVital('stamina', 20)}
              className="p-2 bg-green-900/30 hover:bg-green-900/50 border border-green-500/30 rounded text-green-300 transition-colors"
              title="Restore stamina (testing)"
            >
              ⚡ +20
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
} 