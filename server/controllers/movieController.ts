export const getMovies = async (req: any, res: any) => {
  try {
    const movies = {
      title: "The Dark Knight",
    };
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addMovie = async (req: any, res: any) => {
  try {
    const movie = {
      title: "The Dark Knight",
    };
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getMovieById = async (req: any, res: any) => {
  try {
    const movie = {
      title: "The Dark Knight",
    };
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateMovie = async (req: any, res: any) => {
  try {
    const movie = {
      title: "The Dark Knight",
    };
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteMovie = async (req: any, res: any) => {
  try {
    const movie = {
      title: "The Dark Knight",
    };
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
