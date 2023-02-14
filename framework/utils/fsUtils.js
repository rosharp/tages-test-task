const fs = require("fs/promises");
const logger = require("./logger/logger");

class FsUtils {
  static async readFile(path, options, callback) {
    logger.logInfo(`Read file: "${path}".`);
    return fs.readFile(path, options, callback);
  }

  static async appendFile(path, data, options, callback) {
    logger.logInfo(`Append data to file: "${path}".`);
    return fs.appendFile(path, data, options, callback);
  }

  static async writeFile(path, data, options, callback) {
    logger.logInfo(`Write data to file: "${path}".`);
    return fs.writeFile(path, data, options, callback);
  }
}

module.exports = FsUtils;
