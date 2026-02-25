// spec: specs/RahulShettyAcademy.plan.md
// suite: Call-to-Action Sections

import { test, expect } from '@playwright/test';

test.describe('Call-to-Action Sections', () => {
  test('Verify Academy Access CTA section', async ({ page }) => {
    // 1. Navigate to https://rahulshettyacademy.com/
    await page.goto('https://rahulshettyacademy.com/');

    // 2. Wait for page to load
    await new Promise(f => setTimeout(f, 3 * 1000));

    // 3. Scroll to JOIN OUR ACADEMY section
    // 4. Verify Exclusive Academy Access header displays
    await expect(page.getByText('Exclusive Academy Access')).toBeVisible();

    // 5. Verify section title displays
    await expect(page.getByText('JOIN OUR ACADEMY')).toBeVisible();

    // 6. Verify Transform your career text displays
    await expect(page.getByText('Transform your career')).toBeVisible();

    // 7. Verify free offer messaging
    await expect(page.getByText('Usually $197, now FREE')).toBeVisible();

    // 8. Verify JOIN NOW - FREE ACCESS button
    await expect(page.getByText('JOIN NOW - FREE ACCESS')).toBeVisible();

    // 9. Verify free course mentions
    await expect(page.getByText('Java Design Patterns')).toBeVisible();
    await expect(page.getByText('SDET/QA Automation Interview Kit')).toBeVisible();
  });
});
