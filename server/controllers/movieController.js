import Movie from "../models/Movie.js";
import scrapeMovies from "../scrapers/scrapeMovies.js";
import APIFeatures from "../utils/apiFeatures.js";

export const getMovies = async (req, res) => {
  try {
    //EXECUTE QUERY
    const features = new APIFeatures(Movie.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const movies = await features.query;

    //SEND RESPONSE
    res.status(200).json({
      status: "success",
      results: movies.length,
      data: {
        movies,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      message: error.message,
    });
  }
};

export const addMovie = async (req, res) => {
  try {
    const newMovie = await Movie.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        movie: newMovie,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};

export const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        movie,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      message: error.message,
    });
  }
};

export const updateMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        movie,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      error: error.message,
    });
  }
};

export const deleteMovie = async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      message: "Movie deleted successfully",
    });
  } catch (error) {
    res.status(404).json({
      status: "failed",
      message: error.message,
    });
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
