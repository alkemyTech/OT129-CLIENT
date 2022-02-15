import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getMembers, getMemberByID, createMember, editMember } from "../../Services/MembersService";
import { STATUS } from "../../constants";

export const fetchMembers = createAsyncThunk("members/get", async () => {
  const {
    data: { data },
  } = await getMembers();

  return data;
});

export const fetchMemberById = createAsyncThunk("member/get", async (id) => {
  const {
    data: { data },
  } = await getMemberByID(id);

  return data;
});

export const newMember = createAsyncThunk("member/post", async (data) => {
  await createMember(data);
});

export const putMember = createAsyncThunk("member/put", async (data) => {
  await editMember(data, data.id);
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
    [fetchMemberById.pending]: (state) => {
      state.status = STATUS.PENDING;
    },
    [fetchMemberById.fulfilled]: (state, action) => {
      state.status = STATUS.SUCCESSFUL;
      state.members = action.payload;
    },
    [fetchMemberById.rejected]: (state) => {
      state.status = STATUS.FAILED;
    },
    [newMember.pending]: (state) => {
      state.status = STATUS.PENDING;
    },
    [newMember.fulfilled]: (state, action) => {
      state.status = STATUS.SUCCESSFUL;
      state.members = action.payload;
    },
    [newMember.rejected]: (state) => {
      state.status = STATUS.FAILED;
    },
    [putMember.pending]: (state) => {
      state.status = STATUS.PENDING;
    },
    [putMember.fulfilled]: (state, action) => {
      state.status = STATUS.SUCCESSFUL;
      state.members = action.payload;
    },
    [putMember.rejected]: (state) => {
      state.status = STATUS.FAILED;
    },
  },
});

export const selectorMembers = (state) => state.members;

export default memberSlice.reducer;
