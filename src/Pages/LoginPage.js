import React from "react";

import LoginForm from "../Components/Auth/LoginForm";
import Title from "../Components/Titles/Titles";

const LoginPage = () => {
  return (
    <>
      <Title title={"Iniciar Sesión"} />
      <LoginForm />
    </>
  );
};

export default LoginPage;
