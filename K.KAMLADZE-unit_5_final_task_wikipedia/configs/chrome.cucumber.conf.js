import { downloadDir, mainConfig } from "../framework/configs/main.wdio.conf.js";

export const config = {
  ...mainConfig,
  ...{
    framework: "cucumber",
    cucumberOpts: {
      require: ["./test/step-definitions/**/*.js"],
      strict: true,
    },
    specs: ["../test/features/**/*.feature"],
    capabilities: [
      {
        browserName: "chrome",
        "goog:chromeOptions": {
          prefs: {
            "download.default_directory": downloadDir,
          },
          args: ["headless", "--headless", "disable-gpu"],
        },
      },
    ],
  },
};
