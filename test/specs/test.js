const assert = require("chai").assert;
const logger = require("../../framework/utils/logger/logger");
const data = require("../data");
const config = require("../config.json");
const BrowserUtil = require("../../framework/utils/browserUtils/browser");
const MainPage = require("../pages/mainPage");

describe("TAGES Homepage", () => {
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

  it("Check links, emails and phone numbers", async () => {
    assert.isTrue(await MainPage.validateAnchors(), "Invalid link on the page");
    assert.isTrue(
      await MainPage.validatePhoneNumber(),
      "Top level phone number is invalid"
    );
    assert.isTrue(
      await MainPage.validateFooter(),
      "Invalid link in the footer"
    );
  });

  Object.values(data.feedbackForm.credValidity).forEach((validity) =>
    it(
      (validity
        ? "Positive: Validate the feedback form and send a test response"
        : "Negative: Validate the feedback form and send a test response"),
      async () => {
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
      }
    )
  );
});
