class BasePage {
  #uniqueElement;
  #name;

  constructor(uniqueElement, name) {
    this.#uniqueElement = uniqueElement;
    this.#name = name;
  }

  async isPageOpen() {
    await this.#uniqueElement.waitUntilDisplayed();
    return this.#uniqueElement.isDisplayed();
  }
}

module.exports = BasePage;
