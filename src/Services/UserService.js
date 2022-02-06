import { get } from "./publicApiService";
import { post, put, remove } from "./privateApiService";

const ENDPOINT = process.env.REACT_APP_API_USER_ENDPOINT;

export const getUser = () => {
  return get(ENDPOINT);
};

export const getUserByID = (id) => {
  return get(ENDPOINT, id);
};

export const createUser = (data) => {
  return post(ENDPOINT, data);
};

export const editUser = (data, id) => {
  return put(ENDPOINT, data, id);
};

export const deleteUser = (id) => {
  return remove(ENDPOINT, id);
};
