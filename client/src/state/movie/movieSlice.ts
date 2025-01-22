import Movie from "@/types/movies";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMovies } from "../../../util/backendAPICalls";
import { RootState } from "../store";

interface MovieState {
  movies: Movie[];
  loading: boolean;
  error: string | null;
}

const initialState: MovieState = {
  movies: [
    {
      id: 1,
      lastUpdated: new Date(),
      title: "The Shawshank Redemption",
      description:
        "A banker convicted of uxoricide forms a friendship over a quarter century with a hardened convict, while maintaining his innocence and trying to remain hopeful through simple compassion.",
      duration: "2h 22min",
      ratingValue: 9.3,
      url: "https://www.imdb.com/title/tt0111161/",
      image:
        "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_.jpg",
      genre: "Drama",
      ratingCount: 2993410,
    },
  ],
  loading: false,
  error: null,
};

const MovieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovie(state, action: PayloadAction<Movie>) {
      state.movies.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred.";
      });
  },
});

export const fetchMovies = createAsyncThunk(
  "movie/fetchMovies",
  async (_, { getState }) => {
    const state = getState() as RootState;
    const page = state.page.page; // Correctly accessing state
    return await getMovies(page);
  }
);

export const { addMovie } = MovieSlice.actions;

export default MovieSlice.reducer;
