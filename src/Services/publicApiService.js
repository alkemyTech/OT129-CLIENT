import axios from "axios";

import config from "./axiosConfig";

const instance = axios.create(config);

/**
 * Method to make a get with public endpoint
 * @param {string} url
 * @param {number|null} id
 * @returns {Promise}
 */
export const get = (url, id = null) => {
  let processedURL = id ? `${url}/${id}` : url;

  return instance.get(processedURL);
};
/**
 * Method to make a post with
 * @param {string} url
 * @param {object} data
 * @returns {Promise}
 */
export const post = (endpoint, data) => instance.post(endpoint, data);

/**
 * Method to make a put with public endpoint
 * @param {string} url
 * @param {object} data
 * @param {number|null} id
 * @returns {Promise}
 */
export const put = (endpoint, data, id) => instance.put(`${endpoint}/${id}`, data);

/**
 * Method to make a patch with public endpoint
 * @param {string} url
 * @param {object} data
 * @param {number|null} id
 * @returns {Promise}
 */
export const patch = (endpoint, data, id) => instance.patch(`${endpoint}/${id}`, data);

/**
 * Method to make a delete with public endpoint
 * @param {string} url
 * @param {number|null} id
 * @returns {Promise}
 */
export const remove = (url, id) => instance.delete(`${url}/${id}`);
