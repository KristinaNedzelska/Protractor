class BasePage {

    async open(url) {
        await browser.get(url);
    }

    async waitForPageDisplayed() {
        await browser.wait(protractor.ExpectedConditions.visibilityOf(this.getBaseElement()), 15000);
    }

}

module.exports = BasePage;