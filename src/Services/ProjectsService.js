import { get, post, put } from "./publicApiService";

const ENDPOINT = "projects";

export const getProjects = () => {
  return get(ENDPOINT);
};

export const createProject = () => {
  return post(ENDPOINT);
};

export const editProject = () => {
  return put(ENDPOINT);
};
