import { createSlice } from "@reduxjs/toolkit";

import { useLocalStorage } from "../../hooks/useLocalStorage";
import { login, register } from "../../Services/authServices";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    auth: false,
    data: {},
    token: "",
  },
  reducers: {
    autheticate: (state, action) => {
      state.auth = true;
      state.data = action.payload.data;
      state.token = action.payload.data.token;
    },
    logout: (state) => {
      state.auth = initialState.auth;
      state.data = initialState.data;
      state.data = initialState.token;
    },
  },
});

export const { autheticate, logout } = authSlice.actions;

export const getLogged = (data) => (dispatch) => {
  login(data).then((response) => {
    if ("success") {
      dispatch(autheticate(response.data));
      useLocalStorage("token", response.data.token);
    }
  });
};
export const getRegistered = (data) => (dispatch) => {
  register(data).then((response) => {
    if ("success") {
      dispatch(autheticate(response.data));
      useLocalStorage("token", response.data.token);
    }
  });
};
export const getLoggedOut = () => (dispatch) => {
  dispatch(logout());
};

export const selectAuth = (state) => state.auth;

export default authSlice.reducer;
