import React, { useState, useEffect } from "react";
import { Form, Field, ErrorMessage, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import PropTypes from "prop-types";
import axios from "axios";

import { config } from "../../Services/publicApiService";
import "../FormStyles.css";

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const ErrorComponent = (props) => {
  return <p>{props.children}</p>;
};

const updateCategory = async (data) => {
  try {
    const id = data.id;
    const response = await axios.put(`http://ongapi.alkemy.org/api/categories/${id}`, data);

    console.log(response);
  } catch (error) {
    console.log(error.response.data);
  }
};

const createCategory = async (data) => {
  try {
    const response = await axios.post("http://ongapi.alkemy.org/api/categories", data);

    console.log(response);
  } catch (error) {
    console.log(error.response.data);
  }
};

const CategoriesForm = ({ category }) => {
  const initialValues = {
    id: category?.id || 1541,
    name: category?.name || "",
    description: category?.description || "",
    image: category?.image || "",
    parent_category_id: category?.parent_category_id || "",
  };

  const onSubmit = async (values, { resetForm }) => {
    resetForm();
    const imageFormatted = await toBase64(values.image);
    const data = {
      id: values.id,
      name: values.name,
      description: values.description,
      image: imageFormatted,
      parent_category_id: values.parent_category_id,
    };

    values.id === "" ? createCategory(data) : updateCategory(data);
  };

  const formik = useFormik({ initialValues, onSubmit, validationSchema });

  return (
    <FormikProvider
      initialValues={initialValues}
      validationSchema={validationSchema}
      value={formik}
      onSubmit={onSubmit}
    >
      <Form className="form-container">
        <Field className="input-field" name="name" placeholder="Título categoría" type="text" />
        <ErrorMessage component={ErrorComponent} name="name" />
        <input
          className="input-field"
          name="image"
          type="file"
          onChange={(e) => {
            formik.setFieldValue("image", e.currentTarget.files[0]);
          }}
        />
        <ErrorMessage component={ErrorComponent} name="image" />
        <CKEditor
          config={{ placeholder: "Ingrese una descripción" }}
          editor={ClassicEditor}
          name="description"
          onChange={(e, editor) => {
            formik.setFieldValue("description", editor.getData());
          }}
        />
        <ErrorMessage component={ErrorComponent} name="description" />
        <button className="submit-btn" type="submit">
          Enviar
        </button>
      </Form>
    </FormikProvider>
  );
};

const validationSchema = Yup.object({
  name: Yup.string()
    .min(4, "El título debe contener un mínimo de 4 carácteres.")
    .required("Requerido"),
  image: Yup.mixed()
    .required("Requerido")
    .test("fileType", "Formato incorrecto. Sólo se aceptan archivos .jpg, .jpeg, .png", (value) => {
      if (value) return ["image/jpeg", "image/jpg", "image/png"].includes(value.type);
    }),
  description: Yup.string().required("Requerido"),
});

ErrorComponent.propTypes = {
  children: PropTypes.string.isRequired,
};

CategoriesForm.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    parent_category_id: PropTypes.number,
  }),
};
export default CategoriesForm;
