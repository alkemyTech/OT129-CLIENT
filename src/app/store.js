import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";

import authReducer from "../features/auth/authSlice";
import categoriesReducer from "../features/Categories/categoriesSlice";
import newsReducer from "../features/News/news-slice";
import slidesReducer from "../features/slides/slidesSlice";
import activitiesReducer from "../features/Activities/activitiesSlice";
import organizationReducer from "../features/Organization/organizationSlice";
import membersReducer from "../features/Members/membersSlice";
import testimonialsReducer from "../features/Testimonials/testimonialsSlice";
import usersReducer from "../features/user/users-slice";

const reducers = combineReducers({
  auth: authReducer,
  categories: categoriesReducer,
  news: newsReducer,
  slides: slidesReducer,
  activities: activitiesReducer,
  organization: organizationReducer,
  members: membersReducer,
  users: usersReducer,
  testimonials: testimonialsReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "user"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;
