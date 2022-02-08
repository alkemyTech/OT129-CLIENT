import { configureStore } from "@reduxjs/toolkit";

import aboutReducer from "../features/About/aboutSlice";
import authReducer from "../features/auth/authSlice";
import newsReducer from "../features/News/news-slice";

const store = configureStore({
  reducer: {
    about: aboutReducer,
    auth: authReducer,
    news: newsReducer,
  },
});

export default store;
