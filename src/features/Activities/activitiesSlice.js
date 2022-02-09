import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getActivities } from "../../Services/ActivitiesService";

export const fetchActivities = createAsyncThunk("activities/get", async () => {
  const {
    data: { data },
  } = await getActivities();

  return data;
});

const activitiesSlice = createSlice({
  name: "activities",
  initialState: {
    activities: [],
    status: null,
  },
  extraReducers: {
    [fetchActivities.pending]: (state) => {
      state.status = "loading";
    },
    [fetchActivities.fulfilled]: (state, action) => {
      state.status = "success";
      state.activities = action.payload;
    },
    [fetchActivities.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export const selectorActivities = (state) => state.activities;

export default activitiesSlice.reducer;
