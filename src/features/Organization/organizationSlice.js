import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  getOrganizations,
  editOrganization,
  addOrganization,
} from "../../Services/OrganizationService";
import { STATUS } from "../../constants";

export const fetchOrganization = createAsyncThunk("organization/get", async () => {
  const {
    data: { data },
  } = await getOrganizations();

  return data;
});

export const newOrganization = createAsyncThunk("organization/post", async (data) => {
  await addOrganization(data);
});

export const putOrganization = createAsyncThunk("organization/put", async (data) => {
  editOrganization(data.data, data.id);
});

const organizationSlice = createSlice({
  name: "organization",
  initialState: {
    organization: {},
    status: null,
  },
  extraReducers: {
    [fetchOrganization.pending]: (state) => {
      state.status = STATUS.PENDING;
    },
    [fetchOrganization.fulfilled]: (state, action) => {
      state.status = STATUS.SUCCESSFUL;
      state.organization = action.payload;
    },
    [fetchOrganization.rejected]: (state) => {
      state.status = STATUS.FAILED;
    },
    [newOrganization.pending]: (state) => {
      state.status = STATUS.PENDING;
    },
    [newOrganization.fulfilled]: (state) => {
      state.status = STATUS.SUCCESSFUL;
    },
    [newOrganization.rejected]: (state) => {
      state.status = STATUS.FAILED;
    },
    [putOrganization.pending]: (state) => {
      state.status = STATUS.PENDING;
    },
    [putOrganization.fulfilled]: (state) => {
      state.status = STATUS.SUCCESSFUL;
      state.organization = {};
    },
    [putOrganization.rejected]: (state) => {
      state.status = STATUS.FAILED;
    },
  },
});

export const selectorOrganization = (state) => state.organization;

export default organizationSlice.reducer;
