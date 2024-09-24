import { Given } from "@wdio/cucumber-framework";
import { assert } from "chai";

import MainPage from "../page-objects/mainPage.js";
import Browser from "../../framework/browser/Browser.js";
import { baseUrl } from "../../framework/configs/main.wdio.conf.js";

Given(/^I am on the Main page$/, async () => {
  await Browser.openUrl(baseUrl);

  console.log("===============================");
  // eslint-disable-next-line no-undef
  console.log(process.env.Char);

  assert.isTrue(await MainPage.isPageOpened(), "Main page was not opened correctly");
});
