import { Then } from "@wdio/cucumber-framework";
import { assert } from "chai";

import DataTablesPage from "../page-objects/dataTablesPage.js";
import { addDescription, addStep } from "@wdio/allure-reporter";

const currencySign = "$";

//to implement
addDescription("This test calculates summary of Due column values");

Then(/^Sum of Due column values should be (\d+)$/, async (expectedSum) => {
  addStep(`Expect Summary of Due column values to equal to: ${expectedSum}`, async () => {
    const dueArray = await (
      await DataTablesPage.getColumnValues()
    ).map((element) => parseFloat(element.replace(currencySign, "")));
    const dueSum = dueArray.reduce((accum, currentValue) => accum + currentValue, 0);

    assert.strictEqual(dueSum, expectedSum, "Sum of due column values is not correct");
  });
});
