import React, { useState } from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Wrapper } from "@googlemaps/react-wrapper";
import { Redirect } from "react-router-dom";

import { selectAuth } from "../../features/auth/authSlice";
import { getRegistered } from "../../features/auth/authSlice";
import RegisterPopup from "../Popups/RegisterPopup";

import "../../index.css";
import "./RegisterForm.css";

import Map from "./Map";

const PASSWORD_REGEX = new RegExp("(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})");

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  conditions: true,
  address: "",
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
  address: Yup.string().required("Ingrese su DIRECCIÓN"),
});

const Alert = ({ children }) => {
  return <div className="alert alert-danger">{children}</div>;
};

Alert.propTypes = {
  children: PropTypes.node.isRequired,
};

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector(selectAuth);
  const [map, setMap] = useState({});
  const [address, setAddress] = useState("");

  const handleSearchClick = async () => {
    const getLocation = async () => {
      const response = await axios.get(process.env.REACT_APP_API_GOOGLE_URL, {
        params: {
          address: address,
          key: process.env.REACT_APP_API_GOOGLE_KEY,
        },
      });

      return response.data.results[0].geometry.location;
    };
    const result = await getLocation();

    setMap(result);
  };

  const handleRegister = ({ name, email, password }) => {
    const body = {
      name,
      email,
      password,
      address: address,
      latitude: map.lat,
      longitude: map.lng,
    };

    dispatch(getRegistered(body));
  };

  return auth ? (
    <Redirect to="/" />
  ) : (
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
              <div className="form-group input-group mb-3">
                <label className="form-label" htmlFor="address" />
                <div className="input-group">
                  <input
                    className="form-control register-input mb-3"
                    id="address"
                    name="address"
                    placeholder="Ingresa tu dirección"
                    type="text"
                    onChange={(e) => {
                      formik.setFieldValue("address", e.target.value);
                      setAddress(e.target.value);
                    }}
                  />
                  <button
                    className="general-btn fill-btn my-1"
                    type="button"
                    onClick={() => handleSearchClick()}
                  >
                    <i className="fas fa-search-location" />
                  </button>
                </div>
                <ErrorMessage component={Alert} name="address" />
              </div>
              <div className="conditions-wrapper">
                <RegisterPopup
                  state={formik.values.conditions}
                  onConfirm={() => formik.setFieldValue("conditions", true)}
                  onDecline={() => formik.setFieldValue("conditions", false)}
                />
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
        <Wrapper apiKey={process.env.REACT_APP_API_GOOGLE_KEY}>
          <Map center={map} zoom={14} />
        </Wrapper>
      </div>
    </div>
  );
};

export default RegisterForm;
