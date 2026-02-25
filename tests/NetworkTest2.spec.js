const { test, expect, request } = require('@playwright/test');
const emailAddress = 'dadada@abv.bg';
const passwrod = '12345@As';
const { config } = require('node:process');

test('Security test request intercept', async ({ page }) => {
    //login and reach orders page
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

    await page.getByPlaceholder('email@example.com').fill(emailAddress);
    await page.getByPlaceholder('enter your passsword').fill(passwrod);


    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    await page.getByRole("button", { name: 'ORDERS' }).click();

    await page.route('https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*'
        , route => {
            route.continue({ url: 'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=6970d956c941646b7aacbb3d' });
        });
    await page.locator("button:has-text('View')").first().click();
    await expect(page.locator("p[class='blink_me']").last()).toHaveText('You are not authorize to view this order');

});