// conf.js
exports.config = {
    framework: 'jasmine', //Type of Framework used 
    seleniumAddress: 'https://localhost:4444/wd/hub',
    specs: [
     // 'spec.js',
      'multipletestsspec.js'
    ], //Name of the Specfile

    directConnect: true,
    multiCapabilities: [
      {
      // browserName: 'firefox',
      'browserName': 'chrome',
      'chromeOptions': {
        prefs: {
          'profile.managed_default_content_settings.notifictions': 1
        }
      }
    }
    ],
  } 