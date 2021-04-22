exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./spec/login.test.js'],
    SELENIUM_PROMISE_MANAGER: false,
    capabilities: {
        browserName: 'chrome',
          chromeOptions: {
            args: [ "--window-size=1920,1080"]
     
     
       }
    },
    onPrepare() {
        browser.manage().timeouts().implicitlyWait(5000);
        browser.waitForAngularEnabled(false);
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