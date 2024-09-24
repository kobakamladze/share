import { Button, Dropdown, Input, Label } from "../../framework/elements/index.js";
import BasePage from "../../framework/page/BasePage.js";

class MainPage extends BasePage {
  constructor() {
    super(new Label('//span[contains(@class, "central-textlogo__image")]', "Head title element"), "Wikipedia main page");

    this.input = new Input('//input[@id="searchInput"]', "Input on the main page");
    this.searchButton = new Button('//button[@type="submit"]', "Input submit button");
    this.dropdown = new Dropdown('//select[@id="searchLanguage"]', "Dropdown for search languages");
  }

  async search(text) {
    await this.input.typeText(text);
    await this.searchButton.click();
  }

  async changeSearchLanguage(lang) {
    await this.dropdown.selectOptionByValue(lang);
  }
}

export default new MainPage();
