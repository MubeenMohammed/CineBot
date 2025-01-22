import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from "./movie/movieSlice";
import PageReducer from "./page/pageSlice";

export const store = configureStore({
  reducer: {
    movie: MovieReducer,
    page: PageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
