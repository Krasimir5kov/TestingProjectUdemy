const { test, expect } = require('@playwright/test');
const { text } = require('node:stream/consumers');
const { config } = require('node:process');

test('Store credetianls after registration', () => {
    let registratedEmail = 'ks92adsass@abv.bg';
    let passwordSaved = '22Kik22@';
    const passwrod = '12345@As';
    const emailAddress = 'dadada@abv.bg';
    const expectedEmailAddress = 'dadada2@abv.bg';
    test.skip('Registration step,and verify successfully login msg ', async ({ page }) => {
        await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
        await page.locator("[class='login-wrapper-footer-text']").click();
        const firstName = await page.locator('#firstName');
        const secondName = await page.locator('#lastName');
        const emailAddress = await page.locator('#userEmail');
        const phoneNumebr = await page.locator("[id='userMobile']");
      //  passwordSaved = '22Kik22@';
      //  registratedEmail = 'kras92a2as@abv.bg';
        await firstName.fill("92In522@");
        console.log(await firstName.inputValue());
        await secondName.fill("92In522@");
        console.log(await secondName.inputValue());
        await emailAddress.fill(registratedEmail);
        console.log(await emailAddress.inputValue());
        await phoneNumebr.fill("1234567891");
        console.log(await phoneNumebr.inputValue());

        const occuption = page.locator("select[formcontrolname='occupation']");
        await occuption.click();
        await occuption.selectOption({ label: 'Doctor' });


        await page.locator("input[value='Male']").click();

        const firstEnteredPassword = await page.locator("input[id='userPassword']");
        await firstEnteredPassword.fill(passwordSaved);
        console.log(await firstEnteredPassword.inputValue());

        const secondEnteredConfirmationPasswrod = await page.locator("input[id='confirmPassword']");
        await secondEnteredConfirmationPasswrod.fill(passwordSaved);
        console.log(await secondEnteredConfirmationPasswrod.inputValue());

        //registratedEmail =  await page.locator('#userEmail').inputValue();
        //passwordSaved =  await page.locator("input[id='userPassword']").inputValue();

        await page.locator("input[type='checkbox']").click();
        await page.locator("#login").click();
        await expect(page.locator("h1[class='headcolor']")).toContainText('Account Created Successfully');
        // go back to log in 
        await page.locator("button[class*='btn']").click();
        await page.locator("#userEmail").fill(registratedEmail);
        await page.locator('#userPassword').fill(passwordSaved);
        await page.locator('#login').click();
        const expectedLoginMessage = page.locator('[aria-label="Login Successfully"]');
        await expect(expectedLoginMessage).toBeVisible()
      //  await expect(expectedLoginMessage).toContainText("Login Successfully");

       // console.log(await expectedLoginMessage.textContent());
    });
    test('Check the displayed itesm on the page ', async ({ page }) => {


        await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

        await page.getByPlaceholder('email@example.com').fill(emailAddress);
        await page.getByPlaceholder('enter your passsword').fill(passwrod);
        const productName = 'ZARA COAT 3';
        const products = page.locator('.card-body');
       
        await page.getByRole('button', {name: 'Login'}).click();
        await page.waitForLoadState('networkidle');
        await page.locator(".card-body b").first().waitFor();
        await page.locator(".card-body").filter({ hasText: 'ZARA COAT 3'}).getByRole('button', { name: ' Add To Cart'}).click();
       await page.locator("div li").first().waitFor();
        
        await expect(page.getByText('ZARA COAT 3')).toBeVisible();
        await page.getByRole("listitem").getByRole('button', {name: 'Cart'}).click();

        await page.getByRole('button', {name: 'Checkout'}).click();
        await page.getByPlaceholder("Select Country").pressSequentially("Bu");
        await page.getByRole('button',{name: 'Bulgaria'}).click();
        
        await expect(page.locator(".user__name [type='text']").first()).toHaveText(emailAddress);
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
      
        page.pause();
    });


});
