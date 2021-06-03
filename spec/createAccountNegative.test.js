let mainPage = require("../pages/main.page.js");
let loginPage = require("../pages/login.page");
let createAccountPage = require("../pages/createAccount.page");
let randomstring = require('randomstring');

let mail = randomstring.generate(3);

describe('Create Account', () => {
    it('Negative', async () => {
        await mainPage.open();
        await mainPage.clickLogin();
        await loginPage.createAccount('zzzopik@i.ua');
        await loginPage.waitForCreateAccountError();
        expect(await loginPage.getErrorMessageAccount()).toContain("An account using this email address has already been registered. Please enter a valid password or request a new one.");

        await loginPage.clearEmailAccount();
        await loginPage.createAccount(`test${mail}@gmail.com`);;
        await createAccountPage.fillPersonalInfo('Kris', 'Rock', '1234567');
        await createAccountPage.fillAddressInfo('Kris', 'Rock', 'Washington Street', 'Raynham', '789', '2814856777', 'My address');
        expect(await createAccountPage.getAccountpageAlert()).toContain("The Zip/Postal code you've entered is invalid");
    });
});