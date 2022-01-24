import React from "react";
import { ErrorMessage, Form, Formik } from "formik";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import * as Yup from "yup";

import ContainerFormCard from "../ContainerFormCard";

import "../FormStyles.css";

const MembersForm = () => {
  return (
    <ContainerFormCard>
      <Formik
        initialValues={initialValues}
        validationSchema={validationMemberSchema}
        onSubmit={async (formData) => {
          console.log(formData);
        }}
      >
        {(formik) => (
          <Form className="p-4" onSubmit={formik.handleSubmit}>
            <div className="mb-1">
              <label className="form-label fw-bold">Nombre</label>
              <input
                className="form-control form-control-sm w-100"
                type="text"
                // placeholder="Ingrese un título"
                {...formik.getFieldProps("name")}
              />
              <ErrorMessage className="text-danger" component="span" name="name" />
            </div>
            <div className="mb-1">
              <label className="form-label fw-bold mt-1">Descripción</label>
              <CKEditor
                editor={ClassicEditor}
                id="description"
                onChange={(event, editor) => formik.setFieldValue("description", editor.getData())}
              />
            </div>
            <ErrorMessage className="text-danger" component="span" name="description" />

            <div className="mb-1">
              <label className="form-label fw-bold mt-1">Imagen</label>
              <input
                className="form-control form-control-sm"
                name="image"
                type="file"
                onChange={(event) => {
                  formik.setFieldValue("image", event.currentTarget.files[0]);
                }}
              />
              <ErrorMessage className="text-danger" component="span" name="image" />
            </div>

            <div className="mb-1">
              <label className="form-label fw-bold">Link de su red social</label>
              <input
                className="form-control form-control-sm w-100"
                type="text"
                // placeholder="Ingrese un título"
                {...formik.getFieldProps("link")}
              />
            </div>
            <ErrorMessage className="text-danger" component="span" name="link" />

            <button className="btn btn-primary w-100 mt-2 fw-bold" type="submit">
              Editar miembro
            </button>
          </Form>
        )}
      </Formik>
    </ContainerFormCard>
  );
};

export default MembersForm;

const initialValues = {
  name: "",
  description: "",
  image: "",
  link: "",
};
//Funcion para validar la url
const isValidUrl = (url) => {
  try {
    new URL(url);
  } catch (e) {
    return false;
  }

  return true;
};
const SUPPORTED_FORMATS = ["image/jpg", "image/png"]; //Formatos soportados
const validationMemberSchema = Yup.object({
  name: Yup.string()
    .min(4, "Debe contener al menos 4 caracteres")
    .required("El nombre es obligatorio"),
  description: Yup.string().required("La descripción es obligatorio"),
  link: Yup.string()
    .required("La url es obligatoria")
    .test("is-url-valid", "La url no es valida", (value) => isValidUrl(value)),
  image: Yup.mixed()
    .nullable()
    .required("La imagen es obligatoria")
    .test(
      "format",
      "El formato no es valido",
      (value) => !value || (value && SUPPORTED_FORMATS.includes(value.type))
    ),
});
