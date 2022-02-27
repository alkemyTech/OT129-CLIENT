import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getSlides, removeSlides } from "../../Services/SlidesServices";
import { STATUS } from "../../constants";

export const fetchSlides = createAsyncThunk("slides/get", async (search) => {
  const {
    data: { data },
  } = await getSlides(search);

  return data;
});
export const removeSlide = createAsyncThunk("slide/delete", async (id) => {
  await removeSlides(id);

  return id;
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

    [removeSlide.pending]: (state) => {
      state.status = "loading";
    },
    [removeSlide.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.slides = state.slides.filter(({ id }) => id !== payload);
    },
    [removeSlide.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export const selectorSlides = (state) => state.slides;

export default slidesSlice.reducer;
