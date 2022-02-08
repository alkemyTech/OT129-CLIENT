import { configureStore } from "@reduxjs/toolkit";

import aboutReducer from "../features/About/aboutSlice";

export default configureStore({
  reducer: {
    about: aboutReducer,
  },
});
