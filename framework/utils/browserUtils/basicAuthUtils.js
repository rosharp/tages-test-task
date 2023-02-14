const BrowserUtil = require("./browser");
const logger = require("../logger/logger");
const data = require("../../../test/data");

class BasicAuthUtils {
  static async auth(baseUrl, login, password) {
    logger.logInfo(`Basic auth with credentials: "${login}": "${password}"`);
    return BrowserUtil.url(
      `${login}:${password}@${baseUrl.replace(data.regex.urlScheme, "")}`
    );
  }
}

module.exports = BasicAuthUtils;
