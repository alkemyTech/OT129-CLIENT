import React, { useState, useEffect } from "react";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import PropTypes from "prop-types";

import { toBase64 } from "../../utils/toBase64";
import Alert from "../Alert/Alert";

const NewsForm = ({ _new, categories = [], handleSubmit }) => {
  const [newImage, setNewImage] = useState("");

  const initialValues = {
    name: _new?.name || "",
    content: _new?.content || "",
    image: _new?.image || "",
    category_id: _new?.category_id || undefined,
  };

  useEffect(() => {
    if (_new?.id) {
      setNewImage(_new?.image);
    }
  }, [_new]);

  return (
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
                setNewImage(URL.createObjectURL(event.currentTarget.files[0]));
              }}
            />
          </div>
          <ErrorMessage component={Alert} name="image" />
          {newImage && (
            <div className="form-group mb-3">
              <label className="form-label fw-bold mt-1 fw-bold mt-1">(Imagen actual)</label>
              <img alt="Imagen actual" className="preview-image" src={newImage} />
            </div>
          )}
          <button className="submit-btn" data-testid="btnSubmit" type="submit">
            {!_new?.id ? "AGREGAR" : "EDITAR"}
          </button>
        </Form>
      )}
    </Formik>
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
};

export default NewsForm;
