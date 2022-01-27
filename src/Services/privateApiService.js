import { getService } from "./getService";

const config = {
  headers: {
    Group: "01", // Aqui va el ID del equipo!!
  },
};

const Get = () => {
  getService("https://jsonplaceholder.typicode.com/users", config)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

export default Get;
