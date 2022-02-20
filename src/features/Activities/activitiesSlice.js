import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  getActivities,
  getActivitiesBySearch,
  getActivityByID,
  editActivity,
  createActivity,
  deleteActivity,
} from "../../Services/ActivitiesService";

export const fetchActivities = createAsyncThunk("activities/get", async () => {
  const {
    data: { data },
  } = await getActivities();

  return data;
});

export const fetchActivitiesBySearch = createAsyncThunk("activities/get", async (search) => {
  const {
    data: { data },
  } = await getActivitiesBySearch(search);

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
      state.status = "loading";
    },
    [fetchActivities.fulfilled]: (state, action) => {
      state.status = "success";
      state.activities = action.payload;
      state.activity = {};
    },
    [fetchActivities.rejected]: (state) => {
      state.status = "failed";
    },
    [fetchActivitiesBySearch.pending]: (state) => {
      state.status = "loading";
    },
    [fetchActivitiesBySearch.fulfilled]: (state, action) => {
      state.status = "success";
      state.activities = action.payload;
    },
    [fetchActivitiesBySearch.rejected]: (state) => {
      state.status = "failed";
    },
    [fetchActivity.pending]: (state) => {
      state.status = "loading";
    },
    [fetchActivity.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.activity = payload;
    },
    [fetchActivity.rejected]: (state) => {
      state.status = "failed";
    },
    [putActivity.pending]: (state) => {
      state.status = "loading";
    },
    [putActivity.fulfilled]: (state) => {
      state.status = "success";
      state.activity = {};
    },
    [putActivity.rejected]: (state) => {
      state.status = "failed";
    },
    [postActivity.pending]: (state) => {
      state.status = "loading";
    },
    [postActivity.fulfilled]: (state) => {
      state.status = "success";
    },
    [postActivity.rejected]: (state) => {
      state.status = "failed";
    },
    [removeActivity.pending]: (state) => {
      state.status = "loading";
    },
    [removeActivity.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.activities = state.activities.filter(({ id }) => id !== payload);
    },
    [removeActivity.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export const selectorActivities = (state) => state.activities;

export default activitiesSlice.reducer;
