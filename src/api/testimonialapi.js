import axios from "axios";

export default axios.create({
  baseURL: "http://ongapi.alkemy.org/api",
  headers: {
    "Content-Type": "application/json",
  },
});
