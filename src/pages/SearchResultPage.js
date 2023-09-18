
class SearchResultPage extends BasePage {
  constructor(page) {
    super(page);
  }

  async scrapeItems() {
    const itemNames = await this.page.$$eval('.ui-search-item__title', (elements) =>
      elements.map((element) => element.textContent.trim())
    );

    const itemPrices = await this.page.$$eval('.andes-money-amount__fraction', (elements) =>
      elements.map((element) => element.textContent.trim())
    );

    const itemLinks = await this.page.$$eval('.ui-search-link', (elements) =>
      elements.map((element) => element.href)
    );

    return itemNames.map((name, index) => ({
      name,
      price: itemPrices[index],
      link: itemLinks[index],
    }));
  }
}

module.exports = SearchResultPage;