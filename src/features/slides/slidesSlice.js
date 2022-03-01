import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  getSlides,
  getSlidesById,
  postSlides,
  putSlides,
  removeSlides,
} from "../../Services/SlidesServices";
import { STATUS } from "../../constants";

export const fetchSlides = createAsyncThunk("slides/get", async (search) => {
  const {
    data: { data },
  } = await getSlides(search);

  return data;
});
export const fetchSlidesById = createAsyncThunk("slide/get", async (id) => {
  const {
    data: { data },
  } = await getSlidesById(id);

  return data;
});
export const newSlide = createAsyncThunk("slide/post", async (data) => {
  await postSlides(data);
});
export const putSlide = createAsyncThunk("category/put", async (formData) => {
  putSlides(formData, formData.id);
});
export const removeSlide = createAsyncThunk("slide/delete", async (id) => {
  await removeSlides(id);

  return id;
});

const slidesSlice = createSlice({
  name: "slides",
  initialState: {
    slides: [],
    slide: {},
    status: null,
  },
  extraReducers: {
    [fetchSlides.pending]: (state) => {
      state.status = STATUS.PENDING;
    },
    [fetchSlides.fulfilled]: (state, { payload }) => {
      state.status = STATUS.SUCCESSFUL;
      state.slides = payload;
      state.slide = {};
    },
    [fetchSlides.rejected]: (state) => {
      state.status = STATUS.FAILED;
    },
    [fetchSlidesById.pending]: (state) => {
      state.status = STATUS.PENDING;
    },
    [fetchSlidesById.fulfilled]: (state, { payload }) => {
      state.status = STATUS.SUCCESSFUL;
      state.slide = payload;
    },
    [fetchSlidesById.rejected]: (state) => {
      state.status = STATUS.FAILED;
    },
    [newSlide.pending]: (state) => {
      state.status = STATUS.PENDING;
    },
    [newSlide.fulfilled]: (state) => {
      state.status = STATUS.SUCCESSFUL;
    },
    [newSlide.rejected]: (state) => {
      state.status = STATUS.FAILED;
    },
    [putSlide.pending]: (state) => {
      state.status = STATUS.PENDING;
    },
    [putSlide.fulfilled]: (state) => {
      state.status = STATUS.SUCCESSFUL;
      state.slide = {};
    },
    [putSlide.rejected]: (state) => {
      state.status = STATUS.FAILED;
    },
    [removeSlide.pending]: (state) => {
      state.status = STATUS.PENDING;
    },
    [removeSlide.fulfilled]: (state, { payload }) => {
      state.status = STATUS.SUCCESSFUL;
      state.slides = state.slides.filter(({ id }) => id !== payload);
    },
    [removeSlide.rejected]: (state) => {
      state.status = STATUS.FAILED;
    },
  },
});

export const selectorSlides = (state) => state.slides;

export default slidesSlice.reducer;
