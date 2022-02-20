import { get } from "./publicApiService";
import { post, put, remove } from "./privateApiService";

const ENDPOINT = process.env.REACT_APP_API_ACTIVITIES_ENDPOINT;

export const getActivities = (search = null) => {
  return get(ENDPOINT, { search: search });
};

export const getActivityByID = (id) => {
  return get(ENDPOINT, null, id);
};

export const createActivity = (data) => {
  return post(ENDPOINT, data);
};

export const editActivity = (data, id) => {
  return put(ENDPOINT, data, id);
};

export const deleteActivity = (id) => {
  return remove(ENDPOINT, id);
};
