let WebElement = require("../base/base.element");

let {WebButton} = require("../elements/button.element");

let itemLocator = by.xpath('//option[text()="VALUE"]');


class DropDown extends WebElement {

    async selectOption(optionName) {
        await this.click();

        let finalLocator = Object.assign(itemLocator, {});
        finalLocator.value = finalLocator.value.replace("VALUE", optionName)
        await new WebButton(element(finalLocator), `Option "${optionName}"`).click();
    }

}

module.exports = { DropDown };