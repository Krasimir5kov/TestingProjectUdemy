// spec: specs/RahulShettyAcademy.plan.md
// suite: Footer & Support Links

import { test, expect } from '@playwright/test';

test.describe('Footer & Support Links', () => {
  test('Verify footer social media links', async ({ page }) => {
    // 1. Navigate to https://rahulshettyacademy.com/
    await page.goto('https://rahulshettyacademy.com/');

    // 2. Wait for page to load
    await new Promise(f => setTimeout(f, 3 * 1000));

    // 3. Scroll to footer
    // 4. Verify social media section exists
    await expect(page.getByText('Connect us on Socials')).toBeVisible();

    // 5. Verify social media icons/links are present
    const footer = page.locator('footer');
    const socialLinks = footer.locator('a[href*="youtube"]').or(footer.locator('a[href*="linkedin"]')).or(footer.locator('a[href*="instagram"]'));
    const count = await socialLinks.count();
    await expect(count).toBeGreaterThanOrEqual(2);

    // 6. Verify copyright text displays
    await expect(footer.getByText('© 2025 Rahul Shetty Academy')).toBeVisible();
    await expect(footer.getByText('All rights reserved')).toBeVisible();
  });
});
