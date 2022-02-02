import { get, post, put } from "./publicApiService";

const ENDPOINT = "REACT_APP_API_SLIDES_ENDPOINT";

export const getSlides = () => {
  return get(ENDPOINT);
};

export const createSlides = () => {
  return post(ENDPOINT);
};

export const editSlides = () => {
  return put(ENDPOINT);
};
