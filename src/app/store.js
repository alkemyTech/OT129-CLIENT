import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import newsReducer from "../features/News/news-slice";
import slidesReducer from "../features/slides/slidesSlice";
import usersReducer from "../features/user/users-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    news: newsReducer,
    slides: slidesReducer,
    users: usersReducer,
  },
});

export default store;
