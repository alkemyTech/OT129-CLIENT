import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getUsers } from "../../Services/UsersService";
export const fetchUsers = createAsyncThunk("users/get", async () => {
  const {
    data: { data },
  } = await getUsers();

  return data;
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    status: null,
  },
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.status = "loading";
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.status = "success";
      state.users = action.payload;
    },
    [fetchUsers.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export const selectorUsers = (state) => state.users;

export default usersSlice.reducer;
