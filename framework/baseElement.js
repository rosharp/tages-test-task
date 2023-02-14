const logger = require("./utils/logger/logger");
const config = require("../test/config.json");

class BaseElement {
  constructor(_locator, _name) {
    this._locator = _locator;
    this._name = _name;
  }

  async _findElement() {
    if (typeof this._locator === "string") {
      const el = await $(this._locator);
      return el;
    } else return this._locator;
  }

  async _findElements() {
    const el = await $$(this._locator);
    logger.logInfo(`Number of found "${this._name}" instances: ${el.length}`);
    return el;
  }

  async getElementsList(ElementType) {
    const elementsList = (await this._findElements()).map((elem, index) => {
      return new ElementType(elem, `${this._name} #${index}`);
    });
    return elementsList;
  }

  async getText() {
    const el = await this._findElement();
    const elText = await el.getText();
    logger.logInfo(`"${this._name}" text is equal to "${elText}".`);
    return elText;
  }

  async isClickable() {
    const el = await this._findElement();
    logger.logInfo(`Check if "${this._name}" clickable.`);
    return el.isClickable();
  }

  async click() {
    const el = await this._findElement();
    logger.logInfo(`Click "${this._name}".`);
    return el.click();
  }

  async doubleClick() {
    const el = await this._findElement();
    logger.logInfo(`Doubleclick "${this._name}".`);
    return el.doubleClick();
  }

  async scrollIntoView() {
    const el = await this._findElement();
    logger.logInfo(`Scroll "${this._name}" into view.`);
    return el.scrollIntoView();
  }

  async isLoaded() {
    const el = await this._findElement();
    logger.logInfo(`Waiting for "${this._name}" to load.`);
    return el.waitForExist();
  }

  async isDisplayed() {
    const el = await this._findElement();
    const res = await el.isDisplayed();
    logger.logInfo(
      `${res ? this._name : "Element"} is${!res ? " not" : ""} displayed.`
    );
    return res;
  }

  async isDisplayedInViewport() {
    const el = await this._findElement();
    const res = await el.isDisplayedInViewport();
    logger.logInfo(
      `${res ? this._name : "Element"} is${!res ? " not" : ""} in viewport.`
    );
    return res;
  }

  async waitForDisplayed({timeout = config.timeout, reverse = false}) {
    const el = await this._findElement();
    logger.logInfo(`Waiting for "${this._name}" to be displayed.`);
    return el.waitForDisplayed({ timeout, reverse });
  }

  async waitUntilNotInViewport(timeout = config.timeout) {
    const el = await this._findElement();
    logger.logInfo(`Waiting for "${this._name}" to leave viewport.`);
    return el.waitUntil(async () => !(await el.isDisplayedInViewport()), {
      timeout,
    });
  }

  async waitForText(text, timeout = config.timeout) {
    const el = await this._findElement();
    logger.logInfo(`Waiting for "${this._name}" to have text: "${text}".`);
    return el.waitUntil(async () => (await el.getText()) === text, {
      timeout,
    });
  }

  async getAttribute(attName) {
    const el = await this._findElement();
    const att = await el.getAttribute(attName);
    logger.logInfo(`"${this._name}"'s ${attName} is equal to "${att}".`);
    return att;
  }
}

module.exports = BaseElement;
