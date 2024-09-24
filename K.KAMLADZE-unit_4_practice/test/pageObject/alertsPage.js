import Browser from "../../framework/browser/Browser.js";
import { Button, Label } from "../../framework/elements/index.js";
import BasePage from "../../framework/page/BasePage.js";

class DropDownPage extends BasePage {
  constructor() {
    super(new Label('//h3[contains(text(), "Alerts")]', "Alerts page headtitle"), "Alerts page");

    this.jsAlertButton = new Button(
      '//button[contains(@onClick, "jsAlert")]',
      "Alert call element"
    );

    this.options = (value) => new Label(`//option[@value=${value}]`, "Option from dropdown");
  }

  async clickJSAlertButton() {
    await this.jsAlertButton.click();
  }

  async acceptAlert() {
    return await Browser.Dialog.acceptDialog();
  }
}

export default new DropDownPage();
