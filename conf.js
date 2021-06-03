exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./spec/createAccountNegative.test.js'],
    SELENIUM_PROMISE_MANAGER: false,
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ["--window-size=1920,1080"]


        }
    },
    onPrepare: async function () {
        beforeEach(async function () {
            browser.waitForAngularEnabled(false);
            browser.manage().timeouts().implicitlyWait(2000);
        });

        let AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));

        jasmine.getEnv().afterEach(async function () {
            await createScreenshotAllure();
            //await browser.restart();
        });
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 90000
    },
    params: {
        login: {
            user: 'john',
            password: '1234'
        }
    }
}
async function createScreenshotAllure() {
    let screenshotFile = await browser.takeScreenshot();
    await allure.createAttachment("Screenshot", () => {
        return new Buffer.from(screenshotFile, "base64")
    }, 'image/png')();
}