import { get, post, put } from "./publicApiService";

const ENDPOINT = "comments";

export const getComments = () => {
  return get(ENDPOINT);
};

export const getCommentByID = (id) => {
  return get(ENDPOINT, id);
};

export const createComment = (data) => {
  return post(ENDPOINT, data);
};

export const editComment = (data) => {
  return put(ENDPOINT, data);
};
