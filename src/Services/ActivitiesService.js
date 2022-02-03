import { get, post, put } from "./publicApiService";

const ENDPOINT = "activities";

export const getActivities = () => {
  return get(ENDPOINT);
};

export const getActivityByID = (id) => {
  return get(ENDPOINT, id);
};

export const createActivity = (data) => {
  return post(ENDPOINT, data);
};

export const editActivity = (data) => {
  return put(ENDPOINT, data);
};
