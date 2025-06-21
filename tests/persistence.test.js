describe('Persistence (localStorage)', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('Save and load game state', () => {
    const gameState = { player: { name: 'Test', level: 5 }, inventory: { gold: 100 } };
    localStorage.setItem('tavernsGameState', JSON.stringify(gameState));
    const loaded = JSON.parse(localStorage.getItem('tavernsGameState'));
    expect(loaded).toEqual(gameState);
  });

  test('Handles missing save gracefully', () => {
    localStorage.getItem.mockReturnValueOnce(null);
    const loaded = localStorage.getItem('tavernsGameState');
    expect(loaded).toBeNull();
  });

  test('Handles corrupted save data', () => {
    localStorage.getItem.mockReturnValueOnce('not-json');
    let errorCaught = false;
    try {
      JSON.parse(localStorage.getItem('tavernsGameState'));
    } catch (e) {
      errorCaught = true;
    }
    expect(errorCaught).toBe(true);
  });
}); 