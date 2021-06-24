let BasePage = require("../base/base.page");

let { WebButton } = require("../elements/button.element");
let { WebInput } = require("../elements/input.element");
let { WebView } = require("../elements/view.element");

let baseElementLocator = by.css('#homepage-slider');
let loginBtnLocator = by.xpath('//a[@class="login"]');
let searchMainLocator = by.xpath('//*[@id="search_query_top"]');
let submitSearchBtnLocator = by.xpath('//*[@id="searchbox"]/button');

class MainPage extends BasePage {

    async open() {
        await super.open("http://automationpractice.com");
    }

    async clickLogin() {
        await allure.createStep(`Navigate to login page`, async () => {
            console.log("Navigate to login page");
            await this.getLoginBtnElement().click();
        })();
    }

    async searchMain(text) {
        await allure.createStep('Search on Main page', async () => {
            console.log("Search on Main Page");
            await this.getSearchInput().sendKeys(text);
            await this.getSubmitSearchButton().click();

        })();
    }


    getBaseElement() {
        return new WebView(element(baseElementLocator), "Main Page Base");
    }

    getLoginBtnElement() {
        return new WebButton(element(loginBtnLocator), "Login");
    }

    getSearchInput() {
        return new WebInput(element(searchMainLocator), "Search Input");
    }

    getSubmitSearchButton() {
        return new WebButton(element(submitSearchBtnLocator), "Submit Search Button");
    }

}

module.exports = new MainPage();