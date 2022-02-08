import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getOrganizations } from "../../Services/OrganizationService";

export const fetchOrganization = createAsyncThunk("about/get", async () => {
  const {
    data: { data },
  } = await getOrganizations();

  return data;
});

const aboutSlice = createSlice({
  name: "about",
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

export const selectorOrganization = (state) => state.about.organization;

export default aboutSlice.reducer;
