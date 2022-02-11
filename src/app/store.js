import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import categoriesReducer from "../features/Categories/categoriesSlice";
import newsReducer from "../features/News/news-slice";
import slidesReducer from "../features/slides/slidesSlice";
import activitiesReducer from "../features/Activities/activitiesSlice";
import organizationReducer from "../features/Organization/organizationSlice";
import membersReducer from "../features/Members/membersSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: categoriesReducer,
    news: newsReducer,
    slides: slidesReducer,
    activities: activitiesReducer,
    organization: organizationReducer,
    members: membersReducer,
  },
});

export default store;
