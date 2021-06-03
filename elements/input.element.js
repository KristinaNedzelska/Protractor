let WebElement = require("../base/base.element");

class WebInput extends WebElement {

    async sendKeys(text) {
        console.log(`Sending keys "${text}" into ${this.elementName}`);
        this.protractorElement.sendKeys(text);
    }

    async clear() {
        await this.protractorElement.clear();
    }

}

module.exports = { WebInput };
