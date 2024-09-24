import { Button, Label } from "../../framework/elements/index.js";
import BasePage from "../../framework/page/BasePage.js";

class HerokuWelcomePage extends BasePage {
  constructor() {
    super(new Label('//h1[@class="heading"]', "Welcome page head title"), "Heroku welcome page");

    this.alertsNavigationButton = new Button(
      '//a[contains(@href, "alerts")]',
      "Alerts navigation button"
    );
  }

  async navigateToAlertsPage() {
    await this.alertsNavigationButton.click();
  }

  async navigateToAlertsPage() {
    await this.alertsNavigationButton.click();
  }
}

export default new HerokuWelcomePage();
