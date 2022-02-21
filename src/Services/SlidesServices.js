import { get } from "./publicApiService";
import { post, put, remove } from "./privateApiService";

const ENDPOINT = process.env.REACT_APP_API_SLIDES_ENDPOINT;

export const getSlides = () => {
  return get(ENDPOINT);
};

export const getSlidesById = (id) => {
  return get(ENDPOINT, null, id);
};

export const postSlides = (data) => {
  return post(ENDPOINT, data);
};

export const putSlides = (id, data) => {
  return put(`${ENDPOINT}/${id}`, data);
};

export const removeSlides = (id) => {
  return remove(`${ENDPOINT}/${id}`);
};
