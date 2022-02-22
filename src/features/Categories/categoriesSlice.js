import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  getCategories,
  deleteCategory,
  getCategoryById,
  createCategory,
  editCategory,
} from "../../Services/CategoriesService";

export const fetchCategories = createAsyncThunk("categories/get", async (search) => {
  const {
    data: { data },
  } = await getCategories(search);

  return data;
});

export const fetchCategoryById = createAsyncThunk("category/get", async (id) => {
  const {
    data: { data },
  } = await getCategoryById(id);

  return data;
});

export const newCategory = createAsyncThunk("category/post", async (data) => {
  await createCategory(data);
});

export const putCategory = createAsyncThunk("category/put", async (formData) => {
  editCategory(formData.data, formData.id);
});

export const removeCategory = createAsyncThunk("categories/delete", async (id) => {
  await deleteCategory(id);

  return id;
});

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    category: {},
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
    [fetchCategoryById.pending]: (state) => {
      state.status = "loading";
    },
    [fetchCategoryById.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.category = payload;
    },
    [fetchCategoryById.rejected]: (state) => {
      state.status = "failed";
    },
    [newCategory.pending]: (state) => {
      state.status = "loading";
    },
    [newCategory.fulfilled]: (state) => {
      state.status = "success";
    },
    [newCategory.rejected]: (state) => {
      state.status = "failed";
    },
    [putCategory.pending]: (state) => {
      state.status = "loading";
    },
    [putCategory.fulfilled]: (state) => {
      state.status = "success";
      state.category = {};
    },
    [putCategory.rejected]: (state) => {
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
