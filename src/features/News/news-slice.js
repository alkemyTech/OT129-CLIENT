import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getNewsRedux = createAsyncThunk("news/getNewsRedux", async () => {
  return await fetch(
    `${process.env.REACT_APP_API_BASE_URL}${process.env.REACT_APP_API_NEWS_ENDPOINT}`
  ).then((res) => res.json());
});

const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [],
    status: null,
  },
  extraReducers: {
    [getNewsRedux.pending]: (state) => {
      state.status = "loading";
    },
    [getNewsRedux.fulfilled]: (state, action) => {
      state.status = "success";
      state.news = action.payload;
    },
    [getNewsRedux.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default newsSlice.reducer;
