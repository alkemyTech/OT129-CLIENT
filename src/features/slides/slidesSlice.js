import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getSlides } from "../../Services/SlidesServices";
import { STATUS } from "../../constants";

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
      state.status = STATUS.PENDING;
    },
    [fetchSlides.fulfilled]: (state, { payload }) => {
      state.status = STATUS.SUCCESSFUL;
      state.slides = payload;
    },
    [fetchSlides.rejected]: (state) => {
      state.status = STATUS.FAILED;
    },
  },
});

export const selectorSlides = (state) => state.slides;

export default slidesSlice.reducer;
