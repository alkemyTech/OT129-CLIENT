/* eslint-disable no-console */
import React from 'react';
import {
  Formik, Field, Form, ErrorMessage
} from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import '../FormStyles.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
  });

const ActivitiesForm = ({ activity = {} }) => {
  const initialValues = {
    id: activity?.id || "",
    name: activity?.name || "",
    description: activity?.description || "",
    image: activity?.image || "",
  };
  const validationSchema = Yup.object({
    name: Yup
      .string()
      .required('El nombre de la actividad es obligatorio'),
    image: Yup
      .mixed()
      .required('Debe adjuntar una imagen')
      .test('fileType', "La extensión del archivo no es soportado", (value) => {
        if (value) return ["image/jpeg", "image/png"].includes(value.type);
        return true;
      })
  });

  return (
    <div className="container mt-4">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (formData) => {
          console.log(formData);
          const resultBase = await toBase64(formData.image);
          const newActivity = { ...formData, image: resultBase };
          console.log(newActivity);
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
              <button className="submit-btn" type="submit">{activity?.id ? "EDITAR" : "CREAR"}</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

ActivitiesForm.propTypes = {
  // eslint-disable-next-line react/require-default-props
  activity: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string.isRequired,
  }),
};

export default ActivitiesForm;
