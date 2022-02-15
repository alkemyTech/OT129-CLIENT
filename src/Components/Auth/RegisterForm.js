import React, { useState } from "react";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Wrapper } from "@googlemaps/react-wrapper";

import { getRegistered } from "../../features/auth/authSlice";
import "../../index.css";
import "./RegisterForm.css";

import Map from "./Map";

const PASSWORD_REGEX = new RegExp("(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})");

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
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
  address: Yup.string().required("Ingrese su DIRECCIÓN"),
});

const Alert = ({ children }) => {
  return <div className="alert alert-danger">{children}</div>;
};

Alert.propTypes = {
  children: PropTypes.node.isRequired,
};

const RegisterForm = () => {
  const [map, setMap] = useState({});
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();

  const handleSearchClick = async () => {
    const getLocation = async () => {
      const response = await axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
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

  const handleRegister = (values) => {
    const body = {
      name: values.name,
      email: values.email,
      password: values.password,
      address: address,
      latitude: map.lat,
      longitude: map.lng,
    };

    if (map) {
      dispatch(getRegistered(body));
    }
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
            <div className="form-group input-group mb-3">
              <label className="form-label" htmlFor="address">
                Dirección:
              </label>
              <div className="input-group">
                <input
                  className="form-control mb-3"
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
                  className="general-btn fill-btn mb-3"
                  type="button"
                  onClick={() => handleSearchClick()}
                >
                  <i className="fas fa-search-location" />
                </button>
              </div>
              <ErrorMessage component={Alert} name="address" />
            </div>
            <button className="general-btn register-btn my-3" type="submit">
              REGISTRAR
            </button>
          </form>
        )}
      </Formik>
      <Wrapper apiKey={process.env.REACT_APP_API_GOOGLE_KEY}>
        <Map center={map} zoom={14} />
      </Wrapper>
    </div>
  );
};

export default RegisterForm;
