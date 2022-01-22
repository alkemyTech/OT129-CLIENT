import React, { useEffect, useState } from "react";
import ContainerFormCard from "../ContainerFormCard";
import { getCategories } from "../../Services/getCategories";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import { createNews } from "../../Services/createNews";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { number } from "yup";

const NewsForm = ({ id = "", titulo }) => {
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

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
        onSubmit={async (formData) => {
          console.log(formData);
          const data = {
            name: formData.name,
            content: formData.content,
            category_id: formData.category_id,
          };
          const resultbase = await convertBase64(formData.image);
          console.log(resultbase);
          //Validamos si el objeto novedad esta vacio o no
          if (id === "") {
            // const result = await createNews({ data });
            // console.log(result);
          } else {
            // const result = editNews({ formData }, id);
            // console.log("hacemos el metodo patch");
          }
        }}
      >
        {(formik) => (
          <Form className="p-4" onSubmit={formik.handleSubmit}>
            <div className="mb-1">
              <label className="form-label fw-bold">Título</label>
              <input
                value={titulo}
                className="form-control form-control-sm w-100"
                type="text"
                placeholder="Ingrese un título"
                {...formik.getFieldProps("name")}
              />
              <ErrorMessage
                name="name"
                component="span"
                className="text-danger"
              />
            </div>
            <div className="mb-1">
              <label className="form-label fw-bold mt-1">Contenido</label>
              {/* <CKEditor
                editor={ClassicEditor}
                // {...formik.getFieldProps("content")}
              /> */}
              <input
                className="form-control form-control-sm"
                type="text"
                placeholder="Contenido..."
                {...formik.getFieldProps("content")}
              ></input>
            </div>
            <ErrorMessage
              name="content"
              component="span"
              className="text-danger"
            />

            <div className="mb-1">
              <label className="form-label fw-bold mt-1">Categoría</label>
              <select
                className="form-select form-select-sm"
                aria-label="Default select example"
                {...formik.getFieldProps("category_id")}
              >
                <option defaultValue>Seleccione una categoria</option>
                {categories?.map((categorie) => (
                  <option key={categorie.id} value={categorie.id}>
                    {categorie.name}
                  </option>
                ))}
              </select>
            </div>
            <ErrorMessage
              name="category_id"
              component="span"
              className="text-danger"
            />

            <div className="mb-1">
              <label className="form-label fw-bold mt-1">Imagen</label>
              <input
                className="form-control form-control-sm"
                type="file"
                {...formik.getFieldProps("image")}
              />
            </div>
            <ErrorMessage
              name="image"
              component="span"
              className="text-danger"
            />

            <button
              className="btn btn-primary w-100 mt-2 fw-bold"
              type="submit"
            >
              {id === "" ? "AGREGAR NOTICIA" : "EDITAR NOTICIA"}
            </button>
          </Form>
        )}
      </Formik>
    </ContainerFormCard>
  );
};

export default NewsForm;
const initialValues = {
  name: "",
  content: "",
  image: "",
  category_id: 120,
};
const validationNewSchema = Yup.object({
  name: Yup.string()
    .min(4, "Debe contener al menos 4 caracteres")
    .required("El titulo es obligatorio"),
  content: Yup.string().required("El contenido es obligatorio"),
  category_id: Yup.string().required("La categoría es obligatoria"),
  image: Yup.string().required("La imagen es obligatoria"),
});
