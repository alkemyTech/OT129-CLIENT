import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getMembers } from "../../Services/MembersService";

export const fetchMembers = createAsyncThunk("members/get", async () => {
  const {
    data: { data },
  } = await getMembers();

  return data;
});

const memberSlice = createSlice({
  name: "members",
  initialState: {
    members: [],
    status: null,
  },
  extraReducers: {
    [fetchMembers.pending]: (state) => {
      state.status = "loading";
    },
    [fetchMembers.fulfilled]: (state, action) => {
      state.status = "successful";
      state.members = action.payload;
    },
    [fetchMembers.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export const selectorMembers = (state) => state.members;

export default memberSlice.reducer;
