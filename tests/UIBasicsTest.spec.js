const {test, expect} = require('@playwright/test');
const { request } = require('node:http');
const { config } = require('node:process');

test.describe.serial('User creation + log in', () => {
    let registratedEmail = '';
    let passwordSaved = '';
    const passwrod = '12345@As';
    const emailAddress = 'dadada@abv.bg'
    
test('Browser Context playwright test ', async  ({page})=> {

  
    const userName = page.locator("#username");
    const signIn = page.locator("#signInBtn");
    const passWord = page.locator("[type='password']");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        console.log(await page.title());
    await userName.fill("rahulshetty");
    await passWord.fill("learning");
    const dropdown = page.locator("select.form-control");
    await dropdown.selectOption("consult");
    await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();
    await expect(page.locator(".radiotextsty").last()).toBeChecked();
    await expect(page.locator("#terms")).not.toBeChecked();

    await page.locator("#terms").click();
    await expect(page.locator("#terms")).toBeChecked();

    await page.locator("#terms").uncheck();
   await expect( page.locator("#terms")).not.toBeChecked();
   await expect(page.locator("[href*='documents']")).toHaveAttribute("class","blinkingText");
   

});
test('Child window handling', async ({browser})=> {
    const context = await browser.newContext();
    const page = await context.newPage();
    page.route('**/*.', route => route.abort()); //block css files       );
    const userName = page.locator("#username");
    const signIn = page.locator("#signInBtn");
    const passWord = page.locator("[type='password']");
    page.on('request' , request => console.log(request.url()));
    page.on('response' , response => console.log(response.url(), response.status()));
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink =  page.locator("[href*='documents']");
    const [newPage] = await Promise.all
    (
        [context.waitForEvent('page'),
        documentLink.click(),
    ])
     const text = await newPage.locator(".red").textContent();
     const email = text.split("@")[1].split(" ")[0];

    console.log(email);
    await page.locator("#username").fill(email);
    console.log(await page.locator("#username").inputValue());

});
test('First alone test , log in ', async ({page})=> {
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.locator("[class='login-wrapper-footer-text']").click();
    const firstName = await  page.locator('#firstName');
    const secondName = await  page.locator('#lastName');
    const emailAddress = await page.locator('#userEmail');
    const phoneNumebr = await page.locator("[id='userMobile']");
    passwordSaved = '22Kik22@';
    registratedEmail = 'krasim992a2as@abv.bg';
    await firstName.fill("92Ian522@");
    console.log(await firstName.inputValue());
    await secondName.fill("92Ian522@");
    console.log(await secondName.inputValue());
    await emailAddress.fill(registratedEmail);
    console.log(await emailAddress.inputValue());
    await phoneNumebr.fill("1234567891");
    console.log(await phoneNumebr.inputValue());
    
    const occuption = page.locator("select[formcontrolname='occupation']");
    await occuption.click();
    await occuption.selectOption({label : 'Doctor'});
    

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
    const expectedLoginMessage =  page.locator('[aria-label="Login Successfully"]');
    await expect(expectedLoginMessage).toBeVisible()
    await expect(expectedLoginMessage).toContainText("Login Successfully");

    console.log(await expectedLoginMessage.textContent());
});
test('Check the displayed itesm on the page', async ({page})=>{
   
   
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

    const passLocator = page.locator('#userPassword');
    const emailLocator = page.locator('#userEmail');

    await passLocator.fill(passwordSaved);
    await emailLocator.fill(registratedEmail);
    await page.locator('#login').click();
    const allItems = await page.locator('.card-body b');
    await expect(allItems).toHaveCount(3);
    console.log (await allItems.first().textContent());
    const displayAllItem = await allItems.allTextContents();
    console.log(displayAllItem);

});
test('Second test for log in', async ({page})=> { 
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
   
    await page.locator('#userEmail').fill(emailAddress);
    await page.locator('#userPassword').fill(passwrod);
    await page.locator('#Login').click();
    //await page.waitForLoadState('networkidle')
    const titles = await page.locator('.card-body b').allTextContents();
    console.log(titles)
});
});
test('test', async ({ page }) => {
  await page.goto('https://www.btv.bg/');
  await page.getByRole('button', { name: 'Давам съгласие' }).click();
  await page.locator('.search-box').click();
  await page.getByRole('textbox', { name: 'Търси в btv.bg...' }).click();
  await page.getByRole('textbox', { name: 'Търси в btv.bg...' }).fill('teses');
  await page.getByRole('textbox', { name: 'Търси в btv.bg...' }).press('Enter');
  await page.locator('#R2B2Generic300x300_outstreamDesktop_090937 iframe').contentFrame().locator('#cto_iframe_aee4ae02f7').contentFrame().locator('#close_button_svg').click();
  await page.getByRole('button', { name: 'X затвори' }).click();
  await page.getByRole('link', { name: 'Общи условия' }).click();
  await page.locator('.bweb-close-control').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Светът на здравето' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'Получаване на съгласие' }).click();
  await page1.locator('span').nth(2).click();
  await page1.getByRole('textbox', { name: 'Търси' }).first().click();
  await page1.getByRole('textbox', { name: 'Търси' }).first().fill('77');
  await page1.getByRole('textbox', { name: 'Търси' }).first().press('Enter');
});