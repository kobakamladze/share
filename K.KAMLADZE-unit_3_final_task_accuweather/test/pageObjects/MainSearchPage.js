import BasePage from "../../framework/page/BasePage.js";
import { Button, Input, Label } from "../../framework/elements/index.js";

class MainSearchPage extends BasePage {
  constructor() {
    super(new Label('//a[@class="header-logo"]', "Logo on main page"), "Main search page");

    this.privacyPolicyAcceptanceButton = new Button('//div[contains(@class, "banner-button")]', "Button to accept privacy policy");

    this.searchInput = new Input('//input[@class="search-input"]', "Input for search on main page");

    // not sure if it should be Label or Dropdown
    this.searchResultsList = new Label('//div[@class="results-container"]', "Search results list");

    this.targetSearchResult = new Label('//div[contains(@data-link, "New+York+City")]', "New York City result in results list");
  }

  async acceptPrivacyPolicy() {
    await this.privacyPolicyAcceptanceButton.click();
  }

  async insertTextIntoSearchBar(text) {
    await this.searchInput.typeText(text);
  }

  async navigateToNewYorkPage() {
    await this.targetSearchResult.state().waitForClickable();
    await this.targetSearchResult.click();
  }
}

export default new MainSearchPage();
