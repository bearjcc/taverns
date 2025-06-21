// Simple test to verify Jest testing system works
const { 
  createTestSkill, 
  createTestSkillAction, 
  createTestGameObject,
  createTestInventoryItem,
  createTestInventoryManager,
  createTestSkillManager 
} = require('./test-utils');

describe('Testing System Setup', () => {
  test('Jest is working correctly', () => {
    expect(1 + 1).toBe(2);
  });

  test('DOM elements are available', () => {
    expect(document.getElementById('narration-content')).toBeTruthy();
    expect(document.getElementById('skills-content')).toBeTruthy();
    expect(document.getElementById('actions-content')).toBeTruthy();
  });

  test('localStorage mock is working', () => {
    localStorage.setItem('test', 'value');
    expect(localStorage.setItem).toHaveBeenCalledWith('test', 'value');
  });
});

describe('Test Utilities', () => {
  test('createTestSkill creates a valid skill', () => {
    const skill = createTestSkill('Woodcutting', 1, 0);
    
    expect(skill.name).toBe('Woodcutting');
    expect(skill.level).toBe(1);
    expect(skill.xp).toBe(0);
    expect(skill.xpToNext).toBe(100);
    expect(typeof skill.addXp).toBe('function');
    expect(typeof skill.getProgress).toBe('function');
  });

  test('createTestSkillAction creates a valid action', () => {
    const action = createTestSkillAction('Chop Oak', 'Chop oak logs', 1, 10, 'oak_logs');
    
    expect(action.name).toBe('Chop Oak');
    expect(action.description).toBe('Chop oak logs');
    expect(action.levelRequired).toBe(1);
    expect(action.xpReward).toBe(10);
    expect(action.itemReward).toBe('oak_logs');
    expect(action.itemCount).toBe(1);
  });

  test('createTestGameObject creates a valid game object', () => {
    const gameObject = createTestGameObject('oak_logs', 'oak_logs', 'Oak Logs', 'Logs from an oak tree', '🪵', 'These are logs from an oak tree.');
    
    expect(gameObject.id).toBe('oak_logs');
    expect(gameObject.name).toBe('oak_logs');
    expect(gameObject.displayName).toBe('Oak Logs');
    expect(gameObject.description).toBe('Logs from an oak tree');
    expect(gameObject.icon).toBe('🪵');
    expect(gameObject.examineText).toBe('These are logs from an oak tree.');
    expect(gameObject.stackable).toBe(true);
    expect(gameObject.maxStack).toBe(999);
  });

  test('createTestInventoryItem creates a valid inventory item', () => {
    const gameObject = createTestGameObject('oak_logs', 'oak_logs', 'Oak Logs', 'Logs from an oak tree', '🪵', 'These are logs from an oak tree.');
    const inventoryItem = createTestInventoryItem(gameObject, 5);
    
    expect(inventoryItem.gameObject).toBe(gameObject);
    expect(inventoryItem.quantity).toBe(5);
    expect(typeof inventoryItem.addQuantity).toBe('function');
    expect(typeof inventoryItem.removeQuantity).toBe('function');
    expect(typeof inventoryItem.getDisplayName).toBe('function');
  });

  test('createTestInventoryManager creates a valid inventory manager', () => {
    const inventoryManager = createTestInventoryManager();
    
    expect(inventoryManager.items).toBeInstanceOf(Map);
    expect(inventoryManager.gameObjects).toBeInstanceOf(Map);
    expect(typeof inventoryManager.registerGameObject).toBe('function');
    expect(typeof inventoryManager.addItem).toBe('function');
    expect(typeof inventoryManager.removeItem).toBe('function');
    expect(typeof inventoryManager.getItem).toBe('function');
    expect(typeof inventoryManager.getAllItems).toBe('function');
    expect(typeof inventoryManager.getItemCount).toBe('function');
    expect(typeof inventoryManager.hasItem).toBe('function');
    expect(typeof inventoryManager.getGameObject).toBe('function');
  });

  test('createTestSkillManager creates a valid skill manager', () => {
    const skillManager = createTestSkillManager();
    
    expect(skillManager.skills).toBeInstanceOf(Map);
    expect(skillManager.skillActions).toBeInstanceOf(Map);
    expect(skillManager.newlyUnlockedActions).toBeInstanceOf(Set);
    expect(typeof skillManager.addSkill).toBe('function');
    expect(typeof skillManager.addSkillActions).toBe('function');
    expect(typeof skillManager.getSkill).toBe('function');
    expect(typeof skillManager.getAvailableActions).toBe('function');
    expect(typeof skillManager.addSkillXp).toBe('function');
    expect(typeof skillManager.checkForNewUnlocks).toBe('function');
    expect(typeof skillManager.isNewlyUnlocked).toBe('function');
    expect(typeof skillManager.markActionUsed).toBe('function');
    expect(typeof skillManager.getAllSkills).toBe('function');
    expect(typeof skillManager.getAllAvailableActions).toBe('function');
  });
}); 