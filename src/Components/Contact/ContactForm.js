import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../FormStyles.css";
import * as Yup from "yup";
import PropTypes from "prop-types";

import { createContact } from "../../Services/ContactService";
import { alerts } from "../../utils/alerts";

const ErrorComponent = (props) => <p>{props.children}</p>;

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Requerido"),
  email: Yup.string().email("Formato de email incorrecto").required("Requerido"),
  phone: Yup.string()
    .matches(/^\d+$/, "Formato incorrecto")
    .min(8, "Debe ingresar un mínimo de 8 números.")
    .required("Requerido"),
  message: Yup.string().required("Requerido"),
});

const ContactForm = () => {
  const onSubmit = (values, { resetForm }) => {
    resetForm();

    createContact(values).catch((err) => {
      if (err) {
        alerts("Lo sentimos! Su mensaje no se ha podido enviar.", "error");
      }
    });
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form className="form-container">
        <Field className="form-control" name="name" placeholder="Nombre" type="text" />
        <ErrorMessage component={ErrorComponent} name="name" />
        <Field className="form-control" name="email" placeholder="Email" type="text" />
        <ErrorMessage component={ErrorComponent} name="email" />
        <Field className="form-control" name="phone" placeholder="Teléfono" type="tel" />
        <ErrorMessage component={ErrorComponent} name="phone" />
        <Field
          as="textarea"
          className="form-control"
          name="message"
          placeholder="Escribe tu mensaje"
        />
        <ErrorMessage component={ErrorComponent} name="message" />
        <button className="btn btn-primary" type="submit">
          Enviar
        </button>
      </Form>
    </Formik>
  );
};

ErrorComponent.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ContactForm;
