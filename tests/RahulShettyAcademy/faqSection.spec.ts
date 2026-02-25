// spec: specs/RahulShettyAcademy.plan.md
// suite: FAQ & Support Section

import { test, expect } from '@playwright/test';

test.describe('FAQ & Support Section', () => {
  test('Verify FAQ section displays all questions', async ({ page }) => {
    // 1. Navigate to https://rahulshettyacademy.com/
    await page.goto('https://rahulshettyacademy.com/');

    // 2. Wait for page to load
    await new Promise(f => setTimeout(f, 3 * 1000));

    // 3. Scroll to FAQ section
    // 4. Verify all 8 FAQ questions are visible
    await expect(page.getByText('Frequently Asked Questions')).toBeVisible();
    await expect(page.getByText('What does Rahul Shetty Academy offer?')).toBeVisible();
    await expect(page.getByText('Who is Rahul Shetty?')).toBeVisible();
    await expect(page.getByText('Are these courses good for beginners?')).toBeVisible();
    await expect(page.getByText('Do I get certificates after completing courses?')).toBeVisible();
    await expect(page.getByText('How do I enroll in a course?')).toBeVisible();
    await expect(page.getByText('Is content available on mobile devices?')).toBeVisible();
    await expect(page.getByText('What topics are covered?')).toBeVisible();
    await expect(page.getByText('Is there community support?')).toBeVisible();
  });
});
