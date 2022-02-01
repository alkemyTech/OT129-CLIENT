import axios from "axios";

import config from "./axiosConfig";

const privateConfig = {
  ...config,
  headers: {
    ...config.headers,
    Authorization: "",
  },
  body: {},
};

const instance = axios.create(privateConfig);

export const get = (url, id = null) => {
  let processedURL = id ? `${url}/${id}` : url;

  return instance.get(processedURL);
};
