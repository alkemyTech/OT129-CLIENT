import React from "react";
import "../FormStyles.css";
import { Formik, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";

import { toBase64 } from "../../utils/toBase64";
import Alert from "../Alert/Alert";

const UsersForm = ({ users = {}, handleSub }) => {
  const initialValues = {
    name: users?.name || "",
    email: users?.email || "",
    role_id: users?.role_id || undefined,
    password: "1234!a",
    profile_image: users?.profile_image || "",
  };

  const onSubmit = async (formData) => {
    const resultBase = await toBase64(formData.profile_image);
    const newUsers = { ...formData, profile_image: resultBase };

    handleSub(newUsers);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationUserSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form className="form-backoffice" onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label className="form-label fw-bold mt-1 fw-bold mt-1">Nombre:</label>
            <input
              className="form-control form-control-sm w-100 mb-3"
              id="name"
              name="name"
              placeholder={initialValues?.name || "Nombre"}
              type="text"
              {...formik.getFieldProps("name")}
            />
            <ErrorMessage component={Alert} name="name" />
          </div>
          <div className="form-group">
            <label className="form-label fw-bold mt-1 fw-bold mt-1"> Email:</label>
            <input
              className="form-control form-control-sm w-100 mb-3"
              name="email"
              placeholder={initialValues?.email || "Email"}
              type="email"
              {...formik.getFieldProps("email")}
            />
            <ErrorMessage component={Alert} name="email" />
          </div>
          <div className="form-group">
            <label className="form-label fw-bold mt-1 fw-bold mt-1">Imagen:</label>
            <input
              accept="image/png, image/jpeg, image/jpg"
              className="form-control form-control-sm w-100 mb-3"
              name="profile_image"
              type="file"
              onChange={(event) => {
                formik.setFieldValue("profile_image", event.currentTarget.files[0]);
              }}
            />
            <ErrorMessage component={Alert} name="image" />
          </div>
          {initialValues.profile_image !== "" ? (
            <div className="form-group">
              <label className="form-label fw-bold mt-1 fw-bold mt-1">(Imagen actual)</label>
              <img alt="Imagen actual" src={initialValues?.profile_image} />
            </div>
          ) : null}
          <div className="form-group mb-3">
            <label className="form-label fw-bold mt-1 fw-bold mt-1">Rol:</label>
            <select className="form-select" name="role_id" {...formik.getFieldProps("role_id")}>
              <option defaultValue>Choose</option>
              <option value="1">Admin</option>
              <option value="2">User</option>
            </select>
            <ErrorMessage component={Alert} name="role_id" />
          </div>
          <button className="submit-btn" type="submit">
            {users.id ? "EDITAR" : "CREAR"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

UsersForm.propTypes = {
  users: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    role_id: PropTypes.number,
    password: PropTypes.string,
    profile_image: PropTypes.string,
  }),
  handleSub: PropTypes.func,
};

const SUPPORTED_FORMATS = ["image/jpg", "image/png", "image/jpeg"];
const validationUserSchema = Yup.object().shape({
  name: Yup.string().required("Field Required").min(4, "Must have at least 4 characters"),
  email: Yup.string().required("Field Required").email("Is not a valid format"),
  role_id: Yup.string().required("Field Required"),
  profile_image: Yup.mixed()
    .required("Field Required")
    .test(
      "fileType",
      "El formato no es valido",
      (value) => !value || (value && SUPPORTED_FORMATS.includes(value.type))
    ),
});

export default UsersForm;
