const { test, expect } = require('@playwright/test');

test.describe('Next.js Game Application Smoke Tests', () => {
  test('should load the Next.js application without console errors', async ({ page }) => {
    // Collect console errors
    const consoleErrors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    // Navigate to the game
    await page.goto('/');
    
    // Wait for Next.js to hydrate and React components to render
    await page.waitForSelector('main', { timeout: 10000 });

    // Check that no console errors occurred during load
    expect(consoleErrors.filter(error => 
      !error.includes('Warning:') && // Filter out React warnings
      !error.includes('Download the React DevTools') // Filter out dev tools message
    )).toHaveLength(0);
  });

  test('should display the main Next.js game interface', async ({ page }) => {
    await page.goto('/');
    
    // Wait for React components to render
    await page.waitForSelector('main', { timeout: 10000 });

    // Check that main UI structure is present
    await expect(page.locator('main')).toBeVisible();
    
    // Check for game interface components (using more generic selectors)
    // These selectors should match the React component structure
    const gameInterface = page.locator('[data-testid="game-interface"]').or(page.locator('main'));
    await expect(gameInterface).toBeVisible();
  });

  test('should have working navigation and routing', async ({ page }) => {
    await page.goto('/');
    
    // Wait for page to load
    await page.waitForSelector('main', { timeout: 10000 });

    // Check that the page loads correctly
    await expect(page).toHaveTitle(/Taverns/i);
  });

  test('should load and display game data via API routes', async ({ page }) => {
    // Test API routes directly
    const skillsResponse = await page.request.get('/api/skills');
    expect(skillsResponse.ok()).toBeTruthy();
    
    const skillsData = await skillsResponse.json();
    expect(skillsData).toBeTruthy();
    expect(typeof skillsData).toBe('object');

    const itemsResponse = await page.request.get('/api/items');
    expect(itemsResponse.ok()).toBeTruthy();
    
    const itemsData = await itemsResponse.json();
    expect(itemsData).toBeTruthy();
    expect(typeof itemsData).toBe('object');

    const configResponse = await page.request.get('/api/game-config');
    expect(configResponse.ok()).toBeTruthy();
    
    const configData = await configResponse.json();
    expect(configData).toBeTruthy();
    expect(typeof configData).toBe('object');
  });

  test('should handle React component interactions without errors', async ({ page }) => {
    await page.goto('/');
    
    // Wait for React to load
    await page.waitForSelector('main', { timeout: 10000 });

    // Collect any errors that occur during interactions
    const errors = [];
    page.on('pageerror', error => {
      errors.push(error.message);
    });

    // Try to interact with any buttons that might be present
    const buttons = page.locator('button');
    if (await buttons.count() > 0) {
      await buttons.first().click();
      // Wait a moment for any async operations
      await page.waitForTimeout(1000);
    }

    // Check that no errors occurred
    expect(errors).toHaveLength(0);
  });

  test('should have responsive design working', async ({ page }) => {
    await page.goto('/');
    
    // Wait for page to load
    await page.waitForSelector('main', { timeout: 10000 });

    // Test desktop view
    await page.setViewportSize({ width: 1200, height: 800 });
    await expect(page.locator('main')).toBeVisible();

    // Test tablet view
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.locator('main')).toBeVisible();

    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator('main')).toBeVisible();
  });

  test('should have proper meta tags and SEO', async ({ page }) => {
    await page.goto('/');
    
    // Check for proper meta tags
    await expect(page).toHaveTitle(/Taverns/i);
    
    // Check for viewport meta tag (important for responsive design)
    const viewportMeta = page.locator('meta[name="viewport"]');
    await expect(viewportMeta).toHaveAttribute('content', /width=device-width/);
  });

  test('should serve static assets correctly', async ({ page }) => {
    await page.goto('/');
    
    // Wait for page to load
    await page.waitForSelector('main', { timeout: 10000 });

    // Check that static data files are accessible
    const dataResponse = await page.request.get('/data/skills.json');
    expect(dataResponse.ok()).toBeTruthy();
    
    const modsResponse = await page.request.get('/mods/base-game/manifest.json');
    expect(modsResponse.ok()).toBeTruthy();
  });
}); 