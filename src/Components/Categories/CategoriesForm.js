import React from "react";
import { Form, Field, ErrorMessage, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import PropTypes from "prop-types";

import { createCategory, editCategory } from "../../Services/CategoriesService";
import { formattedCategory } from "../../Containers/Categories/CategoriesFormContainer";

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

const CategoriesForm = ({ category = {} }) => {
  const initialValues = {
    name: category?.name || "",
    description: category?.description || "",
    image: category?.image || "",
    parent_category_id: category?.parent_category_id || undefined,
  };
  const onSubmit = async (values) => {
    const data = await formattedCategory(values);

    category.id ? editCategory(data, category.id) : createCategory(data);
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
        <Field
          className="input-field"
          id="name"
          name="name"
          placeholder={initialValues.name}
          type="text"
        />
        <ErrorMessage component={ErrorComponent} name="name" />
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
  category: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    parent_category_id: PropTypes.number,
  }),
};

export default CategoriesForm;
