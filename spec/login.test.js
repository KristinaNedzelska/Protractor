let mainPage = require("../pages/main.page");

describe('successful login', function () {
  it('site opened', async () => {
    await mainPage.open();
    await mainPage.waitForPageDisplayed();
    
    await mainPage.clickLogin();

    // <- move to login page PageObject
    await element(by.xpath('//*[@id="email"]')).sendKeys('zzzopik@i.ua');
    await element(by.xpath('//*[@id="passwd"]')).sendKeys('nexsyf');
    await element(by.xpath('//*[@id="SubmitLogin"]')).click();
    //

    // <- create my account page PageObject
    // <- add check that my account page opened after login


    await browser.sleep(5000);
  });
});