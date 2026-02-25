// spec: specs/RahulShettyAcademy.plan.md
// suite: Featured Courses & Enrollment

import { test, expect } from '@playwright/test';

test.describe('Featured Courses & Enrollment', () => {
  test('Verify featured courses display correct information', async ({ page }) => {
    // 1. Navigate to https://rahulshettyacademy.com/
    await page.goto('https://rahulshettyacademy.com/');

    // 2. Wait for page to load
    await new Promise(f => setTimeout(f, 3 * 1000));

    // 3. Scroll to Featured Courses section - page automatically shows featured courses
    // 4. Verify section title 'Master the latest testing technologies' displays
    await expect(page.getByText('Master the latest testing technologies')).toBeVisible();

    // Verify all featured courses display with correct information
    await expect(page.getByText('Selenium WebDriver with Java')).toBeVisible();
    await expect(page.getByText('Rest API Automation Testing')).toBeVisible();
    await expect(page.getByText('Playwright with JavaScript')).toBeVisible();
    
    // Verify Best Seller badges appear on courses (use first match)
    await expect(page.getByText('Best Seller').first()).toBeVisible();
    
    // Verify student enrollment numbers display
    await expect(page.getByText('students enrolled').first()).toBeVisible();
    
    // Verify 'Enroll Now' buttons are visible
    await expect(page.getByText('Enroll Now').first()).toBeVisible();
  });
});
