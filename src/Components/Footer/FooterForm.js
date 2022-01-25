/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { useLocalStorage } from "../../hooks/useLocalStorage";

import { newsletterSchema } from "./formValidation";

import "../FormStyles.css";
import "bootstrap/dist/css/bootstrap.css";

const FooterForm = () => {
  const [formSend, setFormSend] = useState(false);
  const [error, setError] = useState(false);
  const [valueName, setValueName] = useLocalStorage("nombre", "");
  const [valueSurname, setValueSurname] = useLocalStorage("apellido", "");
  const [valueEmail, setValueEmail] = useLocalStorage("correo", "");

  //funcion para cambiar la clase del form para que no se muestre
  const formDisplayToggle = () => {
    setFormSend(!formSend);
  };

  return (
    <React.Fragment>
      <Formik
        validateOnMount
        initialValues={{
          name: "",
          surname: "",
          email: "",
        }}
        validationSchema={newsletterSchema}
        onSubmit={(valores, { resetForm }) => {
          try {
            Console.log(valores);
            setFormSend(true);
            // setTimeout(() => setFormSend(false), 5000); ver validacion
            resetForm();
            //los valores se colocan en localstorage
            setValueName(valores.name);
            setValueSurname(valores.surname);
            setValueEmail(valores.email);
          } catch (error) {
            setError(true);
          }
        }}
      >
        {({ errors, isValid }) => (
          <Form
            noValidate
            className={formSend ? "formNotDisplay" : "form-container"}
          >
            <div className="mt-3">
              <label className="form-label" htmlFor="name">
                Nombre
              </label>
              <Field
                className="form-control"
                id="name"
                name="name"
                placeholder="Nombre"
                type="text"
              />
              <ErrorMessage
                component={() => <p className="error">{errors.name}</p>}
                name="name"
              />
            </div>
            <div className="mt-3">
              <label className="form-label" htmlFor="surname">
                Apellido
              </label>
              <Field
                className="form-control"
                id="surname"
                name="surname"
                placeholder="Apellido"
                type="text"
              />
              <ErrorMessage
                component={() => <p className="error">{errors.surname}</p>}
                name="surname"
              />
            </div>
            <div className="mt-3">
              <label className="form-label" htmlFor="email">
                Correo
              </label>
              <Field
                className="form-control"
                id="email"
                name="email"
                placeholder="Correo"
                type="text"
              />
              <ErrorMessage
                component={() => <p className="error">{errors.email}</p>}
                name="email"
              />
            </div>
            <button
              className="btn btn-primary"
              disabled={!isValid}
              type="submit"
              onClick={formDisplayToggle}
            >
              Enviar
            </button>
          </Form>
        )}
      </Formik>
      {formSend && (
        <p className="formSubmitted">Formulario enviado con éxito</p>
      )}
    </React.Fragment>
  );
};

export default FooterForm;
