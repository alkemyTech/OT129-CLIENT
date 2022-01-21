import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../FormStyles.css";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import "bootstrap/dist/css/bootstrap.css";

const FooterForm = () => {
  const [formSend, setFormSend] = useState(false);
  const [valueName, setValueName] = useLocalStorage("nombre", "");
  const [valueSurname, setValueSurname] = useLocalStorage("apellido", "");
  const [valueEmail, setValueEmail] = useLocalStorage("correo", "");

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
        validate={(valores) => {
          let errores = {};
          //Validacion nombre
          if (!valores.name) {
            errores.name = "Por favor ingrese un nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
            errores.name = "El nombre solo puede contener letras y espacios";
          }

          //Validacion apellido
          if (!valores.surname) {
            errores.surname = "Por favor ingrese un apellido";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.surname)) {
            errores.surname =
              "El apellido solo puede contener letras y espacios";
          }

          //Validacion correo
          if (!valores.email) {
            errores.email = "Por favor ingrese un correo electronico";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.email
            )
          ) {
            errores.email =
              "El correo solo puede contener letras, numeros, puntos, guines y guion bajo";
          }

          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          console.log(valores);
          setFormSend(true);
          // setTimeout(() => setFormSend(false), 5000); ver validacion
          resetForm();
          //los valores se colocan en localstorage
          setValueName(valores.name);
          setValueSurname(valores.surname);
          setValueEmail(valores.email);
        }}
      >
        {({ errors }) => (
          <Form className={formSend ? "formNotDisplay" : "form-container"}>
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
