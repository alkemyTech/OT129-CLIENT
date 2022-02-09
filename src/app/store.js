import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import newsReducer from "../features/News/news-slice";
import slidesReducer from "../features/slides/slidesSlice";
import activitiesReducer from "../features/Activities/activitiesSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    news: newsReducer,
    slides: slidesReducer,
    activities: activitiesReducer,
  },
});

export default store;
