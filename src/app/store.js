import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import newsReducer from "../features/News/news-slice";
import slidesReducer from "../features/slides/slidesSlice";
import organizationReducer from "../features/Organization/organizationSlice";
import membersReducer from "../features/Members/membersSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    news: newsReducer,
    slides: slidesReducer,
    organization: organizationReducer,
    members: membersReducer,
  },
});

export default store;
