import axios from "axios";

export default axios.create({
  baseURL: "http://ongapi.alkemy.org/public/docs",
  headers: {
    "Content-Type": "application/json",
  },
});
