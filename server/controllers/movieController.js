import Movie from "../models/Movie.js";
import scrapeMovies from "../scrapers/scrapeMovies.js";

export const getMovies = async (req, res) => {
  try {
    const movies = {
      title: "The Dark Knight",
    };
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addMovie = async (req, res) => {
  try {
    const movie = {
      title: "The Dark Knight",
    };
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getMovieById = async (req, res) => {
  try {
    const movie = {
      title: "The Dark Knight",
    };
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateMovie = async (req, res) => {
  try {
    const movie = {
      title: "The Dark Knight",
    };
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteMovie = async (req, res) => {
  try {
    const movie = {
      title: "The Dark Knight",
    };
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const saveMoviesToDB = async () => {
  try {
    const movies = await scrapeMovies("https://www.imdb.com/chart/top/");
    if (movies.length) {
      // Clear existing movies
      await Movie.deleteMany();

      // Save new movies to the database
      await Movie.create(movies);
      console.log(`${movies.length} movies saved to the database successfully`);
    }
  } catch (error) {
    console.error("Error saving movies to database:", error);
  }
};
