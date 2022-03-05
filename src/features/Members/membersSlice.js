import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  getMembers,
  getMemberByID,
  createMember,
  editMember,
  deleteMember,
} from "../../Services/MembersService";
import { STATUS } from "../../constants";

export const fetchMembers = createAsyncThunk("members/get", async (search) => {
  const {
    data: { data },
  } = await getMembers(search);

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

export const removeMember = createAsyncThunk("members/delete", async (id) => {
  await deleteMember(id);

  return id;
});

const memberSlice = createSlice({
  name: "members",
  initialState: {
    members: [],
    member: {},
    status: null,
  },
  extraReducers: {
    [fetchMembers.pending]: (state) => {
      state.status = STATUS.PENDING;
    },
    [fetchMembers.fulfilled]: (state, action) => {
      state.status = STATUS.SUCCESSFUL;
      state.members = action.payload;
      state.member = {};
    },
    [fetchMembers.rejected]: (state) => {
      state.status = STATUS.FAILED;
    },
    [fetchMemberById.pending]: (state) => {
      state.status = STATUS.PENDING;
    },
    [fetchMemberById.fulfilled]: (state, action) => {
      state.status = STATUS.SUCCESSFUL;
      state.member = action.payload;
    },
    [fetchMemberById.rejected]: (state) => {
      state.status = STATUS.FAILED;
    },
    [newMember.pending]: (state) => {
      state.status = STATUS.PENDING;
    },
    [newMember.fulfilled]: (state) => {
      state.status = STATUS.SUCCESSFUL;
    },
    [newMember.rejected]: (state) => {
      state.status = STATUS.FAILED;
    },
    [putMember.pending]: (state) => {
      state.status = STATUS.PENDING;
    },
    [putMember.fulfilled]: (state, action) => {
      state.status = STATUS.PENDING;
      state.members = action.payload;
    },
    [putMember.rejected]: (state) => {
      state.status = STATUS.PENDING;
    },
    [removeMember.pending]: (state) => {
      state.status = STATUS.PENDING;
    },
    [removeMember.fulfilled]: (state, { payload }) => {
      state.status = STATUS.PENDING;
      state.members = state.members.filter(({ id }) => id !== payload);
    },
    [removeMember.rejected]: (state) => {
      state.status = STATUS.PENDING;
    },
  },
});

export const selectorMembers = (state) => state.members;

export default memberSlice.reducer;
