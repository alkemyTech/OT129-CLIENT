import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import PropTypes from "prop-types";
import * as Yup from "yup";
import "../FormStyles.css";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const toBase64 = async (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
  });
const createNewSlide = async (data) => {
  axios
    .post("http://ongapi.alkemy.org/api/slides", data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      console.log(res, "se creo correctamente");
    });
};
const updateSlides = async (data) => {
  axios
    .put(`http://ongapi.alkemy.org/api/slides/${data.id}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      console.log(res);
      console.log("el cambio fue exitoso");
    });
};

const validationSchema = Yup.object({
  name: Yup.string()
    .min(4, "Debe contener al menos 4 caracteres")
    .required("El nombre es obligatorio"),
  description: Yup.string().required("El contenido es obligatorio"),

  image: Yup.mixed()
    .required("Debe adjuntar una imagen")
    .test("fileType", "La extensión del archivo no es soportado", (value) => {
      if (value) return ["image/jpeg", "image/png"].includes(value.type);

      return true;
    }),
});

const SlidesForm = ({ slides = {} }) => {
  const initialValues = {
    name: slides?.name || "",
    description: slides?.description || "",
    image: slides?.image || "",
  };

  return (
    <div className="container mt-4">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (formData) => {
          const resultBase = await toBase64(formData.image);
          const newSlides = { ...formData, image: resultBase };

          if (slides.id === undefined) {
            const result = await createNewSlides(newSlides);

            console.log(result);
          } else {
            const result = await updateSlides({ ...newSlides, id: slides.id });

            console.log(result);
          }
        }}
      >
        {(formik) => (
          <Form className="row justify-content-center align-items-center">
            <div className="col-sm-6 ">
              <div className="input-group mb-3">
                <Field
                  className="p-2 w-100"
                  id="name"
                  name="name"
                  placeholder="Nombre"
                  type="text"
                />
                <ErrorMessage className="alert-danger" name="name" />
              </div>
              <div className="input-group mb-3">
                <CKEditor
                  className="p-2 w-75"
                  config={{ placeholder: "Descripción" }}
                  editor={ClassicEditor}
                  id="description"
                  name="description"
                  onChange={(event, editor) => {
                    const data = editor.getData();

                    formik.setFieldValue("description", data);
                  }}
                />
              </div>
              <div className="mb-3">
                <input
                  accept="image/png, image/jpeg"
                  className="w-100"
                  id="image"
                  name="image"
                  type="file"
                  onChange={(event) => {
                    formik.setFieldValue("image", event.currentTarget.files[0]);
                  }}
                />
                <ErrorMessage className="alert-danger" name="image" />
              </div>
              <button className="submit-btn" type="submit">
                {slides?.id ? "EDITAR" : "CREAR"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

SlidesForm.propTypes = {
  slides: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    order: PropTypes.number,
    description: PropTypes.string,
    image: PropTypes.string,
  }),
};

export default SlidesForm;
