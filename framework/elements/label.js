const logger = require("../utils/logger/logger");
const BaseElement = require("../baseElement");

class Label extends BaseElement {
  constructor(_locator, _name) {
    super(_locator, _name);
  }
}

module.exports = Label;
