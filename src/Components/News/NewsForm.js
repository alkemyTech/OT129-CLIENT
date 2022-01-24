import React, { useEffect, useState } from "react";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { toBase64 } from "../../utils/toBase64";
import ContainerFormCard from "../ContainerFormCard";
import { editNew } from "../../Services/editNew";
import { createNews } from "../../Services/createNews";
import { getCategories } from "../../Services/getCategories";

const NewsForm = ({ id, name, content, image, category_id }) => {
  const initialValues = {
    name,
    content,
    image,
    category_id,
  };

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  // ejecuta la funcion getCategories para traer y mostrar todas las categorias

  useEffect(() => {
    const data = async () => {
      const result = await getCategories();

      setCategories(result);
    };

    data();
  }, []);

  return (
    <>
      <ToastContainer
        closeOnClick
        draggable
        pauseOnFocusLoss
        pauseOnHover
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        position="top-center"
        rtl={false}
      />
      <ContainerFormCard>
        <Formik
          initialValues={initialValues}
          validationSchema={validationNewSchema}
          onSubmit={async (formData) => {
            setLoading(true);
            // Convertirmos la imagen en formato base64
            const resultbase = await toBase64(formData.image);
            const data = {
              name: formData.name,
              content: formData.content,
              category_id: formData.category_id,
              image: resultbase,
            };

            // Validamos si el objeto novedad esta vacio o no
            if (id === undefined) {
              const result = await createNews({ data });

              if (result.data.success) {
                setLoading(false);
                toast.success("Novedad creada con éxito", {
                  theme: "colored",
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              } else {
                setLoading(false);
                toast.error("Ocurrio un error al intentar crear una novedad", {
                  theme: "colored",
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              }
            } else {
              const resultbase = await toBase64(formData.image);
              const data = {
                name: formData.name,
                content: formData.content,
                category_id: formData.category_id,
                image: resultbase,
              };
              const result = await editNew({ data }, id);

              if (result.data.success) {
                setLoading(false);
                toast.success("Novedad editada con éxito", {
                  theme: "colored",
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              } else {
                setLoading(false);
                toast.error("Ocurrio un error al intentar editar la novedad", {
                  theme: "colored",
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              }
            }
          }}
        >
          {(formik) => (
            <Form className="p-4" onSubmit={formik.handleSubmit}>
              <div className="mb-1">
                <label className="form-label fw-bold">Título</label>
                <input
                  className="form-control form-control-sm w-100"
                  type="text"
                  value="hola que tal"
                  // placeholder="Ingrese un título"
                  {...formik.getFieldProps("name")}
                />
                <ErrorMessage className="text-danger" component="span" name="name" />
              </div>
              <div className="mb-1">
                <label className="form-label fw-bold mt-1">Contenido</label>
                <CKEditor
                  editor={ClassicEditor}
                  id="content"
                  onChange={(event, editor) => formik.setFieldValue("content", editor.getData())}
                />
              </div>
              <ErrorMessage className="text-danger" component="span" name="content" />

              <div className="mb-1">
                <label className="form-label fw-bold mt-1">Categoría</label>
                <select
                  aria-label="Default select example"
                  className="form-select form-select-sm"
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
              <ErrorMessage className="text-danger" component="span" name="category_id" />

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
              </div>
              <ErrorMessage className="text-danger" component="span" name="image" />

              <button className="btn btn-primary w-100 mt-2 fw-bold" type="submit">
                <span
                  aria-hidden="true"
                  className={loading ? "spinner-border spinner-border-sm" : null}
                  role="status"
                />
                {id === undefined ? "AGREGAR NOVEDAD" : "EDITAR NOTICIA"}
              </button>
            </Form>
          )}
        </Formik>
      </ContainerFormCard>
    </>
  );
};
const validationNewSchema = Yup.object({
  name: Yup.string()
    .min(4, "Debe contener al menos 4 caracteres")
    .required("El titulo es obligatorio"),
  content: Yup.string().required("El contenido es obligatorio"),
  category_id: Yup.string().required("La categoría es obligatoria"),
  image: Yup.string().required("La imagen es obligatoria"),
});

NewsForm.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
  category_id: PropTypes.number,
};

export default NewsForm;
