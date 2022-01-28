import { axiosInstance } from "./axiosConfig";

export const getService = (url, config, id = null) => {
  if (id) {
    url = `${url}/${id}`;
  }

  return axiosInstance.get(url, config);
};
