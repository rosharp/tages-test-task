const logger = require("./logger/logger");

class SortUtils {
  static isSortedBy(obj, prop) {
    for (let i = 0; i < obj.length - 1; i++) {
      if (obj[i].prop > obj[i + 1].prop) {
        logger.logError(`Respond object is not sorted by ${prop}.`);
        return false;
      }
    }
    logger.logInfo(`Respond object is sorted by ${prop}.`);
    return true;
  }
}

module.exports = SortUtils;
