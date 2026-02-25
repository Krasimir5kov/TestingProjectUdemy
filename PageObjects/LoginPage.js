class LoginPage {
    constructor(page) {
        this.page = page;
        this.signInButton = page.locator('#login');
        this.userPassword = page.getByPlaceholder('enter your passsword');
        this.emailField = page.getByPlaceholder('email@example.com');
    }


    async goTo() {
        await this.page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    }
    async validLogin(emailAddress, passsword) {
        await this.emailField.fill(emailAddress);
        await this.userPassword.fill(passsword);
        await this.signInButton.click();
        await this.page.waitForLoadState('networkidle');
    }
}
module.exports = { LoginPage };
