import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getNews } from "../../Services/NewsService";

export const fetchNews = createAsyncThunk("news/get", async () => {
  return await getNews().then((res) => res.data);
});

const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [],
    status: null,
  },
  extraReducers: {
    [fetchNews.pending]: (state) => {
      state.status = "loading";
    },
    [fetchNews.fulfilled]: (state, action) => {
      state.status = "success";
      state.news = action.payload;
    },
    [fetchNews.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default newsSlice.reducer;
