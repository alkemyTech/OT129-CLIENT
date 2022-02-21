import axios from "axios";
//MOCKING API REQUEST FOR TESTING LOGINFORM
const mockRegister = () => {
  //Already existent user
  const body = {
    name: "Shinji",
    email: "ikarishinji@nerv.com.arge",
    password: "!1ikarikun",
    address: "Misato's house 123, Tokyo 3",
  };

  return axios.post(
    `${process.env.REACT_APP_API_BASE_URL}/${process.env.REACT_APP_API_REGISTER}`,
    body
  );
};

module.exports = mockRegister;
