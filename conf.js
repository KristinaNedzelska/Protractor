exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ["--window-size=1920,1080"]
        }
    },
    onPrepare() {
        console.log("testStarted")
    },
    params: {
        login: {
            user: 'john',
            password: '1234'
        }
    }
}