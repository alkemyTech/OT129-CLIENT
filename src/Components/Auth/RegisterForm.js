import React, { useState } from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { Wrapper } from "@googlemaps/react-wrapper";

import { getRegistered } from "../../features/auth/authSlice";
import RegisterPopup from "../Popups/RegisterPopup";
import { alerts } from "../../utils/alerts";
import Alert from "../Alert/Alert";

import Map from "./Map";

import "../../index.css";
import "./RegisterForm.css";

const PASSWORD_REGEX = new RegExp("(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})");

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  conditions: false,
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
  address: Yup.string().required("El campo DIRECCIÓN es requerido"),
});

const RegisterForm = () => {
  const dispatch = useDispatch();
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

    dispatch(getRegistered(body))
      .then(() => alerts("Registro exitoso, inicie sesión.", "success"))
      .catch(() => alerts("El email ingresado ya se encuentra registrado", "error"));
  };

  return (
    <div className="container">
      <div className="form-container my-5">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            handleRegister(values);
          }}
        >
          {(formik) => (
            <form
              noValidate
              className="register-form"
              data-testid="registerForm"
              onSubmit={formik.handleSubmit}
            >
              <div className="form-group">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="fas fa-user" />
                  </span>
                  <input
                    className="form-control register-input"
                    id="name"
                    placeholder="Ingresa tu nombre"
                    type="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                  />
                </div>
                <ErrorMessage className="alert-danger" component={Alert} name="name" />
              </div>
              <div className="form-group">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="fas fa-envelope" />
                  </span>
                  <input
                    className="form-control register-input"
                    id="email"
                    placeholder="Ingresa tu email"
                    type="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                </div>
                <ErrorMessage className="alert-danger" component={Alert} name="email" />
              </div>
              <div className="form-group">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="fas fa-key" />
                  </span>
                  <input
                    autoComplete="on"
                    className="form-control register-input"
                    id="password"
                    placeholder="Ingresa tu contraseña"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                </div>
                <ErrorMessage className="alert-danger" component={Alert} name="password" />
              </div>
              <div className="form-group">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="fas fa-key" />
                  </span>
                  <input
                    autoComplete="on"
                    className="form-control register-input"
                    id="confirmPassword"
                    placeholder="Confirma tu contraseña"
                    type="password"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                  />
                </div>
                <ErrorMessage component={Alert} name="confirmPassword" />
              </div>
              <div className="form-group input-group ">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="fas fa-map-marker-alt" />
                  </span>
                  <input
                    className="form-control register-input"
                    id="address"
                    name="address"
                    placeholder="Ingresa tu dirección"
                    type="text"
                    value={formik.values.address}
                    onChange={(e) => {
                      formik.setFieldValue("address", e.target.value);
                      setAddress(e.target.value);
                    }}
                  />
                  <button
                    className="general-btn fill-btn"
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
                  data-testid="conditions"
                  name="conditions"
                  type="checkbox"
                  value={formik.values.conditions}
                  onChange={formik.handleChange}
                />
                <ErrorMessage component={Alert} name="conditions" />
              </div>
              <button
                className="general-btn register-btn my-3"
                data-testid="registerButton"
                type="submit"
              >
                <i className="fas fa-user-plus mx-2" />
                REGISTRARSE
              </button>
            </form>
          )}
        </Formik>
        <Wrapper apiKey={process.env.REACT_APP_API_GOOGLE_KEY} className="map">
          <Map center={map} zoom={14} />
        </Wrapper>
      </div>
    </div>
  );
};

export default RegisterForm;
