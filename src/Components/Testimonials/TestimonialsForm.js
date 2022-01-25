/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import "../FormStyles.css";
import "bootstrap/dist/css/bootstrap.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { v4 as uuid } from "uuid";

import axios from "../../api/testimonialapi";

import { newsletterSchema } from "./formValidation";

const TestimonialForm = () => {
  const [formSend, setFormSend] = useState(false);

  return (
    <React.Fragment>
      <Formik
        validateOnMount
        initialValues={{
          id: uuid(),
          name: "",
          description: "",
        }}
        validationSchema={newsletterSchema}
        onSubmit={async (valores, { resetForm }) => {
          resetForm();
          // eslint-disable-next-line no-console
          console.log(valores);
          //Eleccion de ruta para crear o editar
          if (!valores.id || valores.id === undefined) {
            try {
              const createdTestimonial = await axios.post(
                "/testimonials",
                valores
              );

              setFormSend(true);
              Console.log(createdTestimonial);
            } catch (error) {}
          } else {
            try {
              const updatedTestimonial = await axios.put(
                `/testimonials/${valores.id}`,
                valores
              );

              Console.log(updatedTestimonial);
            } catch (error) {}
          }
        }}
      >
        {({ errors, isValid, setFieldValue }) => (
          <Form className="form-container">
            <div className="mt-3">
              <label className="form-label" htmlFor="name">
                Nombre
                <span>:</span>
              </label>
              <Field
                className="form-control"
                id="name"
                name="name"
                placeholder="Testimonio Nombre"
                type="text"
              />
              <ErrorMessage
                component={() => <p className="error">{errors.name}</p>}
                name="name"
              />
            </div>
            <div className="mt-3">
              <label className="form-label" htmlFor="description">
                Descripción
                <span>:</span>
              </label>
              <CKEditor
                editor={ClassicEditor}
                id="description"
                name="description"
                onChange={(event, editor) => {
                  const data = editor.getData();

                  setFieldValue("description", data);
                }}
              />

              <ErrorMessage
                component={() => <p className="error">{errors.description}</p>}
                name="description"
              />

              <label className="form-label" htmlFor="image">
                Imagen
                <span>:</span>
              </label>
              <input
                accept="image/png, image/jpeg"
                className="form-control"
                id="image"
                name="image"
                type="file"
                onChange={(event) => {
                  setFieldValue("image", event.target.files[0]);
                }}
              />
              <ErrorMessage
                component={() => <p className="error">{errors.image}</p>}
                name="image"
              />
            </div>
            <button
              className="btn btn-primary"
              disabled={!isValid}
              type="submit"
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
