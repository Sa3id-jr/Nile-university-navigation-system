import { test, expect } from '@playwright/test';

test('choosing Elevator uses elevator floor-change instruction', async ({ page }) => {
    const START = 'Library';
    const END = 'FLibrary';

    await page.goto('/');
    await page.fill('#start-input', START);
    await page.click('body');
    await page.fill('#end-input', END);
    await page.click('body');
    await page.click('#route-btn');

    await expect(page.locator('#transport-modal')).toBeVisible();
    await page.click('#choose-elevator');

    await expect(page.locator('#continue-route-btn')).toBeVisible();
});

test('choosing Stairs uses stairs floor-change instruction', async ({ page }) => {
    const START = 'Library';
    const END = 'FLibrary';

    await page.goto('/');
    await page.fill('#start-input', START);
    await page.click('body');
    await page.fill('#end-input', END);
    await page.click('body');
    await page.click('#route-btn');

    await expect(page.locator('#transport-modal')).toBeVisible();
    await page.click('#choose-stairs');

    await expect(page.locator('#continue-route-btn')).toBeVisible();
});

test('"I\'ve Arrived" switches to target floor and continues route', async ({ page }) => {
    const START = 'Library';
    const END = 'FLibrary';

    await page.goto('/');
    await page.fill('#start-input', START);
    await page.click('body');
    await page.fill('#end-input', END);
    await page.click('body');
    await page.click('#route-btn');

    await expect(page.locator('#transport-modal')).toBeVisible();
    await page.click('#choose-elevator');

    await expect(page.locator('#continue-route-btn')).toBeVisible();
    await page.click('#continue-route-btn');

    // After continuing, should switch to upper floor
    await expect(page.locator('.floor-btn[data-floor="upper"]')).toHaveClass(/active/);
});
