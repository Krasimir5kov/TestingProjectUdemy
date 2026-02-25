// spec: specs/RahulShettyAcademy.plan.md
// suite: Footer & Support Links

import { test, expect } from '@playwright/test';

test.describe('Footer & Support Links', () => {
  test('Verify footer popular courses links', async ({ page }) => {
    // 1. Navigate to https://rahulshettyacademy.com/
    await page.goto('https://rahulshettyacademy.com/');

    // 2. Wait for page to load
    await new Promise(f => setTimeout(f, 3 * 1000));

    // 3. Scroll to footer
    // 4. Verify Popular Courses section header
    const footer = page.locator('footer');
    await expect(footer.getByRole('heading', { name: 'Popular Courses' })).toBeVisible();

    // 5. Verify course links in footer
    await expect(footer.getByRole('link', { name: 'Selenium WebDriver' })).toBeVisible();
    await expect(footer.getByRole('link', { name: 'Playwright Testing' })).toBeVisible();
    await expect(footer.getByRole('link', { name: 'API Testing' })).toBeVisible();
    await expect(footer.getByRole('link', { name: 'AI Agents' })).toBeVisible();
    await expect(footer.getByRole('link', { name: /AI Testing/ })).toBeVisible();

    // 6. Verify Browse All Courses link
    await expect(footer.getByRole('link', { name: 'Browse All Courses' })).toBeVisible();
  });
});
