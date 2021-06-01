let mainPage = require("../pages/main.page.js");
let loginPage = require("../pages/login.page");
let createAccountPage = require("../pages/createAccount.page");
let myaccountPage = require("../pages/myaccount.page");
let randomstring = require('randomstring');

let mail = randomstring.generate(5);


fdescribe('createNewAccount', function () {

    it('Register user', async () => {
        await mainPage.open();
        await mainPage.waitForPageDisplayed();
        await mainPage.clickLogin();
        await loginPage.createAccount(`test${mail}@i.ua`);;
        await createAccountPage.fillPersonalInfo('Kris', 'Rock', '1234567');
        await createAccountPage.fillAddressInfo('Kris', 'Rock', 'Washington Street', 'Raynham', '12067', '2814856777', 'My address');
        expect(await myaccountPage.getMyAccountTitleElement().getText()).toBe("MY ACCOUNT");
    })

});