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

export const post = (endpoint, id, data) => {
  let processedURL = (id ? `${endpoint}/${id}` : endpoint, data);

  return instance.post(processedURL);
};

export const put = (endpoint, data, id) => instance.put(`${endpoint}/${id}`, data);

export const patch = (endpoint, data, id) => instance.patch(`${endpoint}/${id}`, data);
