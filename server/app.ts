import express from "express";
import movieRouter from "./routes/movieRoutes";
import recommendationRouter from "./routes/recommendationRoutes";
import watchListRouter from "./routes/watchlistRoutes";

const app = express();

app.use(express.json());

app.use("./api/v1/movies", movieRouter);

app.use("./api/v1/recommendations", recommendationRouter);

app.use("./api/v1/watchlists", watchListRouter);

export default app;
