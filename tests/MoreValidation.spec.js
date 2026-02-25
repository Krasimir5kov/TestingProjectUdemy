const { test, expect } = require('@playwright/test');
const { text } = require('node:stream/consumers');
const { config } = require('node:process');

test('Popup validations ', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator('#hide-textbox').click();
    await expect(page.locator('#displayed-text')).toBeHidden();
    page.on('dialog', dialog => dialog.accept());
    await page.locator('#confirmbtn').click();
    await page.locator('#mousehover').hover();
    const framePage = await page.frameLocator("#courses-iframe");
    await framePage.locator("li a[href='lifetime-access']:visible").click();
    const textConten = await framePage.locator(".text h2").textContent();
    const splitedText = textConten.split(" ")[1];
    console.log(splitedText);
    await expect(splitedText).toContain('13,522');
});
test('Screenshot and VISIUAL COMPERASION ', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await expect(page.locator('#displayed-text')).toBeVisible();
    await page.locator('#displayed-text').screenshot({ path: 'beforehide.png' });
    await page.locator('#hide-textbox').click();
    await page.screenshot({ path: 'screenshot.png' });

    await expect(page.locator('#displayed-text')).toBeHidden();
    
});
test("visual comperasion ", async ({ page }) => {
    await page.goto('https://www.dot.bg/');
    await expect(await page.screenshot()).toMatchSnapshot('test.png');
});