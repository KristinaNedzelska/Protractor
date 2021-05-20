class WebElement {
    
    constructor(protractorElement, elementName) {
        this.protractorElement = protractorElement;
        this. elementName = elementName;
    }

    async click() {
        console.log(`Click on ${this,this.elementName}`);
        await this.protractorElement.click();
    }

    async waitForVisible(timeout = 15000) {
        await browser.wait(protractor.ExpectedConditions.visibilityOf(this.protractorElement), timeout);
    }

    async getText() {
        return await this.protractorElement.getText();
    }
}

module.exports = WebElement