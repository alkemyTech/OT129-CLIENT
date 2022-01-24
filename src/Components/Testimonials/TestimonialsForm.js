import React, { useState, useEffect } from "react";
import "../FormStyles.css";
import "bootstrap/dist/css/bootstrap.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "../../api/testimonialapi";
import { v4 as uuid } from "uuid";

import { newsletterSchema } from "./formValidation";

const TestimonialForm = () => {
  const [formData, setFormData] = useState("");
  const [formSend, setFormSend] = useState(false);
  const [error, setError] = useState(false);

  return (
    <React.Fragment>
      <Formik
        initialValues={{
          id: uuid(),
          name: "",
          description: "",
        }}
        validationSchema={newsletterSchema}
        validateOnMount
        onSubmit={async (valores, { resetForm }) => {
          resetForm();
          console.log("estos son los datos", valores);

          if (!valores.id || valores.id === undefined) {
            try {
              const createdTestimonial = await axios.post(
                "/testimonials",
                valores
              );
              console.log(createdTestimonial);
            } catch (error) {
              setError(true);
            }
          }
        }}
      >
        {({ errors, isValid, setFieldValue }) => (
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
              <CKEditor
                id="description"
                name="description"
                editor={ClassicEditor}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  console.log({ event, editor, data });
                  setFieldValue("description", data);
                }}
              />

              <ErrorMessage
                name="description"
                component={() => <p className="error">{errors.description}</p>}
              />

              <label htmlFor="image" className="form-label">
                Imagen
                <span>:</span>
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/png, image/jpeg"
                className="form-control"
                onChange={(event) => {
                  console.log(event);
                  setFieldValue("image", event.target.files[0]);
                }}
              />
              <ErrorMessage
                name="image"
                component={() => <p className="error">{errors.image}</p>}
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
