import { assert } from "chai";

import Browser from "../../framework/browser/Browser.js";
import IFrameParentPage from "../pageObjects/iFrameTutorialPage/IFrameParentPage.js";
import HTMLChildPage from "../pageObjects/iFrameTutorialPage/HTMLChildPage.js";
import CSSChildPage from "../pageObjects/iFrameTutorialPage/CSSChildPage.js";
import HEADTITLES_DATA from "../testData/headTitlesData.js";

describe("Iframe w3schools tests", function () {
  it("Head titles are displayed correctly", async function () {
    assert.isTrue(await IFrameParentPage.isPageOpened());
    assert.strictEqual(
      await IFrameParentPage.getHeadtitle(),
      HEADTITLES_DATA.PARENT_HTML_PAGE_HEADTITLE,
      "Main head title does not match expected string"
    );

    const iFrame = await IFrameParentPage.iFrame.getPageUniqueElement();
    await Browser.IFrame.switchToFrame(iFrame);

    assert.isTrue(await HTMLChildPage.isPageOpened());
    assert.strictEqual(
      await HTMLChildPage.getHeadtitle(),
      HEADTITLES_DATA.CHILD_HTML_PAGE_HEADTITLE,
      "Head title in the frame, before navigation, does not match expected result"
    );

    await HTMLChildPage.navigateToCSSPage();

    assert.isTrue(await CSSChildPage.isPageOpened());
    assert.strictEqual(
      await CSSChildPage.getHeadtitle(),
      HEADTITLES_DATA.CHILD_CSS_PAGE_HEADTITLE,
      "Head title in the frame, after navigation, does not match expected result"
    );
  });
});
