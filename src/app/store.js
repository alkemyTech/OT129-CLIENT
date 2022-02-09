import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import categoriesReducer from "../features/Categories/categoriesSlice";
import newsReducer from "../features/News/news-slice";
import slidesReducer from "../features/slides/slidesSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: categoriesReducer,
    news: newsReducer,
    slides: slidesReducer,
  },
});

export default store;
