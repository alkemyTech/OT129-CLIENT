import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { getSlides } from "../../Services/HomeServices";

import HomeSlides from "./HomeSlides";

const formSchema = Yup.object().shape({
  welcome_text: Yup.string()
    .required("Campo Requerido")
    .min(20, "Mínimo 20 caracteres")
    .max(255, "Máximo 255 caracteres"),
});

const HomeForm = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchSlides = async () => {
      const fetchedSlides = await getSlides();

      console.log(fetchedSlides.data);

      setSlides(fetchedSlides.data);
    };

    fetchSlides();
  }, []);

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      welcome_text: data.welcome_text,
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: formSchema,
  });

  return (
    <>
      <div className="container">
        <h1>Editor de Home</h1>
      </div>
      {!slides ? <HomeSlides data={slides} /> : <p>Próximamente nuevos Slides!</p>}
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label className="form-label" htmlFor="welcome_text">
            Texto de bienvenida:
          </label>
          <textarea
            className="form-control"
            id="welcome_text"
            name="welcome_text"
            value={values.welcome_text}
            onChange={handleChange}
          />
          <div className="text-danger">{errors.welcome_text}</div>
          <div className="d-grid d-md-flex justify-content-md-end py-3">
            <button className="btn btn-primary" type="submit">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default HomeForm;
