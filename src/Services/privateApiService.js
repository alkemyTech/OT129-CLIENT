import axios from "axios";

import config from "./axiosConfig";

//import { getToken } from "..."

const privateConfig = {
  ...config,
  headers: {
    ...config.headers,
    Authorization: getToken(),
  },
  body: {},
};

const instance = axios.create(privateConfig);

export const post = (url) => {
  let processedURL = url;

  return instance.post(processedURL);
};