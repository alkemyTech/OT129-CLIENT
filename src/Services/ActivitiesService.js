import { get, post, put } from "./publicApiService";

const ENDPOINT = process.env.REACT_APP_API_ACTIVITIES_ENDPOINT;

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
