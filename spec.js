const test = require('./conf.js');


describe('successful login', function () {
  it('site opened', async () => {
    await browser.get('http://automationpractice.com');
    
    await element(by.xpath('//a[@class="login"]')).click();

    await element(by.xpath('//*[@id="email"]')).sendKeys('zzzopik@i.ua');
    await element(by.xpath('//*[@id="passwd"]')).sendKeys('nexsyf');

    await element(by.xpath('//*[@id="SubmitLogin"]')).click();
    await browser.sleep(5000);
  });
});