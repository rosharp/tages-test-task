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
  #formInput = (option) =>
    new Input(`//input[@placeholder='${option}']`, `${option} form input`);
  #commentTextarea = new Input(
    `//textarea[@placeholder='${data.feedbackForm.inputFields.comment}']`,
    "Comment form textarea"
  );
  #submitButton = new Button(
    "//button[contains(@class, 'form__send-form-button')]",
    "Form submit button"
  );
  #successTitle = new Label(
    "//h4[@class='form__success-badge-title']",
    "Submit success title"
  );
  #errorRegex = new RegExp(`${data.feedbackForm.attributes.error}`);

  async getMenuItem(num) {
    logger.logInfo(`Get menu items number: ${num}.`);
    return this.#navMenuItem(num);
  }

  async validateForm() {
    const inputFields = Object.values(data.feedbackForm.inputFields);
    if (await this.#successTitle.isLoaded()) {
      return true;
    } else {
      for (let i = 1; i < inputFields.length - 1; i++) {
        const inputField = this.#formInput(inputFields[i]);
        logger.logInfo(`Validate input field: "${inputFields[i]}".`);
        if (this.#errorRegex.test(await inputField.getAttribute("class"))) {
          logger.logError(
            `Invalid input in the form field: "${inputFields[i]}"`
          );
        }
      }
      logger.logInfo(
        `Validate input field: "${data.feedbackForm.inputFields.comment}."`
      );
      if (
        this.#errorRegex.test(await this.#commentTextarea.getAttribute("class"))
      ) {
        logger.logError(
          `Invalid input in the form field: "${data.feedbackForm.inputFields.comment}"`
        );
      }
      return false;
    }
  }

  async setName(length) {
    const inputField = this.#formInput(data.feedbackForm.inputFields.name);
    const value = randomUtils.randomString(length);
    logger.logInfo(`Type in name: "${value}".`);
    return inputField.setValue(value);
  }

  async setPhone(length) {
    const inputField = this.#formInput(data.feedbackForm.inputFields.phone);
    const value = randomUtils.randomNumberStr(length);
    logger.logInfo(`Type in phone number: "${value}".`);
    return inputField.setValue(value);
  }

  async setCompany(length) {
    const inputField = this.#formInput(data.feedbackForm.inputFields.company);
    const value = randomUtils.randomString(length);
    logger.logInfo(`Type in company name: "${value}".`);
    return inputField.setValue(value);
  }

  async setEmail(length, valid = true) {
    const inputField = this.#formInput(data.feedbackForm.inputFields.email);
    const value = randomUtils.randomString(length);
    logger.logInfo(`Type in email: "${value}".`);
    return valid
      ? inputField.setValue(`${value}${data.feedbackForm.domain}`)
      : inputField.setValue(value);
  }

  async setComment(length) {
    const value = randomUtils.randomString(length);
    logger.logInfo(`Type in a comment: "${value}".`);
    return this.#commentTextarea.setValue(value);
  }

  async clickSubmit() {
    return this.#submitButton.click();
  }
}

module.exports = new MainPage();
