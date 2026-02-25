// spec: specs/RahulShettyAcademy.plan.md
// suite: Homepage Navigation & UI Elements

import { test, expect } from '@playwright/test';

test.describe('Homepage Navigation & UI Elements', () => {
  test('Verify promotional banner displays and dismisses', async ({ page }) => {
    // 1. Navigate to https://rahulshettyacademy.com/
    await page.goto('https://rahulshettyacademy.com/');

    // 2. Wait for page to fully load
    await new Promise(f => setTimeout(f, 3 * 1000));

    // 3. Verify promotional banner is visible with 'Get 30% OFF' message
    await expect(page.getByText('Get 30% OFF')).toBeVisible();

    // 4. Verify coupon code 'RAHULSHETTY21051' is displayed
    await expect(page.getByText('RAHULSHETTY21051')).toBeVisible();

    // 5. Verify countdown timer is visible and counting down
    await expect(page.getByText('Ends in:')).toBeVisible();

    // 6. Click 'Dismiss banner' button using the first visible dismiss button
    const dismissButton = page.getByLabel('Dismiss banner').first();
    await dismissButton.click();

    // Verify banner is no longer visible on page
    await expect(page.getByText('Get 30% OFF')).not.toBeVisible();
  });
});
