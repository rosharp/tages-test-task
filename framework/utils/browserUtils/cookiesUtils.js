const logger = require("../logger/logger");

class CookiesUtils {
  static async setCookies({ name, value }) {
    logger.logInfo(`Set cookies: ${name}.`);
    return browser.setCookies({
      name,
      value,
    });
  }

  static async getCookies(names) {
    logger.logInfo(`Get cookies: ${names}.`);
    return browser.getCookies(names);
  }

  static async deleteCookies(names) {
    logger.logInfo(`Delete cookies: ${names}`);
    return browser.deleteCookies(names);
  }
}

module.exports = CookiesUtils;
