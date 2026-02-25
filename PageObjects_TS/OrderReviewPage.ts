import {expect,Page,test , Locator} from '@playwright/test'
export class OrderReviewPage {
    page:Page
    country:Locator
    dropdownOption:Locator
    emailId:Locator
    submitOrderButton:Locator
    orderId:Locator
    constructor(page:Page){
        this.page = page;
        this.country = page.getByPlaceholder("Select Country");
        this.dropdownOption = page.locator(".ta-results");
        this.emailId = page.locator(".user__name [type='text']").first();
        this.submitOrderButton = page.getByText("PLACE ORDER");
        this.orderId = page.locator(".em-spacer-1 .ng-star-inserted");
    }
    async searchForCounteryAndSelect(countryFirstWords:string, countryFullName:string){
        await this.country.pressSequentially(countryFirstWords);
        await this.page.getByRole('button', { name: countryFullName }).click();
    }
    async verifyEmailId(expectedEmailId:string){
        await expect (this.emailId).toHaveText(expectedEmailId);
        
    }
    async submitAndGetOrder(){
        await this.submitOrderButton.click();
        await expect(this.page.getByText(' Thankyou for the order. ')).toBeVisible();
        return await this.orderId.textContent();

    }
    async tripOrderId(orderId:any){
        let raw = await this.orderId.textContent();
        return (raw || '').replace(/\|/g, '').trim();
    }

}
module.exports = {OrderReviewPage};