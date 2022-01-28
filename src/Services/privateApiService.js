import { getService } from "./getService";

const config = {
  headers: {
    Group: "01", // Aqui va el ID del equipo!!
  },
};

const Get = (url) => {
  getService(url, config)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export default Get;
