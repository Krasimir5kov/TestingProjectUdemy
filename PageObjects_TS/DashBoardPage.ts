import { Locator, Page } from "@playwright/test";

export class DashBoardPage {
    page:Page
    products: any
    ProductsText: Locator
    CartPage: Locator
    addButton: Locator
    constructor(page:Page) {
        this.page = page;
        this.products = page.locator('.card-body');
        this.ProductsText = page.locator('.card-body b');
        this.CartPage = page.locator('[routerlink*="cart"]');
        this.addButton = page.locator(this.products);


    }
    async searchProductandAddToCart(productName:string) {
        await this.ProductsText.first().waitFor();
        await this.products.filter({ hasText: productName}).getByRole('button', { name: ' Add To Cart'}).click();
       // await this.addButton.filter({ hasText: productName }).getByRole('button', { name: ' Add To Cart' }).click();
    }
    async navigateToCart() {
        await this.CartPage.click();
    }
}
module.exports = { DashBoardPage };
        // await page.locator(".card-body").filter({ hasText: 'ZARA COAT 3'}).getByRole('button', { name: ' Add To Cart'}).click();
