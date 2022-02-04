import axios from "axios";

import config from "./axiosConfig";

export const authenticate = () => {
  const storage = localStorage.getItem("token");

  if (storage) {
    const header = `Bearer ${storage}`;

    return header;
  } else {
    return undefined;
  }
};

const privateConfig = {
  ...config,
  headers: {
    ...config.headers,
    Authorization: authenticate(),
  },
};

const instance = axios.create(privateConfig);

export const get = (url, id = null) => {
  let processedURL = id ? `${url}/${id}` : url;

  return instance.get(processedURL);
};

export const post = (endpoint, data, id) => {
  let processedURL = (id ? `${endpoint}/${id}` : endpoint, data);

  return instance.post(processedURL);
};

export const put = (endpoint, data, id) => instance.put(`${endpoint}/${id}`, data);

export const patch = (endpoint, data, id) => instance.patch(`${endpoint}/${id}`, data);

export const remove = (url, id) => instance.delete(`${url}/${id}`);
