import React, { useEffect, useState } from "react";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import PropTypes from "prop-types";

import Alert from "../Alert/Alert";
import { toBase64 } from "../../utils/toBase64";
import { alerts } from "../../utils/alerts";
import { createNews, editNews } from "../../Services/NewsService";
import { getCategories } from "../../Services/CategoriesService";

const NewsForm = ({ newId = {} }) => {
  const initialValues = {
    name: newId.name || "",
    content: newId.content || "",
    image: newId.image || "",
    category_id: newId.category_id || undefined,
  };

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  // ejecuta la funcion getCategories para traer y mostrar todas las categorias
  useEffect(() => {
    const data = async () => {
      const result = await getCategories();

      setCategories(result?.data?.data);
    };

    data();
  }, []);

  return (
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
        if (newId.id === undefined) {
          await createNews(data)
            .then(() => {
              alerts("La novedad se creo correctamente", "success");
            })
            .catch(() => {
              alerts("Error al crear novedad", "error");
            });

          setLoading(false);
        } else {
          const resultbase = await toBase64(formData.image);
          const data = {
            name: formData.name,
            content: formData.content,
            category_id: formData.category_id,
            image: resultbase,
          };

          await editNews(data, newId.id)
            .then(() => {
              alerts("La novedad se editó correctamente", "success");
            })
            .catch(() => {
              alerts("Error al editar novedad", "error");
            });

          setLoading(false);
        }
      }}
    >
      {(formik) => (
        <Form className="form-backoffice" onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label className="form-label fw-bold mt-1 fw-bold">Título:</label>
            <input
              autoComplete="off"
              className="form-control form-control-sm w-100 mb-3"
              data-testid="inputTitle"
              placeholder={initialValues.name}
              type="text"
              value={initialValues.name}
              {...formik.getFieldProps("name")}
            />
            <ErrorMessage className="text-danger" component={Alert} name="name" />
          </div>
          <div className="form-group">
            <label className="form-label fw-bold mt-1 fw-bold mt-1">Contenido:</label>
            <CKEditor
              data={initialValues.content}
              data-testid="inputContent"
              editor={ClassicEditor}
              id="content"
              onChange={(event, editor) => formik.setFieldValue("content", editor.getData())}
            />
          </div>
          <ErrorMessage component={Alert} name="content" />
          <div className="form-group">
            <label className="form-label fw-bold mt-1 fw-bold mt-1">Categoría:</label>
            <select
              aria-label="Default select example"
              className="form-select mb-3"
              data-testid="inputCategory"
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
          <ErrorMessage component={Alert} name="category_id" />
          <div className="form-group">
            <label className="form-label fw-bold mt-1 fw-bold mt-1">Imagen:</label>
            <input
              autoComplete="off"
              className="form-control form-control-sm w-100 mb-3"
              data-testid="inputImage"
              name="image"
              type="file"
              onChange={(event) => {
                formik.setFieldValue("image", event.currentTarget.files[0]);
              }}
            />
          </div>
          <ErrorMessage component={Alert} name="image" />
          {newId.image && (
            <div className="form-group mb-3">
              <label className="form-label fw-bold mt-1 fw-bold mt-1">(Imagen actual)</label>
              <img alt="Imagen actual" className="preview-image" src={newId.image} />
            </div>
          )}
          <button className="submit-btn" data-testid="btnSubmit" type="submit">
            <span
              aria-hidden="true"
              className={loading ? "spinner-border spinner-border-sm" : null}
              role="status"
            />
            {newId.id === undefined ? "AGREGAR NOVEDAD" : "EDITAR NOTICIA"}
          </button>
        </Form>
      )}
    </Formik>
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
  newId: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    content: PropTypes.string,
    image: PropTypes.string,
    category_id: PropTypes.number,
  }),
};

export default NewsForm;
