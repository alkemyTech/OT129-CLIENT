import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import categoriesReducer from "../features/Categories/categoriesSlice";
import slidesReducer from "../features/slides/slidesSlice";
import activitiesReducer from "../features/Activities/activitiesSlice";
import membersReducer from "../features/Members/membersSlice";
import newsReducer from "../features/News/news-slice";
import organizationReducer from "../features/Organization/organizationSlice";
import usersReducer from "../features/user/users-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: categoriesReducer,
    news: newsReducer,
    slides: slidesReducer,
    activities: activitiesReducer,
    organization: organizationReducer,
    members: membersReducer,
    users: usersReducer,
  },
});

export default store;
