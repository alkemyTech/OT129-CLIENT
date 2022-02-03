import { get, post, patch } from "./publicApiService";
import { remove } from "./privateApiService";

const ENDPOINT = "news";

export const getNews = () => {
  return get(ENDPOINT);
};

export const createNews = (data) => {
  return post(ENDPOINT, data);
};

export const editNews = () => {
  return patch(ENDPOINT);
};

export const removeNews = () => {
  return remove(ENDPOINT);
};
