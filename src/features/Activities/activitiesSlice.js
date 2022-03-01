import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { STATUS } from "../../constants";
import {
  getActivities,
  getActivityByID,
  editActivity,
  createActivity,
  deleteActivity,
} from "../../Services/ActivitiesService";

export const fetchActivities = createAsyncThunk("activities/get", async (search) => {
  const {
    data: { data },
  } = await getActivities(search);

  return data;
});

export const fetchActivity = createAsyncThunk("activity/get", async (id) => {
  const {
    data: { data },
  } = await getActivityByID(id);

  return data;
});

export const putActivity = createAsyncThunk("activity/put", async (data) => {
  await editActivity(data.values, data.id);
});

export const postActivity = createAsyncThunk("activity/post", async (dataActivity) => {
  const {
    data: { data },
  } = await createActivity(dataActivity);

  return data;
});

export const removeActivity = createAsyncThunk("activities/delete", async (id) => {
  await deleteActivity(id);

  return id;
});

const activitiesSlice = createSlice({
  name: "activities",
  initialState: {
    activities: [],
    activity: {},
    status: null,
  },
  extraReducers: {
    [fetchActivities.pending]: (state) => {
      state.status = STATUS.PENDING;
    },
    [fetchActivities.fulfilled]: (state, action) => {
      state.status = STATUS.SUCCESSFUL;
      state.activities = action.payload;
      state.activity = {};
    },
    [fetchActivities.rejected]: (state) => {
      state.status = STATUS.FAILED;
    },
    [fetchActivity.pending]: (state) => {
      state.status = STATUS.PENDING;
    },
    [fetchActivity.fulfilled]: (state, { payload }) => {
      state.status = STATUS.SUCCESSFUL;
      state.activity = payload;
    },
    [fetchActivity.rejected]: (state) => {
      state.status = STATUS.FAILED;
    },
    [putActivity.pending]: (state) => {
      state.status = STATUS.PENDING;
    },
    [putActivity.fulfilled]: (state) => {
      state.status = STATUS.SUCCESSFUL;
      state.activity = {};
    },
    [putActivity.rejected]: (state) => {
      state.status = STATUS.FAILED;
    },
    [postActivity.pending]: (state) => {
      state.status = STATUS.PENDING;
    },
    [postActivity.fulfilled]: (state) => {
      state.status = STATUS.SUCCESSFUL;
    },
    [postActivity.rejected]: (state) => {
      state.status = STATUS.FAILED;
    },
    [removeActivity.pending]: (state) => {
      state.status = STATUS.PENDING;
    },
    [removeActivity.fulfilled]: (state, { payload }) => {
      state.status = STATUS.SUCCESSFUL;
      state.activities = state.activities.filter(({ id }) => id !== payload);
    },
    [removeActivity.rejected]: (state) => {
      state.status = STATUS.FAILED;
    },
  },
});

export const selectorActivities = (state) => state.activities;

export default activitiesSlice.reducer;
