const fs = require('fs');
const scrapeWebsite = require('./utils/scraper');

const outputFileName = 'scraped_items.txt';

const urlsToScrape = [
  'https://listado.mercadolibre.com.pe/camisetas#D[A:camisetas]',
  'https://listado.mercadolibre.com.pe/deportes-fitness/futbol/ropa-calzado/camisetas/camisetas_Desde_51_NoIndex_True',
  'https://listado.mercadolibre.com.pe/deportes-fitness/futbol/ropa-calzado/camisetas/camisetas_Desde_101_NoIndex_True',
];

(async () => {
  const allItems = [];

  for (const url of urlsToScrape) {
    const items = await scrapeWebsite(url);
    allItems.push(...items);
  }

  // Save the results to a text file
  const resultText = allItems.map((item) => `${item.name} - ${item.price} - ${item.link}`).join('\n');
  fs.writeFileSync(outputFileName, resultText, 'utf-8');

  console.log(`Scraping completed. Results saved to ${outputFileName}`);
})();
