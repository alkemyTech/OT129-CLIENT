import React from "react";
import "../FormStyles.css";
import { Formik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import Alert from "../Container/Alert";

const startValues = {
  email: "",
  password: "",
};

const isDesktop = window.innerWidth > 768;

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Field Required"),
  password: Yup.string()
    .min(6, "Password must have at least 6 characters")
    .required("Field required")
    .matches(/[!@#$%^&*]/, "Password must have at least one special character"),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleLogin = (values) => {
    const body = {
      email: values.email,
      password: values.password,
    };

    dispatch(getLogged(body));
  };

  return (
    <div
      className={`${
        isDesktop ? "w-25" : "w-75"
      } mt-5 m-auto border border-light shadow-lg rounded px-4 py-4`}
    >
      <Formik
        initialValues={startValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleLogin(values);
        }}
      >
        {({ handleSubmit }) => (
          <form className="form" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                Email:
              </label>
              <Field className="form-control mb-3" name="email" placeholder="Email" type="email" />
              <ErrorMessage className="alert-danger" component={Alert} name="email" />
            </div>
            <div className="form-group mb-3">
              <label className="form-label" htmlFor="password">
                Password:
              </label>
              <Field
                className="form-control mb-3"
                name="password"
                placeholder="Password"
                type="password"
              />
              <ErrorMessage className="alert-danger" component={Alert} name="password" />
            </div>
            <div className="mb-3">
              <button className="btn btn-primary w-100" type="submit">
                Log in
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
