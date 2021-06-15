let BasePage = require("../base/base.page");

let { WebButton } = require("../elements/button.element");
let { WebView } = require("../elements/view.element");

let searchResultsTextBoxLocator = by.xpath('//*[@class="heading-counter"]');
let firstSearchResultBtn = by.css('.row > li:first-child h5 > a');
let baseElementLocator = by.xpath('//*[@class="navigation_page" and text()="Search"]');

class SearchResultsPage extends BasePage {

    async searchResults() {
        return await this.getsSearchResultsTextBox().getText();
    }

    async searchResultsCount() {
        let stringvalue = await this.searchResults();
        return parseInt(stringvalue, 10);
    }


    async selectFirstResult() {
        await this.getFirstSearchResultButton().click();
    }

    getsSearchResultsTextBox() {
        return new WebView(element(searchResultsTextBoxLocator), "Search results texbox");
    }

    getFirstSearchResultButton() {
        return new WebButton(element(firstSearchResultBtn), "First Search Resul");
    }

    getBaseElement() {
        return new WebView(element(baseElementLocator), "Search Result Page Base");
    }

}


module.exports = new SearchResultsPage();