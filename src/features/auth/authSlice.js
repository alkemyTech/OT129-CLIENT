import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
  extraReducers: (builder) => {
    builder.addCase(getLogged.fulfilled, (state, action) => {
      return {
        ...state,
        auth: true,
        data: action.payload,
        token: action.payload.token,
      };
    });
    builder.addCase(getRegistered.fulfilled, (state, action) => {
      return {
        ...state,
        auth: true,
        data: action.payload,
        token: action.payload.token,
      };
    });
  },
});

export const { autheticate, logout } = authSlice.actions;

export const selectAuth = (state) => state.auth;

export default authSlice.reducer;
