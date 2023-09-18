const { Page } = require('playwright');

class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigateTo(url) {
    await this.page.goto(url);
  }

  async getText(selector) {
    await this.page.waitForSelector(selector);
    const element = await this.page.$(selector);
    return element.textContent();
  }
}

module.exports = BasePage;