import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getOrganizations } from "../../Services/OrganizationService";

export const fetchOrganization = createAsyncThunk("organization/get", async () => {
  const {
    data: { data },
  } = await getOrganizations();

  return data;
});

const organizationSlice = createSlice({
  name: "organization",
  initialState: {
    organization: [],
    status: null,
  },
  extraReducers: {
    [fetchOrganization.pending]: (state) => {
      state.status = "loading";
    },
    [fetchOrganization.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.organization = action.payload;
    },
    [fetchOrganization.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export const selectorOrganization = (state) => state.organization;

export default organizationSlice.reducer;
