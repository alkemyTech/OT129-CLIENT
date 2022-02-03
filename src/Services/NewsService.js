import { get, post, patch } from "./publicApiService";

const ENDPOINT = "news";

export const getNews = () => {
  return get(ENDPOINT);
};

export const createNews = (id) => {
  return post(ENDPOINT, id);
};

export const editNews = () => {
  return patch(ENDPOINT);
};
