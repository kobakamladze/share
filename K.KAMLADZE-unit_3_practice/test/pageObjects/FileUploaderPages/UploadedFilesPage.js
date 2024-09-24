import BasePage from "../../../framework/page/BasePage.js";
import { PreciseTextLocator } from "../../../framework/utils/locatorHelper.js";
import { Label } from "../../../framework/elements/index.js";

class UploadedFilesPage extends BasePage {
  constructor() {
    super(
      new Label(PreciseTextLocator("File Uploaded!"), "Uloaded files page")
    );

    this.uploadedFiles = new Label('//div[@id="uploaded-files"]');
  }
  //Implement PageObject
  async getUploadedFileName() {
    return await this.uploadedFiles.getText();
  }
}

export default new UploadedFilesPage();
