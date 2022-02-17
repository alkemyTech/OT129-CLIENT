import React from "react";
import "../FormStyles.css";
import { Formik, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";

import { toBase64 } from "../../utils/toBase64";

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

    console.log(formData);

    handleSub(newUsers);
  };

  return (
    <div className="container mt-4">
      <Formik
        initialValues={initialValues}
        validationSchema={validationUserSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form className="mt-3" onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <label className="form-label fx-bold">Nombre</label>
              <input
                className="form-control mb-3"
                id="name"
                name="name"
                placeholder={initialValues?.name || "Nombre"}
                type="text"
                {...formik.getFieldProps("name")}
              />
              <ErrorMessage className="text-danger" component="span" name="name" />
            </div>
            <div className="form-group mb-3">
              <label className="form-label fx-bold"> Email:</label>
              <input
                className="form-control mb-3"
                name="email"
                placeholder={initialValues?.email || "Email"}
                type="email"
                {...formik.getFieldProps("email")}
              />
              <ErrorMessage className="text-danger" component="span" name="email" />
            </div>

            <input
              accept="image/png, image/jpeg, image/jpg"
              className="form-control mb-3"
              name="profile_image"
              type="file"
              onChange={(event) => {
                formik.setFieldValue("profile_image", event.currentTarget.files[0]);
              }}
            />
            <ErrorMessage className="text-danger" component="span" name="image" />

            <div className="mb-3">
              <select className="form-select" name="role_id" {...formik.getFieldProps("role_id")}>
                <option defaultValue>Choose</option>
                <option value="1">Admin</option>
                <option value="2">User</option>
              </select>
            </div>
            <ErrorMessage className="text-danger" component="span" name="image" />

            <div className="mb-3">
              <button className="btn btn-primary w-100" type="submit">
                {users.id ? "EDITAR" : "CREAR"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
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
