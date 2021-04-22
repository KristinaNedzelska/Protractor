
let loginPage = require("../pages/login.page");
let mainPage = require("../pages/main.page");
let myaccountPage = require("../pages/myaccount.page");

describe('login', function () {

  it('negative login', async () => {
    await mainPage.open();
    await mainPage.waitForPageDisplayed();

    await mainPage.clickLogin();

    await loginPage.userLogin('zzzopik@i.ua', 'wrongpassword');

    expect(await loginPage.getErrorMessage().getText()).toBe("Authentication failed.");

  });

  it('successful login', async () => {
    await mainPage.open();
    await mainPage.waitForPageDisplayed();

    await mainPage.clickLogin();

    await loginPage.userLogin('zzzopik@i.ua', 'nexsyf');

   await expect(myaccountPage.getMyAccountTitleElement().getText()).toBe("MY ACCOUNT");

    await browser.sleep(5000);
  })

});