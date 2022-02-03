import { patch } from "./publicApiService";
import { get, post, put } from "./privateApiService";

const ENDPOINT = process.env.REACT_APP_API_SLIDES_ENDPOINT;

export const patchSlides = () => {
  return patch(ENDPOINT);
};

// The token is needed for this method
export const getSlides = (id) => {
  return get(`${ENDPOINT}/${id}`);
};

// The token is needed for this method
export const postSlides = (data) => {
  return post(ENDPOINT, data);
};

// The token is needed for this method
export const putSlides = (id, data) => {
  return put(`${ENDPOINT}/${id}`, data);
};
