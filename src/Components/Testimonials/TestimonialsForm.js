import React, { useState } from "react";
import "../FormStyles.css";
import "bootstrap/dist/css/bootstrap.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { newsletterSchema } from "./formValidation";

const TestimonialForm = () => {
  const [formSend, setFormSend] = useState(false);
  const [error, setError] = useState(false);

  return (
    <React.Fragment>
      <Formik
        initialValues={{
          name: "",
          description: "",
        }}
        validationSchema={newsletterSchema}
        validateOnMount
        onSubmit={(valores, { resetForm }) => {
          try {
            console.log(valores);
            setFormSend(true);
            // setTimeout(() => setFormSend(false), 5000); ver validacion
            resetForm();
          } catch (error) {
            setError(true);
          }
        }}
      >
        {({ errors, isValid }) => (
          <Form className="form-container">
            <div className="mt-3">
              <label htmlFor="name" className="form-label">
                Nombre
                <span>:</span>
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Testimonio Nombre"
                className="form-control"
              />
              <ErrorMessage
                name="name"
                component={() => <p className="error">{errors.name}</p>}
              />
            </div>
            <div className="mt-3">
              <label htmlFor="description" className="form-label">
                Descripción
                <span>:</span>
              </label>
              <Field
                type="text"
                id="description"
                name="description"
                placeholder="Testimonio Descripción"
                className="form-control"
              />
              <ErrorMessage
                name="description"
                component={() => <p className="error">{errors.description}</p>}
              />
              <label htmlFor="image" className="form-label">
                Imagen
                <span>:</span>
              </label>
              <Field
                type="file"
                id="image"
                name="image"
                className="form-control"
              />
              <ErrorMessage
                name="image"
                component={() => <p className="error">{errors.description}</p>}
              />
            </div>
            <button
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

export default TestimonialForm;
