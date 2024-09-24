import BasePage from "../../../framework/page/BasePage.js";
import { Label } from "../../../framework/elements/index.js";
import IFrame from "./IFrame.js";

class IFrameParentPage extends BasePage {
  constructor() {
    super(
      new Label('//h1[contains(text(), "HTML")]', "Head title"),
      "HTML iFrames parent page"
    );

    this.iFrame = IFrame;

    this.headTitleStart = new Label(
      '//h1[contains(text(), "HTML")]',
      "Main header element of HTML parent page - h1 (start)"
    );

    this.headtitleEnd = new Label(
      '//h1[contains(text(), "HTML")]//span',
      "Main header element of HTML parent page - h1 (end)"
    );

    this.getHeadtitle = async () =>
      (await this.headTitleStart.getText()) +
      (await this.headtitleEnd.getText());
  }
}

export default new IFrameParentPage();
