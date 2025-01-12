import express from "express";
import { getWatchListMovies } from "../controllers/watchListController.js";

const router = express.Router();

router.get("/", getWatchListMovies);

export default router;
