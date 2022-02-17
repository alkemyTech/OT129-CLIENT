import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import LoginForm from "../Components/Auth/LoginForm";
import Title from "../Components/Titles/Titles";
import { selectAuth } from "../features/auth/authSlice";

const LoginPage = () => {
  const history = useHistory();
  const { auth } = useSelector(selectAuth);

  if (auth) {
    history.push("/");
  }

  return (
    <>
      <Title title={"Iniciar Sesión"} />
      <LoginForm />
    </>
  );
};

export default LoginPage;
