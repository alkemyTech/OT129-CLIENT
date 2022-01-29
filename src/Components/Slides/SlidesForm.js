import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import PropTypes from "prop-types";
import * as Yup from "yup";
import "../FormStyles.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { edit } from "../../Services/edit";
import { create } from "../../Services/create";

const IMG_FORMAT_REGEX = new RegExp(".(jpg|png)$");

const validationSchema = Yup.object({
  name: Yup.string()
    .min(4, "Debe contener al menos 4 caracteres")
    .required("Este campo es obligatorio"),
  description: Yup.string().required("Este campo es obligatorio"),
  image: Yup.mixed()
    .required("Este campo es obligatorio")
    .matches(IMG_FORMAT_REGEX, "Solo es permitido formato .png y .jpg"),
});
const SlidesForm = ({ slides = {} }) => {
  const [slidesImage, setSlidesImage] = useState("");
  const initialValues = {
    name: slides?.name || "",
    description: slides?.description || "",
    image: slides?.image || "",
    order: slides?.order || "",
  };

  useEffect(() => {
    if (slides.id) {
      setSlidesImage(slides.image);
    }
  }, []);

  return (
    <div className="container mt-4">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (formData) => {
          if (slides.id === undefined) {
            create("slides", formData);
          } else {
            edit("slides", { ...formData, id: slides.id });
          }
        }}
      >
        {(formik) => (
          <Form className="row justify-content-center align-items-center">
            <div className="col-sm-6 ">
              <div className="input-group mb-3">
                <Field
                  className="p-2 w-100"
                  id="name"
                  name="name"
                  placeholder="Nombre"
                  type="text"
                />
                <ErrorMessage className="alert-danger" name="name" />
              </div>
              <div className="input-group mb-3">
                <CKEditor
                  className="p-2 w-75"
                  config={{ placeholder: "Descripción" }}
                  editor={ClassicEditor}
                  id="description"
                  name="description"
                  onChange={(event, editor) => {
                    const data = editor.getData();

                    formik.setFieldValue("description", data);
                  }}
                />
              </div>
              <div className="mb-3">
                <input
                  accept="image/png, image/jpeg"
                  className="w-100"
                  id="image"
                  name="image"
                  type="file"
                  onChange={(event) => {
                    formik.setFieldValue("image", event.target.value);
                    setSlidesImage(event.target.value);
                  }}
                />
                <ErrorMessage className="alert-danger" name="image" />
              </div>
              {slidesImage ? (
                <img alt="Imagen actual" className="row w-25 h-25" src={slidesImage} />
              ) : null}
              <button className="submit-btn" type="submit">
                {slides?.id ? "EDITAR" : "CREAR"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

SlidesForm.propTypes = {
  slides: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    order: PropTypes.number,
    description: PropTypes.string,
    image: PropTypes.string,
  }),
};

export default SlidesForm;
