import React from "react";

import RegisterForm from "../Components/Auth/RegisterForm";
import Title from "../Components/Titles/Titles";

const RegisterPage = () => {
  return (
    <>
      <Title title={"Registro"} />
      <RegisterForm />
    </>
  );
};

export default RegisterPage;
