 const {test, expect} = require('@playwright/test');
 const { config } = require('node:process');

 let webGlobalContex;
 const loginPayLoad = {
    emailAddress:"dadada@abv.bg",
    passwrod:"12345@As"
 };
 test.beforeAll( async ({browser})=> {
         const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

        await page.getByPlaceholder('email@example.com').fill(loginPayLoad.emailAddress);
        await page.getByPlaceholder('enter your passsword').fill(loginPayLoad.passwrod);
        //const productName = 'ZARA COAT 3';
       //const products = page.locator('.card-body');
       
        await page.getByRole('button', {name: 'Login'}).click();
        await page.waitForLoadState('networkidle');
        await context.storageState({path: 'state.json'});
        webGlobalContex  = await browser.newContext({storageState: 'state.json'});
    });
 test('Check the displayed itesm on the page ', async () => {

        const page = await webGlobalContex.newPage();
        await page.goto('https://rahulshettyacademy.com/client/');
        await page.locator(".card-body b").first().waitFor();
        await page.locator(".card-body").filter({ hasText: 'ZARA COAT 3'}).getByRole('button', { name: ' Add To Cart'}).click();
       await page.locator("div li").first().waitFor();
        
        await expect(page.getByText('ZARA COAT 3')).toBeVisible();
        await page.getByRole("listitem").getByRole('button', {name: 'Cart'}).click();

        await page.getByRole('button', {name: 'Checkout'}).click();
        await page.getByPlaceholder("Select Country").pressSequentially("Bu");
        await page.getByRole('button',{name: 'Bulgaria'}).click();
        
        await expect(page.locator(".user__name [type='text']").first()).toHaveText(loginPayLoad.emailAddress);
        await page.getByText("PLACE ORDER").click();
        await expect(page.getByText(' Thankyou for the order. ')).toBeVisible();
    
        const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
        console.log(orderId);
        const raw = await page.getByText(/\|\s*[a-f0-9]{24}\s*\|/i).textContent();
        const orderIdShort = raw.replace(/\|/g, '').trim();
        console.log(orderIdShort);
        // go to ordersn
        await page.getByRole('listitem').getByRole('button', {name: 'ORDERS'}).click();
        await page.locator("tbody tr").filter({ hasText: orderIdShort }).getByRole('button', { name: 'View' }).click();
      
        
    });
    test('Check the displayed itesm on the page 22 ', async () => {

        const page = await webGlobalContex.newPage();
        await page.goto('https://rahulshettyacademy.com/client/');
        await page.locator(".card-body b").first().waitFor();

        const products = await page.locator('.card-body b').allTextContents();
        console.log(products);
        
    });