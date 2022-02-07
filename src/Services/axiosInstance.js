import axios from "axios";

const config = {
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    Group: "01",
  },
};

export default instance = axios.create(config);