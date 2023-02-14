const axios = require("axios");
const logger = require("../logger");

class ApiUtils {
  static async get(url, headers) {
    logger.logInfo(`GET request to "${url}"`);
    try {
      const res = await axios.get(url, {
        headers: { "accept-encoding": "null", ...headers },
        validateStatus: false,
      });
      return { status: res.status, data: res.data };
    } catch (error) {
      logger.logError(error);
      throw error;
    }
  }

  static async post(url, data) {
    logger.logInfo(`POST request to "${url}"`);
    try {
      const req = await axios.post(url, data);
      return { status: req.status, data: req.data };
    } catch (error) {
      logger.logError(error);
      throw error;
    }
  }
}

module.exports = ApiUtils;
