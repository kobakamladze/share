import { assert } from "chai";

import MainSearchPage from "../pageObjects/MainSearchPage.js";
import SearchedCityPage from "../pageObjects/SearchedCityPage.js";
import searchData from "../data/weatherTestData.js";
import { addEnvironment, addLink, addOwner, addSeverity, addStep } from "@wdio/allure-reporter";

describe("AccuWeather search test", function () {
  it("Search for 'New York' and navigate to ", async function () {
    addOwner("Koba Kamladze");
    addLink("https://www.accuweather.com/");
    addSeverity("critical");

    addStep("Accepting privacy policy");
    await MainSearchPage.acceptPrivacyPolicy();

    addStep("Correct city is displayed in result of search");
    await MainSearchPage.insertTextIntoSearchBar(searchData.cityToSearch);
    assert.isTrue(
      await MainSearchPage.searchResultsList.state().isExisting(),
      "Target does not present in results list"
    );

    addStep("Correct target city was found");
    await MainSearchPage.navigateToNewYorkPage();

    assert.strictEqual(
      searchData.expectedCityName,
      await SearchedCityPage.getHeadTitleText(),
      "Incorrect target city"
    );
  });
});
