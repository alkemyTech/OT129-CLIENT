import React from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.css";
import "../FormStyles.css";
import { useDispatch } from "react-redux";

import { getRegistered } from "../../features/auth/authSlice";

const PASSWORD_REGEX = new RegExp("(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})");

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object({
  email: Yup.string().required("The field is required").email("This is not a valid email format"),
  password: Yup.string()
    .required("The field is required")
    .min(6, "Password must be at least 6 characters")
    .matches(PASSWORD_REGEX, "Password must have at least one special character and a number"),
  confirmPassword: Yup.string()
    .required("The field is required")
    .min(6, "Password must be at least 6 characters")
    .matches(PASSWORD_REGEX, "Password must have at least one special character and a number")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const Alert = ({ children }) => {
  return <div className="alert alert-danger">{children}</div>;
};

Alert.propTypes = {
  children: PropTypes.node.isRequired,
};

const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleRegister = (values) => {
    const body = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    dispatch(getRegistered(body));
  };

  return (
    <div className="container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleRegister(values);
        }}
      >
        {(formik) => (
          <form noValidate className="mt-3" onSubmit={formik.handleSubmit}>
            <div className="form-group mb-3">
              <label className="form-label" htmlFor="name">
                Nombre:
              </label>
              <input
                className="form-control mb-3"
                id="name"
                placeholder="Enter your name"
                type="name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              <ErrorMessage className="alert-danger" component={Alert} name="name" />
            </div>
            <div className="form-group mb-3">
              <label className="form-label" htmlFor="email">
                Email:
              </label>
              <input
                className="form-control mb-3"
                id="email"
                placeholder="Enter your email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              <ErrorMessage className="alert-danger" component={Alert} name="email" />
            </div>
            <div className="form-group mb-3">
              <label className="form-label" htmlFor="password">
                Password:
              </label>
              <input
                className="form-control mb-3"
                id="password"
                placeholder="Enter your password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              <ErrorMessage className="alert-danger" component={Alert} name="password" />
            </div>
            <div className="form-group mb-3">
              <label className="form-label" htmlFor="confirmPassword">
                Confirm password:
              </label>
              <input
                className="form-control mb-3"
                id="confirmPassword"
                placeholder="Confirm your password"
                type="password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
              />
              <ErrorMessage component={Alert} name="confirmPassword" />
            </div>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
