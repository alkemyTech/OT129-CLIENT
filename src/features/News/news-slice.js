import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getNews } from "../../Services/NewsService";
import { STATUS } from "../../constants";

export const fetchNews = createAsyncThunk("news/get", async () => {
  const {
    data: { data },
  } = await getNews();

  return data;
});

const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [],
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
  },
});

export const selectorNews = (state) => state.news;

export default newsSlice.reducer;
