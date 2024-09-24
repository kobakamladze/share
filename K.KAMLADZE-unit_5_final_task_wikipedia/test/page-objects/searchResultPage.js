import BasePage from "../../framework/page/BasePage.js";
import { Button, Input, Label } from "../../framework/elements/index.js";

class SearchResultPage extends BasePage {
  constructor() {
    super(new Label('//span[contains(@class, "mw-page-title-main")]', "Head title element"), "Search result page");

    this.headTitle = () => new Label('//span[contains(@class, "mw-page-title-main")]', "Search result object head title element");
    this.toolsButton = new Button('//div[contains(@id, "vector-page-tools-dropdown")]', "Tools button");
    this.toolsDropdown = new Input('//input[contains(@id, "vector-page-tools")]', "Tools dropdown");
    this.toolsDropdownNavigationLink = (text) => new Button(`//a[contains(@title, "${text}")]`, `Navigationlink to: ${text}`);
  }

  async navigateFromToolsDropdown(text) {
    await this.toolsButton.click();
    await this.toolsDropdownNavigationLink(text).click();
  }

  async getHeadTitleText() {
    return await this.headTitle().getText();
  }
}

export default new SearchResultPage();
