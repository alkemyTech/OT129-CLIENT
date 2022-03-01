import React, { useState, useEffect } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import PropTypes from "prop-types";
import * as Yup from "yup";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import Alert from "../Alert/Alert";
import { toBase64 } from "../../utils/toBase64";

import "../BackOfficeForms.css";

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
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (formData) => {
        const resultBase = await toBase64(formData.image);
        const newActivity = { ...formData, image: resultBase };

        decideAction(newActivity);
      }}
    >
      {(formik) => (
        <Form className="form-backoffice">
          <div className="form-group">
            <label className="form-label fw-bold mt-1 fw-bold">Nombre:</label>
            <input
              className="form-control form-control-sm w-100 mb-3"
              data-testid="inputTitle"
              id="name"
              name="name"
              placeholder="Nombre de la actividad"
              type="text"
              value={formik.values.name}
              onChange={formik.handleChange}
              {...formik.getFieldProps("name")}
            />
            <ErrorMessage component={Alert} name="name" />
          </div>
          <div className="form-group">
            <label className="form-label fw-bold mt-1 fw-bold" name="description">
              Descripción:
            </label>
            <CKEditor
              config={{ placeholder: "Descripción" }}
              data={activity?.description || ""}
              data-testid="inputDescription"
              editor={ClassicEditor}
              id="description"
              onChange={(event, editor) => {
                const data = editor.getData();

                formik.setFieldValue("description", data);
              }}
            />
          </div>
          <div className="form-group mt-3">
            <label className="form-label fw-bold mt-1 fw-bold">Imagen:</label>
            <input
              accept="image/png, image/jpeg"
              className="form-control form-control-sm w-100 mb-3"
              data-testid="inputImage"
              id="image"
              name="image"
              type="file"
              onChange={(event) => {
                formik.setFieldValue("image", event.currentTarget.files[0]);
                setActivityImage(URL.createObjectURL(event.currentTarget.files[0]));
              }}
            />
            <ErrorMessage
              className="alert-danger"
              component={Alert}
              data-testid="imageError"
              name="image"
            />
          </div>
          <div className="form-group">
            {activityImage && (
              <>
                <label className="form-label fw-bold mt-1 fw-bold mt-1">(Imagen actual)</label>
                <img
                  alt="Imagen actual"
                  className="d-block preview-image mb-3"
                  src={activityImage}
                />
              </>
            )}
          </div>
          <button className="submit-btn" data-testid="btnSubmit" type="submit">
            {activity?.id ? "EDITAR" : "CREAR"}
          </button>
        </Form>
      )}
    </Formik>
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
