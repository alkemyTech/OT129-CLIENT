const axios = require("axios");
//MOCKING API REQUEST FOR TESTING LOGINFORM
const mockRegister = () => {
  //Already existent user
  const body = {
    name: "Shinji",
    email: "ikarishinji@nerv.com.arge",
    password: "!1ikarikun",
    address: "Misato's house 123, Tokyo 3",
  };

  return axios.post("http://ongapi.alkemy.org/public/api/register", body);
};

module.exports = mockRegister;
