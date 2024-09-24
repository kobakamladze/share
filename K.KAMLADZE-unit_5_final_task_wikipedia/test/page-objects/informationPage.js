import { Label } from "../../framework/elements/index.js";
import BasePage from "../../framework/page/BasePage.js";

class InformationPage extends BasePage {
  constructor() {
    super(new Label('//h1[contains(@id, "firstHeading")]', "Information page head title element"), "Information page");

    this.headTitle = new Label('//h1[contains(@id, "firstHeading")]', "Information page head title element");
  }

  async getHeadTitleText() {
    return await this.headTitle.getText();
  }
}

export default new InformationPage();
