import React from "react";
import "../FormStyles.css";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";

import { toBase64 } from "../../utils/toBase64";
import { editUsers, createUsers } from "../../Services/UsersService";
import ContainerFormCard from "../../Containers/ContainerFormCard";

const UsersForm = ({ users = {} }) => {
  const initialValues = {
    name: users?.name || "",
    email: users?.email || "",
    role_id: users?.role_id || "",
    profile_image: users?.profile_image || "",
  };
  const validationUserSchema = Yup.object().shape({
    name: Yup.string().required("Field Required").min(4, "Must have at least 4 characters"),
    email: Yup.string().required("Field Required").email("Is not a valid format"),
    role_id: Yup.string().required("Field Required"),
    profile_image: Yup.string().required("Field Required"),
  });

  UsersForm.propTypes = {
    users: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      email: PropTypes.string,
      role_id: PropTypes.string,
      password: PropTypes.string,
      profile_image: PropTypes.string,
    }),
  };

  return (
    <ContainerFormCard>
      <Formik
        initialValues={initialValues}
        validationSchema={validationUserSchema}
        onSubmit={async (formData) => {
          const resultBase = await toBase64(formData.image);
          const newUsers = { ...formData, image: resultBase };

          !users.id ? createUsers(newUsers) : editUsers(newUsers, users.id);
        }}
      >
        {(formik) => (
          <form className="mt-3" onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <label className="form-label fx-bold">Nombre</label>
              <Field
                className="form-control mb-3"
                name="name"
                placeholder="Nombre"
                type="text"
                {...formik.getFieldProps("name")}
              />
              <ErrorMessage className="text-danger" component="span" name="name" />
            </div>
            <div className="form-group mb-3">
              <label className="form-label fx-bold"> Email:</label>
              <Field
                className="form-control mb-3"
                name="email"
                placeholder="Email"
                type="email"
                {...formik.getFieldProps("email")}
              />
              <ErrorMessage className="text-danger" component="span" name="email" />
            </div>

            <input
              className="form-control mb-3"
              name="profile_image"
              type="file"
              onChange={(event) => {
                formik.setFieldValue("profile_image", event.currentTarget.files[0]);
              }}
            />
            <ErrorMessage className="text-danger" component="span" name="image" />

            <div className="mb-3">
              <Field
                as="select"
                className="form-select"
                name="role_id"
                {...formik.getFieldProps("role_id")}
              >
                <option defaultValue>Choose</option>
                <option value="1">Admin</option>
                <option value="2">User</option>
              </Field>
            </div>
            <ErrorMessage className="text-danger" component="span" name="image" />

            <div className="mb-3">
              <button className="btn btn-primary w-100" type="submit">
                {users.id ? "EDITAR" : "CREAR"}
              </button>
            </div>
          </form>
        )}
      </Formik>
    </ContainerFormCard>
  );
};

export default UsersForm;
