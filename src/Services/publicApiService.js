import axios from "axios";

import config from "./axiosConfig";

const instance = axios.create(config);

export const get = (url, id = null) => {
  let processedURL = id ? `${url}/${id}` : url;

  return instance.get(processedURL);
};

export const post = (data, url, id = null) => {
  let processedURL = id ? `${url}/${id}` : url;

  return instance.post(data, processedURL);
};

export const patch = (data, url, id = null) => {
  let processedURL = id ? `${url}/${id}` : url;

  return instance.patch(data, processedURL);
};

export const put = (data, url, id = null) => {
  let processedURL = id ? `${url}/${id}` : url;

  return instance.put(data, processedURL);
};
