import { Frame, Input } from "../../../framework/elements/index.js";
import BasePage from "../../../framework/page/BasePage.js";

class IFrame extends BasePage {
  //Implement interaction inside IFrame
  constructor() {
    super(new Frame('//iframe[@title="Rich Text Area"]'), "iFrame elemnt");

    this.inputField = new Input(
      '//*[@id="tinymce"]',
      "Input field within frame"
    );
  }

  async insertTextIntoInputField(text) {
    await this.inputField.typeText(text);
  }

  async getInputFieldText() {
    return await this.inputField.getText();
  }
}

export default new IFrame();
