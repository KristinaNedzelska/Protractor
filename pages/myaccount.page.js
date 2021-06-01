let BasePage = require("../base/base.page");
let { WebView } = require("../elements/view.element");

let myAccountTitleLocator = by.xpath('//*[@id="center_column"]/h1[text()=\'My account\']');

class MyAccountPage extends BasePage {

    getMyAccountTitleElement() {
        return new WebView(element(myAccountTitleLocator), "My account titile element");
    };

    getBaseElement() {
        return new WebView(element(baseElementLocator), "Main Page Base");
    };

}

module.exports = new MyAccountPage();
