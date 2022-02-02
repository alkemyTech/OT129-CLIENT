import { get, post, put } from "./publicApiService";

const ENDPOINT = "contacts";

export const getContact = () => {
  return get(ENDPOINT);
};

export const createContact = () => {
  return post(ENDPOINT);
};

export const editContact = () => {
  return put(ENDPOINT);
};
