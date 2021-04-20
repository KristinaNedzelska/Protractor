
let loginPage = require("../pages/login.page");
let mainPage = require("../pages/main.page");
let myaccountPage = require("../pages/myaccount.page");

describe('successful login', function () {
  it('site opened', async () => {
    await mainPage.open();
    await mainPage.waitForPageDisplayed();

    await mainPage.clickLogin();

    // <- move to login page PageObject
    //await element(by.xpath('//*[@id="email"]')).sendKeys('zzzopik@i.ua');
    //await element(by.xpath('//*[@id="passwd"]')).sendKeys('nexsyf');
    //await element(by.xpath('//*[@id="SubmitLogin"]')).click();
    //
    await loginPage.waitForPageDisplayed();
    await loginPage.userLogin('zzzopik@i.ua', 'nexsyf');

    // <- create my account page PageObject
    // <- add check that my account page opened after login
    await myaccountPage.getAccountTitle();

    await browser.sleep(5000);
  });
});