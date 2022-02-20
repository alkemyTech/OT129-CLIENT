import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../FormStyles.css";
import * as Yup from "yup";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { newContact } from "../../features/Contact/contactSlice";
import { alerts } from "../../utils/alerts";

import styles from "./ContactForm.module.css";

const ErrorComponent = (props) => <div className={styles.alert}>{props.children}</div>;

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
  const dispatch = useDispatch();
  const onSubmit = (values, { resetForm }) => {
    dispatch(newContact(values))
      .then(() => alerts("Su mensaje ha sido enviado.", "success"))
      .catch(() => alerts("Lo sentimos. Su mensaje no ha podido ser enviado", "error"));
    resetForm();
  };

  return (
    <div className={`container ${styles.formContainer}`}>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form className={styles.form}>
          <div className="mb-4">
            <Field
              className={`form-control ${styles.input}`}
              name="name"
              placeholder="Nombre"
              type="text"
            />
            <ErrorMessage component={ErrorComponent} name="name" />
          </div>
          <div className="mb-4">
            <Field
              className={`form-control ${styles.input}`}
              name="email"
              placeholder="Email"
              type="text"
            />
            <ErrorMessage component={ErrorComponent} name="email" />
          </div>
          <div className="mb-4">
            <Field
              className={`form-control ${styles.input}`}
              name="phone"
              placeholder="Teléfono"
              type="tel"
            />
            <ErrorMessage component={ErrorComponent} name="phone" />
          </div>
          <div className="mb-4">
            <Field
              as="textarea"
              className={`form-control ${styles.input}`}
              name="message"
              placeholder="Escribe tu mensaje"
            />
            <ErrorMessage component={ErrorComponent} name="message" />
          </div>
          <button className={`form-control ${styles.contactBtn}`} type="submit">
            Enviar
          </button>
        </Form>
      </Formik>
    </div>
  );
};

ErrorComponent.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ContactForm;
