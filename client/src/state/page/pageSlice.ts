import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PageState {
  page: number;
}

const initialState: PageState = {
  page: 1,
};

const PageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    nextPage(state) {
      state.page += 1;
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    previousPage(state) {
      state.page -= 1;
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
});

export const { setPage, nextPage, previousPage } = PageSlice.actions;

export default PageSlice.reducer;
