const {test,expect} = require('@playwright/test');
const { config } = require('node:process');

test.describe.serial('User creation + log in', () => {
    let registratedEmail = '';
    let passwordSaved = '';
    const passwrod = '12345@As';
    const emailAddress = 'dadada@abv.bg'
    

test('Second test for log in ' , async ({page})=> { 
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
   
    await page.locator('#userEmail').fill(emailAddress);
    await page.locator('#userPassword').fill(passwrod);
    await page.locator('#login').click();
    //await page.waitForLoadState('networkidle')
    await page.locator('.card-body b').first().waitFor();
    const titles = await page.locator('.card-body b').allTextContents();
    console.log(titles)
});
});