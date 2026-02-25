// spec: specs/RahulShettyAcademy.plan.md
// suite: Skills & Benefits Section

import { test, expect } from '@playwright/test';

test.describe('Skills & Benefits Section', () => {
  test('Verify Skills & Benefits cards display', async ({ page }) => {
    // 1. Navigate to https://rahulshettyacademy.com/
    await page.goto('https://rahulshettyacademy.com/');

    // 2. Wait for page to load
    await new Promise(f => setTimeout(f, 3 * 1000));

    // 3. Scroll to Skills & Benefits section - page loads benefits section

    // 4. Verify section heading 'Learn the skills companies hire for' displays
    await expect(page.getByText('Learn the skills companies hire for')).toBeVisible();

    // Verify all 6 benefit cards are visible
    await expect(page.getByRole('heading', { name: 'Lifetime Access' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Mentor-first Teaching' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Hands-on Frameworks' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Career-Focused' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Multi-Stack Tools' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'AI Testing' })).toBeVisible();
  });
});
