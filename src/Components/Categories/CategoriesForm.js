import React from "react";
import { Form, ErrorMessage, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import PropTypes from "prop-types";

import { toBase64 } from "../../utils/toBase64";

const ErrorComponent = (props) => {
  return <p>{props.children}</p>;
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

const CategoriesForm = ({ category = {}, handleSubmit }) => {
  const initialValues = {
    name: category?.name || "",
    description: category?.description || "",
    image: category?.image || "",
    parent_category_id: category?.parent_category_id || undefined,
  };
  const onSubmit = async (values) => {
    const formatedImg = await toBase64(values.image);
    const data = { ...values, image: formatedImg };

    handleSubmit(data);
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
        <input
          className="input-field"
          id="name"
          name="name"
          placeholder={initialValues.name}
          type="text"
        />
        <ErrorMessage className="alert-danger" name="name" />
        {initialValues.image ? (
          <img alt={initialValues.name} height="150" src={initialValues.image} width="200" />
        ) : (
          <p>No hay imagen guardada.</p>
        )}
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
          config={{ placeholder: `${initialValues.description}` }}
          data={initialValues.description}
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

ErrorComponent.propTypes = {
  children: PropTypes.string.isRequired,
};

CategoriesForm.propTypes = {
  handleSubmit: PropTypes.func,
  category: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    parent_category_id: PropTypes.number,
  }),
};

export default CategoriesForm;
