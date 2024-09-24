import { assert } from "chai";
import crypto from "crypto";

import Browser from "../../framework/browser/Browser.js";
import MainPage from "../pageObjects/MainPage.js";
import DifferentFramesPage from "../pageObjects/FramePages/DifferentFramesPage.js";
import TinyEditorPage from "../pageObjects/FramePages/TinyEditorPage.js";

const defaultInputText = "Your content goes here.";

describe("iFrame test", function () {
  it("Interaction with text iFrame", async function () {
    await Browser.openUrl("https://the-internet.herokuapp.com/");
    await MainPage.clickNavigationLink("Frames");

    await DifferentFramesPage.clickIFrameButton();

    const iFrame = TinyEditorPage.iFrame.getPageUniqueElement();

    const randomString = crypto.randomUUID();

    //Implement missed steps
    await Browser.IFrame.switchToFrame(iFrame);
    await TinyEditorPage.iFrame.insertTextIntoInputField(randomString);
    assert.strictEqual(
      await TinyEditorPage.iFrame.getInputFieldText(),
      randomString
    );

    await TinyEditorPage.undoChanges();

    assert.strictEqual(
      await TinyEditorPage.iFrame.getTextFromInputField(),
      `${defaultInputText}`,
      "Wrong message into input field"
    );
  });
});
