import { Button, Frame, Label } from "../../../framework/elements/index.js";
import BasePage from "../../../framework/page/BasePage.js";

class IFrame extends BasePage {
  constructor() {
    super(new Frame('//*[@title="W3Schools HTML Tutorial"]'), "iFrame element");
  }
}

export default new IFrame();
