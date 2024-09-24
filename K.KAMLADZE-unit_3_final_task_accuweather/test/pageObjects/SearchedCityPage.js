import { Label } from "../../framework/elements/index.js";
import BasePage from "../../framework/page/BasePage.js";

class SearchedCityPage extends BasePage {
  constructor() {
    super(new Label('//h1[@class="header-loc"]', "Head title containing name of the searched city"),
    "Page of the searched city");

    this.headTitleLabel = new Label(
      '//h1[@class="header-loc"]',
      "Head title containing name of the searched city"
    );
  }

  async getHeadTitleText() {
    return await this.headTitleLabel.getText();
  }
}

export default new SearchedCityPage();
