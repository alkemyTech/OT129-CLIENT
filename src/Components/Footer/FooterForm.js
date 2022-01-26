import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { useLocalStorage } from "../../hooks/useLocalStorage";

import { newsletterSchema } from "./formValidation";

import "../FormStyles.css";
import "bootstrap/dist/css/bootstrap.css";

const FooterForm = () => {
  const [formSend, setFormSend] = useState(false);
  const [error, setError] = useState(false);

  const [valueEmail, setValueEmail] = useLocalStorage("correo", "");

  //funcion para cambiar la clase del form para que no se muestre
  const formDisplayToggle = () => {
    setFormSend(!formSend);
  };

  return (
    <>
      {!valueEmail ? (
        <Formik
          validateOnMount
          initialValues={{
            name: "",
            surname: "",
            email: "",
          }}
          validationSchema={newsletterSchema}
          onSubmit={(values, { resetForm }) => {
            try {
              console.log(values);
              setFormSend(true);
              // setTimeout(() => setFormSend(false), 5000); ver validacion
              resetForm();
              //los values se colocan en localstorage

              setValueEmail(values.email);
            } catch (error) {
              setError(true);
            }
          }}
        >
          {({ errors, isValid }) => (
            // eslint-disable-next-line prettier/prettier
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
                {/* eslint-disable-next-line prettier/prettier*/}
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
      ) : (
        <p className="formSubmitted">Usuario ingresado al newsletter</p>
      )}

      {formSend && <p className="formSubmitted">Formulario enviado con éxito</p>}
    </>
  );
};

export default FooterForm;
