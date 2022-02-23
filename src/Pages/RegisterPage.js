import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { selectAuth } from "../features/auth/authSlice";
import RegisterForm from "../Components/Auth/RegisterForm";
import Title from "../Components/Titles/Titles";

const RegisterPage = () => {
  const { auth } = useSelector(selectAuth);

  return auth ? (
    <Redirect to="/" />
  ) : (
    <>
      <Title title={"Registro"} />
      <RegisterForm />
    </>
  );
};

export default RegisterPage;
