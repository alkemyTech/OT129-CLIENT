import { get } from "./publicApiService";
import { post, put } from "./privateApiService";

const ENDPOINT = process.env.REACT_APP_API_ORGANIZATION;

export const getOrganizations = () => {
  return get(ENDPOINT);
};

export const getOrganization = (id) => {
  return remove(ENDPOINT, id);
};

export const addOrganization = (data) => {
  return post(ENDPOINT, data);
};

export const editOrganization = (id, data) => {
  return put(ENDPOINT, data, id);
};
