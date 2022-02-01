import axios from "axios";

import axiosInstance from "./axiosInstance";

export const authenticate = () => {
  const storage = localStorage.getItem("token");

  if (storage) {
    const header = { Authentication: `Bearer${storage}` };

    return header;
  } else {
    return null;
  }
};

export const Get = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/users", config)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export const put = (endpoint, data, id = null) => {
  axiosInstance.put(id ? `${endpoint}/${id}` : endpoint, data);
};

axios.defaults.headers.put["Autorization"] = authenticate().Authentication;
