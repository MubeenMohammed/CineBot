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
    },
    nextPage(state) {
      state.page += 1;
    },
    previousPage(state) {
      state.page -= 1;
    },
  },
});

export const { setPage, nextPage, previousPage } = PageSlice.actions;

export default PageSlice.reducer;
