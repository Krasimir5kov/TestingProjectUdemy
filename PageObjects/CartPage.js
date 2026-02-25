const {test,expect } = require ('@playwright/test');

class CartPage {
    constructor(page){
        this.page = page;
        this.cartProducts = page.locator("div li").first()
        this.productText = page.locator(".card-body b");   
        this.cartButton = page.getByRole("listitem").getByRole('button', { name: 'Cart' });
        this.checkOutButton = page.getByRole('button', { name: 'Checkout' });
        this.ordersButton = page.locator("button[routerlink*='myorders']");
    }
    async verifyProductisDisplayed(productName){
        await this.cartProducts.waitFor();
        const bool = await this.getProductLocator(productName);
        await bool.isVisible();
        expect(bool).toBeTruthy();
    }
    async CheckOut(){
        await this.checkOutButton.click();
    }   
    async getProductLocator(productName){
        return this.page.locator(".card-body").filter({ hasText: productName});
    }
}
module.exports = {CartPage};