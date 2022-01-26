/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import PropTypes from "prop-types";
import * as Yup from "yup";

import { edit } from "../../Services/edit";
import { create } from "../../Services/create";
import { toBase64 } from "../../utils/toBase64";

import "../FormStyles.css";

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
  const [projectImage, setProjectImage] = useState("");

  const initialValues = {
    title: project?.title || "",
    description: project?.description || "",
    image: project?.image || "",
    due_date: project?.due_date || "",
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
          const resultBase = await toBase64(formData.image);
          const newProject = { ...formData, image: resultBase };

          console.log(newProject);
          if (project.id === undefined) {
            const result = await create("projects", newProject);

            console.log(result);
          } else {
            const result = await edit("projects", { ...newProject, id: project.id });

            console.log(result);
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
                <input
                  accept="image/png, image/jpeg"
                  className="w-100"
                  name="image"
                  type="file"
                  onChange={(event) => {
                    formik.setFieldValue("image", event.currentTarget.files[0]);
                    setProjectImage(URL.createObjectURL(event.currentTarget.files[0]));
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
