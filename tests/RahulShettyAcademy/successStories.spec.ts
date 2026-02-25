// spec: specs/RahulShettyAcademy.plan.md
// suite: Success Stories Section

import { test, expect } from '@playwright/test';

test.describe('Success Stories Section', () => {
  test('Verify success stories display', async ({ page }) => {
    // 1. Navigate to https://rahulshettyacademy.com/
    await page.goto('https://rahulshettyacademy.com/');

    // 2. Wait for page to load
    await new Promise(f => setTimeout(f, 3 * 1000));

    // 3. Scroll to Success Stories section
    // 4. Verify all 6 success stories with names and companies are visible
    await expect(page.getByText('Learner success stories')).toBeVisible();
    
    // Verify each success story is displayed
    await expect(page.getByText('Sarah Johnson')).toBeVisible();
    await expect(page.getByText('Michael Chen')).toBeVisible();
    await expect(page.getByText('Priya Sharma')).toBeVisible();
    await expect(page.getByText('David Wilson')).toBeVisible();
    await expect(page.getByText('Lisa Rodriguez')).toBeVisible();
    await expect(page.getByText('Ahmed Hassan')).toBeVisible();
  });
});
