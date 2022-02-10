import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getCategories, deleteCategory } from "../../Services/CategoriesService";

export const fetchCategories = createAsyncThunk("categories/get", async () => {
  const {
    data: { data },
  } = await getCategories();

  return data;
});

export const removeCategory = createAsyncThunk("categories/delete", async (id) => {
  await deleteCategory(id);

  return id;
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
    [removeCategory.pending]: (state) => {
      state.status = "loading";
    },
    [removeCategory.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.categories = state.categories.filter(({ id }) => id !== payload);
    },
    [removeCategory.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export const selectorCategories = (state) => state.categories;

export default categoriesSlice.reducer;
