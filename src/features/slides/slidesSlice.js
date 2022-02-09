import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getSlides } from "../../Services/SlidesServices";

export const fetchSlides = createAsyncThunk("slides/get", async () => {
  const {
    data: { data },
  } = await getSlides();

  return data;
});

const slidesSlice = createSlice({
  name: "slides",
  initialState: {
    slides: [],
    status: null,
  },
  extraReducers: {
    [fetchSlides.pending]: (state) => {
      state.status = "loading";
    },
    [fetchSlides.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.slides = payload;
    },
    [fetchSlides.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export const selectorSlides = (state) => state.slides;

export default slidesSlice.reducer;
