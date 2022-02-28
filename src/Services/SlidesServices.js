import { get } from "./publicApiService";
import { post, put, remove } from "./privateApiService";

const ENDPOINT = process.env.REACT_APP_API_SLIDES_ENDPOINT;

export const getSlides = (search = null) => {
  return get(ENDPOINT, { search: search });
};

export const getSlidesById = (id) => {
  return get(ENDPOINT, null, id);
};

export const postSlides = (data) => {
  return post(ENDPOINT, data);
};

export const putSlides = (data, id) => {
  return put(ENDPOINT, data, id);
};

export const removeSlides = (id) => {
  return remove(ENDPOINT, id);
};
