import React, { useEffect, useState } from "react";
import ContainerFormCard from "../ContainerFormCard";
import { getCategories } from "../../Services/getCategories";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import { createNews } from "../../Services/createNews";

const NewsForm = (news) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const data = async () => {
      const result = await getCategories();
      setCategories(result);
    };
    data();
  }, []);

  return (
    <ContainerFormCard>
      <Formik
        initialValues={initialValues}
        validationSchema={validationNewSchema}
        onSubmit={(formData) => {
          //Validamos si el objeto novedad esta vacio o no
          if (Object.entries(news).length === 0) {
            // const result = createNews({ formData });
            // console.log(result);
            console.log("hacemos el metodo post");
          } else {
            console.log("hacemos el metodo patch");
          }
        }}
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
                <option defaultValue>Seleccione una categoria</option>
                {categories?.map((categorie) => (
                  <option key={categorie.id} value={categorie.id}>
                    {categorie.name}
                  </option>
                ))}
              </select>
            </div>
            <ErrorMessage name="category" component="span" />

            <div className="mb-1">
              <label className="form-label mt-1">Imagen</label>
              <input
                className="form-control form-control-sm"
                type="text"
                {...formik.getFieldProps("image")}
              ></input>
            </div>
            <ErrorMessage name="image" component="span" />

            <button className="btn btn-primary w-100 mt-2" type="submit">
              {Object.entries(news).length === 0
                ? "AGREGAR NOTICIA"
                : "EDITAR NOTICIA"}
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
  image: "",
};
const validationNewSchema = Yup.object({
  title: Yup.string()
    .min(4, "Debe contener al menos 4 caracteres")
    .required("El titulo es obligatorio"),
  content: Yup.string().required("El contenido es obligatorio"),
  category: Yup.string().required("La categoría es obligatoria"),
  image: Yup.string().required("La imagen es obligatoria"),
});
