const assert = require("chai").assert;
const logger = require("../../framework/utils/logger/logger");
const data = require("../data");
const config = require("../config.json");
const BrowserUtil = require("../../framework/utils/browserUtils/browser");

describe("description", () => {
  beforeEach(async () => {
    await BrowserUtil.reloadSession();
    await BrowserUtil.url(config.baseUrl);
    await BrowserUtil.maximizeWindow();
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
    
  });
});
