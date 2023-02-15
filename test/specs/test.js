const assert = require("chai").assert;
const logger = require("../../framework/utils/logger/logger");
const data = require("../data");
const config = require("../config.json");
const BrowserUtil = require("../../framework/utils/browserUtils/browser");

const MainPage = require("../pages/mainPage");

describe("TAGES", () => {
  beforeEach(async () => {
    await BrowserUtil.reloadSession();
    await BrowserUtil.url(config.baseUrl);
  });

  afterEach(
    "annotate after",
    (afterEach = function () {
      logger.logInfo(
        `${this.currentTest.fullTitle()}: ${this.currentTest.state}`
      );
    })
  );

  it("Test case 1", async () => {
    for (let i = 1; i <= data.navbarItemsCount; i++) {
      const navItem = await MainPage.getMenuItem(i);
      assert.isTrue(await navItem.isClickable(), `Navbar item with ID ${i} is not clickable`);
    }
    await MainPage.setName(data.feedbackForm.nameLength);
    await MainPage.setPhone(data.feedbackForm.validPhoneLength);
    await MainPage.setCompany(data.feedbackForm.companyLength);
    await MainPage.setEmail(data.feedbackForm.emailLength);
    await MainPage.setComment(data.feedbackForm.commentLength);
  });
});
