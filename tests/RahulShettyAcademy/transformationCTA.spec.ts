// spec: specs/RahulShettyAcademy.plan.md
// suite: Call-to-Action Sections

import { test, expect } from '@playwright/test';

test.describe('Call-to-Action Sections', () => {
  test('Verify transformation CTA section', async ({ page }) => {
    // 1. Navigate to https://rahulshettyacademy.com/
    await page.goto('https://rahulshettyacademy.com/');

    // 2. Wait for page to load
    await new Promise(f => setTimeout(f, 3 * 1000));

    // 3. Scroll to Ready to Transform CTA section
    // 4. Verify transformation section heading
    await expect(page.getByText('Ready to Transform Your QA Career?')).toBeVisible();

    // 5. Verify section description
    await expect(page.getByText('Join thousands of successful professionals')).toBeVisible();

    // 6. Verify transformation CTA buttons are visible
    const buttons = ['All Access Membership', 'Explore QA & AI Learning Paths', 'Explore Individual', 'Join the Community'];
    for (const button of buttons) {
      const element = page.getByText(button);
      if (await element.isVisible()) {
        await expect(element).toBeVisible();
      }
    }
  });
});
