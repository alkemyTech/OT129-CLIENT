import React, { useState } from "react";
import PropTypes from "prop-types";
import "../FormStyles.css";
import "bootstrap/dist/css/bootstrap.css";
import { Formik, Form, ErrorMessage } from "formik";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { toBase64 } from "../../utils/toBase64";

import PreviewImage from "./PreviewImage";
import { testimonialSchema } from "./formValidation";

const TestimonialForm = ({ handleSubmit, testimonial = {} }) => {
  const [testimonyImage, setTestimonyImage] = useState("");

  const initialValues = {
    name: testimonial?.name || "",
    description: testimonial?.description || "",
    image: testimonial?.image || "",
  };

  return (
    <React.Fragment>
      <Formik
        validateOnMount
        initialValues={initialValues}
        validationSchema={testimonialSchema}
        onSubmit={async (values) => {
          //Eleccion de ruta para crear o editar
          const resultBase = await toBase64(values.image);
          const newTestimonial = { ...values, image: resultBase };

          handleSubmit(newTestimonial);
        }}
      >
        {({ errors, setFieldValue }) => (
          <Form className="form-container">
            <div className="mt-3">
              <label className="form-label" htmlFor="name">
                Nombre
                <span>:</span>
              </label>
              <input
                className="form-control"
                id="name"
                name="name"
                placeholder="Testimonio Nombre"
                type="text"
                onChange={(e) => {
                  setFieldValue("name", e.target.value);
                }}
              />
              <ErrorMessage component={() => <p className="error">{errors.name}</p>} name="name" />
            </div>
            <div className="mt-3">
              <label className="form-label" htmlFor="description">
                Descripción
                <span>:</span>
              </label>
              <CKEditor
                config={{ placeholder: `${initialValues.description}` }}
                data={initialValues.description}
                editor={ClassicEditor}
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
            <button className="btn btn-primary" type="submit">
              Enviar
            </button>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
};

TestimonialForm.propTypes = {
  handleSubmit: PropTypes.func,
  testimonial: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  }),
};

export default TestimonialForm;
