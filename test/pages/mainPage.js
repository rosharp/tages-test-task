const data = require("../data");
const logger = require("../../framework/utils/logger/logger");
const BasePage = require("../../framework/basePage");
const Button = require("../../framework/elements/button");
const Label = require("../../framework/elements/label");
const Input = require("../../framework/elements/input");

class MainPage extends BasePage {
  constructor() {
    super(new Label("//h2[@class='section-promo__lead']", "Main header"));
  }

  #navMenuItem = (option) => new Button(`(//a[contains(@class, 'nav-menu__item-link')])[${option}]`, `Navbar Item #${option}`);
  #formInput = (option) => new Input(`//input[@placeholder='${option}']`);

  async getMenuItem(num) {
    logger.logInfo(`Get menu items number: ${num}.`);
    return this.#navMenuItem(num);
  }

  async typeName(str) {
    const inputField = this.#formInput(data.feedbackForm.name);
    logger.logInfo(`Type in name: ${str}.`);
    return inputField.setValue(str);
  }

  async typePhone(str) {
    const inputField = this.#formInput(data.feedbackForm.phone);
    logger.logInfo(`Type in phone number: ${str}.`);
    return inputField.setValue(str);
  }

  async typeCompany(str) {
    const inputField = this.#formInput(data.feedbackForm.company);
    logger.logInfo(`Type in company name: ${str}.`);
    return inputField.setValue(str);
  }

  async typeEmail(str) {
    const inputField = this.#formInput(data.feedbackForm.email);
    logger.logInfo(`Type in email: ${str}.`);
    return inputField.setValue(str);
  }

  async typeComment(str) {
    const inputField = this.#formInput(data.feedbackForm.comment);
    logger.logInfo(`Type in a comment: ${str}.`);
    return inputField.setValue(str);
  }
}

module.exports = new MainPage();
