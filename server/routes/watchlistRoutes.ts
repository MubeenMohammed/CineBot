import express from "express";
import { getWatchListMovies } from "../controllers/watchListController";

const router = express.Router();

router.get("/", getWatchListMovies);

export default router;
