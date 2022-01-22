import React, { useEffect, useState } from "react";
import ContainerFormCard from "../ContainerFormCard";
import { getCategories } from "../../Services/getCategories";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import { createNews } from "../../Services/createNews";
import { editNew } from "../../Services/editNew";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { toBase64 } from "../../utils/toBase64";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewsForm = ({ id, titulo }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  //ejecuta la funcion getCategories para traer y mostrar todas las categorias
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
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ContainerFormCard>
        <Formik
          initialValues={initialValues}
          validationSchema={validationNewSchema}
          onSubmit={async (formData) => {
            setLoading(true);
            //Convertirmos la imagen en formato base64
            const resultbase = await toBase64(formData.image);
            const data = {
              name: formData.name,
              content: formData.content,
              category_id: formData.category_id,
              image: resultbase,
            };
            //Validamos si el objeto novedad esta vacio o no
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
                <CKEditor
                  id="content"
                  editor={ClassicEditor}
                  onChange={(event, editor) =>
                    formik.setFieldValue("content", editor.getData())
                  }
                />
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
                  name="image"
                  type="file"
                  onChange={(event) => {
                    formik.setFieldValue("image", event.currentTarget.files[0]);
                  }}
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
                <span
                  className={
                    loading ? "spinner-border spinner-border-sm" : null
                  }
                  role="status"
                  aria-hidden="true"
                ></span>
                {id === undefined ? "AGREGAR NOVEDAD" : "EDITAR NOTICIA"}
              </button>
            </Form>
          )}
        </Formik>
      </ContainerFormCard>
    </>
  );
};

export default NewsForm;
const initialValues = {
  name: "",
  content: "",
  image: "",
  category_id: "",
};
const validationNewSchema = Yup.object({
  name: Yup.string()
    .min(4, "Debe contener al menos 4 caracteres")
    .required("El titulo es obligatorio"),
  content: Yup.string().required("El contenido es obligatorio"),
  category_id: Yup.string().required("La categoría es obligatoria"),
  image: Yup.string().required("La imagen es obligatoriaaaaaa"),
});
