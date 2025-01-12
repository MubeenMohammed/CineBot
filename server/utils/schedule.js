import cron from "node-cron";
import { saveMoviesToDB } from "../controllers/movieController.js";

export const scheduleMovieScraper = () => {
  cron.schedule("0 0 * * 0", async () => {
    console.log("Running movie scraper task...");
    await saveMoviesToDB();
    console.log("Movie scraper task completed.");
  });
};
