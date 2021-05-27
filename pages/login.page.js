
let BasePage = require("../base/base.page");
let {WebInput} = require("../elements/input.element");
let {WebButton} = require("../elements/button.element");
let {WebView} = require("../elements/view.element");
 
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
        return new WebInput (element(emailInputLocator), "Email input");
    };

    getPasswordInput() {
        return new WebInput(element(passwordInputLocator), "Password input");
    };

    getSignInButton() {
        return new WebButton(element(signInButtonLocator), "SignIn button");
    };

    getErrorMessage() {
        return new WebView(element(errorMessageLocator), "Error message");
    };

    getEmailCreateInput() {
        return new WebInput(element(emailCreateInputLocator), "Email create input");
    };

    getCreateAnAccountButton() {
        return new WebButton(element(createAnAccountButtonLocator), "Create an account button");
    };

}

module.exports = new LoginPage();
