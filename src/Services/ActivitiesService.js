import { get, post, put } from "./publicApiService";

const ENDPOINT = process.env.REACT_APP_API_ACTIVITIES;

export const getAtivities = () => {
  return get(ENDPOINT);
};

export const createActivity = () => {
  return post(ENDPOINT);
};

export const editActivity = () => {
  return put(ENDPOINT);
};
