import path from "path";
import { assert } from "chai";
import { When, Then } from "@wdio/cucumber-framework";

import { downloadDir } from "../../framework/configs/main.wdio.conf.js";
import PDFDownloadPage from "../page-objects/PDFDownloadPage.js";
import Browser from "../../framework/browser/Browser.js";

When("I download PDF", async () => {
  await PDFDownloadPage.downloadPDF();
});

Then(/^I can see downloaded PDF: (.*)$/, async (fileName) => {
  const downloadedFilePath = path.join(downloadDir, fileName);

  assert.isTrue(await Browser.File.isFileExist(downloadedFilePath), "Downloaded file was not found");
});
