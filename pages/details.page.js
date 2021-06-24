let BasePage = require("../base/base.page");

let { WebButton } = require("../elements/button.element");
const { WebInput } = require("../elements/input.element");
let { WebView } = require("../elements/view.element");

let ltemNameTexboxLocator = by.css('h1');
let backToSearchButtonLocator = by.css('[name=back]');


class DetailsPage extends BasePage {
    async getItemName() {
        return await this.getltemNameTexbox().getText();
    }

    getltemNameTexbox() {
        return new WebView(element(ltemNameTexboxLocator), "ltem Name Texbox");
    }

    getBaseElement() {
        return new BaseElement(element(backToSearchButtonLocator), "Back To Search  link");
    }
}

module.exports = new DetailsPage();