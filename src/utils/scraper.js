const { chromium } = require('playwright');
const SearchResultPage = require('../pages/SearchResultPage');

const scrapeWebsite = async (url) => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const searchResultPage = new SearchResultPage(page);

  await searchResultPage.navigateTo(url);
  const items = await searchResultPage.scrapeItems();

  await browser.close();
  return items;
};

module.exports = scrapeWebsite;
