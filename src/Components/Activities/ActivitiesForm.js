/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import PropTypes from "prop-types";
import * as Yup from "yup";
import "../FormStyles.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

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

const ActivitiesForm = ({ activity = {}, decideAction }) => {
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
  }, [activity]);

  return (
    <div className="container mt-4">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (formData) => {
          const resultBase = await toBase64(formData.image);
          const newActivity = { ...formData, image: resultBase };

          decideAction(newActivity);
        }}
      >
        {(formik) => (
          <Form className="row justify-content-center align-items-center">
            <div className="col-sm-6 ">
              <div className="input-group mb-3">
                <input
                  className="p-2 w-100"
                  data-testid="inputName"
                  id="name"
                  name="name"
                  placeholder={initialValues?.name || "Título"}
                  type="text"
                  {...formik.getFieldProps("name")}
                />
                <ErrorMessage className="alert-danger" data-testid="errorName" name="name" />
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
                <ErrorMessage className="alert-danger" data-testid="imageError" name="image" />
                {activityImage && (
                  <img
                    alt="Imagen actual"
                    className="d-block current-img mt-3"
                    src={activityImage}
                  />
                )}
              </div>
              <button className="submit-btn" data-testid="btnSubmit" type="submit">
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
  decideAction: PropTypes.func,
};

export default ActivitiesForm;
