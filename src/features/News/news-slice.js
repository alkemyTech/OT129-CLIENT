import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  getNews,
  getNewsById,
  getLastNews,
  createNews,
  editNews,
  removeNews,
} from "../../Services/NewsService";
import { STATUS } from "../../constants";

export const fetchNews = createAsyncThunk("news/get", async (search) => {
  const {
    data: { data },
  } = await getNews(search);

  return data;
});

export const fetchLastNews = createAsyncThunk("news/get", async (entries) => {
  const {
    data: { data },
  } = await getLastNews(entries);

  return data;
});

export const fetchNewsById = createAsyncThunk("new/get", async (id) => {
  const {
    data: { data },
  } = await getNewsById(id);

  return data;
});

export const newNews = createAsyncThunk("new/post", async (data) => {
  await createNews(data);
});

export const putNew = createAsyncThunk("new/put", async (formData) => {
  editNews(formData.data, formData.id);
});
export const removeNew = createAsyncThunk("new/delete", async (id) => {
  await removeNews(id);

  return id;
});

const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [],
    _new: {},
    last_news: [],
    status: null,
  },
  extraReducers: {
    [fetchNews.pending]: (state) => {
      state.status = STATUS.PENDING;
    },
    [fetchNews.fulfilled]: (state, action) => {
      state.status = STATUS.SUCCESSFUL;
      state.news = action.payload;
    },
    [fetchNews.rejected]: (state) => {
      state.status = STATUS.FAILED;
    },
    [fetchNewsById.pending]: (state) => {
      state.status = STATUS.PENDING;
    },
    [fetchNewsById.fulfilled]: (state, { payload }) => {
      state.status = STATUS.SUCCESSFUL;
      state._new = payload;
    },
    [fetchNewsById.rejected]: (state) => {
      state.status = STATUS.FAILED;
    },
    [fetchLastNews.pending]: (state) => {
      state.status = STATUS.PENDING;
    },
    [fetchLastNews.fulfilled]: (state, action) => {
      state.status = STATUS.SUCCESSFUL;
      state.last_news = action.payload;
    },
    [fetchLastNews.rejected]: (state) => {
      state.status = STATUS.FAILED;
    },
    [newNews.pending]: (state) => {
      state.status = STATUS.PENDING;
    },
    [newNews.fulfilled]: (state) => {
      state.status = STATUS.SUCCESSFUL;
    },
    [newNews.rejected]: (state) => {
      state.status = STATUS.FAILED;
    },
    [putNew.pending]: (state) => {
      state.status = STATUS.PENDING;
    },
    [putNew.fulfilled]: (state) => {
      state.status = STATUS.SUCCESSFUL;
      state._new = {};
    },
    [putNew.rejected]: (state) => {
      state.status = STATUS.FAILED;
    },
    [removeNew.pending]: (state) => {
      state.status = STATUS.PENDING;
    },
    [removeNew.fulfilled]: (state, { payload }) => {
      state.status = STATUS.SUCCESSFUL;
      state.news = state.news.filter(({ id }) => id !== payload);
    },
    [removeNew.rejected]: (state) => {
      state.status = STATUS.FAILED;
    },
  },
});

export const selectorNews = (state) => state.news;

export default newsSlice.reducer;
