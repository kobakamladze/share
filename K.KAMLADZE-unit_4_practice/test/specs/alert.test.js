import { assert } from "chai";

import herokuWelcomePage from "../pageObject/herokuWelcomePage.js";
import alertsPage from "../pageObject/alertsPage.js";
import AllureReporter from "@wdio/allure-reporter";

describe("Testing with Allure", () => {
  it("Alert test", async () => {
    AllureReporter.addStep(`Browser opening main page`);
    assert.isTrue(await herokuWelcomePage.isPageOpened(), "Failed to load Heroku's welcome page");

    AllureReporter.addStep("Navigate to alerts page");
    await herokuWelcomePage.navigateToAlertsPage();

    AllureReporter.addStep("Browser loading alerts page");
    assert.isTrue(await alertsPage.isPageOpened(), "Failed to load Alerts page");

    AllureReporter.addStep("Click to call alert window");
    await alertsPage.clickJSAlertButton();

    AllureReporter.addStep("Accepting alert");
    await alertsPage.acceptAlert();
  });
});
