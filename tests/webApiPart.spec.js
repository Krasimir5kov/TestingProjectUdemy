const {test,expect,request} = require('@playwright/test');
const {APIUtils} = require('../ApiUtilis/APIUtilis');
const { config } = require('node:process');

const loginPayLoad = {
    userEmail:"dadada@abv.bg",
    userPassword:"12345@As"
};
const orderPyload = {
    orders:
    [{country:"Cuba",
        productOrderedId:"6960eae1c941646b7a8b3ed3"}]
}
let response;
//test.skip.beforeAll( async () => {
   // const apiContext = await request.newContext();
   // const apiUtiliss = new APIUtils(apiContext,loginPayLoad);
  ///  response = await apiUtiliss.createOrder(orderPyload);

    
//});  


   
test('@API Registration step,and verify successfully login msg ', async ({ page }) => {
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
test('@API Check the displayed itesm on the page ', async ({ page }) => {
    
        await page.addInitScript( value => {
            window.localStorage.setItem('token', value);
        }, response.token);
        await page.goto('https://rahulshettyacademy.com/client/');

        // go to orders
        await page.locator("button[routerlink*='myorders']").click();
        const orderss = page.locator("tbody tr");
        const ordersCount = await orderss.count();
        for (let i=0; i< ordersCount; i++){
            const orderidListed = await orderss.nth(i).locator('th').textContent();
            if (response.orderId.includes(orderidListed)){
                await orderss.nth(i).locator("button[class*='btn-primary']").click();
                console.log("order found");
                console.log(response.orderId);
                break;
            } else {
                console.log("order not found");
            }
            const orderIdDetails = await page.locator(".col-text").textContent();
            expect(response.orderId.includes(orderIdDetails)).toBeTruthy();
        }
    });
    /*let registratedEmail = 'ks92adsass@abv.bg';
    let passwordSaved = '22Kik22@';
    const passwrod = '12345@As';
    const emailAddress = 'dadada@abv.bg';
    const expectedEmailAddress = 'dadada2@abv.bg';*/