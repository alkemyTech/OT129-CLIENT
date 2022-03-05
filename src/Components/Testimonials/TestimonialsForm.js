import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Formik, Form, ErrorMessage } from "formik";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { toBase64 } from "../../utils/toBase64";
import Alert from "../Alert/Alert";

import { testimonialSchema } from "./formValidation";

const TestimonialForm = ({ handleSubmit, testimonial }) => {
  const [testimonyImage, setTestimonyImage] = useState("");

  const initialValues = {
    name: testimonial?.name || "",
    description: testimonial?.description || "",
    image: testimonial?.image || "",
  };

  const onSubmit = async (values) => {
    const resultBase = await toBase64(values.image);
    const newTestimonial = { ...values, image: resultBase };

    handleSubmit(newTestimonial);
  };

  useEffect(() => {
    if (testimonial.id) {
      setTestimonyImage(testimonial.image);
    }
  }, [testimonial]);

  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={testimonialSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form className="form-backoffice" onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label className="form-label fw-bold mt-1" htmlFor="name">
              Nombre
            </label>
            <input
              className="form-control form-control-sm w-100 mb-3 mb-3"
              id="name"
              name="name"
              placeholder="Ingresa autor del testimonio"
              type="text"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            <ErrorMessage component={Alert} name="name" />
          </div>
          <div className="form-group mb-3">
            <label className="form-label fw-bold mt-1" htmlFor="description">
              Descripción
            </label>
            <CKEditor
              config={{ placeholder: `${initialValues.description}` }}
              data={initialValues.description}
              editor={ClassicEditor}
              name="description"
              onChange={(event, editor) => {
                const data = editor.getData();

                formik.setFieldValue("description", data);
              }}
            />
            <ErrorMessage component={Alert} name="description" />
          </div>
          <div className="form-group">
            <label className="form-label fw-bold mt-1" htmlFor="image">
              Imagen
            </label>
            <input
              accept="image/png, image/jpg"
              className="form-control form-control-sm w-100 mb-3 mb-3"
              id="image"
              name="image"
              type="file"
              onChange={(event) => {
                formik.setFieldValue("image", event.target.files[0]);
                setTestimonyImage(URL.createObjectURL(event.currentTarget.files[0]));
              }}
            />
            <ErrorMessage component={Alert} name="file" />
          </div>
          <div className="form-group mb-3">
            {testimonyImage && (
              <>
                <label className="form-label fw-bold mt-1" htmlFor="image">
                  (Imagen actual:)
                </label>
                <img alt="Imagen actual" className="preview-image" src={testimonyImage} />
              </>
            )}
          </div>
          <button className="submit-btn" type="submit">
            Enviar
          </button>
        </Form>
      )}
    </Formik>
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
