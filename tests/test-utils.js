// Test utilities for Taverns game
// This file provides helper functions to test the game code

// Mock configuration for testing
const mockGameConfig = {
  ui: {
    cssClasses: {
      skillItem: 'skill-item',
      skillHeader: 'skill-header',
      skillName: 'skill-name',
      skillLevel: 'skill-level',
      skillProgressContainer: 'skill-progress-container',
      skillProgressBar: 'skill-progress-bar',
      skillProgressFill: 'skill-progress-fill',
      skillXp: 'skill-xp',
      actionButton: 'action-button',
      newUnlock: 'new-unlock',
      narrationMessage: 'narration-message',
      tabButton: 'tab-button',
      tabPanel: 'tab-panel',
      active: 'active',
      toast: 'toast',
      toastContainer: 'toast-container'
    },
    elementIds: {
      narrationContent: 'narration-content',
      skillsContent: 'skills-content',
      actionsContent: 'actions-content',
      toastContainer: 'toast-container'
    },
    tabs: [
      {
        id: 'skills',
        displayName: 'Skills',
        icon: '⚔️'
      },
      {
        id: 'inventory',
        displayName: 'Inventory',
        icon: '🎒'
      },
      {
        id: 'character',
        displayName: 'Character',
        icon: '👤'
      }
    ]
  },
  constants: {
    xpMultiplier: 100,
    defaultLevel: 1,
    defaultXp: 0,
    progressMax: 100
  },
  skills: {
    woodcutting: {
      name: 'Woodcutting',
      displayName: 'Woodcutting',
      description: 'Cut down trees and gather wood',
      actions: [
        {
          name: 'Chop Oak',
          displayName: 'Chop Oak',
          description: 'Chop oak logs',
          levelRequired: 1,
          xpReward: 10,
          itemReward: 'oak_logs',
          itemCount: 1,
          unlockMessage: 'You can now chop oak trees!',
          flavorText: 'You swing your axe at the oak tree and collect some logs.'
        }
      ]
    }
  },
  messages: {
    welcome: 'Welcome to Taverns and Treasures! Your adventure begins...',
    levelUp: '🎉 {skillName} level up! You are now level {level}.',
    actionUnlocked: '🔓 New action unlocked: {actionName} (Level {level})',
    actionCompleted: 'You {actionName} and gained {xpReward} XP. ({itemReward}: {itemCount})',
    configError: 'Error: Could not load game configuration. Please refresh the page.',
    configLoaded: 'Game configuration loaded successfully',
    skillsConfigLoaded: 'Skills configuration loaded successfully',
    skillsConfigError: 'Error: Could not load skills configuration.',
    gameSaved: '🔄 Game progress saved',
    gameLoaded: '📥 Welcome back! Your progress has been loaded',
    noSaveFound: '🆕 No saved game found. Starting a new game',
    saveError: '⚠️ Failed to save game progress',
    loadError: '⚠️ Failed to load saved game'
  },
  gameSettings: {
    initialWood: 0
  }
};

const mockSkillsConfig = {
  gathering: {
    woodcutting: {
      level: 1,
      experience: 0,
      sub_skills: {},
      requires: {}
    },
    fishing: {
      level: 1,
      experience: 0,
      sub_skills: {},
      requires: {}
    }
  }
};

// Helper function to create a test instance of the Skill class
function createTestSkill(name, level = 1, xp = 0) {
  // We'll need to access the Skill class from the game code
  // For now, we'll create a mock version
  return {
    name,
    level,
    xp,
    xpToNext: level * 100, // Using default multiplier
    addXp: function(amount) {
      this.xp += amount;
      let levelUps = 0;
      
      while (this.xp >= this.xpToNext) {
        this.level++;
        this.xp -= this.xpToNext;
        this.xpToNext = this.level * 100;
        levelUps++;
      }
      
      return levelUps;
    },
    getProgress: function() {
      return (this.xp / this.xpToNext) * 100;
    }
  };
}

// Helper function to create a test instance of the SkillAction class
function createTestSkillAction(name, description, levelRequired, xpReward, itemReward, itemCount = 1) {
  return {
    name,
    description,
    levelRequired,
    xpReward,
    itemReward,
    itemCount,
    skillType: 'test',
    unlockMessage: `You can now ${name}!`,
    flavorText: `You perform ${name}.`
  };
}

// Helper function to create a test instance of the GameObject class
function createTestGameObject(id, name, displayName, description, icon, examineText) {
  return {
    id,
    name,
    displayName,
    description,
    icon,
    examineText,
    stackable: true,
    maxStack: 999
  };
}

// Helper function to create a test instance of the InventoryItem class
function createTestInventoryItem(gameObject, quantity = 1) {
  return {
    gameObject,
    quantity,
    addQuantity: function(amount) {
      const newQuantity = this.quantity + amount;
      if (newQuantity <= this.gameObject.maxStack) {
        this.quantity = newQuantity;
        return true;
      }
      return false;
    },
    removeQuantity: function(amount) {
      if (this.quantity >= amount) {
        this.quantity -= amount;
        return true;
      }
      return false;
    },
    getDisplayName: function() {
      if (this.quantity > 1 && this.gameObject.stackable) {
        return `${this.gameObject.displayName} (${this.quantity})`;
      }
      return this.gameObject.displayName;
    }
  };
}

// Helper function to create a test instance of the InventoryManager class
function createTestInventoryManager() {
  return {
    items: new Map(),
    gameObjects: new Map(),
    
    registerGameObject: function(gameObject) {
      this.gameObjects.set(gameObject.id, gameObject);
    },
    
    addItem: function(itemId, quantity = 1) {
      const gameObject = this.gameObjects.get(itemId);
      if (!gameObject) {
        console.error(`GameObject with id '${itemId}' not found`);
        return false;
      }

      if (gameObject.stackable) {
        const existingItem = this.items.get(itemId);
        if (existingItem) {
          return existingItem.addQuantity(quantity);
        } else {
          const newItem = createTestInventoryItem(gameObject, quantity);
          this.items.set(itemId, newItem);
          return true;
        }
      } else {
        // For non-stackable items, create separate entries
        for (let i = 0; i < quantity; i++) {
          const newItem = createTestInventoryItem(gameObject, 1);
          this.items.set(`${itemId}_${Date.now()}_${i}`, newItem);
        }
        return true;
      }
    },
    
    removeItem: function(itemId, quantity = 1) {
      const existingItem = this.items.get(itemId);
      if (!existingItem) {
        return false;
      }
      
      if (existingItem.removeQuantity(quantity)) {
        if (existingItem.quantity === 0) {
          this.items.delete(itemId);
        }
        return true;
      }
      return false;
    },
    
    getItem: function(itemId) {
      return this.items.get(itemId);
    },
    
    getAllItems: function() {
      return Array.from(this.items.values());
    },
    
    getItemCount: function(itemId) {
      const item = this.items.get(itemId);
      return item ? item.quantity : 0;
    },
    
    hasItem: function(itemId, quantity = 1) {
      return this.getItemCount(itemId) >= quantity;
    },
    
    getGameObject: function(itemId) {
      return this.gameObjects.get(itemId);
    }
  };
}

// Helper function to create a test instance of the SkillManager class
function createTestSkillManager() {
  return {
    skills: new Map(),
    skillActions: new Map(),
    newlyUnlockedActions: new Set(),
    
    addSkill: function(skillName, skill) {
      this.skills.set(skillName, skill);
    },
    
    addSkillActions: function(skillName, actions) {
      this.skillActions.set(skillName, actions);
    },
    
    getSkill: function(skillName) {
      return this.skills.get(skillName);
    },
    
    getAvailableActions: function(skillName) {
      const actions = this.skillActions.get(skillName) || [];
      const skill = this.skills.get(skillName);
      
      if (!skill) return [];
      
      return actions.filter(action => skill.level >= action.levelRequired);
    },
    
    addSkillXp: function(skillName, xpAmount) {
      const skill = this.skills.get(skillName);
      if (!skill) return 0;
      
      const fromLevel = skill.level;
      const levelUps = skill.addXp(xpAmount);
      
      if (levelUps > 0) {
        this.checkForNewUnlocks(skillName, fromLevel, skill.level);
      }
      
      return levelUps;
    },
    
    checkForNewUnlocks: function(skillName, fromLevel, toLevel) {
      const actions = this.skillActions.get(skillName) || [];
      
      for (const action of actions) {
        if (action.levelRequired > fromLevel && action.levelRequired <= toLevel) {
          this.newlyUnlockedActions.add(action.name);
        }
      }
    },
    
    isNewlyUnlocked: function(actionName) {
      return this.newlyUnlockedActions.has(actionName);
    },
    
    markActionUsed: function(actionName) {
      this.newlyUnlockedActions.delete(actionName);
    },
    
    getAllSkills: function() {
      return Array.from(this.skills.values());
    },
    
    getAllAvailableActions: function() {
      const allActions = [];
      for (const [skillName, actions] of this.skillActions) {
        const availableActions = this.getAvailableActions(skillName);
        allActions.push(...availableActions);
      }
      return allActions;
    }
  };
}

// Export all test utilities
module.exports = {
  mockGameConfig,
  mockSkillsConfig,
  createTestSkill,
  createTestSkillAction,
  createTestGameObject,
  createTestInventoryItem,
  createTestInventoryManager,
  createTestSkillManager
}; 