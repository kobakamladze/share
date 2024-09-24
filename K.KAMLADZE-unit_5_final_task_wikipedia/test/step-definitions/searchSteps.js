import { When } from "@wdio/cucumber-framework";

import MainPage from "../page-objects/mainPage.js";
import SearchResultPage from "../page-objects/searchResultPage.js";

When(/^I change search language to (.*)$/, async (searchLang) => {
  await MainPage.changeSearchLanguage(searchLang);
});

When(/^I search for (.*)$/, async (searchText) => {
  await MainPage.search(searchText);
});

When(/^I navigate to (.*) page$/, async (pageName) => {
  await SearchResultPage.navigateFromToolsDropdown(pageName);
});
