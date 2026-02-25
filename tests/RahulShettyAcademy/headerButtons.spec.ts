// spec: specs/RahulShettyAcademy.plan.md
// suite: Homepage Navigation & UI Elements

import { test, expect } from '@playwright/test';

test.describe('Homepage Navigation & UI Elements', () => {
  test('Verify Sign Up and Browse Courses buttons work', async ({ page }) => {
    // 1. Navigate to https://rahulshettyacademy.com/
    await page.goto('https://rahulshettyacademy.com/');

    // 2. Wait for page to load
    await new Promise(f => setTimeout(f, 3 * 1000));

    // 3. Locate header buttons section
    // 4. Verify Sign Up link is visible
    const headerNav = page.locator('nav').first();
    await expect(headerNav.getByText('Sign Up')).toBeVisible();

    // 5. Verify Browse Courses link is visible
    await expect(headerNav.getByText('Browse Courses')).toBeVisible();

    // 6. Verify Contact Us button is visible (use first match in nav)
    await expect(headerNav.getByRole('button', { name: 'Contact Us' })).toBeVisible();
  });
});
