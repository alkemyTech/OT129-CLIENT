import React from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { getRegistered } from "../../features/auth/authSlice";
import RegisterPopup from "../Popups/RegisterPopup";

import "../../index.css";
import "./RegisterForm.css";

const PASSWORD_REGEX = new RegExp("(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})");

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  conditions: false,
};

const handleConfirm = (value) => {
  initialValues.conditions = value;
};

const validationSchema = Yup.object({
  name: Yup.string().required("El campo NOMBRE es requerido"),
  email: Yup.string()
    .required("El campo EMAIL es requerido")
    .email("Ingresa un formato válido de EMAIL"),
  password: Yup.string()
    .required("El campo CONTRASEÑA es requerido")
    .min(6, "Tu CONTRASEÑA debe contener al menos 6 caracteres")
    .matches(
      PASSWORD_REGEX,
      "Tu CONTRASEÑA debe contener al menos un número y un caracter especial"
    ),
  confirmPassword: Yup.string()
    .required("El campo CONFIRMAR CONTRASEÑA es requerido")
    .min(6, "Tu CONTRASEÑA debe contener al menos 6 caracteres")
    .matches(
      PASSWORD_REGEX,
      "Tu CONTRASEÑA debe contener al menos un número y un caracter especial"
    )
    .oneOf([Yup.ref("password"), null], "Las CONTRASEÑAS deben coincidir"),
  conditions: Yup.boolean().oneOf([true], "Debes aceptar los Términos y Condiciones"),
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
      <div className="form-container my-3">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            handleRegister(values);
          }}
        >
          {(formik) => (
            <form noValidate className="register-form" onSubmit={formik.handleSubmit}>
              <div className="form-group mb-3">
                <label className="form-label" htmlFor="name" />
                <input
                  className="form-control register-input mb-3"
                  id="name"
                  placeholder="Ingresa tu nombre"
                  type="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
                <ErrorMessage className="alert-danger" component={Alert} name="name" />
              </div>
              <div className="form-group mb-3">
                <label className="form-label" htmlFor="email" />
                <input
                  className="form-control register-input mb-3"
                  id="email"
                  placeholder="Ingresa tu email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                <ErrorMessage className="alert-danger" component={Alert} name="email" />
              </div>
              <div className="form-group mb-3">
                <label className="form-label" htmlFor="password" />
                <input
                  autoComplete="on"
                  className="form-control register-input mb-3"
                  id="password"
                  placeholder="Ingresa tu contraseña"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                <ErrorMessage className="alert-danger" component={Alert} name="password" />
              </div>
              <div className="form-group mb-3">
                <label className="form-label" htmlFor="confirmPassword" />
                <input
                  autoComplete="on"
                  className="form-control register-input mb-3"
                  id="confirmPassword"
                  placeholder="Confirma tu contraseña"
                  type="password"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                />
                <ErrorMessage component={Alert} name="confirmPassword" />
              </div>
              <div className="conditions-wrapper">
                <RegisterPopup onConfirm={handleConfirm} />
                <input
                  className="conditions-checkbox"
                  name="conditions"
                  type="checkbox"
                  value={formik.values.conditions}
                  onChange={formik.handleChange}
                />
                <ErrorMessage component={Alert} name="conditions" />
              </div>
              <button className="general-btn register-btn my-3" type="submit">
                REGISTRARSE
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterForm;
