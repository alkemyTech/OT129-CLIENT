import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { newsletterSchema } from "./formValidation";
import "../FormStyles.css";
import { useLocalStorage } from "../../hooks/useLocalStorage";
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
        initialValues={{
          name: "",
          surname: "",
          email: "",
        }}
        validationSchema={newsletterSchema}
        validateOnMount
        onSubmit={(valores, { resetForm }) => {
          try {
            console.log(valores);
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
            className={formSend ? "formNotDisplay" : "form-container"}
            noValidate
          >
            <div className="mt-3">
              <label htmlFor="name" className="form-label">
                Nombre
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Nombre"
                className="form-control"
              />
              <ErrorMessage
                name="name"
                component={() => <p className="error">{errors.name}</p>}
              />
            </div>
            <div className="mt-3">
              <label htmlFor="surname" className="form-label">
                Apellido
              </label>
              <Field
                type="text"
                id="surname"
                name="surname"
                placeholder="Apellido"
                className="form-control"
              />
              <ErrorMessage
                name="surname"
                component={() => <p className="error">{errors.surname}</p>}
              />
            </div>
            <div className="mt-3">
              <label htmlFor="email" className="form-label">
                Correo
              </label>
              <Field
                type="text"
                id="email"
                name="email"
                placeholder="Correo"
                className="form-control"
              />
              <ErrorMessage
                name="email"
                component={() => <p className="error">{errors.email}</p>}
              />
            </div>
            <button
              onClick={formDisplayToggle}
              type="submit"
              className="btn btn-primary"
              disabled={!isValid}
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
