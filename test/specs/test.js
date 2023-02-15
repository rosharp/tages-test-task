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

  it("Check navbar links and validate the feedback form", async () => {
    for (let i = 1; i <= data.navbarItemsCount; i++) {
      const navItem = await MainPage.getMenuItem(i);
      assert.isTrue(
        await navItem.isClickable(),
        `Navbar item with ID ${i} is not clickable`
      );
    }
    assert.isTrue(await MainPage.validateFooter());
  });

  Object.values(data.feedbackForm.credValidity).forEach((validity) =>
    it("Validate the feedback form", async () => {
      await MainPage.setName(
        data.feedbackForm.inputLengths.nameLength,
        validity
      );
      await MainPage.setPhone(
        data.feedbackForm.inputLengths.validPhoneLength,
        validity
      );
      await MainPage.setCompany(
        data.feedbackForm.inputLengths.companyLength,
        validity
      );
      await MainPage.setEmail(
        data.feedbackForm.inputLengths.emailLength,
        validity
      );
      await MainPage.setComment(data.feedbackForm.inputLengths.commentLength);
      await MainPage.clickSubmit();
      if (validity) {
        assert.isTrue(
          await MainPage.validateForm(),
          "Invalid input value in the feedback form"
        );
      } else {
        assert.isFalse(
          await MainPage.validateForm(),
          "Invalid input value in the feedback form"
        );
      }
    })
  );
});
