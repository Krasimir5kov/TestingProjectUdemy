const {test,expect,request} = require('@playwright/test');
const {APIUtils} = require('../ApiUtilis/APIUtilis');
const fakeRequestDate = {data:[],message:"No Orders"};
const { config } = require('node:process');

const loginPayLoad = {
    userEmail:"dadada@abv.bg",
    userPassword:"12345@As"};
const orderPyload = {
    orders:
    [{country:"Cuba",
        productOrderedId:"6960eae1c941646b7a8b3ed3"}]
    };
let response;
test.beforeAll(async ({}) => {
    const apiContext = await request.newContext();
    const apiUtiliss = new APIUtils(apiContext,loginPayLoad);
    response = await apiUtiliss.createOrder(orderPyload);
});
test("Test empyt state message on orders page with fake request data", async ({page}) => {
    //login via UI
    await page.addInitScript( value  => {
        window.localStorage.setItem('token', value );
    }, response.token );
    
    await page.goto('https://rahulshettyacademy.com/client');
    await page.route('**/api/ecom/order/get-orders-for-customer/*',async route => {
        const response = await page.request.fetch(route.request());
        let body = JSON.stringify(fakeRequestDate);

        await route.fulfill({
            response,
            body,
        });
    });
    await page.locator("button[routerlink='/dashboard/myorders']").click();
    await page.waitForResponse('**/api/ecom/order/get-orders-for-customer/*');
    console.log( await page.locator(".mt-4").textContent()
);

})
test("Test real data  orders page without fake request data", async ({page}) => {
    //login via UI
    await page.addInitScript( value => {
        window.localStorage.setItem('token', value );}, response.token);
    await page.goto('https://rahulshettyacademy.com/client/#/dashboard/dash');
    await page.locator("button[routerlink='/dashboard/myorders']").click();
    expect(page.getByText(response.orderId)).toBeVisible();
    console.log(await page.locator("tbody").allTextContents());
 
})