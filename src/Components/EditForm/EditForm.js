/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

import PropTypes from 'prop-types';

import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import 'bootstrap/dist/css/bootstrap.css';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('The field is required'),
  logo: Yup.string().required('The field is required'),
  shortDescription: Yup.string().required('The field is required'),
  longDescription: Yup.string().required('The field is required')
});

const initialValues = {
  name: '',
  logo: '',
  shortDescription: '',
  longDescription: ''
};

const Alert = ({ children }) => (
  <div className="alert alert-danger">
    {children}
  </div>
);

const EditForm = () => (
  <div className="container">
    <h1>Editar Organización</h1>
    <Formik
      initialValues={initialValues}
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
              value={formik.values.name}
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
              value={formik.values.logo}
            />
            <ErrorMessage name="password" component={Alert} className="alert-danger" />
          </div>
          <div className="form-group">
            <label htmlFor="shortDescription">Edit Short Description:</label>
            <textarea
              className="form-control mb-3"
              id="shortDescription"
              onChange={formik.handleChange}
              value={formik.values.shortDescription}
            />
          </div>
          <div className="form-group">
            <label htmlFor="longDescription">Edit Long Description:</label>
            <textarea
              className="form-control mb-3"
              id="longDescription"
              onChange={formik.handleChange}
              value={formik.values.longDescription}
            />
            <ErrorMessage name="password" component={Alert} className="alert-danger" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      ))}
    </Formik>
  </div>
);

Alert.propTypes = {
  children: PropTypes.string.isRequired
};

export default EditForm;
