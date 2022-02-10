import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import membersReducer from "../features/Members/membersSlice";
import newsReducer from "../features/News/news-slice";
import organizationReducer from "../features/Organization/organizationSlice";
import slidesReducer from "../features/slides/slidesSlice";
import usersReducer from "../features/user/users-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    news: newsReducer,
    slides: slidesReducer,
    organization: organizationReducer,
    members: membersReducer,
    users: usersReducer,
  },
});

export default store;
