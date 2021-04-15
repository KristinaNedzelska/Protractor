let BasePage = require("../base/base.page");

let baseElementLocator = by.css('#homepage-slider');
let loginBtnLocator = by.xpath('//a[@class="login"]');


class MainPage extends BasePage {

    async open() {
        super.open("http://automationpractice.com");
    }

    async clickLogin() {
        console.log("Navigate to login page");
        this.getLoginBtnElement().click();
    }

    getBaseElement() {
        return element(baseElementLocator);
    }

    getLoginBtnElement() {
        return element(loginBtnLocator);
    }

}

module.exports = new MainPage();