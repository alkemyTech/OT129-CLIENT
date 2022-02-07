import { get, post, patch } from "./publicApiService";
import { remove } from "./privateApiService";

const ENDPOINT = process.env.REACT_APP_API_NEWS_ENDPOINT;

export const getNews = () => {
  return get(ENDPOINT);
};

export const getNewByID = (id) => {
  return get(ENDPOINT, id);
};

export const createNews = () => {
  return post(ENDPOINT);
};

export const editNews = () => {
  return patch(ENDPOINT);
};

export const removeNews = (id) => {
  return remove(ENDPOINT, id);
};
