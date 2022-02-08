import { configureStore } from "@reduxjs/toolkit";

import newsReducer from "../features/News/news-slice";

const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});

export default store;
