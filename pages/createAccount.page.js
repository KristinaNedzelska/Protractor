let BasePage = require("../base/base.page");
let {WebInput} = require("../elements/input.element");
let {WebButton} = require("../elements/button.element");
let {WebView} = require("../elements/view.element");

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
            await this.selectOptionFromStateDropDown(this.getStateDropdown(), 'Texas');
            await this.getZipInput().sendKeys(zip);
            //await this.selectOptionFromCountryDropDown('United States');
            await this.getMobileInput().sendKeys(mobile);
            await browser.sleep(10000);
            await this.getAliasInput().sendKeys(assign);
            await this.getRegisterButton().click();
            await browser.sleep(10000);
        })();
    }

    getPersFirstNameInput() {
        return new WebInput(element(persFirstNameInputLocator),"Personal First name");
    };

    getPersLastNameInput() {
        return new WebInput(element(persLastNameInputLocator),"Personal Last name");
    };

    getPersPasswordInput() {
        return new WebInput(element(persPasswordInputLocator),"Password");
    };

    getAddrFirstNameInput() {
        return new WebInput(element(addrFirstNameInputLocator),"Address First name");
    };

    getAddrLastNameInput() {
        return new WebInput(element(addrLastNameInputLocator),"Address Last name");
    };

    getAddresInput() {
        return new WebInput(element(addressInputLocator), "Address");
    };

    getCityInput() {
        return new WebInput(element(cityInputLocator),"City");
    };

    getStateDropdown() {
        return element(stateInputDropdown);
    };

    selectOptionFromStateDropDown = async text => {
        await this.getStateDropdown().click();
        let select = element(by.xpath('//*[@id="id_state"]'));
        select.$('[value="43"]').click();
        await browser.sleep(5000);
        //await element(`//*[@id="id_state"]/option[text()="${text}"]`).click();
    };

    getZipInput() {
        return new WebInput(element(zipInputLocator),"Zip");
    }

    getCountryDropdown() {
        return element(countryDropdownLocator);
    };

    selectOptionFromCountryDropDown = async text => {
        await this.getCountryDropdown().click();
        element(`//*[@id="id_country"]/option[text()="${text}"]`).click();
    };

    getMobileInput() {
        return new WebInput(element(mobileInputLocator), "Mobile");
    };

    getAliasInput() {
        return new WebInput(element(aliasInputLoator),"Alias");
    };

    getRegisterButton() {
        return new WebButton(element(registerButtonLocator),"Register button");
    };
}


module.exports = new CreateAccountPage();