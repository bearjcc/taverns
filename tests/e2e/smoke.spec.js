const { test, expect } = require('@playwright/test');

test.describe('Smoke Tests', () => {
  test('should load the game without console errors', async ({ page }) => {
    // Collect console errors
    const consoleErrors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    // Navigate to the game
    await page.goto('/');
    
    // Wait for the game to initialize (look for game engine initialization message)
    await page.waitForFunction(() => {
      return window.gameEngine !== undefined;
    }, { timeout: 10000 });

    // Check that no console errors occurred during load
    expect(consoleErrors).toHaveLength(0);
  });

  test('should have all required system classes available globally', async ({ page }) => {
    await page.goto('/');
    
    // Wait for game to load
    await page.waitForFunction(() => {
      return window.gameEngine !== undefined;
    }, { timeout: 10000 });

    // Check that all required system classes are available
    const requiredClasses = [
      'SkillManager',
      'InventoryManager', 
      'TraitManager',
      'ActionManager',
      'LocationSystem',
      'AchievementSystem',
      'EncyclopediaSystem',
      'UIManager',
      'ModManager'
    ];

    for (const className of requiredClasses) {
      await expect(page.locator('body')).toHaveJSProperty(`window.${className}`, expect.any(Function));
    }
  });

  test('should display the main game interface', async ({ page }) => {
    await page.goto('/');
    
    // Wait for game to load
    await page.waitForFunction(() => {
      return window.gameEngine !== undefined;
    }, { timeout: 10000 });

    // Check that main UI elements are present
    await expect(page.locator('#narration-content')).toBeVisible();
    await expect(page.locator('#actions-content')).toBeVisible();
    await expect(page.locator('.sidebar')).toBeVisible();
  });

  test('should have working tab system', async ({ page }) => {
    await page.goto('/');
    
    // Wait for game to load
    await page.waitForFunction(() => {
      return window.gameEngine !== undefined;
    }, { timeout: 10000 });

    // Check that tabs are present and clickable
    const tabButtons = page.locator('.tab-button');
    await expect(tabButtons).toHaveCount(4); // skills, inventory, character, achievements

    // Click on achievements tab
    await page.click('[data-tab="achievements"]');
    await expect(page.locator('#achievements-tab')).toHaveClass(/active/);
  });

  test('should handle basic game actions without errors', async ({ page }) => {
    await page.goto('/');
    
    // Wait for game to load
    await page.waitForFunction(() => {
      return window.gameEngine !== undefined;
    }, { timeout: 10000 });

    // Collect any errors that occur during action execution
    const errors = [];
    page.on('pageerror', error => {
      errors.push(error.message);
    });

    // Try to execute a basic action (if available)
    const actionButtons = page.locator('.action-button');
    if (await actionButtons.count() > 0) {
      await actionButtons.first().click();
      // Wait a moment for any async operations
      await page.waitForTimeout(1000);
    }

    // Check that no errors occurred
    expect(errors).toHaveLength(0);
  });

  test('should load mod data successfully', async ({ page }) => {
    await page.goto('/');
    
    // Wait for game to load
    await page.waitForFunction(() => {
      return window.gameEngine !== undefined;
    }, { timeout: 10000 });

    // Check that mod manager is working
    const modManager = await page.evaluate(() => window.gameEngine?.getSystem('mods'));
    expect(modManager).toBeTruthy();

    // Check that base game mod is loaded
    const activeMods = await page.evaluate(() => {
      const modManager = window.gameEngine?.getSystem('mods');
      return modManager ? Array.from(modManager.getActiveMods()) : [];
    });
    expect(activeMods).toContain('base-game');
  });

  test('should have achievement system functional', async ({ page }) => {
    await page.goto('/');
    
    // Wait for game to load
    await page.waitForFunction(() => {
      return window.gameEngine !== undefined;
    }, { timeout: 10000 });

    // Check that achievement system is available
    const achievementSystem = await page.evaluate(() => window.gameEngine?.getSystem('achievements'));
    expect(achievementSystem).toBeTruthy();

    // Check that achievements tab shows content
    await page.click('[data-tab="achievements"]');
    await expect(page.locator('#achievements-content')).toBeVisible();
  });
}); 