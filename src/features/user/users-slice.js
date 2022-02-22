import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  createUsers,
  editUsers,
  getUsers,
  getUsersByID,
  deleteUsers,
} from "../../Services/UsersService";

export const fetchUsers = createAsyncThunk("users/get", async (search) => {
  const {
    data: { data },
  } = await getUsers(search);

  return data;
});

export const fetchUsersById = createAsyncThunk("user/get", async (id) => {
  const {
    data: { data },
  } = await getUsersByID(id);

  return data;
});

export const newUser = createAsyncThunk("user/post", async (data) => {
  await createUsers(data);
});

export const putUser = createAsyncThunk("user/put", async (formData) => {
  await editUsers(formData.data, formData.id);
});

export const removeUser = createAsyncThunk("users/delete", async (id) => {
  await deleteUsers(id);

  return id;
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    user: {},
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
    [fetchUsersById.pending]: (state) => {
      state.status = "loading";
    },
    [fetchUsersById.fulfilled]: (state, action) => {
      state.status = "success";
      state.user = action.payload;
    },
    [fetchUsersById.rejected]: (state) => {
      state.status = "failed";
    },
    [newUser.pending]: (state) => {
      state.status = "loading";
    },
    [newUser.fulfilled]: (state) => {
      state.status = "success";
    },
    [newUser.rejected]: (state) => {
      state.status = "failed";
    },
    [putUser.pending]: (state) => {
      state.status = "loading";
    },
    [putUser.fulfilled]: (state) => {
      state.status = "success";
      state.user = {};
    },
    [putUser.rejected]: (state) => {
      state.status = "failed";
    },
    [removeUser.pending]: (state) => {
      state.status = "loading";
    },
    [removeUser.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.users = state.users.filter(({ id }) => id !== payload);
    },
    [removeUser.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export const selectorUsers = (state) => state.users;

export default usersSlice.reducer;
