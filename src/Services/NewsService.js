import { get } from "./publicApiService";
import { remove, post, put } from "./privateApiService";

const ENDPOINT = process.env.REACT_APP_API_NEWS_ENDPOINT;

export const getNews = () => {
  return get(ENDPOINT);
};

export const getNewsById = (id) => {
  return get(ENDPOINT, id);
};

export const createNews = (data) => {
  return post(ENDPOINT, data);
};

export const editNews = (data, id) => {
  return put(ENDPOINT, data, id);
};

export const removeNews = (id) => {
  return remove(ENDPOINT, id);
};
