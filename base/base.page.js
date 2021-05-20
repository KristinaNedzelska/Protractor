class BasePage {

    async open(url) {
        await browser.get(url);
    }

    async waitForPageDisplayed() {
        await this.getBaseElement().waitForVisible();
    }

}

module.exports = BasePage;