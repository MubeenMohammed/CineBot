import express from "express";
import {
  getMovies,
  addMovie,
  getMovieById,
  updateMovie,
  deleteMovie,
} from "../controllers/movieController.js"; // Add .js extension

const router = express.Router();

router.route("/").get(getMovies).post(addMovie);

router.route("/:id").get(getMovieById).put(updateMovie).delete(deleteMovie);

export default router;
