/* eslint-disable no-console */
import axios from "axios";

export const edit = async (route, data) => {
  axios
    .put(`http://ongapi.alkemy.org/api/${route}/${data.id}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      console.log(res);
      console.log("La modificación fue exitosa");
    });
};
