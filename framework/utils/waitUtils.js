const logger = require("./logger/logger");

class WaitUtils {
  static async waitUntil(
    condition,
    { timeout, timeoutMsg, interval, noThrow }
  ) {
    logger.logInfo("Wait until condition is fulfilled.");
    try {
      await browser.waitUntil(async () => await condition(), {
        timeout,
        timeoutMsg,
        interval,
      });
      return true;
    } catch (error) {
      if (noThrow) {
        return false;
      } else throw error;
    }
  }
}

module.exports = WaitUtils;
