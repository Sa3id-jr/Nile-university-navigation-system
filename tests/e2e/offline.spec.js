import { test, expect } from '@playwright/test';

test('navigation features work while offline', async ({ page, context }) => {
    // Step 1: Load page while ONLINE and let service worker cache everything
    await page.goto('/');
    await page.waitForTimeout(2000); // Wait for service worker to cache

    // Step 2: Go OFFLINE
    await context.setOffline(true);

    // Step 3: Verify offline indicator appears
    await page.waitForTimeout(500);
    const offlineIndicator = page.locator('#offline-indicator');
    await expect(offlineIndicator).toHaveClass(/show/);

    // Step 4: Test that buttons still work offline

    // Fill in start and end locations
    await page.fill('#start-input', 'Library');
    await page.click('body');
    await page.fill('#end-input', 'Exit');
    await page.click('body');

    // Click route button - should work with cached data
    await page.click('#route-btn');

    // Verify route was calculated (route info appears)
    await expect(page.locator('#route-info')).toHaveClass(/active/);

    // Verify directions panel appears
    await expect(page.locator('#directions-panel')).toHaveClass(/active/);

    // Test floor switching while offline
    await page.click('.floor-btn[data-floor="upper"]');
    await expect(page.locator('.floor-btn[data-floor="upper"]')).toHaveClass(/active/);

    // Test clear button while offline
    await page.click('#clear-btn');
    await expect(page.locator('#route-info')).not.toHaveClass(/active/);

    // Step 5: Go back online
    await context.setOffline(false);
    await page.waitForTimeout(500);

    // Verify offline indicator disappears
    await expect(offlineIndicator).not.toHaveClass(/show/);
});

test('cached map data is available offline', async ({ page, context }) => {
    // Load page online first
    await page.goto('/');
    await page.waitForTimeout(1500);

    // Go offline
    await context.setOffline(true);

    // Check that room data is still accessible
    const roomDataExists = await page.evaluate(() => {
        return localStorage.getItem('campusmapdata') !== null;
    });

    expect(roomDataExists).toBe(true);

    // Verify autocomplete still works with cached data
    await page.fill('#start-input', 'lib');
    await page.waitForTimeout(300);

    // Autocomplete should show results
    const autocompleteVisible = await page.locator('#start-box').isVisible();
    expect(autocompleteVisible).toBe(true);

    // Go back online
    await context.setOffline(false);
});
