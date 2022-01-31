import axios from "axios";

import config from "./axiosConfig";

const instance = axios.create(config);

export const get = (url, id = null) => {
  let processedURL = id ? `${url}/${id}` : url;

  return instance.get(processedURL);
};

export const post = (url, id = null, data) => {
  let processedURL = id ? `${url}/${id}` : url;

  return instance.post(processedURL, data);
};

export const patch = (url, id = null, data) => {
  let processedURL = id ? `${url}/${id}` : url;

  return instance.patch(processedURL, data);
};

export const put = (url, id = null, data) => {
  let processedURL = id ? `${url}/${id}` : url;

  return instance.put(processedURL, data);
};
