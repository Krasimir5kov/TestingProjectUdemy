// spec: specs/RahulShettyAcademy.plan.md
// suite: Footer & Support Links

import { test, expect } from '@playwright/test';

test.describe('Footer & Support Links', () => {
  test('Verify footer navigation links', async ({ page }) => {
    // 1. Navigate to https://rahulshettyacademy.com/
    await page.goto('https://rahulshettyacademy.com/');

    // 2. Wait for page to load
    await new Promise(f => setTimeout(f, 3 * 1000));

    // 3. Scroll to footer section
    // 4. Verify Navigation section header in footer
    await expect(page.getByText('Navigation')).toBeVisible();

    // 5. Verify footer navigation links are present
    const footer = page.locator('footer');
    await expect(footer.getByRole('link', { name: 'All-Access' })).toBeVisible();
    await expect(footer.getByRole('link', { name: 'Learning Paths' })).toBeVisible();
    await expect(footer.getByRole('link', { name: 'Mentorship' })).toBeVisible();
    await expect(footer.getByRole('link', { name: /AI Learning Path/ })).toBeVisible();
    await expect(footer.getByRole('link', { name: 'Practice' })).toBeVisible();
    await expect(footer.getByRole('link', { name: 'Meet ups' })).toBeVisible();
    await expect(footer.getByRole('link', { name: 'Blog' })).toBeVisible();
  });
});
