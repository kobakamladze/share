import IFrame from "./IFrame.js";
import { Label, Button } from "../../../framework/elements/index.js";
import BasePage from "../../../framework/page/BasePage.js";
import { PartialTextLocator } from "../../../framework/utils/locatorHelper.js";

class TinyEditorPage extends BasePage {
  constructor() {
    super(new Label(PartialTextLocator("An iFrame")), "iFrame Page");

    this.iFrame = IFrame;
    //Implement elements
    this.editButton = new Button('//*[text()="Edit"]', "Edit button");
    this.undoButton = new Button('//div[@title="Undo"]', "Undo button");
  }

  //Implement methods
  async undoChanges() {
    await this.editButton.click();
    await this.undoButton.click();
  }
}

//Export Page
export default new TinyEditorPage();
