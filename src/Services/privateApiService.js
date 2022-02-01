import config from "./axiosConfig";

import config from "./axiosConfig";

const Authenticate = () => {
  const storage = localStorage.getItem("token");

  if (storage) {
    const header = { Authentication: `Bearer ${storage}` };

    return header;
  } else {
    return null;
  }
};

const privateConfig = {
  ...config,
  headers: {
    ...config.headers,
    Authorization: Authenticate.Authentication,
  },
  body: {},
};

const instance = axios.create(privateConfig);

export const post = (endpoint, id = null, data) => {
  let processedURL = (id ? `${endpoint}/${id}` : url, data);

  return instance.post(processedURL);
};
