import React from "react";
import PropTypes from "prop-types";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

import "bootstrap/dist/css/bootstrap.css";

const initialValues = {
  name: "defaultName",
  logo: "defaultLogo",
  shortDescription: "defaultShortDescription",
  longDescription: "defaultLongDescription",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required("The field is required")
    .min(3, "The field must be at least 3 characters"),
  logo: Yup.string().required("The field is required"),
  shortDescription: Yup.string().required("The field is required"),
  longDescription: Yup.string().required("The field is required"),
});

const Alert = ({ children }) => <div className="alert alert-danger">{children}</div>;

const EditForm = () => {
  const handleSubmit = (formData) => console.log(formData);

  return (
    <div className="container">
      <div className="alert alert-warning text-center mt-3">Editar organización</div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <form noValidate className="mt-3" onSubmit={formik.handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="name">Edit Name:</label>
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
              <label htmlFor="logo">Edit Logo:</label>
              <input
                className="form-control mb-3"
                id="logo"
                type="text"
                value={formik.values.logo}
                onChange={formik.handleChange}
              />
              <ErrorMessage className="alert-danger" component={Alert} name="password" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="shortDescription">Edit Short Description:</label>
              <textarea
                className="form-control mb-3"
                id="shortDescription"
                value={formik.values.shortDescription}
                onChange={formik.handleChange}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="longDescription">Edit Long Description:</label>
              <textarea
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
    </div>
  );
};

EditForm.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  longDescription: PropTypes.string.isRequired,
};

Alert.propTypes = {
  children: PropTypes.string.isRequired,
};

export default EditForm;
