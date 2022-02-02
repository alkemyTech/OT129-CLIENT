import { get, post, put } from "./publicApiService";

const ENDPOINT = "contacts";

export const getContact = () => {
  return get(ENDPOINT);
};

export const createContact = (data) => {
  return post(ENDPOINT, data);
};

export const editContact = (data, id) => {
  return put(ENDPOINT, id, data);
};
