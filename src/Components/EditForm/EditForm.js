import React from "react";
import PropTypes from "prop-types";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

import "bootstrap/dist/css/bootstrap.css";

import "../FormStyles.css";

const validationSchema = Yup.object({
  name: Yup.string().required("The field is required"),
  logo: Yup.string().required("The field is required").url("Invalid URL"),
  shortDescription: Yup.string()
    .required("The field is required")
    .min(10, "Too short")
    .max(40, "Too long"),
  longDescription: Yup.string()
    .required("The field is required")
    .min(40, "Too short")
    .max(200, "Too long"),
});

const Alert = ({ children }) => {
  return <div className="alert alert-danger">{children}</div>;
};

Alert.propTypes = {
  children: PropTypes.string.isRequired,
};

const EditForm = ({ data }) => {
  const initialValues = {
    name: data.name,
    logo: data.logo,
    shortDescription: data.shortDescription,
    longDescription: data.longDescription,
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(formData) => console.log(formData)} //Enviar la info al store, redireccionar a backoffice/organization
    >
      {(formik) => (
        <form noValidate className="mt-3" id="editOrganizationForm" onSubmit={formik.handleSubmit}>
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="name">
              Edit Name:
            </label>
            <input
              className="form-control mb-3"
              id="name"
              type="text"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            <ErrorMessage className="alert-danger" component={Alert} name="password" />
          </div>
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="logo">
              Edit Logo:
            </label>
            <input
              className="form-control mb-3"
              id="logo"
              type="url"
              value={formik.values.logo}
              onChange={formik.handleChange}
            />
            <ErrorMessage className="alert-danger" component={Alert} name="password" />
          </div>
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="shortDescription">
              Edit Short Description:
            </label>
            <input
              className="form-control mb-3"
              id="shortDescription"
              value={formik.values.shortDescription}
              onChange={formik.handleChange}
            />
          </div>
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="longDescription">
              Edit Long Description:
            </label>
            <input
              className="form-control mb-3"
              id="longDescription"
              value={formik.values.longDescription}
              onChange={formik.handleChange}
            />
            <ErrorMessage className="alert-danger" component={Alert} name="password" />
          </div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
};

EditForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    longDescription: PropTypes.string.isRequired,
  }).isRequired,
};
export default EditForm;
