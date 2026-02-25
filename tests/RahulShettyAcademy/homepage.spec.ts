// spec: specs/RahulShettyAcademy.plan.md
// suite: Homepage Navigation & UI Elements

import { test, expect } from '@playwright/test';

test.describe('Homepage Navigation & UI Elements', () => {
  test('Verify homepage loads successfully', async ({ page }) => {
    // 1. Navigate to https://rahulshettyacademy.com/
    await page.goto('https://rahulshettyacademy.com/');

    // 2. Wait for page to fully load
    await new Promise(f => setTimeout(f, 3 * 1000));

    // 3. Verify page title contains 'Rahul Shetty Academy'
    await expect(page.getByRole('heading', { name: 'An Academy to' })).toBeVisible();
  });
});
