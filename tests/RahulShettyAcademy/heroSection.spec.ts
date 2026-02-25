// spec: specs/RahulShettyAcademy.plan.md
// suite: Call-to-Action Sections

import { test, expect } from '@playwright/test';

test.describe('Call-to-Action Sections', () => {
  test('Verify main CTA buttons in hero section', async ({ page }) => {
    // 1. Navigate to https://rahulshettyacademy.com/
    await page.goto('https://rahulshettyacademy.com/');

    // 2. Wait for page to load
    await new Promise(f => setTimeout(f, 3 * 1000));

    // 3. Verify main heading and hero section displays
    await expect(page.getByText('An Academy to')).toBeVisible();

    // 4. Verify Trusted by text is visible
    await expect(page.getByText('Trusted by 1 Million+ Students')).toBeVisible();

    // 5. Verify statistics section shows
    await expect(page.getByText('1Million+')).toBeVisible();
    await expect(page.getByText('Students', { exact: true })).toBeVisible();
    await expect(page.getByText('195')).toBeVisible();
    await expect(page.getByText('Countries')).toBeVisible();
    await expect(page.getByText('40')).toBeVisible();
    await expect(page.getByText('Courses', { exact: true })).toBeVisible();

    // 6. Verify JOIN NOW button is present
    await expect(page.getByText('JOIN NOW').first()).toBeVisible();

    // 7. Verify Browse Learning Paths button
    await expect(page.getByText('Browse Learning Paths')).toBeVisible();
  });
});
