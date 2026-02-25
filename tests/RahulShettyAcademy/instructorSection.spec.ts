// spec: specs/RahulShettyAcademy.plan.md
// suite: Call-to-Action Sections

import { test, expect } from '@playwright/test';

test.describe('Call-to-Action Sections', () => {
  test('Verify instructor section and portfolio link', async ({ page }) => {
    // 1. Navigate to https://rahulshettyacademy.com/
    await page.goto('https://rahulshettyacademy.com/');

    // 2. Wait for page to load
    await new Promise(f => setTimeout(f, 3 * 1000));

    // 3. Scroll to Meet Your Instructor section
    // 4. Verify section heading is visible
    await expect(page.getByText('Meet Your Instructor')).toBeVisible();

    // 5. Verify instructor name displays
    await expect(page.getByText("I'm Rahul Shetty")).toBeVisible();

    // 6. Verify portfolio link is visible
    await expect(page.getByText('Check my Portfolio')).toBeVisible();

    // 7. Verify credentials badge visible
    await expect(page.getByText('Test Automation', { exact: true })).toBeVisible();
  });
});
