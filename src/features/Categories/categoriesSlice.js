import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getCategories } from "../../Services/CategoriesService";

export const fetchCategories = createAsyncThunk("categories/get", async () => {
  const {
    data: { data },
  } = await getCategories();

  return data;
});

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    status: null,
  },
  extraReducers: {
    [fetchCategories.pending]: (state) => {
      state.status = "loading";
    },
    [fetchCategories.fulfilled]: (state, action) => {
      state.status = "success";
      state.categories = action.payload;
    },
    [fetchCategories.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export const selectorCategories = (state) => state.categories;

export default categoriesSlice.reducer;
