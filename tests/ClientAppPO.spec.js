
const { test, expect } = require('@playwright/test');
const { text } = require('node:stream/consumers');
//const { LoginPage } = require('../PageObjects/LoginPage');
const { log } = require('node:console');
//const { DashBoardPage } = require('../PageObjects/DashBoardPage');
const { POManager } = require('../PageObjects/POManager');
const { customerTestDate } = require('../ApiUtilis/test_data_fixture');
const { config } = require('node:process');
const dataSet = JSON.parse(JSON.stringify(require("../ApiUtilis/placeOrderTestDate.json")));

test.describe('@WEB Store credetianls after registration', () => {
    test.describe.configure({mode:"serial"});
   let registratedEmail = dataSet.registratedEmail;
   let passwordSaved = dataSet.passwordSaved;
    
   // let passwrod = dataSet.passwrod;
   // let emailAddress = dataSet.emailAddress;
    const expectedEmailAddress = 'dadada2@abv.bg';
    test('@WEB Registration step,and verify successfully login msg ', async ({ page }) => {
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
        await emailAddress.fill(dataSet.registratedEmail);
        console.log(await emailAddress.inputValue());
        await phoneNumebr.fill("1234567891");
        console.log(await phoneNumebr.inputValue());

        const occuption = page.locator("select[formcontrolname='occupation']");
        await occuption.click();
        await occuption.selectOption({ label: 'Doctor' });


        await page.locator("input[value='Male']").click();

        const firstEnteredPassword = await page.locator("input[id='userPassword']");
        await firstEnteredPassword.fill(dataSet.passwordSaved);
        console.log(await firstEnteredPassword.inputValue());

        const secondEnteredConfirmationPasswrod = await page.locator("input[id='confirmPassword']");
        await secondEnteredConfirmationPasswrod.fill(dataSet.passwordSaved);
        console.log(await secondEnteredConfirmationPasswrod.inputValue());

        //registratedEmail =  await page.locator('#userEmail').inputValue();
        //passwordSaved =  await page.locator("input[id='userPassword']").inputValue();

        await page.locator("input[type='checkbox']").click();
        await page.locator("#login").click();
        await expect(page.locator("h1[class='headcolor']")).toContainText('Account Created Successfully');
        // go back to log in 
        await page.locator("button[class*='btn']").click();
        await page.locator("#userEmail").fill(dataSet.registratedEmail);
        await page.locator('#userPassword').fill(dataSet.passwordSaved);
        await page.locator('#login').click();
        const expectedLoginMessage = page.locator('[aria-label="Login Successfully"]');
        await expect(expectedLoginMessage).toBeVisible()
        //  await expect(expectedLoginMessage).toContainText("Login Successfully");

        // console.log(await expectedLoginMessage.textContent());
    });
    test(`@WEB Check the displayed itesm on the page with user , IT SHOULD SKIP due to fail previous TEST `, async ({ page }) => {
        const poManager = new POManager(page);
        let productName = 'ZARA COAT 3';
        const products = page.locator('.card-body');
        const loginPage = poManager.getLoginPage();

        await loginPage.goTo();
        await loginPage.validLogin(dataSet.registratedEmail,dataSet.passwordSaved);
        const dashBoardPage = poManager.getDashBoardPage();
        await dashBoardPage.searchProductandAddToCart(productName);
        await dashBoardPage.navigateToCart();
        const cartPage = poManager.getCartPage();
        await cartPage.verifyProductisDisplayed(productName);
        //await page.locator("div li").first().waitFor();
        const countryFirstWords = "Bu";
        const countryFullName = "Bulgaria";
        //await expect(page.getByText('ZARA COAT 3')).toBeVisible();
        await cartPage.CheckOut();
        
        const orderReviewPage = poManager.getOrderReviewPage();
         await orderReviewPage.searchForCounteryAndSelect( countryFirstWords, countryFullName);

        await orderReviewPage.verifyEmailId(dataSet.registratedEmail);
        const orderId = await orderReviewPage.submitAndGetOrder();
        console.log(orderId);
        const orderIdTrimmed = await orderReviewPage.tripOrderId(orderId);
        console.log(orderIdTrimmed);
        const OrderViewHistory = poManager.getOrderViewHistory(page, orderIdTrimmed);
        await OrderViewHistory.searchForOrderAndView(orderIdTrimmed);
        const expectedOrderId = await OrderViewHistory.getOrderDetails();
        const OrderLocator = await OrderViewHistory.getOrderLocator();
        await expect(OrderLocator).toBeVisible();
        await expect(expectedOrderId).toContain(expectedOrderId);
        await expect(page.getByText("Thank you for Shopping With Us")).toBeVisible();
        console.log(expectedOrderId);
        // await page.getByRole('listitem').getByRole('button', { name: 'ORDERS' }).click();
       // await page.locator("tbody tr").filter({ hasText: orderIdTrimmed }).getByRole('button', { name: 'View' }).click();

    });
    /*for (const data of dataSet) {
    test.skip(`Check the displayed itesm on the page with user ${data.emailAddress} `, async ({ page }) => {
        const poManager = new POManager(page);
        let productName = 'ZARA COAT 3';
        const products = page.locator('.card-body');
        const loginPage = poManager.getLoginPage();

        await loginPage.goTo();
        await loginPage.validLogin(data.emailAddress,data.passwrod);

        //await loginPage.validLogin(registratedEmail, passwordSaved);

        // await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
        //await page.getByPlaceholder('email@example.com').fill(emailAddress);
        //await page.getByPlaceholder('enter your passsword').fill(passwrod);
        // await page.getByRole('button', {name: 'Login'}).click();

        // await page.waitForLoadState('networkidle');

        //await page.locator(".card-body b").first().waitFor();
        // await page.locator(".card-body").filter({ hasText: 'ZARA COAT 3'}).getByRole('button', { name: ' Add To Cart'}).click();
        const dashBoardPage = poManager.getDashBoardPage();
        await dashBoardPage.searchProductandAddToCart(productName);
        await dashBoardPage.navigateToCart();
        const cartPage = poManager.getCartPage();
        await cartPage.verifyProductisDisplayed(productName);
        //await page.locator("div li").first().waitFor();
        const countryFirstWords = "Bu";
        const countryFullName = "Bulgaria";
        //await expect(page.getByText('ZARA COAT 3')).toBeVisible();
        await cartPage.CheckOut();
        //await page.getByRole("listitem").getByRole('button', { name: 'Cart' }).click();
        const orderReviewPage = poManager.getOrderReviewPage();
        
       // await page.getByRole('button', { name: 'Checkout' }).click();
       await orderReviewPage.searchForCounteryAndSelect( countryFirstWords, countryFullName);
     
        //await page.getByPlaceholder("Select Country").pressSequentially("Bu");
        //await page.getByRole('button', { name: 'Bulgaria' }).click();
        await orderReviewPage.verifyEmailId(data.emailAddress);
        const orderId = await orderReviewPage.submitAndGetOrder();
        console.log(orderId);
        const orderIdTrimmed = await orderReviewPage.tripOrderId(orderId);
        console.log(orderIdTrimmed);
       // await expect(page.locator(".user__name [type='text']").first()).toHaveText(registratedEmail);
       // await page.getByText("PLACE ORDER").click();
       // await expect(page.getByText(' Thankyou for the order. ')).toBeVisible();

       // const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
       // console.log(orderId);
        //const raw = await page.getByText(/\|\s*[a-f0-9]{24}\s*\|/i).textContent();
       // const orderIdShort = raw.replace(/\|/g, '').trim();
       // console.log(orderIdShort);
        // go to ordersn
        const OrderViewHistory = poManager.getOrderViewHistory(page, orderIdTrimmed);
        await OrderViewHistory.searchForOrderAndView(orderIdTrimmed);
        const expectedOrderId = await OrderViewHistory.getOrderDetails();
        const OrderLocator = await OrderViewHistory.getOrderLocator();
        await expect(OrderLocator).toBeVisible();
        await expect(expectedOrderId).toContain(expectedOrderId);
        await expect(page.getByText("Thank you for Shopping With Us")).toBeVisible();
        console.log(expectedOrderId);
        // await page.getByRole('listitem').getByRole('button', { name: 'ORDERS' }).click();
       // await page.locator("tbody tr").filter({ hasText: orderIdTrimmed }).getByRole('button', { name: 'View' }).click();

    });
    
}*/
customerTestDate.skip(`Check the displayed items with derived data set from JSON as fixture `, async ({ page,storateDataFixture }) => {
        const poManager = new POManager(page);
        let productName = 'ZARA COAT 3';
        const products = page.locator('.card-body');
        const loginPage = poManager.getLoginPage();

        await loginPage.goTo();
        await loginPage.validLogin(storateDataFixture.emailAddress,storateDataFixture.passwrod);

        //await loginPage.validLogin(registratedEmail, passwordSaved);

        // await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
        //await page.getByPlaceholder('email@example.com').fill(emailAddress);
        //await page.getByPlaceholder('enter your passsword').fill(passwrod);
        // await page.getByRole('button', {name: 'Login'}).click();

        // await page.waitForLoadState('networkidle');

        //await page.locator(".card-body b").first().waitFor();
        // await page.locator(".card-body").filter({ hasText: 'ZARA COAT 3'}).getByRole('button', { name: ' Add To Cart'}).click();
        const dashBoardPage = poManager.getDashBoardPage();
        await dashBoardPage.searchProductandAddToCart(productName);
        await dashBoardPage.navigateToCart();
        const cartPage = poManager.getCartPage();
        await cartPage.verifyProductisDisplayed(productName);
        //await page.locator("div li").first().waitFor();
        const countryFirstWords = "Bu";
        const countryFullName = "Bulgaria";
        //await expect(page.getByText('ZARA COAT 3')).toBeVisible();
        await cartPage.CheckOut();
        //await page.getByRole("listitem").getByRole('button', { name: 'Cart' }).click();
        const orderReviewPage = poManager.getOrderReviewPage();
        
       // await page.getByRole('button', { name: 'Checkout' }).click();
       await orderReviewPage.searchForCounteryAndSelect( countryFirstWords, countryFullName);
     
        //await page.getByPlaceholder("Select Country").pressSequentially("Bu");
        //await page.getByRole('button', { name: 'Bulgaria' }).click();
        await orderReviewPage.verifyEmailId(storateDataFixture.emailAddress);
        const orderId = await orderReviewPage.submitAndGetOrder();
        console.log(orderId);
        const orderIdTrimmed = await orderReviewPage.tripOrderId(orderId);
        console.log(orderIdTrimmed);
       // await expect(page.locator(".user__name [type='text']").first()).toHaveText(registratedEmail);
       // await page.getByText("PLACE ORDER").click();
       // await expect(page.getByText(' Thankyou for the order. ')).toBeVisible();

       // const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
       // console.log(orderId);
        //const raw = await page.getByText(/\|\s*[a-f0-9]{24}\s*\|/i).textContent();
       // const orderIdShort = raw.replace(/\|/g, '').trim();
       // console.log(orderIdShort);
        // go to ordersn
        const OrderViewHistory = poManager.getOrderViewHistory(page, orderIdTrimmed);
        await OrderViewHistory.searchForOrderAndView(orderIdTrimmed);
        const expectedOrderId = await OrderViewHistory.getOrderDetails();
        const OrderLocator = await OrderViewHistory.getOrderLocator();
        await expect(OrderLocator).toBeVisible();
        await expect(expectedOrderId).toContain(expectedOrderId);
        await expect(page.getByText("Thank you for Shopping With Us")).toBeVisible();
        console.log(expectedOrderId);
        // await page.getByRole('listitem').getByRole('button', { name: 'ORDERS' }).click();
       // await page.locator("tbody tr").filter({ hasText: orderIdTrimmed }).getByRole('button', { name: 'View' }).click();

    });


});
/*{
    "passwrod": "12345@As",
    "emailAddress": "dadada@abv.bg",
    "productName": "ZARA COAT 3",
    "registratedEmail" : "ks99adsa12s@abv.bg",
    "passwordSaved" : "242ik2D2@"

    [{
    "emailAddress" : "ks99adsa12s@abv.bg",
    "passwrod" : "242ik2D2@"
}
,
{
    "passwrod": "12345@As",
    "emailAddress": "dadada@abv.bg"
}
]
*/