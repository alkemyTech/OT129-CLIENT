import React from "react";
import PropTypes from "prop-types";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

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
  const IMG_PREVIEW = data.logo;

  return (
    <Formik
      initialValues={data}
      validationSchema={validationSchema}
      onSubmit={(formData) => console.log(formData)} //Enviar la info al store, redireccionar a backoffice/organization
    >
      {(formik) => (
        <form
          noValidate
          className="form-backoffice"
          id="editOrganizationForm"
          onSubmit={formik.handleSubmit}
        >
          <div className="form-group">
            <label className="form-label fw-bold mt-1" htmlFor="name">
              Nombre:
            </label>
            <input
              className="form-control form-control-sm w-100 mb-3"
              id="name"
              name="name"
              type="text"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            <ErrorMessage component={Alert} name="name" />
          </div>
          <div className="form-group">
            <label className="form-label fw-bold mt-1" htmlFor="logo">
              Logo:
            </label>
            <input
              accept="image/png, image/jpeg"
              className="form-control form-control-sm w-100 mb-3"
              id="logo"
              name="logo"
              type="file"
              onChange={formik.handleChange}
            />
            <ErrorMessage component={Alert} name="logo" />
          </div>
          <div className="form-group mb-3">
            <label className="form-label fw-bold mt-1">(Imagen actual)</label>
            <img alt="logo" className="preview-image" loading="lazy" src={IMG_PREVIEW} />
          </div>
          <div className="form-group">
            <label className="form-label fw-bold mt-1" htmlFor="shortDescription">
              Descripción corta:
            </label>
            <CKEditor
              required
              config={{ placeholder: "Descripción corta" }}
              data={formik.values.shortDescription}
              editor={ClassicEditor}
              id="shortDescription"
              name="shortDescription"
              onChange={(event, editor) => {
                const data = editor.getData();

                formik.setFieldValue("shortDescription", data);
              }}
            />
            <ErrorMessage component={Alert} name="shortDescription" />
          </div>
          <div className="form-group">
            <label className="form-label fw-bold mt-1" htmlFor="longDescription">
              Descripción larga:
            </label>
            <textarea
              className="form-control form-control-sm w-100 mb-3"
              id="longDescription"
              name="longDescription"
              style={{ maxHeight: "250px", minHeight: "250px" }}
              value={formik.values.longDescription}
              onChange={formik.handleChange}
            />
            <ErrorMessage component={Alert} name="longDescription" />
          </div>
          <div className="form-group">
            <label className="form-label fw-bold mt-1" htmlFor="emailLink">
              Email:
            </label>
            <input
              className="form-control form-control-sm w-100 mb-3"
              id="emailLink"
              name="emailLink"
              type="email"
              value={formik.values.emailLink}
              onChange={formik.handleChange}
            />
            <ErrorMessage component={Alert} name="emailLink" />
          </div>
          <div className="form-group">
            <label className="form-label fw-bold mt-1" htmlFor="instagramLink">
              Instagram:
            </label>
            <input
              className="form-control form-control-sm w-100 mb-3"
              id="instagramLink"
              name="instagramLink"
              type="url"
              value={formik.values.instagramLink}
              onChange={formik.handleChange}
            />
            <ErrorMessage component={Alert} name="instagramLink" />
          </div>
          <div className="form-group">
            <label className="form-label fw-bold mt-1" htmlFor="twitterLink">
              Twitter:
            </label>
            <input
              className="form-control form-control-sm w-100 mb-3"
              id="twitterLink"
              name="twitterLink"
              type="url"
              value={formik.values.twitterLink}
              onChange={formik.handleChange}
            />
            <ErrorMessage component={Alert} name="twitterLink" />
          </div>
          <button className="submit-btn" type="submit">
            EDITAR
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
