import { get, post, patch } from "./publicApiService";
import { remove } from "./privateApiService";

const ENDPOINT = process.env.REACT_APP_API_SLIDES_ENDPOINT;

export const getNews = () => {
  return get(ENDPOINT);
};

export const createNews = (data) => {
  return post(ENDPOINT, data);
};

export const editNews = () => {
  return patch(ENDPOINT);
};

export const removeNews = (id) => {
  return remove(ENDPOINT, id);
};
