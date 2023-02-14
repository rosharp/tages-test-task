const logger = require("../logger/logger");

class BrowserUtil {
  static async url(url) {
    logger.logInfo(`Following URL: "${url}"`);
    return browser.url(`${url}`);
  }

  static async maximizeWindow() {
    logger.logInfo("Maximize window.");
    return browser.maximizeWindow();
  }

  static async reloadSession() {
    logger.logInfo("Reload session.");
    return browser.reloadSession();
  }

  static async switchToParentFrame() {
    logger.logInfo("Switch to parent frame.");
    return browser.switchToParentFrame();
  }
}

module.exports = BrowserUtil;
