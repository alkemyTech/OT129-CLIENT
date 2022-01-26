import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../FormStyles.css";
import * as Yup from "yup";
import PropTypes from "prop-types";

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
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form className="form-container">
        <Field className="input-field" name="name" placeholder="Nombre" type="text" />
        <ErrorMessage component={ErrorComponent} name="name" />
        <Field className="input-field" name="email" placeholder="Email" type="text" />
        <ErrorMessage component={ErrorComponent} name="email" />
        <Field className="input-field" name="phone" placeholder="Teléfono" type="tel" />
        <ErrorMessage component={ErrorComponent} name="phone" />
        <Field
          as="textarea"
          className="input-field"
          name="message"
          placeholder="Escribe tu mensaje"
        />
        <ErrorMessage component={ErrorComponent} name="message" />
        <button className="submit-btn" type="submit">
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