// spec: specs/RahulShettyAcademy.plan.md
// suite: Footer & Support Links

import { test, expect } from '@playwright/test';

test.describe('Footer & Support Links', () => {
  test('Verify footer support links', async ({ page }) => {
    // 1. Navigate to https://rahulshettyacademy.com/
    await page.goto('https://rahulshettyacademy.com/');

    // 2. Wait for page to load
    await new Promise(f => setTimeout(f, 3 * 1000));

    // 3. Scroll to footer
    // 4. Verify Support section header in footer
    const footer = page.locator('footer');
    await expect(footer.getByRole('heading', { name: 'Support', exact: true })).toBeVisible();

    // 5. Verify support links are present
    await expect(footer.getByRole('link', { name: 'Student Login' })).toBeVisible();
    await expect(footer.getByRole('link', { name: 'Contact Us' })).toBeVisible();
    await expect(footer.getByRole('link', { name: 'Help Center' })).toBeVisible();
    await expect(footer.getByRole('link', { name: 'Community' })).toBeVisible();

    // 6. Verify legal links are present
    await expect(footer.getByRole('link', { name: 'Terms of Service' })).toBeVisible();
    await expect(footer.getByRole('link', { name: 'Privacy Policy' })).toBeVisible();
  });
});
