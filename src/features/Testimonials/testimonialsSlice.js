import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  getTestimonials,
  getTestimonialById,
  getLastTestimonials,
  createTestimonial,
  editTestimonial,
  deleteTestimonial,
} from "../../Services/TestimonialsService";

export const fetchTestimonials = createAsyncThunk("testimonials/get", async (search) => {
  const {
    data: { data },
  } = await getTestimonials(search);

  return data;
});

export const fetchTestimonialById = createAsyncThunk("testimonial/get", async (id) => {
  const {
    data: { data },
  } = await getTestimonialById(id);

  return data;
});

export const fetchLastTestimonials = createAsyncThunk("testimonial/get", async (entries) => {
  const {
    data: { data },
  } = await getLastTestimonials(entries);

  return data;
});

export const newTestimonial = createAsyncThunk("testimonial/post", async (data) => {
  await createTestimonial(data);
});

export const putTestimonial = createAsyncThunk("testimonial/put", async (formData) => {
  editTestimonial(formData.data, formData.id);
});

export const removeTestimonial = createAsyncThunk("testimonial/delete", async (id) => {
  await deleteTestimonial(id);

  return id;
});

const TestimonialSlice = createSlice({
  name: "testimonials",
  initialState: {
    testimonials: [],
    testimonial: {},
    lastTestimonials: [],
    status: null,
  },
  extraReducers: {
    [fetchTestimonials.pending]: (state) => {
      state.status = "loading";
    },
    [fetchTestimonials.fulfilled]: (state, action) => {
      state.status = "success";
      state.testimonials = action.payload;
      state.testimonial = {};
    },
    [fetchTestimonials.rejected]: (state) => {
      state.status = "failed";
    },
    [fetchTestimonialById.pending]: (state) => {
      state.status = "loading";
    },
    [fetchTestimonialById.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.testimonial = payload;
    },
    [fetchTestimonialById.rejected]: (state) => {
      state.status = "failed";
    },
    [fetchLastTestimonials.pending]: (state) => {
      state.status = "loading";
    },
    [fetchLastTestimonials.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.lastTestimonials = payload;
    },
    [fetchLastTestimonials.rejected]: (state) => {
      state.status = "failed";
    },
    [newTestimonial.pending]: (state) => {
      state.status = "loading";
    },
    [newTestimonial.fulfilled]: (state) => {
      state.status = "success";
    },
    [newTestimonial.rejected]: (state) => {
      state.status = "failed";
    },
    [putTestimonial.pending]: (state) => {
      state.status = "loading";
    },
    [putTestimonial.fulfilled]: (state) => {
      state.status = "success";
      state.testimonial = {};
    },
    [putTestimonial.rejected]: (state) => {
      state.status = "failed";
    },
    [removeTestimonial.pending]: (state) => {
      state.status = "loading";
    },
    [removeTestimonial.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.testimonials = state.testimonials.filter(({ id }) => id !== payload);
    },
    [removeTestimonial.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export const selectorTestimonials = (state) => state.testimonials;

export default TestimonialSlice.reducer;
