import React from "react";
import PropTypes from "prop-types";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

import "bootstrap/dist/css/bootstrap.css";

const IMG_FORMAT_REGEX = new RegExp(".(jpg|png)$");

const validationSchema = Yup.object({
  name: Yup.string().required("The field is required"),
  logo: Yup.string()
    .required("The field is required")
    .url("Invalid URL")
    .matches(IMG_FORMAT_REGEX, "Only .png and .jpg images are allowed"),
  shortDescription: Yup.string().required("The field is required"),
  longDescription: Yup.string().required("The field is required"),
  emailLink: Yup.string().email("Invalid email address"),
  instagramLink: Yup.string().url("Invalid URL"),
  twitterLink: Yup.string().url("Invalid URL"),
});

const Alert = ({ children }) => <div className="alert alert-danger">{children}</div>;

const EditForm = ({ data }) => {
  const initialValues = {
    name: data.name,
    logo: data.logo,
    shortDescription: data.shortDescription,
    longDescription: data.longDescription,
    emailLink: data.emailLink,
    instagramLink: data.instagramLink,
    twitterLink: data.twitterLink,
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
              Name:
            </label>
            <input
              className="form-control mb-3"
              id="name"
              name="name"
              type="text"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            <ErrorMessage className="alert-danger" component={Alert} name="name" />
          </div>
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="logo">
              Logo:
            </label>
            <input
              className="form-control mb-3"
              id="logo"
              name="logo"
              type="url"
              value={formik.values.logo}
              onChange={formik.handleChange}
            />
            <img alt="logo" className="img-thumbnail" loading="lazy" src={formik.values.logo} />
            <ErrorMessage className="alert-danger" component={Alert} name="logo" />
          </div>
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="shortDescription">
              Short Description:
            </label>
            <input
              className="form-control mb-3"
              id="shortDescription"
              name="shortDescription"
              value={formik.values.shortDescription}
              onChange={formik.handleChange}
            />
            <ErrorMessage className="alert-danger" component={Alert} name="shortDescription" />
          </div>
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="longDescription">
              Long Description:
            </label>
            <input
              className="form-control mb-3"
              id="longDescription"
              name="longDescription"
              value={formik.values.longDescription}
              onChange={formik.handleChange}
            />
            <ErrorMessage className="alert-danger" component={Alert} name="longDescription" />
          </div>
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="emailLink">
              Email:{" "}
            </label>
            <input
              className="form-control mb-3"
              id="emailLink"
              name="emailLink"
              type="email"
              value={formik.values.emailLink}
              onChange={formik.handleChange}
            />
            <ErrorMessage className="alert-danger" component={Alert} name="emailLink" />
          </div>
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="instagramLink">
              Instagram:{" "}
            </label>
            <input
              className="form-control mb-3"
              id="instagramLink"
              name="instagramLink"
              type="url"
              value={formik.values.instagramLink}
              onChange={formik.handleChange}
            />
            <ErrorMessage className="alert-danger" component={Alert} name="instagramLink" />
          </div>
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="twitterLink">
              Twitter:{" "}
            </label>
            <input
              className="form-control mb-3"
              id="twitterLink"
              name="twitterLink"
              type="url"
              value={formik.values.twitterLink}
              onChange={formik.handleChange}
            />
            <ErrorMessage className="alert-danger" component={Alert} name="twitterLink" />
          </div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
};

Alert.propTypes = {
  children: PropTypes.string.isRequired,
};
EditForm.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    longDescription: PropTypes.string.isRequired,
    emailLink: PropTypes.string.isRequired,
    instagramLink: PropTypes.string.isRequired,
    twitterLink: PropTypes.string.isRequired,
  }).isRequired,
};
export default EditForm;
