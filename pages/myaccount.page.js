let BasePage = require("../base/base.page");

let myAccountTitleLocator = by.xpath('//*[@id="center_column"]/h1[text()=\'My account\']');

class MyAccountPage extends BasePage {

    async getAccountTitle() {
        await this.myAccountTitle().getText();
    }
    myAccountTitle() {
        return element(myAccountTitleLocator)
    }

}

module.exports = new MyAccountPage();
