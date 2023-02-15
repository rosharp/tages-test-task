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

  #telNumber = new Label("//a[@aria-label='Телефон для запроса']", "Top phone number");
  #anchor = new Label("//a", "Anchor link");
  #footerLink = new Label("//a[contains(@class, 'footer__info-link')]", "Footer link");
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

  async validatePhoneNumber() {
    logger.logInfo("Validate phone number.");
    if (data.regex.phoneNumber.test(await this.#telNumber.getText())) {
      return true;
    }
    return false;
  }

  async validateFooter() {
    const elements = await this.#footerLink.getElementsList(Label);
    logger.logInfo("Validate footer.");
    elements.forEach(async (el) => {
      try {
        if (!data.regex.email.test(await el.getText())) {
          throw new Error;
        };
      } catch {
        if (!data.regex.phoneNumber.test(await el.getText())) {
          throw new Error;
        };
      }
    });
    return true;
  }

  async validateAnchors() {
    const elements = await this.#anchor.getElementsList(Label);
    logger.logInfo("Validate anchors.");
    elements.forEach(async (el) => {
      if (!(await el.isClickable())) {
        return false;
      }
    });
    return true;
  }

  async validateForm() {
    const inputFields = Object.values(data.feedbackForm.inputFields);
    try {
      await this.#successTitle.isLoaded();
      return true;
    } catch {
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

  async setName(length, valid = true) {
    const inputField = this.#formInput(data.feedbackForm.inputFields.name);
    const value = randomUtils.randomString(length);
    logger.logInfo(`Type in name: "${value}".`);
    return valid ? inputField.setValue(value) : "";
  }

  async setPhone(length, valid = true) {
    const inputField = this.#formInput(data.feedbackForm.inputFields.phone);
    const value = randomUtils.randomNumberStr(length);
    logger.logInfo(`Type in phone number: "${value}".`);
    return inputField.setValue(value);
  }

  async setCompany(length, valid = true) {
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
