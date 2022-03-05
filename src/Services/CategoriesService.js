import { get } from "./publicApiService";
import { post, put, remove } from "./privateApiService";

const ENDPOINT = process.env.REACT_APP_API_CATEGORIES;

export const getCategories = (search = null) => {
  return get(ENDPOINT, { search: search });
};

export const getCategoryById = (id) => {
  return get(ENDPOINT, null, id);
};

export const createCategory = (data) => {
  return post(ENDPOINT, data);
};

export const editCategory = (data, id) => {
  return put(ENDPOINT, data, id);
};

export const deleteCategory = (id) => {
  return remove(ENDPOINT, id);
};
