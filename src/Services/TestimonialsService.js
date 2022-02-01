import { get, post, put } from "./publicApiService";

const ENDPOINT = "testimonials";

export const getTestimonials = () => {
  return get(ENDPOINT);
};

export const createTestimonial = () => {
  return post(ENDPOINT);
};

export const editTestimonial = () => {
  return put(ENDPOINT);
};
