import React from "react";
import "../../Components/FormStyles.css";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import ContainerFormCard from "../ContainerFormCard";

const NewsForm = () => {
  return (
    <ContainerFormCard>
      <Formik
        initialValues={initialValues}
        validationSchema={validationNewSchema}
        onSubmit={(formData) => console.log(formData)}
      >
        {(formik) => (
          <Form className="p-4" onSubmit={formik.handleSubmit}>
            <div className="mb-1">
              <label className="form-label">Título</label>
              <input
                className="form-control form-control-sm w-100"
                type="text"
                placeholder="Ingrese un título"
                {...formik.getFieldProps("title")}
              ></input>
              <ErrorMessage name="title" component="span" />
            </div>
            <div className="mb-1">
              <label className="form-label mt-1">Contenido</label>
              <input
                className="form-control form-control-sm"
                type="text"
                placeholder="Contenido..."
                {...formik.getFieldProps("content")}
              ></input>
            </div>
            <ErrorMessage name="content" component="span" />

            <div className="mb-1">
              <label className="form-label mt-1">Categoría</label>
              <select
                className="form-select form-select-sm"
                aria-label="Default select example"
                {...formik.getFieldProps("category")}
              >
                <option value>Selecciona una categoria</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <ErrorMessage name="category" component="span" />

            <div className="mb-1">
              <label className="form-label mt-1">Imagen</label>
              <input
                className="form-control form-control-sm"
                type="file"
                {...formik.getFieldProps("image")}
              ></input>
            </div>
            <ErrorMessage name="image" component="span" />

            <button className="btn btn-primary w-100 mt-2" type="submit">
              Agregar novedad
            </button>
          </Form>
        )}
      </Formik>
    </ContainerFormCard>
  );
};

export default NewsForm;

const initialValues = {
  title: "",
  content: "",
  category: "",
};
const validationNewSchema = Yup.object({
  title: Yup.string()
    .min(4, "Debe contener al menos 4 caracteres")
    .required("El titulo es obligatorio"),
  content: Yup.string().required("El contenido es obligatorio"),
  category: Yup.string().required("La categoría es obligatoria"),
});
