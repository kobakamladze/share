import BasePage from "../../../framework/page/BasePage.js";
import { Label } from "../../../framework/elements/index.js";

class CSSChildPage extends BasePage {
  constructor() {
    super(
      new Label('//h1[contains(text(), "CSS")]', "Head title"),
      "CSS page in frame"
    );

    this.headTitle = new Label(
      '//h1[contains(text(), "CSS")]',
      "Main header element of CSS child page - h1 (start)"
    );

    this.headtitleEnd = new Label(
      '//h1[contains(text(), "CSS")]//span',
      "Main header element of CSS child page - h1 (end)"
    );

    this.getHeadtitle = async () =>
      (await this.headTitleStart.getText()) +
      (await this.headtitleEnd.getText());
  }
}

export default new CSSChildPage();
