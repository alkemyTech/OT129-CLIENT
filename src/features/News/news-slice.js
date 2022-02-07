import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getNews = createAsyncThunk("news/getNewsRedux", async () => {
  return await fetch(`${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_API_NEWS_ENDPOINT}`)
  .then((res) => res.json());
});

const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [],
    status: null,
  },
  extraReducers: {
    [getNews.pending]: (state) => {
      state.status = "loading";
    },
    [getNews.fulfilled]: (state, action) => {
      state.status = "success";
      state.news = action.payload;
    },
    [getNews.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default newsSlice.reducer;
