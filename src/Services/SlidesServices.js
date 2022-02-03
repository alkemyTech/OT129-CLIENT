import { get, post, patch, put } from "./publicApiService";

const ENDPOINT = "slides";

export const getSlides = () => {
  return get(ENDPOINT);
};

export const postSlides = (data) => {
  return post(ENDPOINT, data);
};

export const patchSlides = () => {
  return patch(ENDPOINT);
};

export const putSlides = (id, data) => {
  return put(`${ENDPOINT}/${id}`, data);
};
