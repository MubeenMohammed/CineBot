import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE?.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Connection failed:", error));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
