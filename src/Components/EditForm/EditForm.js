import React from "react";
import PropTypes from "prop-types";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import "bootstrap/dist/css/bootstrap.css";

const IMG_FORMAT_REGEX = new RegExp(".(jpg|png)$");

const validationSchema = Yup.object({
  name: Yup.string().required("The field is required"),
  logo: Yup.string()
    .required("The field is required")
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

  const IMG_PREVIEW = data.logo;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(formData) => console.log(formData)} //Enviar la info al store, redireccionar a backoffice/organization
    >
      {(formik) => (
        <form
          noValidate
          className="mt-3 mb-3"
          id="editOrganizationForm"
          method=""
          onSubmit={formik.handleSubmit}
        >
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
              type="file"
              accept="image/png, image/jpeg"
              onChange={formik.handleChange}
            />
            <div className="card" style={{ width: "18rem" }}>
              <img alt="logo" className="card-img-top" loading="lazy" src={IMG_PREVIEW} />
              <div className="card-body">
                <h5 className="card-title text-center alert alert-warning">Current Logo</h5>
              </div>
            </div>
            <ErrorMessage className="alert-danger" component={Alert} name="logo" />
          </div>
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="shortDescription">
              Short Description:
            </label>
            <div className="alert alert-warning">
              <h5>Current</h5>
              <p>{data.shortDescription}</p>
            </div>
            <CKEditor
              editor={ClassicEditor}
              id="shortDescription"
              name="shortDescription"
              required
              onChange={(event, editor) => {
                formik.setFieldValue("shortDescription", editor.getData());
              }}
            />
            <ErrorMessage className="alert-danger" component={Alert} name="shortDescription" />
          </div>
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="longDescription">
              Long Description:
            </label>
            <textarea
              className="form-control mb-3"
              id="longDescription"
              name="longDescription"
              value={formik.values.longDescription}
              onChange={formik.handleChange}
              style={{ maxHeight: "250px", minHeight: "250px" }}
            />
            <ErrorMessage className="alert-danger" component={Alert} name="longDescription" />
          </div>
          <div className="form-group mb-3">
            <label className="form-label" htmlFor="emailLink">
              Email:
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
              Instagram:
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
              Twitter:
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
