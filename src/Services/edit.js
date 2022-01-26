/* eslint-disable no-console */
import axios from "axios";

export const edit = async (route, data) => {
  axios
    .post(`http://ongapi.alkemy.org/api/${route}/${data.id}`, data, {
      headers: {
        "Content-Type": "application/json",
        group: "129",
      },
    })
    .then((res) => {
      if (res.data.success) {
        console.log(res, "Actividad creada correctamente");
      } else {
        console.log(res, "Ocurrió un error al enviar el formulario");
      }
    });
};
