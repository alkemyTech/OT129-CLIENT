import React, { useState } from "react";
import PropTypes from "prop-types";
import "../FormStyles.css";
import "bootstrap/dist/css/bootstrap.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { toBase64 } from "../../utils/toBase64";
import { createTestimonial, editTestimonial } from "../../Services/TestimonialsService";

import PreviewImage from "./PreviewImage";
import { testimonialSchema } from "./formValidation";

const TestimonialForm = ({ testimony = {} }) => {
  const [formSend, setFormSend] = useState(false);

  const [testimonyImage, setTestimonyImage] = useState("");

  return (
    <React.Fragment>
      <Formik
        validateOnMount
        initialValues={{
          name: testimony?.name || "",
          description: testimony?.description || "",
          image: testimony?.image || "",
        }}
        validationSchema={testimonialSchema}
        onSubmit={async (values) => {
          //Eleccion de ruta para crear o editar
          const resultBase = await toBase64(values.image);
          const newTestimony = { ...values, image: resultBase };

          if (!testimony.id) {
            const result = await createTestimonial("testimonials", newTestimony);

            console.log(result);
            setFormSend(true);
          } else {
            const result = await editTestimonial("testimonials", {
              ...newTestimony,
              id: testimony.id,
            });

            setFormSend(true);
            console.log(result);
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
              <ErrorMessage component={() => <p className="error">{errors.name}</p>} name="name" />
            </div>
            <div className="mt-3">
              <label className="form-label" htmlFor="description">
                Descripción
                <span>:</span>
              </label>
              <CKEditor
                data={testimony.description}
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
                accept="image/png, image/jpg"
                className="form-control"
                id="image"
                name="image"
                type="file"
                onChange={(event) => {
                  setFieldValue("image", event.target.files[0]);
                  setTestimonyImage(URL.createObjectURL(event.currentTarget.files[0]));
                }}
              />
              <ErrorMessage component={() => <p className="error">{errors.file}</p>} name="file" />
              {testimonyImage && <PreviewImage file={testimonyImage} />}
            </div>
            <button className="btn btn-primary" disabled={!isValid} type="submit">
              Enviar
            </button>
            {formSend ? (
              testimony.id ? (
                <p className="formSubmitted">Formulario editado con éxito</p>
              ) : (
                <p className="formSubmitted">Formulario enviado con éxito</p>
              )
            ) : null}
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
};

TestimonialForm.propTypes = {
  testimony: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  }),
};

export default TestimonialForm;
