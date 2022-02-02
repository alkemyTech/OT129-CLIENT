import { get, post, patch, put } from "./publicApiService";

const ENDPOINT = "slides";

export const getSlides = () => {
  return get(ENDPOINT);
};

export const postSlides = () => {
  return post(ENDPOINT);
};

export const patchSlides = () => {
  return patch(ENDPOINT);
};

export const putSlides = () => {
  return put(ENDPOINT);
};
