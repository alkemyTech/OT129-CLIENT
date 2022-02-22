import React from "react";
import "../FormStyles.css";
import { Formik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { getLogged, selectAuth } from "../../features/auth/authSlice";
import Alert from "../Container/Alert";
import Spinner from "../Spinner/Spinner";

import "./RegisterForm.css";

const startValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().required("El campo EMAIL es obligatorio"),
  password: Yup.string().required("El campo CONTRASEÑA es obligatorio"),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { isLoading, auth, user } = useSelector(selectAuth);

  if (auth) {
    if (user.role_id === 1) {
      history.push("/backoffice");
    } else {
      history.push("/");
    }
  }
  const handleLogin = (values) => {
    const body = {
      email: values.email,
      password: values.password,
    };

    dispatch(getLogged(body));
  };

  return (
    <div className="container">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="form-container login-container my-3">
          <Formik
            initialValues={startValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              handleLogin(values);
            }}
          >
            {({ handleSubmit }) => (
              <form className="form" onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label className="form-label" htmlFor="email" />
                  <Field
                    className="form-control mb-3 register-input"
                    name="email"
                    placeholder="Ingresa tu email"
                    type="email"
                  />
                  <ErrorMessage className="alert-danger" component={Alert} name="email" />
                </div>
                <div className="form-group mb-3">
                  <label className="form-label" htmlFor="password" />
                  <Field
                    className="form-control register-input mb-3"
                    name="password"
                    placeholder="Ingresa tu contraseña"
                    type="password"
                  />
                  <ErrorMessage className="alert-danger" component={Alert} name="password" />
                </div>
                <div className="mb-3">
                  <button className="general-btn register-btn my-3" type="submit">
                    INICIAR SESIÓN
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
