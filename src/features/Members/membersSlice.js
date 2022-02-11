import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getMembers } from "../../Services/MembersService";
import { STATUS } from "../../constants";

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
      state.status = STATUS.PENDING;
    },
    [fetchMembers.fulfilled]: (state, action) => {
      state.status = STATUS.SUCCESSFUL;
      state.members = action.payload;
    },
    [fetchMembers.rejected]: (state) => {
      state.status = STATUS.FAILED;
    },
  },
});

export const selectorMembers = (state) => state.members;

export default memberSlice.reducer;
