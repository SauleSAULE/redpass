exports.config = {
  specs: ["./test/specs/**/*.js"],
  exclude: [],
  maxInstances: 1,
  capabilities: [
    {
      maxInstances: 5,
      browserName: "chrome",
      acceptInsecureCerts: true,
      // "goog:chromeOptions": {
      //   args: [
      //     "--headless",
      //     "--disable-gpu",
      //     "--window-size=1440,735",
      //   ],
      // },
    },
    {
      browserName: "firefox"
    }
  ],
  logLevel: "warn",
  bail: 0,
  baseUrl: "https://the-internet.herokuapp.com/",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ["chromedriver", "geckodriver"],

  framework: "mocha",
  reporters: ["spec"],

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
