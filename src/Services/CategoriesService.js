import { get, post, put } from "./publicApiService";

const ENDPOINT = "categories";

export const getCategories = () => {
  return get(ENDPOINT);
};

export const createCategory = () => {
  return post(ENDPOINT);
};

export const editCategory = () => {
  return put(ENDPOINT);
};
