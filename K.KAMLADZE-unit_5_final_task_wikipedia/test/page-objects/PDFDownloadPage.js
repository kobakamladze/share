import { Button, Label } from "../../framework/elements/index.js";
import BasePage from "../../framework/page/BasePage.js";

class PDFDOwnloadPage extends BasePage {
  constructor() {
    super(new Label('//h1[contains(@id, "firstHeading")]', "Head title element on PDF download page"), "PDF Download page");

    this.downloadButton = new Button('//button[@type="submit"]', "PDF download button");
  }

  async downloadPDF() {
    await this.downloadButton.click();
  }
}

export default new PDFDOwnloadPage();
