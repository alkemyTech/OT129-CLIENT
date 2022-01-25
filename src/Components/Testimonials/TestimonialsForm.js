/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import PropTypes from "prop-types";
import "../FormStyles.css";
import "bootstrap/dist/css/bootstrap.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import axios from "../../api/testimonialapi";

import PreviewImage from "./PreviewImage";
import { testimonialSchema } from "./formValidation";

const toBase64 = async (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
  });

const TestimonialForm = ({ testimony = {} }) => {
  const [formSend, setFormSend] = useState(false);

  const [testimonyPost, setTestimonyPost] = useState("");

  const [testimonyImage, setTestimonyImage] = useState("");

  const createNewTestimony = async (data) => {
    let response = await axios.post("/testimonials", data);

    setTestimonyPost(response);

    // eslint-disable-next-line no-console
    // return console.log(response);
  };
  const updateTestimony = async (data) => {
    let response = axios.put(`testimonials/${data.id}`, data);

    console.log(response);
  };

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
          // eslint-disable-next-line no-console

          //Eleccion de ruta para crear o editar

          if (!testimony.id) {
            const resultBase = await toBase64(values.image);

            console.log(resultBase);
            const newTestimony = { ...values, image: resultBase };
            const result = await createNewTestimony(newTestimony);

            setTestimonyPost(result);
            setFormSend(true);
            console.log(testimonyPost);
            console.log(result);
          } else {
            const result = await updateTestimony({
              ...newTestimony,
              id: testimony.id,
            });

            console.log(result);
          }

          // eslint-disable-next-line no-console
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
                accept="image/png, image/jpg"
                className="form-control"
                id="image"
                name="image"
                type="file"
                onChange={(event) => {
                  setFieldValue("image", event.target.files[0]);
                  setTestimonyImage(
                    URL.createObjectURL(event.currentTarget.files[0])
                  );
                }}
              />
              <ErrorMessage
                component={() => <p className="error">{errors.file}</p>}
                name="file"
              />
              {testimonyImage && <PreviewImage file={testimonyImage} />}
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

TestimonialForm.propTypes = {
  testimony: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  }),
};

export default TestimonialForm;
