
const { element, by } = require("protractor");
let BasePage = require("../base/base.page");

let emailInputLocator = by.xpath('//*[@id="email"]');
let passwordInputLocator = by.xpath('//*[@id="passwd"]');
let signInButtonLocator = by.xpath('//*[@id="SubmitLogin"]');
let errorMessageLocator = by.xpath('//*[@id="center_column"]/div[1]/ol/li[text()=\'Authentication failed.\']');

class LoginPage extends BasePage {

    async userLogin(email, passwd) {
        await this.getEmailImput().sendKeys(email);
        await this.getPasswordInput().sendKeys(passwd);
        await this.getSignInButton().click();
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
    }

}

module.exports = new LoginPage();
