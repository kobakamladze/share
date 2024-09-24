import path from "node:path";
import fs from "fs-extra";
import * as os from "os";

export const downloadDir = path.resolve("./tmp");

export const mainConfig = {
  runner: "local",
  exclude: [],
  maxInstances: 1,
  logLevel: "warn",
  bail: 0,
  waitforTimeout: 0,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: "mocha",
  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
        reportedEnvironmentVars: {
          os_platform: os.platform(),
          os_release: os.release(),
          os_version: os.version(),
          node_version: process.version,
        },
      },
    ],
  ],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
  baseUrl: "https://www.accuweather.com/",

  before: async function () {
    await browser.maximizeWindow();
    await browser.url(this.baseUrl);
  },

  onPrepare: function () {
    fs.ensureDir(downloadDir);
  },

  after: function (result, capabilities, specs) {
    fs.emptyDir(downloadDir);
  },

  afterTest: async function (test, context, { error, result, duration, passed, retries }) {
    if (!passed) {
      await browser.takeScreenshot();
    }
  },
};
