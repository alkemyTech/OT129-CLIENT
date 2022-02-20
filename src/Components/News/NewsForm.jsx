import React from "react";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import PropTypes from "prop-types";

import { toBase64 } from "../../utils/toBase64";
import ContainerFormCard from "../../Containers/ContainerFormCard";

const NewsForm = ({ _new = {}, categories = [], handleSubmit, status }) => {
  const initialValues = {
    name: _new.name || "",
    content: _new.content || "",
    image: _new.image || "",
    category_id: _new.category_id || undefined,
  };

  return (
    <>
      <ContainerFormCard>
        <Formik
          initialValues={initialValues}
          validationSchema={validationNewSchema}
          onSubmit={async (formData) => {
            const resultbase = await toBase64(formData.image);
            const data = {
              name: formData.name,
              content: formData.content,
              category_id: formData.category_id,
              image: resultbase,
            };

            handleSubmit(data);
          }}
        >
          {(formik) => (
            <Form className="p-4" onSubmit={formik.handleSubmit}>
              <div className="mb-1">
                <label className="form-label fw-bold">Título</label>
                <input
                  className="form-control form-control-sm w-100"
                  name="name"
                  placeholder={initialValues.name}
                  type="text"
                  {...formik.getFieldProps("name")}
                />
                <ErrorMessage className="text-danger" component="span" name="name" />
              </div>
              <div className="mb-1">
                <label className="form-label fw-bold mt-1">Contenido</label>
                <CKEditor
                  data={initialValues.content}
                  editor={ClassicEditor}
                  id="content"
                  onChange={(event, editor) => {
                    const data = editor.getData();

                    formik.setFieldValue("content", data);
                  }}
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
                  autoComplete="off"
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
                  className={status === "PENDING" ? "spinner-border spinner-border-sm" : null}
                  role="status"
                />
                {_new.id === undefined ? "AGREGAR NOVEDAD" : "EDITAR NOTICIA"}
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
    .required("El titulo es obligatorio.")
    .min(4, "Debe contener al menos 4 caracteres"),
  content: Yup.string().required("El contenido es obligatorio"),
  category_id: Yup.string().required("La categoría es obligatoria"),
  image: Yup.string().required("La imagen es obligatoria"),
});

NewsForm.propTypes = {
  categories: PropTypes.array,
  handleSubmit: PropTypes.func,
  _new: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    content: PropTypes.string,
    image: PropTypes.string,
    category_id: PropTypes.number,
  }),
  status: PropTypes.string,
};

export default NewsForm;
