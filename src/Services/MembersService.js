import { get } from "./publicApiService";
import { post, put, remove } from "./privateApiService";

const ENDPOINT = process.env.REACT_APP_API_MEMBERS_ENDPOINT;

export const getMembers = () => {
  return get(ENDPOINT);
};

export const getMemberByID = (id) => {
  return get(ENDPOINT, null, id);
};

export const createMember = (data) => {
  return post(ENDPOINT, data);
};

export const editMember = (data, id) => {
  return put(ENDPOINT, data, id);
};

export const deleteMember = (id) => {
  return remove(ENDPOINT, id);
};
