import React from 'react';
import {
  Formik, Field, Form, ErrorMessage
} from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import '../FormStyles.css';

// eslint-disable-next-line react/prop-types
const Error = ({ children }) => <div className="error">{children}</div>;

const ActivitiesForm = ({ activity }) => {
  const validationSchema = Yup.object({
    name: Yup
      .string()
      .required('The activity name is required'),
    image: Yup
      .mixed()
      .required('A file is required')
      .test('fileType', "Unsupported file type", (value) => {
        if (value) return ["image/jpeg", "image/png"].includes(value.type);
        return true;
      })
  });

  const initialValues = {
    name: activity?.name || "",
    description: activity?.description || "",
    image: activity?.image || "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // eslint-disable-next-line no-console
        console.log(values);
      }}
      className="form-container"
    >
      {({ setFieldValue }) => (
        <Form>
          <Field
            id="name"
            type="text"
            name="name"
            placeholder="Activity Title"
          />
          <ErrorMessage name="name" component={Error} className="alert-danger" />
          <Field
            id="description"
            type="text"
            name="description"
            placeholder="Write some activity description"
          />

          <input
            id="image"
            type="file"
            name="image"
            accept="image/png, image/jpeg"
            onChange={(event) => {
              setFieldValue("image", event.currentTarget.files[0]);
            }}
          />
          <ErrorMessage name="file" component={Error} className="alert-danger" />
          <button className="submit-btn" type="submit">Send</button>
        </Form>
      )}
    </Formik>
  );
};

ActivitiesForm.propTypes = {
  activity: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ActivitiesForm;
