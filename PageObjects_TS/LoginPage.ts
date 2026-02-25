import { Locator, Page } from "@playwright/test";

export class LoginPage {
    page:Page
    signInButton: Locator
    userPassword: Locator
    emailField: Locator
    constructor(page:Page) {
        this.page = page;
        this.signInButton = page.locator('#login');
        this.userPassword = page.getByPlaceholder('enter your passsword');
        this.emailField = page.getByPlaceholder('email@example.com');
    }


    async goTo() {
        await this.page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    }
    async validLogin(emailAddress:string, passsword:string) {
        await this.emailField.fill(emailAddress);
        await this.userPassword.fill(passsword);
        await this.signInButton.click();
        await this.page.waitForLoadState('networkidle');
    }
}
module.exports = { LoginPage };
