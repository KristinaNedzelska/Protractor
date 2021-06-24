const { ElementArrayFinder, browser } = require("protractor");
let BasePage = require("../base/base.page");

let { WebButton } = require("../elements/button.element");
let { WebView } = require("../elements/view.element");
const { searchMain } = require("./main.page");

let searchResultsTextBoxLocator = by.xpath('//*[@class="heading-counter"]');
// let firstSearchResultBtn = by.css('.row > li:first-child h5 > a');
let SearchResultBtns = by.xpath('//div[@class = "product-container"]//a[@class = "product-name"]');
let baseElementLocator = by.xpath('//*[@class="navigation_page" and text()="Search"]');

class SearchResultsPage extends BasePage {

    async searchResults() {
        return await this.getsSearchResultsTextBox().getText();
    }

    async searchResultsCount() {
        let stringvalue = await this.searchResults();
        return parseInt(stringvalue, 10);
    }


    async selectSearchResultByIndex(index) {
        await this.getSearchResultByIndex(index).click();
    }

    getsSearchResultsTextBox() {
        return new WebView(element(searchResultsTextBoxLocator), "Search results texbox");
    }

    getSearchResultByIndex(index) {
        return new WebButton(element.all(SearchResultBtns).get(index - 1), "Search Result");
    }

    getBaseElement() {
        return new WebView(element(baseElementLocator), "Search Result Page Base");
    }

}


module.exports = new SearchResultsPage();