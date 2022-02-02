import config from "./axiosConfig";

const privateConfig = {
  ...config,
  headers: {
    ...config.headers,
    Authorization: authenticate().Authentication,
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

export const post = (endpoint, data, id) => {
  let processedURL = (id ? `${endpoint}/${id}` : endpoint, data);

  return instance.post(processedURL);
};

export const put = (endpoint, data, id) => instance.put(`${endpoint}/${id}`, data);

export const patch = (endpoint, data, id) => instance.patch(`${endpoint}/${id}`, data);
