import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { STATUS } from "../../constants";

import { login, register } from "../../Services/authServices";

export const getLogged = createAsyncThunk("auth/getLogged", async (data) => {
  const response = await login(data);

  localStorage.setItem("token", response.data.data.token);

  return response.data.data;
});
export const getRegistered = createAsyncThunk("auth/getRegistered", async (data) => {
  const response = await register(data);

  localStorage.setItem("token", response.data.data.token);

  return response.data.data;
});

export const getToken = createAsyncThunk("auth/getToken", async () => {
  const response = localStorage.getItem("token");

  console.log(response);

  if (!response === "") {
    return true;
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    auth: false,
    user: {},
    token: "",
  },
  extraReducers: {
    [getLogged.pending]: (state) => {
      state.status = STATUS.PENDING;
    },
    [getLogged.fulfilled]: (state, action) => {
      state.status = STATUS.SUCCESSFUL;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.auth = true;
    },
    [getLogged.rejected]: (state) => {
      state.status = STATUS.FAILED;
    },
    [getToken.pending]: (state) => {
      state.status = STATUS.PENDING;
    },
    [getToken.fulfilled]: (state, action) => {
      state.token = action.payload;
    },
    [getToken.rejected]: (state) => {
      state.status = STATUS.FAILED;
    },
  },
});

export const { autheticate, logout } = authSlice.actions;

export const selectAuth = (state) => state.auth;

export default authSlice.reducer;
