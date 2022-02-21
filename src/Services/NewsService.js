import { get } from "./publicApiService";
import { remove, post, put } from "./privateApiService";

const ENDPOINT = process.env.REACT_APP_API_NEWS_ENDPOINT;

export const getNews = (search = null) => {
  return get(ENDPOINT, { search: search });
};

export const getNewsById = (id) => {
  return get(ENDPOINT, id);
};

export const getLastNews = (entries) => {
  const url = entries ? `${ENDPOINT}?limit=${entries}` : ENDPOINT;

  return get(url);
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
