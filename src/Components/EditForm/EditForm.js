/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

import PropTypes from 'prop-types';

import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import 'bootstrap/dist/css/bootstrap.css';

const validationSchema = Yup.object({
  name: Yup.string().required('The field is required'),
  logo: Yup.string().required('The field is required'),
  shortDescription: Yup.string().required('The field is required'),
  longDescription: Yup.string().required('The field is required')
});

const Alert = ({ children }) => (
  <div className="alert alert-danger">
    {children}
  </div>
);

const EditForm = ({
  name, logo, shortDescription, longDescription
}) => (
  <div className="container">
    <div className="alert alert-warning text-center mt-3">Editar organización</div>
    <Formik
      validationSchema={validationSchema}
      onSubmit={(formData) => console.log(formData)}
    >
      {((formik) => (
        <form
          noValidate
          className="mt-3"
          onSubmit={formik.handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="name">Edit Name:</label>
            <input
              type="text"
              className="form-control mb-3"
              id="name"
              onChange={formik.handleChange}
              value={name ?? 'testValue'}
            />
            <ErrorMessage name="password" component={Alert} className="alert-danger" />
          </div>
          <div className="form-group">
            <label htmlFor="logo">Edit Logo:</label>
            <input
              type="text"
              className="form-control mb-3"
              id="logo"
              onChange={formik.handleChange}
              value={logo ?? 'testValue'}
            />
            <ErrorMessage name="password" component={Alert} className="alert-danger" />
          </div>
          <div className="form-group">
            <label htmlFor="shortDescription">Edit Short Description:</label>
            <textarea
              className="form-control mb-3"
              id="shortDescription"
              onChange={formik.handleChange}
              value={shortDescription ?? 'testValue'}
            />
          </div>
          <div className="form-group">
            <label htmlFor="longDescription">Edit Long Description:</label>
            <textarea
              className="form-control mb-3"
              id="longDescription"
              onChange={formik.handleChange}
              value={longDescription ?? 'testValue'}
            />
            <ErrorMessage name="password" component={Alert} className="alert-danger" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      ))}
    </Formik>
  </div>
);

EditForm.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  longDescription: PropTypes.string.isRequired
};

Alert.propTypes = {
  children: PropTypes.string.isRequired
};

export default EditForm;
