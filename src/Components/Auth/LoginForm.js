import React from "react";
import { Formik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { getLogged, selectAuth } from "../../features/auth/authSlice";
import Alert from "../Alert/Alert";
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
        <div className="form-container login-container">
          <Formik
            initialValues={startValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              handleLogin(values);
            }}
          >
            {({ handleSubmit }) => (
              <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <div className="input-group mb-4">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fas fa-envelope" />
                    </span>
                    <Field
                      className="form-control register-input"
                      name="email"
                      placeholder="Ingresa tu email"
                      type="email"
                    />
                  </div>
                  <ErrorMessage className="alert-danger" component={Alert} name="email" />
                </div>
                <div className="form-group mb-4">
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fas fa-key" />
                    </span>
                    <Field
                      className="form-control register-input"
                      name="password"
                      placeholder="Ingresa tu contraseña"
                      type="password"
                    />
                  </div>
                  <ErrorMessage className="alert-danger" component={Alert} name="password" />
                </div>

                <button className="general-btn register-btn" type="submit">
                  <i className="fas fa-sign-in-alt mx-2" />
                  INICIAR SESIÓN
                </button>
              </form>
            )}
          </Formik>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
