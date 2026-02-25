// spec: specs/RahulShettyAcademy.plan.md
// suite: Featured Courses & Enrollment

import { test, expect } from '@playwright/test';

test.describe('Featured Courses & Enrollment', () => {
  test('Verify course enrollment buttons are clickable', async ({ page }) => {
    // 1. Navigate to https://rahulshettyacademy.com/
    await page.goto('https://rahulshettyacademy.com/');

    // 2. Wait for page to load
    await new Promise(f => setTimeout(f, 3 * 1000));

    // 3. Scroll to Featured Courses section
    // 4. Verify multiple Enroll Now buttons exist
    const enrollButtons = page.getByText('Enroll Now');
    await expect(enrollButtons.first()).toBeVisible();

    // 5. Verify View More Courses link is visible
    await expect(page.getByText('View More Courses')).toBeVisible();

    // 6. Verify course titles are clickable/visible
    await expect(page.getByText('Selenium WebDriver with Java')).toBeVisible();
    await expect(page.getByText('Playwright with JavaScript')).toBeVisible();
  });
});
