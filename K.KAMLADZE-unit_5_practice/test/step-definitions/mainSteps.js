import { Given } from "@wdio/cucumber-framework";

import Browser from "../../framework/browser/Browser.js";
import MainPage from "../page-objects/mainPage.js";
import { addOwner, addStep } from "@wdio/allure-reporter";

Given(/^I am on the '(.*)' page$/, async (page) => {
  addOwner("Koba Kamladze");
  addStep(`Navigate to ${page} page`, async () => {
    await Browser.openUrl("https://the-internet.herokuapp.com/");
    await MainPage.clickNavigationLink(page);
  });
});
