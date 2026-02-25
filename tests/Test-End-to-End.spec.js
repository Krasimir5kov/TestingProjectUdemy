const { test, expect } = require('@playwright/test');
const { text } = require('node:stream/consumers');
const { config } = require('node:process');

test.describe('Store credetianls after registration', () => {
    let registratedEmail = 'ks92adsass@abv.bg';
    let passwordSaved = '22Kik22@';
    const passwrod = '12345@As';
    const emailAddress = 'dadada@abv.bg';
    const expectedEmailAddress = 'dadada2@abv.bg';
    test('Registration step,and verify successfully login msg ', async ({ page }) => {
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

        const passLocator = page.locator('#userPassword');
        const emailLocator = page.locator('#userEmail');
        const productName = 'ZARA COAT 3';
        const products = page.locator('.card-body');
        await passLocator.fill(passwrod);
        await emailLocator.fill(emailAddress);
        await page.locator('#login').click();
        await page.waitForLoadState('networkidle');
        await page.locator(".card-body b").first().waitFor();
        const titles = await page.locator('.card-body b').allTextContents();
        console.log(titles);
      
        const count = await products.count();
        await expect(products).toHaveCount(3);

        for (let i = 0; i < count; ++i) {
            if (await products.nth(i).locator("b").textContent() === productName) {
                await products.nth(i).locator('text= Add To Cart').click();
                break;
            }
        }
        await page.locator("[routerlink*='cart']").click();
        await page.locator("div li").first().waitFor();
        const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
        expect(bool).toBeTruthy();
        await page.locator("text=Checkout").click();
        await page.locator("[placeholder*='Country']").pressSequentially("Bu");
        const options = page.locator('.ta-results');
        await options.waitFor();
        const optionsCount = await options.locator('button').count();
        for (let i = 0; i < optionsCount; ++i) {
           const text = await options.locator('button').nth(i).textContent();
            if (text === " Bulgaria") {
                await options.locator("button").nth(i).click();
                break;
            }
        }
        await expect(page.locator(".user__name [type='text']").first()).toHaveText(emailAddress);
        await page.locator(".action__submit").click();
        await expect(page.locator("h1:has-text(' Thankyou for the order. ')")).toBeVisible();
         await expect(page.locator(".hero-primary")).toHaveText(' Thankyou for the order. ');
        const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
        console.log(orderId);
        // go to orders
        await page.locator("button[routerlink*='myorders']").click();
        const orders = page.locator("tbody tr");
        const ordersCount = await orders.count();
        for (let i=0; i< ordersCount; i++){
            const orderidListed = await orders.nth(i).locator('th').textContent();
            if (orderId.includes(orderidListed)){
                await orders.nth(i).locator("button[class*='btn-primary']").click();
                break;
            }
            
        }
        page.pause();
    });


});
