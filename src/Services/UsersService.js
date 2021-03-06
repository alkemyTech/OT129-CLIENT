import { get } from "./publicApiService";
import { post, put, remove } from "./privateApiService";

const ENDPOINT = process.env.REACT_APP_API_USERS_ENDPOINT;

export const getUsers = (search = null) => {
  return get(ENDPOINT, { search: search });
};

export const getUsersByID = (id) => {
  return get(ENDPOINT, null, id);
};

export const createUsers = (data) => {
  return post(ENDPOINT, data);
};

export const editUsers = (data, id) => {
  return put(ENDPOINT, data, id);
};

export const deleteUsers = (id) => {
  return remove(ENDPOINT, id);
};
