import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app.js";
import { scheduleMovieScraper } from "./utils/schedule.js";
import { saveMoviesToDB } from "./controllers/movieController.js";

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE?.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

scheduleMovieScraper();

mongoose
  .connect(DB)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Connection failed:", error));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
