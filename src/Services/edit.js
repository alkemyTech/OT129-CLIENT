import axios from "axios";

export const edit = async (route, data) => {
  let result = await axios.put(`http://ongapi.alkemy.org/api/${route}/${data.id}`, data, {
    headers: {
      "Content-Type": "application/json",
      group: "129",
    },
  });

  return result;
};
