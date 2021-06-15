let BasePage = require("../base/base.page");

let { WebButton } = require("../elements/button.element");
let { WebView } = require("../elements/view.element");

let searchResultsTextBoxLocator = by.xpath('//*[@id="center_column"]/h1/span[2]');
let firstSearchResultBtn = by.css('.product_list.row > li:nth-child(1) h5 > a');
let baseElementLocator = by.xpath('//*[@id="columns"]/div[1]/span[2]');

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