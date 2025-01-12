import puppeteer from "puppeteer";

const scrapeMovies = async (url) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set a common User-Agent
  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
  );

  await page.goto(url, { waitUntil: "networkidle2" });

  // Extracting JSON-LD data
  const jsonLdData = await page.evaluate(() => {
    const script = document.querySelector('script[type="application/ld+json"]');
    if (script) {
      return JSON.parse(script.innerText);
    }
    return null;
  });

  await browser.close();

  if (jsonLdData && jsonLdData.itemListElement) {
    // Convert JSON-LD data to your desired format
    const movies = jsonLdData.itemListElement.map((item) => ({
      title: item.item.name,
      url: item.item.url,
      image: item.item.image,
      ratingValue: item.item.aggregateRating?.ratingValue
        ? Number(item.item.aggregateRating.ratingValue)
        : null,
      ratingCount: item.item.aggregateRating?.ratingCount
        ? Number(item.item.aggregateRating.ratingCount)
        : null,
      genre: item.item.genre,
      description: item.item.description,
      duration: item.item.duration.replace("PT", ""),
    }));
    return movies;
  }

  return [];
};

export default scrapeMovies;
