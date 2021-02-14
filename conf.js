// conf.js
exports.config = {
    framework: 'jasmine', //Type of Framework used 
    seleniumAddress: 'https://localhost:4444/wd/hub',
    specs: ['spec.js'], //Name of the Specfile
    directConnect: true,
    multiCapabilities: [
      {
      'browserName': 'chrome',
      'chromeOptions': {
        prefs: {
          'profile.managed_default_content_settings.notifictions': 1
        }
      }
    }
    ],
  } 