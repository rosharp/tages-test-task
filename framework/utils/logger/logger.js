const log4js = require("log4js");
const config = require("./loggerConfig");
const Table = require("easy-table");

log4js.configure({ config });

const logger = log4js.getLogger();

logger.level = "debug";

class Logger {
  logInfo(msg) {
    return logger.info(msg);
  }
  logError(msg) {
    return logger.error(msg);
  }
  logTable(data) {
    return logger.info(Table.print(data));
  }
}

module.exports = new Logger();
