import React from "react";
import "../../Components/FormStyles.css";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";

const NewsForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationNewSchema}
      onSubmit={(formData) => console.log(formData)}
    >
      {(formik) => (
        <Form className="form-container" onSubmit={formik.handleSubmit}>
          <input
            className="input-field"
            type="text"
            placeholder="Título..."
            {...formik.getFieldProps("title")}
          ></input>
          <ErrorMessage
            name="title"
            className="formik_error"
            component="span"
          />
          <input
            className="input-field"
            type="text"
            placeholder="Contenido..."
            {...formik.getFieldProps("content")}
          ></input>
          <ErrorMessage
            name="content"
            className="formik_error"
            component="span"
          />
          <select
            className="select-field"
            {...formik.getFieldProps("category")}
          >
            <option value="" disabled>
              Select category
            </option>
            <option value="1">Demo option 1</option>
            <option value="2">Demo option 2</option>
            <option value="3">Demo option 3</option>
          </select>
          <button className="submit-btn" type="submit">
            Send
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default NewsForm;

const initialValues = {
  title: "",
  content: "",
  category: "",
};
const validationNewSchema = Yup.object({
  title: Yup.string().required("El titulo es obligatorio"),
  content: Yup.string().required("El contenido es obligatorio"),
});
