const BaseElement = require("../baseElement");
const logger = require("../utils/logger");

class IFrame extends BaseElement {
  constructor(_locator, _name) {
    super(_locator, _name);
  }

  async switchToIFrame() {
    logger.logInfo(`Switch to "${this._name}".`);
    return browser.switchToFrame(await this._findElement());
  }
}

module.exports = IFrame;
