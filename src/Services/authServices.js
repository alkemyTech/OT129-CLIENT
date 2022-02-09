import { post } from "./publicApiService";

const LOGIN_ENDPOINT = process.env.REACT_APP_API_LOGIN;
const REGISTER_ENDPOINT = process.env.REACT_APP_API_REGISTER;

export const login = (data) => {
  return post(LOGIN_ENDPOINT, data);
};

export const register = (data) => {
  return post(REGISTER_ENDPOINT, data);
};
