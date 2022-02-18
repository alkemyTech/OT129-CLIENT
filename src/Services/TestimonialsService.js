import { get, post, put } from "./publicApiService";

const ENDPOINT = process.env.REACT_APP_API_TESTIMONIES;

export const getTestimonials = () => {
  return get(ENDPOINT);
};

export const getLastTestimonials = (entries) => {
  const url = entries ? `${ENDPOINT}?limit=${entries}` : ENDPOINT;

  return get(url);
};

export const createTestimonial = () => {
  return post(ENDPOINT);
};

export const editTestimonial = (data, id) => {
  return put(ENDPOINT, data, id);
};
