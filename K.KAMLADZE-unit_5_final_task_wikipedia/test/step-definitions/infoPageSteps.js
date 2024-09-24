import { assert } from "chai";
import { Then } from "@wdio/cucumber-framework";

import SearchResultPage from "../page-objects/searchResultPage.js";
import InformationPage from "../page-objects/informationPage.js";

Then(/^I can see article page for (.*)$/, async (searchText) => {
  assert.strictEqual(await SearchResultPage.getHeadTitleText(), searchText, "Head title does not match searched text");
});

Then(/^I can see information page for (.*)$/, async (searchText) => {
  assert.strictEqual(await InformationPage.getHeadTitleText(), `Information for "${searchText}"`, "Head title does not match searched text");
});
