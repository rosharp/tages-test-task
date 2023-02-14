const logger = require("../logger/logger");
const Pool = require("./pool.js");

class Db {
  constructor(config) {
    this._pool = new Pool(config).pool;
    this._connection = null;
  }

  async createConnection() {
    if (this._connection) {
      logger.logInfo("Connection exists.");
      return this._connection;
    } else {
      logger.logInfo("Create connection.");
      return (this._connection = await this._pool.getConnection((err) =>
        logger.logError(err)
      ));
    }
  }

  async query(query) {
    if (this._connection) {
      logger.logInfo("Connection exists.");
    } else {
      throw new Error("No connection.");
    }
    const data = await this._connection.query(query);
    logger.logInfo(`Make query: "${query}"`);
    logger.logTable(data[0]);
    await this._connection.release();
    return data[0];
  }

  async end() {
    if (this._connection) {
      logger.logInfo("Connection exists.");
    } else {
      throw new Error("No connection.");
    }
    logger.logInfo(`Close connection with database.`);
    return this._pool.end();
  }
}

module.exports = Db;
