import express from "express";
import movieRouter from "./routes/movieRoutes.js";
import recommendationRouter from "./routes/recommendationRoutes.js";
import watchListRouter from "./routes/watchlistRoutes.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/movies", movieRouter);
app.use("/api/v1/recommendations", recommendationRouter);
app.use("/api/v1/watchlists", watchListRouter);

export default app;
