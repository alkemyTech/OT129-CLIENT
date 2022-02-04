import axios from "axios";

import config from "./axiosConfig";

export const authenticate = () => {
  const storage = localStorage.getItem("token");

  if (storage) {
    return `Bearer ${storage}`;
  }
};

const privateConfig = {
  ...config,
  headers: {
    ...config.headers,
    ...(authenticate() ? { Authorization: authenticate() } : {}),
  },
};

const instance = axios.create(privateConfig);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    alerts(error, "error");

    return Promise.reject(error);
  }
);
/**
 * Method to make a get with private endpoint
 * @param {string} url
 * @param {number|null} id
 * @returns {Promise}
 */
export const get = (url, id = null) => {
  let processedURL = id ? `${url}/${id}` : url;

  return instance.get(processedURL);
};
/**
 * Method to make a post with private endpoint
 * @param {string} url
 * @param {object} data
 * @returns {Promise}
 */
export const post = (endpoint, data) => instance.post(endpoint, data);

/**
 * Method to make a put with private endpoint
 * @param {string} url
 * @param {object} data
 * @param {number|null} id
 * @returns {Promise}
 */
export const put = (endpoint, data, id) => instance.put(`${endpoint}/${id}`, data);

/**
 * Method to make a patch with private endpoint
 * @param {string} url
 * @param {object} data
 * @param {number|null} id
 * @returns {Promise}
 */
export const patch = (endpoint, data, id) => instance.patch(`${endpoint}/${id}`, data);

/**
 * Method to make a delete with private endpoint
 * @param {string} url
 * @param {number|null} id
 * @returns {Promise}
 */
export const remove = (url, id) => instance.delete(`${url}/${id}`);
