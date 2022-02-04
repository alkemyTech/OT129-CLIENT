import { get, post, put } from "./publicApiService";

const ENDPOINT = process.env.REACT_APP_API_CATEGORIES;

export const getCategories = () => {
  return get(ENDPOINT);
};

export const createCategory = () => {
  return post(ENDPOINT);
};

export const editCategory = () => {
  return put(ENDPOINT);
};
