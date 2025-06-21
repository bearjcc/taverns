const { createTestGameObject, createTestInventoryItem, createTestInventoryManager } = require('./test-utils');

describe('InventoryItem', () => {
  test('addQuantity and removeQuantity', () => {
    const gameObject = createTestGameObject('oak_logs', 'oak_logs', 'Oak Logs', 'Logs from an oak tree', '🪵', 'These are logs from an oak tree.');
    const item = createTestInventoryItem(gameObject, 5);
    expect(item.quantity).toBe(5);
    expect(item.addQuantity(3)).toBe(true);
    expect(item.quantity).toBe(8);
    expect(item.removeQuantity(4)).toBe(true);
    expect(item.quantity).toBe(4);
    expect(item.removeQuantity(10)).toBe(false);
    expect(item.quantity).toBe(4);
  });

  test('getDisplayName returns correct string', () => {
    const gameObject = createTestGameObject('oak_logs', 'oak_logs', 'Oak Logs', 'Logs from an oak tree', '🪵', 'These are logs from an oak tree.');
    const item = createTestInventoryItem(gameObject, 1);
    expect(item.getDisplayName()).toBe('Oak Logs');
    item.addQuantity(2);
    expect(item.getDisplayName()).toBe('Oak Logs (3)');
  });
});

describe('InventoryManager', () => {
  test('registerGameObject and addItem', () => {
    const manager = createTestInventoryManager();
    const gameObject = createTestGameObject('oak_logs', 'oak_logs', 'Oak Logs', 'Logs from an oak tree', '🪵', 'These are logs from an oak tree.');
    manager.registerGameObject(gameObject);
    expect(manager.getGameObject('oak_logs')).toBe(gameObject);
    expect(manager.addItem('oak_logs', 5)).toBe(true);
    expect(manager.getItem('oak_logs').quantity).toBe(5);
    expect(manager.addItem('oak_logs', 2)).toBe(true);
    expect(manager.getItem('oak_logs').quantity).toBe(7);
  });

  test('removeItem and hasItem', () => {
    const manager = createTestInventoryManager();
    const gameObject = createTestGameObject('oak_logs', 'oak_logs', 'Oak Logs', 'Logs from an oak tree', '🪵', 'These are logs from an oak tree.');
    manager.registerGameObject(gameObject);
    manager.addItem('oak_logs', 5);
    expect(manager.hasItem('oak_logs', 3)).toBe(true);
    expect(manager.removeItem('oak_logs', 3)).toBe(true);
    expect(manager.getItem('oak_logs').quantity).toBe(2);
    expect(manager.hasItem('oak_logs', 3)).toBe(false);
    expect(manager.removeItem('oak_logs', 5)).toBe(false);
    expect(manager.getItem('oak_logs').quantity).toBe(2);
    expect(manager.removeItem('oak_logs', 2)).toBe(true);
    expect(manager.getItem('oak_logs')).toBeUndefined();
  });

  test('getAllItems and getItemCount', () => {
    const manager = createTestInventoryManager();
    const gameObject = createTestGameObject('oak_logs', 'oak_logs', 'Oak Logs', 'Logs from an oak tree', '🪵', 'These are logs from an oak tree.');
    manager.registerGameObject(gameObject);
    manager.addItem('oak_logs', 3);
    expect(manager.getAllItems().length).toBe(1);
    expect(manager.getItemCount('oak_logs')).toBe(3);
  });
}); 