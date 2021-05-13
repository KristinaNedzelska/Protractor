exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./spec/login.test.js'],
    SELENIUM_PROMISE_MANAGER: false,
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ["--window-size=1920,1080"]


        }
    },
    onPrepare() {
        browser.manage().timeouts().implicitlyWait(5000);
        browser.waitForAngularEnabled(false);

        let AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));


        jasmine.getEnv().afterEach(function (done) {
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });
        // console.log("testStarted")
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