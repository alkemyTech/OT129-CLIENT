import { get, post, patch } from "./publicApiService";

const ENDPOINT = "news";

export const getNews = () => {
  return get(ENDPOINT);
};

export const createNews = () => {
  return post(ENDPOINT);
};

export const editNews = () => {
  return patch(ENDPOINT);
};
