import { Then, When } from "@wdio/cucumber-framework";
import { assert } from "chai";

import JavaScriptAlertsPage from "../page-objects/javaScriptAlertsPage.js";
import { addDescription, addStep } from "@wdio/allure-reporter";

//to implement
addDescription("This test tries to click on alerts button and accept displayed alert.");

When(/^I open js alert$/, async () => {
  addStep("Opening JS alert", async () => {
    await JavaScriptAlertsPage.clickForJSAlertButton();
  });
});

When(/^I accept alert$/, async () => {
  addStep("Accepting JS alert", async () => {
    await JavaScriptAlertsPage.acceptJSAlert();
  });
});

Then(/^I should see message '(.*)'$/, async (resultMessage) => {
  addStep(`Expecting to see "${resultMessage}" text`, async () => {
    assert.strictEqual(
      await JavaScriptAlertsPage.getResultText(),
      resultMessage,
      "Result message is incorrect"
    );
  });
});
