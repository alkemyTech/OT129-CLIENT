import { get } from "./publicApiService";
import { post, put, remove } from "./privateApiService";

const ENDPOINT = process.env.REACT_APP_API_TESTIMONIES;

export const getTestimonials = () => {
  return get(ENDPOINT);
};

export const getTestimonialById = (id) => {
  return get(ENDPOINT, id);
};

export const getLastTestimonials = (entries) => {
  const url = entries ? `${ENDPOINT}?limit=${entries}` : ENDPOINT;

  return get(url);
};

export const createTestimonial = (data) => {
  return post(ENDPOINT, data);
};

export const editTestimonial = (data, id) => {
  return put(ENDPOINT, data, id);
};

export const deleteTestimonial = (id) => {
  return remove(ENDPOINT, id);
};
