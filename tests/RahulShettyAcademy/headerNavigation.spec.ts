// spec: specs/RahulShettyAcademy.plan.md
// suite: Homepage Navigation & UI Elements

import { test, expect } from '@playwright/test';

test.describe('Homepage Navigation & UI Elements', () => {
  test('Verify header navigation links are functional', async ({ page }) => {
    // 1. Navigate to https://rahulshettyacademy.com/
    await page.goto('https://rahulshettyacademy.com/');

    // 2. Wait for page to load
    await new Promise(f => setTimeout(f, 3 * 1000));

    // 3. Verify 'RAHUL SHETTY' logo is visible
    await expect(page.getByRole('link', { name: 'RAHUL SHETTY' })).toBeVisible();

    // 4. Verify navigation links are present in navigation area
    const nav = page.locator('nav').first();
    await expect(nav.getByText('All-Access')).toBeVisible();
    await expect(nav.getByText('Learning Paths')).toBeVisible();
    await expect(nav.getByText('Mentorship')).toBeVisible();
    
    // 5. Verify 'AI Learning Path' shows NEW badge
    const aiLearningPath = nav.getByText('AI Learning Path');
    await expect(aiLearningPath).toBeVisible();
    const newBadge = page.getByText('NEW').first();
    await expect(newBadge).toBeVisible();

    // 6. Verify Practice link is present
    await expect(nav.getByText('Practice')).toBeVisible();
    await expect(nav.getByText('Meet ups')).toBeVisible();
  });
});
