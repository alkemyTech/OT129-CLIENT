/* eslint-disable no-console */
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import PropTypes from "prop-types";
import * as Yup from "yup";
import "../FormStyles.css";
import axios from "axios";

const toBase64 = async (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
  });
const createNewProject = async (data) => {
  axios
    .post("http://ongapi.alkemy.org/api/projects", data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      console.log(res, "Proyecto creado correctamente");
    });
};
const updateProject = async (data) => {
  axios
    .put(`http://ongapi.alkemy.org/api/projects/${data.id}`, data, {
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
  title: Yup.string().required("El título del proyecto es obligatorio"),
  description: Yup.string().required("La descripción del proyecto es obligatorio"),
  image: Yup.mixed()
    .required("Debe adjuntar una imagen")
    .test("fileType", "La extensión del archivo no es soportado", (value) => {
      if (value) return ["image/jpeg", "image/png"].includes(value.type);

      return true;
    }),
});

const ProjectsForm = ({ project = {} }) => {
  const initialValues = {
    title: project?.title || "",
    description: project?.description || "",
    image: project?.image || "",
    due_date: project?.due_date || "",
  };

  return (
    <div className="container mt-4">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (formData, { resetForm }) => {
          const resultBase = await toBase64(formData.image);
          const newProject = { ...formData, image: resultBase };

          console.log(newProject);
          resetForm({ values: "" });
          if (project.id === undefined) {
            const result = await createNewProject(newProject);

            console.log(result);
          } else {
            const result = await updateProject({ ...newProject, id: project.id });

            console.log(result);
          }
        }}
      >
        {(formik) => (
          <Form className="row justify-content-center align-items-center">
            <div className="col-sm-6 ">
              <div className="input-group mb-3">
                <Field
                  type="text"
                  name="title"
                  placeholder="Título del Proyecto"
                  className="p-2 w-100"
                />
                <ErrorMessage name="title" className="alert-danger" />
              </div>
              <div className="input-group mb-3">
                <Field
                  type="text"
                  placeholder="Descripción"
                  name="description"
                  className="p-2 w-100"
                />
                <ErrorMessage name="description" className="alert-danger" />
              </div>
              <div className="mb-3">
                <input
                  type="file"
                  name="image"
                  accept="image/png, image/jpeg"
                  onChange={(event) => {
                    formik.setFieldValue("image", event.currentTarget.files[0]);
                  }}
                  className="w-100"
                />
                <ErrorMessage name="image" className="alert-danger" />
              </div>
              <div className="input-group mb-3">
                <Field type="date" name="due_date" className="p-2 w-100" />
                <ErrorMessage name="due_date" className="alert-danger" />
              </div>
              <button className="submit-btn" type="submit">
                {project?.id ? "EDITAR" : "CREAR"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

ProjectsForm.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    due_date: PropTypes.string,
  }),
};

export default ProjectsForm;
