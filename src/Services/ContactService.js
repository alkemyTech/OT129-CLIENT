import { get, post, put } from "./publicApiService";

const ENDPOINT = process.env.REACT_APP_API_CONTACT_ENDPOINT;

export const getContact = () => {
  return get(ENDPOINT);
};

export const createContact = (data) => {
  return post(ENDPOINT, data);
};

export const editContact = (data, id) => {
  return put(ENDPOINT, id, data);
};
