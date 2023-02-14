const logger = require("../utils/logger/logger");
const BaseElement = require("../baseElement");

class Input extends BaseElement {
  constructor(_locator, _name) {
    super(_locator, _name);
  }

  async getValue() {
    const el = await this._findElement();
    const value = await el.getValue();
    logger.logInfo(`"${this._name}" value is equal to "${value}".`);
    return value;
  }

  async setValue(value) {
    const el = await this._findElement();
    logger.logInfo(`Set "${this._name}" to value of "${value}".`);
    await el.clearValue();
    return el.setValue(value);
  }

  async clearValue() {
    const el = await this._findElement();
    logger.logInfo(`Clear value of "${this._name}" field.`);
    return el.clearValue();
  }
}

module.exports = Input;
