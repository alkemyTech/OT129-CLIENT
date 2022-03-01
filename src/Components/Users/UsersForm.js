import React, { useState, useEffect } from "react";
import "../FormStyles.css";
import { Formik, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";

import { toBase64 } from "../../utils/toBase64";
import Alert from "../Alert/Alert";

const UsersForm = ({ users, handleSub }) => {
  const initialValues = {
    name: users.name ?? "",
    email: users.email ?? "",
    role_id: users.role_id ?? undefined,
    profile_image: users.profile_image ?? "",
  };
  const [image, setImage] = useState("");

  const onSubmit = async (formData) => {
    const resultBase = await toBase64(formData.profile_image);
    const newUsers = { ...formData, profile_image: resultBase };

    handleSub(newUsers);
  };

  return (
    <Formik
      enableReinitialize={true}
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
              type="text"
              value={formik.values.name}
              onChange={formik.handleChange}
              {...formik.getFieldProps("name")}
            />
            <ErrorMessage component={Alert} name="name" />
          </div>
          <div className="form-group">
            <label className="form-label fw-bold mt-1 fw-bold mt-1"> Email:</label>
            <input
              className="form-control form-control-sm w-100 mb-3"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
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
                setImage(URL.createObjectURL(event.currentTarget.files[0]));
              }}
            />
            <ErrorMessage component={Alert} name="image" />
          </div>

          <div className="form-group">
            {image && (
              <>
                <label className="form-label fw-bold mt-1 fw-bold mt-1">(Imagen actual)</label>
                <img alt="Imagen actual" className="d-block preview-image mb-3" src={image} />
              </>
            )}
          </div>
          <div className="form-group mb-3">
            <label className="form-label fw-bold mt-1 fw-bold mt-1">Rol:</label>
            <select
              className="form-select mb-3"
              name="role_id"
              {...formik.getFieldProps("role_id")}
            >
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
  name: Yup.string()
    .required("El campo NOMBRE es requerido")
    .min(4, "El NOMBRE debe contener al menos 4 caracteres"),
  email: Yup.string()
    .required("El campo EMAIL es requerido")
    .email("Ingresa un formato de EMAIL válido"),
  role_id: Yup.string().required("El campo ROL es requerido"),
  profile_image: Yup.mixed().test(
    "fileType",
    "El formato no es valido",
    (value) => !value || (value && SUPPORTED_FORMATS.includes(value.type))
  ),
});

export default UsersForm;
