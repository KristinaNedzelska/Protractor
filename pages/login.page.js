
let BasePage = require("../base/base.page");

let emailInputLocator = by.xpath('//*[@id="email"]');
let passwordInputLocator = by.xpath('//*[@id="passwd"]');
let signInButtonLocator = by.xpath('//*[@id="SubmitLogin"]');

class LoginPage extends BasePage {

    async userLogin(email, passwd) {
        await this.getEmailImput().sendKeys(email);
        await this.getPasswordInput().sendKeys(passwd);
        await this.getSignInButton().click();
    }

    getBaseElement() {
        return element(emailInputLocator);
    };

    getEmailImput() {
        return element(emailInputLocator);
    };

    getPasswordInput() {
        return element(passwordInputLocator)
    };

    getSignInButton() {
        return element(signInButtonLocator)
    }

}

module.exports = new LoginPage();
