import React from "react";
import "../FormStyles.css";
import { Formik, ErrorMessage, Field, errors } from "formik";
import * as Yup from "yup";

const LoginForm = () => {
  //   ALOJA EL TOKEN UNA VEZ AUTENTICADO EL USUARIO
  //   PENDIENTE A LA PETICIÓN HTTP
  //
  //   const handleLogin = (values) => {
  //     const url = ""
  //     const body = {
  //       email: values.email,
  //       password: values.password,
  //     };
  //     axios.post(url, body).then((response) => {
  //       localStorage.setItem("token", response.data.token);
  //     });
  //   };

  const startValues = {
    email: "",
    password: "",
  };

  return (
    <Formik
      initialValues={startValues}
      validationSchema={Yup.object().shape({
        email: Yup.string().required("Field Required"),
        password: Yup.string()
          .max(6, "Password must have at least 6 characters")
          .required("Field required")
          .matches(
            /[!@#$%^&*]/,
            "Password must have at least one special character"
          ),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, handleSubmit }) => (
        <form className="form-container" onSubmit={handleSubmit}>
          <Field
            className="input-field"
            type="email"
            name="email"
            placeholder="Enter email"
          />
          <ErrorMessage
            name="email"
            component={() => (
              <div class="alert alert-danger" role="alert">
                {errors.email}
              </div>
            )}
          />
          <Field
            className="input-field"
            type="password"
            name="password"
            placeholder="Enter password"
          />
          <ErrorMessage
            name="password"
            component={() => (
              <div class="alert alert-danger" role="alert">
                {errors.password}
              </div>
            )}
          />
          <button className="submit-btn" type="submit">
            Log In
          </button>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
