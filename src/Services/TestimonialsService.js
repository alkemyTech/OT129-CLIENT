import { get, post, put } from "./publicApiService";

const ENDPOINT = process.env.REACT_APP_API_TESTIMONIES;

export const getTestimonials = () => {
  return get(ENDPOINT);
};

export const createTestimonial = () => {
  return post(ENDPOINT);
};

export const editTestimonial = () => {
  return put(ENDPOINT);
};
