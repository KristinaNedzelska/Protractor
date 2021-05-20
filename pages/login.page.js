
let BasePage = require("../base/base.page");

let emailInputLocator = by.xpath('//*[@id="email"]');
let passwordInputLocator = by.xpath('//*[@id="passwd"]');
let signInButtonLocator = by.xpath('//*[@id="SubmitLogin"]');
let errorMessageLocator = by.xpath('//*[@id="center_column"]/div[1]/ol/li[text()=\'Authentication failed.\']');
let emailCreateInputLocator = by.xpath('//*[@id="email_create"]');
let createAnAccountButtonLocator = by.xpath('//*[@id="SubmitCreate"]/span');


class LoginPage extends BasePage {

    async userLogin(email, passwd) {
        await allure.createStep(`Login with ${email} / ${passwd}`, async () => {
            await this.getEmailImput().sendKeys(email);
            await this.getPasswordInput().sendKeys(passwd);
            await this.getSignInButton().click();
        })();
    }

    async createAccount(email1) {
        await allure.createStep(`Create an account ${email1}`, async () => {
            await this.getEmailCreateInput().sendKeys(email1);
            await this.getCreateAnAccountButton().click();
        })();
    }

    getEmailImput() {
        return element(emailInputLocator);
    };

    getPasswordInput() {
        return element(passwordInputLocator);
    };

    getSignInButton() {
        return element(signInButtonLocator);
    };

    getErrorMessage() {
        return element(errorMessageLocator);
    };

    getEmailCreateInput() {
        return element(emailCreateInputLocator);
    };

    getCreateAnAccountButton() {
        return element(createAnAccountButtonLocator);
    };

}

module.exports = new LoginPage();
