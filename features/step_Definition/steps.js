const { Given, When, Then } = require('@cucumber/cucumber')
//import { POManager } from '../../PageObjects_TS/POManager.ts';
const { POManager } = require('../../PageObjects/POManager');
const dataSet = JSON.parse(JSON.stringify(require("../../ApiUtilis/placeOrderTestDate.json")));
const { test, expect, playwright, chromium } = require('@playwright/test')

Given(`a login to Eccomerce app with {string} and {string}`, { timeout: 100 * 1000 }, async function (password, emailAddress) {


    this.email = password;
    const loginPage = this.poManager.getLoginPage();

    await loginPage.goTo();
    await loginPage.validLogin(password, emailAddress);
});

When('add {string} to cart', { timeout: 100 * 1000 }, async function (productName) {
    const dashBoardPage = this.poManager.getDashBoardPage();
    await dashBoardPage.searchProductandAddToCart(productName);
    await dashBoardPage.navigateToCart();

});

Then('Verify {string} is displayed in the cart page', { timeout: 100 * 1000 }, async function (productName) {
    const cartPage = this.poManager.getCartPage();
    await cartPage.verifyProductisDisplayed(productName);
    await cartPage.CheckOut();
});


When('Enter valida data {string} and {string} and place the order', { timeout: 100 * 1000 }, async function (countryFirstWords, countryFullName) {
    this.orderReviewPage = this.poManager.getOrderReviewPage();
    await this.orderReviewPage.searchForCounteryAndSelect(countryFirstWords, countryFullName);

    await this.orderReviewPage.verifyEmailId(this.email);
    const orderId = await this.orderReviewPage.submitAndGetOrder();
    console.log(orderId);
});


Then('Verify order is presented in order history', async function () {
    // Write code here that turns the phrase above into concrete actions
    this.orderIdTrimmed = await this.orderReviewPage.tripOrderId(this.orderId);
    console.log(this.orderIdTrimmed);
    this.OrderViewHistory = this.poManager.getOrderViewHistory(this.page, this.orderIdTrimmed);
    await this.OrderViewHistory.searchForOrderAndView(this.orderIdTrimmed);
    this.expectedOrderId = await this.OrderViewHistory.getOrderDetails();
    this.OrderLocator = await this.OrderViewHistory.getOrderLocator();
    await expect(this.OrderLocator).toBeVisible();
    await expect(this.expectedOrderId).toContain(this.expectedOrderId);
    await expect(this.page.getByText("Thank you for Shopping With Us")).toBeVisible();
    console.log(this.expectedOrderId);
});

Given('a login to Eccomerce2 app with {string} and {string}',async function (email, password) {
  this.userName = this.page.locator("#username");
    this.signIn = this.page.locator("#signInBtn");
    this.passWord = this.page.locator("[type='password']");
    await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await this.userName.fill(email);
    await this.passWord.fill(password);
   


});

Then('Verify Error message', async function () {
    this.signIn.click();
    expect(await this.page.locator("[style*='block']")).toContainText("Incorrect");
  
});