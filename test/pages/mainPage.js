const data = require("../data");
const logger = require("../../framework/utils/logger/logger");
const randomUtils = require("../../framework/utils/randomUtils");
const BasePage = require("../../framework/basePage");
const Button = require("../../framework/elements/button");
const Label = require("../../framework/elements/label");
const Input = require("../../framework/elements/input");

class MainPage extends BasePage {
  constructor() {
    super(new Label("//h2[@class='section-promo__lead']", "Main header"));
  }

  #navMenuItem = (option) =>
    new Button(
      `(//a[contains(@class, 'nav-menu__item-link')])[${option}]`,
      `Navbar Item #${option}`
    );
  #formInput = (option) => new Input(`//input[@placeholder='${option}']`, `${option} form input`);
  #commentTextarea = new Input(`//textarea[@placeholder='${data.feedbackForm.comment}']`, "Comment form textarea");

  async getMenuItem(num) {
    logger.logInfo(`Get menu items number: ${num}.`);
    return this.#navMenuItem(num);
  }

  async setName(length) {
    const inputField = this.#formInput(data.feedbackForm.name);
    const value = randomUtils.randomString(length);
    logger.logInfo(`Type in name: "${value}".`);
    return inputField.setValue(value);
  }

  async setPhone(length) {
    const inputField = this.#formInput(data.feedbackForm.phone);
    const value = randomUtils.randomNumberStr(length);
    logger.logInfo(`Type in phone number: "${value}".`);
    return inputField.setValue(value);
  }

  async setCompany(length) {
    const inputField = this.#formInput(data.feedbackForm.company);
    const value = randomUtils.randomString(length);
    logger.logInfo(`Type in company name: "${value}".`);
    return inputField.setValue(value);
  }

  async setEmail(length, valid = true) {
    const inputField = this.#formInput(data.feedbackForm.email);
    const value = randomUtils.randomString(length);
    logger.logInfo(`Type in email: "${value}".`);
    return valid
      ? `${inputField.setValue(value)}@gmail.com`
      : inputField.setValue(value);
  }

  async setComment(length) {
    const value = randomUtils.randomString(length);
    logger.logInfo(`Type in a comment: "${value}".`);
    return this.#commentTextarea.setValue(value);
  }
}

module.exports = new MainPage();
