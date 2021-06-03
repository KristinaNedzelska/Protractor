let BasePage = require("../base/base.page");
let { WebInput } = require("../elements/input.element");
let { WebButton } = require("../elements/button.element");
let { DropDown } = require("../elements/dropdown.element");
let { WebView } = require("../elements/view.element");

let persFirstNameInputLocator = by.xpath('//*[@id="customer_firstname"]');
let persLastNameInputLocator = by.xpath('//*[@id="customer_lastname"]');
let persPasswordInputLocator = by.xpath('//*[@id="passwd"]');
let addrFirstNameInputLocator = by.xpath('//*[@id="firstname"]');
let addrLastNameInputLocator = by.xpath('//*[@id="lastname"]');
let addressInputLocator = by.xpath('//*[@id="address1"]');
let cityInputLocator = by.xpath('//*[@id="city"]');
let stateInputDropdown = by.xpath('//*[@id="id_state"]');
let zipInputLocator = by.xpath('//*[@id="postcode"]');
let countryDropdownLocator = by.xpath('//*[@id="id_country"]');
let mobileInputLocator = by.xpath('//*[@id="phone_mobile"]');
let aliasInputLoator = by.xpath('//*[@id="alias"]');
let registerButtonLocator = by.xpath('//*[@id="submitAccount"]');
let alertTextBoxLocator = by.css('.alert.alert-danger');



class CreateAccountPage extends BasePage {
    async fillPersonalInfo(firstN, lastN, pass) {
        await allure.createStep(`Register user ${firstN} / ${lastN} / ${pass}`, async () => {
            await this.getPersFirstNameInput().sendKeys(firstN);
            await this.getPersLastNameInput().sendKeys(lastN);
            await this.getPersPasswordInput().sendKeys(pass);
        })();
    }

    async fillAddressInfo(first, last, address, city, zip, mobile, assign) {
        await allure.createStep(`Fill Address ${first} / ${last} / ${address} / ${city} / ${zip} / ${mobile} / ${assign}`, async () => {
            await this.getAddrFirstNameInput().sendKeys(first);
            await this.getAddrLastNameInput().sendKeys(last);
            await this.getAddresInput().sendKeys(address);
            await this.getCityInput().sendKeys(city);
            await this.selectOptionFromStateDropDown('Texas');
            await this.getZipInput().sendKeys(zip);
            await this.selectOptionFromCountryDropDown('United States');
            await this.getMobileInput().sendKeys(mobile);
            await this.getAliasInput().sendKeys(assign);
            await this.getRegisterButton().click();
        })();
    }

    async selectOptionFromStateDropDown(state) {
        await this.getStateDropdown().selectOption(state);
    };

    async selectOptionFromCountryDropDown(country) {
        await this.getCountryDropdown().selectOption(country);
    };

    async getAccountpageAlert() {
        return await this.getAccountPageAlertTextBox().getText();
    };

    getPersFirstNameInput() {
        return new WebInput(element(persFirstNameInputLocator), "Personal First name");
    };

    getPersLastNameInput() {
        return new WebInput(element(persLastNameInputLocator), "Personal Last name");
    };

    getPersPasswordInput() {
        return new WebInput(element(persPasswordInputLocator), "Password");
    };

    getAddrFirstNameInput() {
        return new WebInput(element(addrFirstNameInputLocator), "Address First name");
    };

    getAddrLastNameInput() {
        return new WebInput(element(addrLastNameInputLocator), "Address Last name");
    };

    getAddresInput() {
        return new WebInput(element(addressInputLocator), "Address");
    };

    getCityInput() {
        return new WebInput(element(cityInputLocator), "City");
    };

    getStateDropdown() {
        return new DropDown(element(stateInputDropdown), "State Dropdown");
    };

    getZipInput() {
        return new WebInput(element(zipInputLocator), "Zip");
    }

    getCountryDropdown() {
        return new DropDown(element(countryDropdownLocator), "Country Dropdown");
    };

    getMobileInput() {
        return new WebInput(element(mobileInputLocator), "Mobile");
    };

    getAliasInput() {
        return new WebInput(element(aliasInputLoator), "Alias");
    };

    getRegisterButton() {
        return new WebButton(element(registerButtonLocator), "Register button");
    };

    getAccountPageAlertTextBox() {
        return new WebView(element(alertTextBoxLocator), "Error Message allert");
    };

    getBaseElement() {
        return new WebView(element(baseElementLocator), "Main Page Base");
    };
}


module.exports = new CreateAccountPage();