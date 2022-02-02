import { get, post, put } from "./publicApiService";

const ENDPOINT = "activities";

export const getActivities = () => {
  return get(ENDPOINT);
};

export const createActivity = () => {
  return post(ENDPOINT);
};

export const editActivity = () => {
  return put(ENDPOINT);
};
