import React from "react";
import "../FormStyles.css";
import { Formik, ErrorMessage, Field, errors } from "formik";
import * as Yup from "yup";
import axios from "axios";
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
  const handleLogin = (values) => {
    const url = "";
    const body = {
      email: values.email,
      password: values.password,
    };

    axios.post(url, body).then((response) => {
      localStorage.setItem("token", response.data.token);
    });
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
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <Field className="form-control mb-3" name="email" type="email" placeholder="Email" />
              <ErrorMessage name="email" component={Alert} className="alert-danger" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <Field
                className="form-control mb-3"
                name="password"
                type="password"
                placeholder="Password"
              />
              <ErrorMessage name="password" component={Alert} className="alert-danger" />
            </div>
            <div className="">
              <button className="btn btn-primary w-100 " type="submit">
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
