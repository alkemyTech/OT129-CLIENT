import React from "react";
import { Form, ErrorMessage, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import PropTypes from "prop-types";

import { toBase64 } from "../../utils/toBase64";
import Alert from "../Alert/Alert";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(4, "El título debe contener un mínimo de 4 carácteres.")
    .required("El título es requerido."),
  image: Yup.mixed()
    .required("La imagen es requerida.")
    .test("fileType", "Formato incorrecto. Sólo se aceptan archivos .jpg, .jpeg, .png", (value) => {
      if (value) return ["image/jpeg", "image/jpg", "image/png"].includes(value.type);
    }),
  description: Yup.string().required("La descripción es requerida."),
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
      <Form className="form-backoffice">
        <div className="form-group">
          <label className="form-label fw-bold mt-1 fw-bold mt-1">Nombre</label>
          <input
            className="form-control form-control-sm w-100 mb-3"
            id="name"
            name="name"
            placeholder={initialValues.name || "Título"}
            type="text"
            {...formik.getFieldProps("name")}
          />
          <ErrorMessage className="alert-danger" component={Alert} name="name" />
        </div>
        <div className="form-group">
          {initialValues.image ? (
            <>
              <label className="form-label fw-bold mt-1 fw-bold mt-1">(Imagen actual)</label>
              <img
                alt={initialValues.name}
                className="preview-image mb-3"
                src={initialValues.image}
              />
            </>
          ) : (
            <label className="form-label fw-bold mt-1 fw-bold mt-1">Imagen</label>
          )}
          <input
            className="form-control form-control-sm w-100 mb-3"
            name="image"
            type="file"
            onChange={(e) => {
              formik.setFieldValue("image", e.currentTarget.files[0]);
            }}
          />
          <ErrorMessage className="alert-danger" component={Alert} name="image" />
        </div>
        <div className="form-group mb-3">
          <label className="form-label fw-bold mt-1 fw-bold mt-1">Descripción</label>
          <CKEditor
            config={{ placeholder: `${initialValues.description}` }}
            data={initialValues.description}
            editor={ClassicEditor}
            name="description"
            onChange={(e, editor) => {
              formik.setFieldValue("description", editor.getData());
            }}
          />
          <ErrorMessage className="alert-danger" component={Alert} name="description" />
        </div>
        <button className="submit-btn" type="submit">
          Enviar
        </button>
      </Form>
    </FormikProvider>
  );
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
