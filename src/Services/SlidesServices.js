import { get, post, put } from "./publicApiService";

const ENDPOINT = process.env.REACT_APP_API_SLIDES_ENDPOINT;

export const getSlides = () => {
  return get(ENDPOINT);
};

export const postSlides = (data) => {
  return post(ENDPOINT, data);
};

export const putSlides = (id, data) => {
  return put(`${ENDPOINT}/${id}`, data);
};
