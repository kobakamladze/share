import { Label, Table } from "../../framework/elements/index.js";
import BasePage from "../../framework/page/BasePage.js";
import { PreciseTextLocator } from "../../framework/utils/locatorHelper.js";

class DataTablesPage extends BasePage {
  constructor() {
    //Change call of super() constructor to approriate one
    super(
      new Table('//table[@id="table1"]', "First table from page"),
      "First table from page"
    );

    this.firstExampleTable = new Table(
      '//*[@id="table1"]',
      "First Table Example"
    );
  }

  async getColumnValues() {
    const table = await this.firstExampleTable.parseTableContent();
    //Return array of Due values
    console.log("========================");
    console.log(table.map(({ Due }) => Due));

    return table.map(({ Due }) => Due);
  }
}

export default new DataTablesPage();
