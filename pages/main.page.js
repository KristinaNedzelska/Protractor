let BasePage = require("../base/base.page");

let baseElementLocator = by.css('#homepage-slider');
let loginBtnLocator = by.xpath('//a[@class="login"]');


class MainPage extends BasePage {

    async open() {
        await super.open("http://automationpractice.com");
    }

    async clickLogin() {
        await allure.createStep(`Navigate to login page`, async () =>{
        console.log("Navigate to login page");
        await this.getLoginBtnElement().click();
    })();
}

    getBaseElement() {
        return element(baseElementLocator);
    }

    getLoginBtnElement() {
        return element(loginBtnLocator);
    }

}

module.exports = new MainPage();