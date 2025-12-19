import { test, expect } from '@playwright/test';

test('page loads and displays main elements', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('#start-input')).toBeVisible();
  await expect(page.locator('#end-input')).toBeVisible();
  await expect(page.locator('#route-btn')).toBeVisible();
  await expect(page.locator('#map')).toBeVisible();
});

test('invalid start room shows error notification', async ({ page }) => {
  await page.goto('/');

  await page.fill('#start-input', 'room 143285719');
  await page.click('body');
  await page.fill('#end-input', 'Exit');
  await page.click('body');
  await page.click('#route-btn');

  await expect(page.locator('.notification')).toContainText('Start location not found');
});

test('same start and destination shows error', async ({ page }) => {
  await page.goto('/');

  await page.fill('#start-input', 'Library');
  await page.click('body');
  await page.fill('#end-input', 'Library');
  await page.click('body');
  await page.click('#route-btn');

  await expect(page.locator('.notification')).toContainText('cannot be the same');
});
