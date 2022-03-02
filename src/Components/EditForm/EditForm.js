import React from "react";
import PropTypes from "prop-types";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { toBase64 } from "../../utils/toBase64";

const validationSchema = Yup.object({
  name: Yup.string().required("El nombre es requerido"),
  logo: Yup.string().required("Por favor ingrese una imagen"),
  short_description: Yup.string().required("La descripcion corta es requerida"),
  long_description: Yup.string().required("La descripcion larga es requerida"),
  instagram_url: Yup.string().url("URL invalida"),
  twitter_url: Yup.string().url("URL invalida"),
  facebook_url: Yup.string().url("URL invalida"),
  linkedin_url: Yup.string().url("URL invalida"),
});

const Alert = ({ children }) => <div className="alert alert-danger">{children}</div>;

const EditForm = ({ handleSubmit, organization = {} }) => {
  const IMG_PREVIEW = organization.logo;

  const initialValues = {
    name: organization?.name || "",
    logo: organization?.logo || "",
    short_description: organization?.short_description || "",
    long_description: organization?.long_description || "",
    instagram_url: organization?.instagram_url || "",
    twitter_url: organization?.twitter_url || "",
    facebook_url: organization?.facebook_url || "",
    linkedin_url: organization?.linkedin_url || "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        //Eleccion de ruta para crear o editar
        const resultBase = await toBase64(values.logo);
        const newOrganization = { ...values, logo: resultBase };

        handleSubmit(newOrganization);
      }}
    >
      {(formik) => (
        <form
          noValidate
          className="form-backoffice"
          enableReinitialized={true}
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
              data-testid="name"
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
              onChange={(event) => {
                formik.setFieldValue("logo", event.currentTarget.files[0]);
              }}
              data-testid="logo"
            />
            <ErrorMessage component={Alert} name="logo" />
          </div>
          <div className="form-group mb-3">
            <label className="form-label fw-bold mt-1">(Imagen actual)</label>
            <img alt="logo" className="preview-image" loading="lazy" src={IMG_PREVIEW} />
          </div>
          <div className="form-group">
            <label className="form-label fw-bold mt-1" htmlFor="short_description">
              Descripción corta:
            </label>
            <CKEditor
              required
              config={{ placeholder: "Descripción corta" }}
              data={formik.values.short_description}
              editor={ClassicEditor}
              id="short_description"
              name="short_description"
              data-testid="description"
              onChange={(event, editor) => {
                const data = editor.getData();

                formik.setFieldValue("short_description", data);
              }}
            />
            <ErrorMessage component={Alert} name="short_description" />
          </div>
          <div className="form-group">
            <label className="form-label fw-bold mt-1" htmlFor="long_description">
              Descripción larga:
            </label>
            <textarea
              className="form-control form-control-sm w-100 mb-3"
              id="long_description"
              name="long_description"
              style={{ maxHeight: "250px", minHeight: "250px" }}
              value={formik.values.long_description}
              onChange={formik.handleChange}
              data-testid="long_description"
            />
            <ErrorMessage component={Alert} name="long_description" />
          </div>
          <div className="form-group">
            <label className="form-label fw-bold mt-1" htmlFor="facebookLink">
              Facebook:
            </label>
            <input
              className="form-control form-control-sm w-100 mb-3"
              id="facebookLink"
              name="facebookLink"
              type="url"
              value={formik.values.facebook_url}
              onChange={formik.handleChange}
            />
            <ErrorMessage component={Alert} name="facebookLink" />
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
              value={formik.values.instagram_url}
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
              value={formik.values.twitter_url}
              onChange={formik.handleChange}
            />
            <ErrorMessage component={Alert} name="twitterLink" />
          </div>
          <div className="form-group">
            <label className="form-label fw-bold mt-1" htmlFor="linkedinLink">
              Twitter:
            </label>
            <input
              className="form-control form-control-sm w-100 mb-3"
              id="linkedinLink"
              name="linkedinLink"
              type="url"
              value={formik.values.linkedin_url}
              onChange={formik.handleChange}
            />
            <ErrorMessage component={Alert} name="linkedinLink" />
          </div>
          <button className="submit-btn" type="submit" data-testid="btnSubmit">
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
  handleSubmit: PropTypes.func,
  organization: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    logo: PropTypes.string,
    long_description: PropTypes.string,
    short_description: PropTypes.string,
    twitter_url: PropTypes.string,
    instagram_url: PropTypes.string,
    facebook_url: PropTypes.string,
    linkedin_url: PropTypes.string,
  }),
};

export default EditForm;
