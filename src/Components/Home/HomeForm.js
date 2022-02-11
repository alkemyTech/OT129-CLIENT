import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { getSlides } from "../../Services/SlidesServices";
import { addOrganization } from "../../Services/OrganizationService";

import HomeSlides from "./HomeSlides";

const formSchema = Yup.object().shape({
  welcome_text: Yup.string()
    .required("Campo Requerido")
    .min(20, "Mínimo 20 caracteres")
    .max(255, "Máximo 255 caracteres"),
});

const data = {
  welcome_text: "Bienvenidos a la web de la ONG",
  name: "Somos Más",
};

const HomeForm = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchSlides = async () => {
      const fetchedSlides = await getSlides();

      setSlides(fetchedSlides.data.data);
    };

    fetchSlides();
  }, []);

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      welcome_text: data.welcome_text,
      name: data.name,
    },
    onSubmit: (values) => {
      addOrganization(values);
    },
    validationSchema: formSchema,
  });

  return (
    <>
      <div className="container">
        <h1>Editor de Home</h1>
      </div>
      {slides ? <HomeSlides data={slides} /> : <p>Próximamente nuevos Slides!</p>}
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
