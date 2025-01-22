import { createSlice } from "@reduxjs/toolkit";

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
    setPage(state, action) {
      state.page = action.payload;
    },
  },
});

export const { setPage } = PageSlice.actions;

export default PageSlice.reducer;
