/* eslint-disable no-console */
import React from "react";
import { Formik, Field, Form, ErrorMessage, useFormikContext } from "formik";
import PropTypes from "prop-types";
import * as Yup from "yup";
import "../FormStyles.css";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const toBase64 = async (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
  });
const createNewActivity = async (data) => {
  axios
    .post("http://ongapi.alkemy.org/api/activities", data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      console.log(res, "Actividad creada correctamente");
    });
};
const updateActivity = async (data) => {
  axios
    .put(`http://ongapi.alkemy.org/api/activities/${data.id}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      console.log(res);
      console.log("La modificación fue exitosa");
    });
};

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
  const initialValues = {
    name: activity?.name || "",
    description: activity?.description || "",
    image: activity?.image || "",
  };

  return (
    <div className="container mt-4">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (formData) => {
          const resultBase = await toBase64(formData.image);
          const newActivity = { ...formData, image: resultBase };

          console.log(newActivity);
          if (activity.id === undefined) {
            const result = await createNewActivity(newActivity);

            console.log(result);
          } else {
            const result = await updateActivity({ ...newActivity, id: activity.id });

            console.log(result);
          }
        }}
      >
        {(formik) => (
          <Form className="row justify-content-center align-items-center">
            <div className="col-sm-6 ">
              <div className="input-group mb-3">
                <Field
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Nombre de la actividad"
                  className="p-2 w-100"
                />
                <ErrorMessage name="name" className="alert-danger" />
              </div>
              <div className="input-group mb-3">
                <CKEditor
                  id="description"
                  editor={ClassicEditor}
                  config={{ placeholder: "Descripción" }}
                  name="description"
                  onChange={(event, editor) => {
                    const data = editor.getData();

                    formik.setFieldValue("description", data);
                  }}
                  className="p-2 w-75"
                />
              </div>
              <div className="mb-3">
                <input
                  id="image"
                  type="file"
                  name="image"
                  accept="image/png, image/jpeg"
                  className="w-100"
                  onChange={(event) => {
                    formik.setFieldValue("image", event.currentTarget.files[0]);
                  }}
                />
                <ErrorMessage name="image" className="alert-danger" />
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
