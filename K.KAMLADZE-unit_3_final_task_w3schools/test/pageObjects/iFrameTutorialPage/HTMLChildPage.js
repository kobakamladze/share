import BasePage from "../../../framework/page/BasePage.js";
import { Button, Label } from "../../../framework/elements/index.js";

class HTMLChildPagePage extends BasePage {
  constructor() {
    super(
      new Label('//h1[contains(text(), "HTML")]', "Head title"),
      "HTML page in frame"
    );

    this.cssNavbarButton = new Button(
      '//div[@id="subtopnav"]//a[@title="CSS Tutorial"]',
      "CSS navigation button"
    );

    this.headTitleStart = new Label(
      '//h1[contains(text(), "HTML")]',
      "Main header element of HTML child page - h1 (start)"
    );
    this.headtitleEnd = new Label(
      '//h1[contains(text(), "HTML")]//span',
      "Main header element of HTML child page - span (end)"
    );

    this.getHeadtitle = async () =>
      (await this.headTitleStart.getText()) +
      (await this.headtitleEnd.getText());
  }

  async navigateToCSSPage() {
    await this.cssNavbarButton.click();
  }
}

export default new HTMLChildPagePage();
