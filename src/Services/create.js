/* eslint-disable no-console */
import axios from "axios";

export const create = async (route, data) => {
  let result = await axios.post(`http://ongapi.alkemy.org/api/${route}`, data, {
    headers: {
      "Content-Type": "application/json",
      group: "129",
    },
  });

  return result;
};
