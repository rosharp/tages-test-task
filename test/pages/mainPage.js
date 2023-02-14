const data = require("../data");
const logger = require("../../framework/utils/logger/logger");
const BasePage = require("../../framework/basePage");
const Button = require("../../framework/elements/button");
const Label = require("../../framework/elements/label");

class MainPage extends BasePage {
  constructor() {
    super(new Label("//h2[@class='section-promo__lead']", "Main header"));
  }

  #navMenuItem = (option) => new Button(`(//a[contains(@class, 'nav-menu__item-link')])[${option}]`, `Navbar Item #${option}`);

  async getMenuItem(num) {
    logger.logInfo(`Get menu items number: ${num}.`);
    return this.#navMenuItem(num);
  }
}

module.exports = new MainPage();
