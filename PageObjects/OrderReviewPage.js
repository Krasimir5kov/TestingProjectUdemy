const {expect,test,page } = require ('@playwright/test');
class OrderReviewPage {
    constructor(page){
        this.page = page;
        this.country = page.getByPlaceholder("Select Country");
        this.dropdownOption = page.locator(".ta-results");
        this.emailId = page.locator(".user__name [type='text']").first();
        this.submitOrderButton = page.getByText("PLACE ORDER");
        this.orderId = page.locator(".em-spacer-1 .ng-star-inserted");
    }
    async searchForCounteryAndSelect(countryFirstWords, countryFullName){
        await this.country.pressSequentially(countryFirstWords);
        await this.page.getByRole('Button', { name: countryFullName }).click();
    }
    async verifyEmailId(expectedEmailId){
        await expect (this.emailId).toHaveText(expectedEmailId);
        
    }
    async submitAndGetOrder(){
        await this.submitOrderButton.click();
        await expect(this.page.getByText(' Thankyou for the order. ')).toBeVisible();
        return await this.orderId.textContent();

    }
    async tripOrderId(orderId){
        const raw = await this.orderId.textContent();
        return raw.replace(/\|/g, '').trim();
    }

}
module.exports = {OrderReviewPage};