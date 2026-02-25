const {test, expect} = require('@playwright/test');
//const { config } = require('node:process');
////TESTING BRANCH CHANGES
test('Calenrdar validation test', async ({page})=> {
    const monthNumebr = "6";
    const day = "15";
    const year = "2027";
    const expectedList = [monthNumebr, day, year];
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    await page.locator('.react-date-picker__inputGroup').click();
    await page.locator('.react-calendar__navigation__label').click();
    await page.locator('.react-calendar__navigation__label').click();
    await page.getByText(year).click();
    await page.locator('.react-calendar__year-view__months__month').nth(Number(monthNumebr-1)).click();
    await page.locator('//abbr[text()='+day+']').click();
    const input = await page.locator('.react-date-picker__inputGroup__input')
    for (let i=0 ; i<expectedList.length; i++) {
       const value = await input.nth(i).inputValue();
       expect(value).toBe(expectedList[i]);
    }
});
