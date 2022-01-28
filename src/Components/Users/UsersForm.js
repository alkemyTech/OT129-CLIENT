import React from "react";
import "../FormStyles.css";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import PropTypes from "prop-types";

import { toBase64 } from "../../utils/toBase64";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Field Required").min(4, "Must have at least 4 characters"),
  email: Yup.string().required("Field Required").email("Is not a valid format"),
  role_id: Yup.string().required("Field Required"),
  profile_image: Yup.string().required("Field Required"),
});

const isDesktop = window.innerWidth > 768;

const UserForm = ({
  name = "test",
  email = "test@gmail.com",
  role_id = "1",
  profile_image = "",
  id = 990,
}) => {
  const startValues = {
    name: name || "",
    email: email || "",
    role_id: role_id || "",
    profile_image: profile_image || "",
  };

  const onSubmit = async (formValues) => {
    if (id === undefined) {
      const resultBase = await toBase64(formValues.profile_image);
      const dataUser = {
        name: formValues.name,
        email: formValues.email,
        role_id: formValues.role_id,
        password: "123",
        profile_image: resultBase,
      };

      axios.post("http://ongapi.alkemy.org/api/users", dataUser).then(() => {
        alert("Se creo correctamente");
      });
    } else {
      const resultBase = await toBase64(formValues.profile_image);

      const dataUser = {
        id: id,
        name: formValues.name,
        email: formValues.email,
        role_id: formValues.role_id,
        password: "123",
        profile_image: resultBase,
      };

      axios.put(`http://ongapi.alkemy.org/api/users/${id}`, dataUser).then(() => {
        alert("se actualizo correctamente");
      });
    }
  };

  return (
    <div
      className={`${
        isDesktop ? "w-25" : "w-75"
      } mt-5 m-auto border border-light shadow-lg rounded px-4 py-4`}
    >
      <Formik
        initialValues={startValues}
        validationSchema={validationSchema}
        onSubmit={(formValues) => {
          onSubmit(formValues);
        }}
      >
        {({ errors, handleSubmit, setFieldValue }) => {
          return (
            <form className="mt-3" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label" htmlFor="name">
                  Name:
                </label>
                <Field
                  className="form-control mb-3"
                  name="name"
                  placeholder="Enter name"
                  type="text"
                />
                <ErrorMessage
                  component={() => (
                    <div className="alert alert-danger" role="alert">
                      {errors.name}
                    </div>
                  )}
                  name="name"
                />
              </div>
              <div className="form-group mb-3">
                <label className="form-label" htmlFor="email">
                  Email:
                </label>
                <Field
                  className="form-control mb-3"
                  name="email"
                  placeholder="Enter Email"
                  type="email"
                />
                <ErrorMessage
                  component={() => (
                    <div className="alert alert-danger" role="alert">
                      {errors.email}
                    </div>
                  )}
                  name="email"
                />
              </div>
              <input
                className="form-control mb-3"
                name="profile_image"
                type="file"
                onChange={(event) => {
                  setFieldValue("profile_image", event.currentTarget.files[0]);
                }}
              />
              <ErrorMessage
                className="text-danger"
                component={() => (
                  <div className="alert alert-danger" role="alert">
                    {errors.profile_image}
                  </div>
                )}
                name="profile_image"
              />
              <div className="mb-3">
                <Field as="select" className="form-select" name="role_id">
                  <option defaultValue>Choose</option>
                  <option value="1">Admin</option>
                  <option value="2">User</option>
                </Field>
              </div>
              <ErrorMessage
                component={() => (
                  <div className="alert alert-danger" role="alert">
                    {errors.role_id}
                  </div>
                )}
                name="role_id"
              />
              <div className="mb-3">
                <button className="btn btn-primary w-100" type="submit">
                  {id ? "EDIT" : "CREATE"}
                </button>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

UserForm.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  email: PropTypes.string,
  role_id: PropTypes.string,
  password: PropTypes.string,
  profile_image: PropTypes.string,
};

export default UserForm;
