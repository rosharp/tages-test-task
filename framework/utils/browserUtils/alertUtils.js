const logger = require("../logger/logger");

class AlertUtils {
    static async acceptAlert() {
        logger.logInfo("Accept alert.");
        return browser.acceptAlert()
    }

    static async dismissAlert() {
        logger.logInfo("Dismiss alert.");
        return browser.dismissAlert();
    }

    static async getAlertText() {
        logger.logInfo("Get alert text.");
        return browser.getAlertText();
    }

    static async sentAlertText(str) {
        logger.logInfo(`Send text to alert: "${str}".`);
        return browser.sendAlertText(str);
    }
    
    static async isAlertOpen() {
        logger.logInfo("Check if alert is open.");
        return browser.isAlertOpen();
    }
}

module.exports = AlertUtils;
