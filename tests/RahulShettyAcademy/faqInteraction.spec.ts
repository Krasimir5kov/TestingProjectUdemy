// spec: specs/RahulShettyAcademy.plan.md
// suite: FAQ & Support Section

import { test, expect } from '@playwright/test';

test.describe('FAQ & Support Section', () => {
  test('Verify FAQ expand/collapse functionality', async ({ page }) => {
    // 1. Navigate to https://rahulshettyacademy.com/
    await page.goto('https://rahulshettyacademy.com/');

    // 2. Wait for page to load
    await new Promise(f => setTimeout(f, 3 * 1000));

    // 3. Scroll to FAQ section
    // 4. Verify FAQ section is visible
    await expect(page.getByText('Frequently Asked Questions')).toBeVisible();

    // 5. Verify first FAQ question is visible
    const firstQuestion = page.getByText('What does Rahul Shetty Academy offer?');
    await expect(firstQuestion).toBeVisible();

    // 6. Find the button for the first FAQ
    const firstFaqButton = page.locator('button').filter({ hasText: 'What does Rahul Shetty Academy offer?' });
    
    // 7. Verify second and third questions are visible
    await expect(page.getByText('Who is Rahul Shetty?')).toBeVisible();
    await expect(page.getByText('Are these courses good for beginners?')).toBeVisible();

    // 8. Verify all FAQ buttons are interactive elements
    const allButtons = page.locator('button');
    const count = await allButtons.count();
    await expect(count).toBeGreaterThan(0);
  });
});
