exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
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
    params: {
        login: {
           user: 'john',
            password: '1234'
       }
   }
}