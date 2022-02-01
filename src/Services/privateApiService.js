import axios from "axios";

const authenticate = () => {
  const storage = localStorage.getItem("token");

  if (storage) {
    const header = { Authentication: `Bearer${storage}` };

    return header;
  } else {
    return null;
  }
};

const config = {
  headers: {
    Group: "129",
  },
};

export const Get = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/users", config)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
