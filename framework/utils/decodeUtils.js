const logger = require("./logger");

class DecodeUtils {
  static decode(str, fromEncoding, toEncoding) {
    logger.logInfo(`Decode string from "${fromEncoding}" to "${toEncoding}".`);
    return Buffer.from(str, fromEncoding).toString(toEncoding);
  }
}

module.exports = DecodeUtils;
