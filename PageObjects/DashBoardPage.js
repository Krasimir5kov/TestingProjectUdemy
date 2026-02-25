
class DashBoardPage {
    constructor(page) {
        this.page = page;
        this.products = page.locator('.card-body');
        this.ProductsText = page.locator('.card-body b');
        this.CartPage = page.locator('[routerlink*="cart"]');
        this.addButton = page.locator(this.products);


    }
    async searchProductandAddToCart(productName) {
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
