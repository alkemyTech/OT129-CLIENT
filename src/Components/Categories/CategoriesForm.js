import React, { useState, useEffect } from "react";
import { Form, ErrorMessage, Formik } from "formik";
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
  const [image, setImage] = useState("");
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

  useEffect(() => {
    if (category.id) {
      setImage(category.image);
    }
  }, [category]);

  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form className="form-backoffice">
          <div className="form-group">
            <label className="form-label fw-bold mt-1 fw-bold mt-1">Nombre:</label>
            <input
              className="form-control form-control-sm w-100 mb-3"
              id="name"
              name="name"
              placeholder="Ingresa el nombre de la categoría"
              type="text"
              value={formik.values.name}
              onChange={formik.handleChange}
              {...formik.getFieldProps("name")}
            />
            <ErrorMessage component={Alert} name="name" />
          </div>
          <div className="form-group">
            <label className="form-label fw-bold mt-1 fw-bold mt-1">Imagen:</label>
            <input
              className="form-control form-control-sm w-100 mb-3"
              name="image"
              type="file"
              onChange={(e) => {
                formik.setFieldValue("image", e.currentTarget.files[0]);
                setImage(URL.createObjectURL(e.currentTarget.files[0]));
              }}
            />
            <ErrorMessage component={Alert} name="image" />
          </div>
          <div className="form-group">
            {image && (
              <>
                <label className="form-label fw-bold mt-1 fw-bold mt-1">(Imagen actual:)</label>
                <img alt="Imagen actual" className="img-fluid" src={image} />
              </>
            )}
          </div>
          <div className="form-group mb-3">
            <label className="form-label fw-bold mt-1 fw-bold mt-1">Descripción:</label>
            <CKEditor
              config={{ placeholder: `${initialValues.description}` }}
              data={initialValues.description}
              editor={ClassicEditor}
              name="description"
              onChange={(e, editor) => {
                formik.setFieldValue("description", editor.getData());
              }}
            />
            <ErrorMessage component={Alert} name="description" />
          </div>
          <button className="submit-btn" type="submit">
            ENVIAR
          </button>
        </Form>
      )}
    </Formik>
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
