/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import PropTypes from "prop-types";
import * as Yup from "yup";
import "../FormStyles.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { createActivity, editActivity } from "../../Services/ActivitiesService";
import { toBase64 } from "../../utils/toBase64";

const validationSchema = Yup.object({
  name: Yup.string().required("El nombre de la actividad es obligatorio"),
  image: Yup.mixed()
    .required("Debe adjuntar una imagen")
    .test("fileType", "La extensión del archivo no es soportado", (value) => {
      if (value) return ["image/jpeg", "image/png"].includes(value.type);

      return true;
    }),
});

const ActivitiesForm = ({ activity = {} }) => {
  const [activityImage, setActivityImage] = useState("");

  const initialValues = {
    name: activity?.name || "",
    description: activity?.description || "",
    image: activity?.image || "",
  };

  useEffect(() => {
    if (activity.id) {
      setActivityImage(activity.image);
    }
  }, []);

  return (
    <div className="container mt-4">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (formData) => {
          const resultBase = await toBase64(formData.image);
          const newActivity = { ...formData, image: resultBase };

          if (activity.id === undefined) {
            await createActivity(newActivity);
          } else {
            await editActivity({
              ...newActivity,
              id: activity.id,
            });
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
                  placeholder="Nombre de la actividad"
                  type="text"
                />
                <ErrorMessage className="alert-danger" name="name" />
              </div>
              <div className="input-group mb-3">
                <CKEditor
                  className="p-2 w-75"
                  config={{ placeholder: "Descripción" }}
                  data={activity?.description || ""}
                  editor={ClassicEditor}
                  id="description"
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
                    formik.setFieldValue("image", event.currentTarget.files[0]);
                    setActivityImage(URL.createObjectURL(event.currentTarget.files[0]));
                  }}
                />
                <ErrorMessage className="alert-danger" name="image" />
                {activityImage ? (
                  <img alt="Imagen actual" className="current-img" src={activityImage} />
                ) : null}
              </div>
              <button className="submit-btn" type="submit">
                {activity?.id ? "EDITAR" : "CREAR"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

ActivitiesForm.propTypes = {
  activity: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  }),
};

export default ActivitiesForm;
