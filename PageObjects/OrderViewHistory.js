const {expect,test } = require ('@playwright/test');
class OrderViewHistory{
    constructor(page){
        this.page = page;
        this.orderPageButton = page.getByRole('listitem').getByRole('button', { name: 'ORDERS' });
        this.orderRows = page.locator("tbody");
        this.CheckorderDetails = page.locator('.col-text');
       
    }
    async searchForOrderAndView(orderIdTrimmed){
        await this.orderPageButton.click();
        const row = this.page.locator(`tbody tr:has(th:has-text("${orderIdTrimmed}"))`);
        await expect(row, `Expected exactly one order with ID ${orderIdTrimmed}`).toHaveCount(1);
        await row.getByRole('button', { name: 'View' }).click();
    }
    async getOrderDetails(){
        return await this.CheckorderDetails.textContent();
    }
    async getOrderLocator(){
        return this.CheckorderDetails;
    }
}
module.exports = {OrderViewHistory};