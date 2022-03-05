import React, { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import PropTypes from "prop-types";
import * as Yup from "yup";

import { createProject, editProject } from "../../Services/ProjectsService";
import { formatDate } from "../../utils/formatDate";

import "../FormStyles.css";

const IMG_FORMAT_REGEX = new RegExp(".(jpg|png)$");

const validationSchema = Yup.object({
  title: Yup.string().required("El título del proyecto es obligatorio"),
  description: Yup.string().required("La descripción del proyecto es obligatorio"),
  image: Yup.string()
    .required("Debe insertar URL de la imagen")
    .matches(IMG_FORMAT_REGEX, "Solo el formato .png y .jpg de las imagenes son permitios"),
});

const ProjectsForm = ({ project = {} }) => {
  const [projectImage, setProjectImage] = useState("");

  const initialValues = {
    title: project?.title || "",
    description: project?.description || "",
    image: project?.image || "",
    due_date: project?.due_date ? formatDate(project.due_date) : "",
  };

  useEffect(() => {
    if (project.id) {
      setProjectImage(project.image);
    }
  }, []);

  return (
    <div className="container mt-4">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (formData) => {
          if (project.id === undefined) {
            createProject(formData);
          } else {
            editProject({ ...formData, id: project.id });
          }
        }}
      >
        {(formik) => (
          <Form className="row justify-content-center align-items-center">
            <div className="col-sm-6 ">
              <div className="input-group mb-3">
                <Field
                  className="p-2 w-100"
                  name="title"
                  placeholder="Título del Proyecto"
                  type="text"
                />
                <ErrorMessage className="alert-danger" name="title" />
              </div>
              <div className="input-group mb-3">
                <Field
                  className="p-2 w-100"
                  name="description"
                  placeholder="Descripción"
                  type="text"
                />
                <ErrorMessage className="alert-danger" name="description" />
              </div>
              <div className="mb-3">
                <Field
                  className="w-100"
                  name="image"
                  placeholder="Inserte URL de la imagen"
                  type="text"
                  onChange={(event) => {
                    formik.setFieldValue("image", event.target.value);
                    setProjectImage(event.target.value);
                  }}
                />
                <ErrorMessage className="alert-danger" name="image" />
              </div>
              <div className="input-group mb-3">
                <Field className="p-2 w-100" name="due_date" type="date" />
                <ErrorMessage className="alert-danger" name="due_date" />
              </div>
              {projectImage ? (
                <img alt="Imagen actual" className="row w-25 h-25" src={projectImage} />
              ) : null}
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
