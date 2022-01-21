import React from "react";
import "../FormStyles.css";
import { Formik, ErrorMessage, Field, errors } from "formik";
import * as Yup from "yup";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

const LoginForm = () => {
  const startValues = {
    email: "",
    password: "",
  };

  const handleLogin = (values) => {
        const url = ""
        const body = {
          email: values.email,
          password: values.password,
        };
        console.log(body);
        axios.post(url, body).then((response) => {
          localStorage.setItem("token", response.data.token);
        });
      };

  return (
    <Formik
      initialValues={startValues}
      validationSchema={Yup.object().shape({
        email: Yup.string().required("Field Required"),
        password: Yup.string()
          .min(6, "Password must have at least 6 characters")
          .required("Field required")
          .matches(
            /[!@#$%^&*]/,
            "Password must have at least one special character"
          ),

          
      })}
      onSubmit={(values) => {
        handleLogin(values)
      }}
    >
      {({ errors, handleSubmit }) => (
        <form className="form-container" onSubmit={handleSubmit}>
          <Field
            className="input-field"
            type="email"
            name="email"
            placeholder="Enter email"
          />
          <ErrorMessage
            name="email"
            component={() => (
              <div className="alert alert-danger" role="alert">
                {errors.email}
              </div>
            )}
          />
          <Field
            className="input-field"
            type="password"
            name="password"
            placeholder="Enter password"
          />
          <ErrorMessage
            name="password"
            component={() => (
              <div className="alert alert-danger" role="alert">
                {errors.password}
              </div>
            )}
          />
          <button className="submit-btn" type="submit">
            Log In
          </button>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
