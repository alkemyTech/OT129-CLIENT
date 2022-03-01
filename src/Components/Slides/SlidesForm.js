import React, { useEffect, useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import PropTypes from "prop-types";

import { toBase64 } from "../../utils/toBase64";
import Alert from "../Alert/Alert";

const SlidesForm = ({ slide = {}, slides = [], handleSubmit }) => {
  const [ordersList, setOrdersList] = useState([]);
  const [slideImage, setSlideImage] = useState("");

  const initialValues = {
    name: slide.name || "",
    description: slide.description || "",
    order: slide.order || undefined,
    image: slide.image || "",
  };

  const validations = Yup.object({
    name: Yup.string()
      .min(4, "Debe tener al menos 4 caracteres")
      .required("Este campo es obligatorio"),
    description: Yup.string().required("Este campo es obligatorio"),
    id: Yup.boolean(),
    order: Yup.number()
      .moreThan(0, "Debe ser un numero mayor o igual a cero")
      .required("Este campo es obligatorio")

      .notOneOf(ordersList, "Numero de orden ya esta en uso"),
    image: Yup.string().required("Este campo es obligatorio"),
  });

  const getOrdersList = () => {
    const orderBlackList = slides
      .map((slide) => slide.order)
      .filter((order) => order !== initialValues.order);

    setOrdersList(orderBlackList);
  };

  useEffect(() => {
    getOrdersList();
    if (slide.id) {
      setSlideImage(slide.image);
    }
  }, [slide]);

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validations}
        onSubmit={async (values) => {
          const resultbase = await toBase64(values.image);
          let formValues = {
            ...values,
            image: resultbase,
          };

          await handleSubmit(formValues);
        }}
      >
        {(formik) => (
          <Form className="form-backoffice">
            <div className="form-group">
              <label className="form-label fw-bold mt-1 fw-bold" htmlFor="name">
                Titulo:
              </label>
              <input
                className="form-control form-control-sm w-100 mb-3"
                name="name"
                placeholder={initialValues.name || "Título"}
                type="text"
                value={initialValues.name}
                {...formik.getFieldProps("name")}
              />
              <ErrorMessage component={Alert} name="name" />
            </div>
            <div className="form-group mb-3">
              <label className="form-label fw-bold mt-1 fw-bold mt-1" htmlFor="fdescription">
                Descripcion:
              </label>
              <CKEditor
                data={initialValues.description}
                editor={ClassicEditor}
                id="description"
                onChange={(event, editor) => formik.setFieldValue("description", editor.getData())}
              />
              <ErrorMessage component={Alert} name="description" />
            </div>
            <div className="form-group">
              <label className="form-label fw-bold mt-1 fw-bold mt-1" htmlFor="order">
                Numero de orden:
              </label>
              <input
                className="form-control form-control-sm w-100 mb-3"
                min="0"
                name="order"
                placeholder={initialValues.order || "Ingrese un número de orden"}
                type="number"
                onChange={(e) => {
                  formik.setFieldValue("order", parseInt(e.currentTarget.value));
                }}
              />
              <ErrorMessage component={Alert} name="order" />
            </div>
            <div className="form-group">
              <label className="form-label fw-bold mt-1 fw-bold mt-1" htmlFor="order">
                Cargar Imagen:
              </label>
              <input
                accept=".jpg, .png"
                className="form-control form-control-sm w-100 mb-3"
                name="image"
                type="file"
                onChange={(e) => {
                  formik.setFieldValue("image", e.currentTarget.files[0]);
                  setSlideImage(URL.createObjectURL(e.currentTarget.files[0]));
                }}
              />
              <ErrorMessage component={Alert} name="image" />
            </div>
            {slideImage && (
              <div className="form-group mb-3">
                <label className="form-label fw-bold mt-1 fw-bold mt-1">(Imagen actual)</label>
                <img alt="Imagen actual" className="preview-image" src={slideImage} />
              </div>
            )}
            <button className="submit-btn" type="submit">
              {slide.id === undefined ? "AGREGAR" : "EDITAR"}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

SlidesForm.propTypes = {
  slides: PropTypes.array,
  handleSubmit: PropTypes.func,
  slide: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    descripcion: PropTypes.string,
    image: PropTypes.string,
    order: PropTypes.number,
  }),
};

export default SlidesForm;
