export const getWatchListMovies = async (req, res) => {
  try {
    // Get watchlist movies from your database or API
    const watchListMovies = {
      title: "The Dark Knight",
    };

    res.status(200).json(watchListMovies);
  } catch (error) {
    res.status(500).json({ message: "Error fetching watchlist movies" });
  }
};
