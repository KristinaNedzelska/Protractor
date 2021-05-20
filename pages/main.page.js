let BasePage = require("../base/base.page");

let { WebButton } = require("../elements/button.element");
let { WebView } = require("../elements/view.element");

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
        return new WebView(element(baseElementLocator), "Main Page Base");
    }

    getLoginBtnElement() {
        return new WebButton (element(loginBtnLocator), "Login");
    }

}

module.exports = new MainPage();