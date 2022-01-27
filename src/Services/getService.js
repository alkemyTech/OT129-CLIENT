import axios from "axios";

export const getService = ({ route, method, id = null }) => {
  const url = id ? `${route}/${id}` : route;

  return axios.get({
    method,
    url,
  });
};
