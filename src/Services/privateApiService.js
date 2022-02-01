import config from "./axiosConfig";

const privateConfig = {
  ...config,
  headers: {
    ...config.headers,
    Authorization: "",
  },
};

const instance = axios.create(privateConfig);

export const authenticate = () => {
  const storage = localStorage.getItem("token");

  if (storage) {
    const header = { Authentication: `Bearer ${storage}` };

    return header;
  } else {
    return null;
  }
};

export const get = (url, id = null) => {
  let processedURL = id ? `${url}/${id}` : url;

  return instance.get(processedURL);
};

export const patch = (endpoint, data, id) => instance.patch(`${endpoint}/${id}`, data);
