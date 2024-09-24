import { Label, Input, Button } from "../../framework/elements/index.js";
import BasePage from "../../framework/page/BasePage.js";
import { PreciseTextLocator } from "../../framework/utils/locatorHelper.js";

class DynamicControlsPage extends BasePage {
  constructor() {
    super(
      new Label(PreciseTextLocator("Dynamic Controls")),
      "Dynamic Controls Page"
    );

    this.enableButton = new Button(
      '//*[@onclick="swapInput()"]',
      "Enable Button"
    );
    this.inputField = new Input('//input[@type="text"]', "Input Field");
  }

  //Implement all methods for DynamicControlsTest
  async clickEnableButton() {
    await this.enableButton.click();
  }

  async isInputFieldEnabled() {
    return await this.inputField.state().waitForEnabled({ reverse: true });
  }

  async inputTextIntoInputField(text) {
    await this.inputField.typeText(text);
  }

  async getText() {
    return await this.inputField.getValue();
  }
}

export default new DynamicControlsPage();
