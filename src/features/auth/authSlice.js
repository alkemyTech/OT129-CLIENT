import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { STATUS } from "../../constants";
import { login, register } from "../../Services/authServices";
import { alerts } from "../../utils/alerts";

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
    user: {},
    token: "",
    isLoading: false,
  },
  reducers: {
    logout: (state) => {
      localStorage.clear();
      state.auth = false;
    },
  },

  extraReducers: {
    [getLogged.pending]: (state) => {
      state.status = STATUS.PENDING;
      state.isLoading = true;
    },
    [getLogged.rejected]: (state) => {
      state.status = STATUS.FAILED;
      state.isLoading = false;
      alerts("Datos incorrectos, intente nuevamente.", "error");
    },
    [getLogged.fulfilled]: (state, action) => {
      state.status = STATUS.SUCCESSFUL;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.auth = true;
      state.isLoading = false;
    },
    [getRegistered.pending]: (state) => {
      state.status = STATUS.PENDING;
      state.isLoading = true;
    },
    [getRegistered.rejected]: (state) => {
      state.status = STATUS.FAILED;
      state.isLoading = false;
      alerts("El email ingresado ya se encuentra registrado", "error");
    },
    [getRegistered.fulfilled]: (state, action) => {
      state.status = STATUS.SUCCESSFUL;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.auth = true;
      state.isLoading = false;
      alerts("Registro exitoso, inicie sesión.", "success");
    },
  },
});

export const { autheticate, logout } = authSlice.actions;

export const selectAuth = (state) => state.auth;

export default authSlice.reducer;
