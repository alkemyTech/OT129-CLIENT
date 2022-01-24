import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import HomeSlides from './HomeSlides';

const formSchema = Yup.object().shape({
    welcome_text: Yup.string()
      .required("Campo Requerido")
      .min(20, "Mínimo 20 caracteres")
      .max(255, "Máximo 255 caracteres"), 
  });

const data = {
    welcome_text: "Bienvenidos a la web de la ONG",
    slides:[{
        image: "https://via.placeholder.com/1366x768",
        description: "Mensaje 1 de prueba de los slides, este mensaje vendrá luego desde la API"
    },
    {
        image: "https://via.placeholder.com/1366x768",
        description: "Mensaje 2 de prueba de los slides, este mensaje vendrá luego desde la API"
    },
    {
        image: "https://via.placeholder.com/1366x768",
        description: "Mensaje 3 de prueba de los slides, este mensaje vendrá luego desde la API"
    }]
}

const HomeForm = () => {

    const {handleSubmit, handleChange, values, errors} = useFormik({

        initialValues: {
            welcome_text: data.welcome_text,
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validationSchema: formSchema,

    });

    return (
        <>
            <div className="container">
                <h1>Editor de Home</h1>
            </div>
            <HomeSlides data={data.slides} />
            <div className="container">
                <form onSubmit={handleSubmit}>
                  <label htmlFor="welcome_text" className="form-label">Texto de bienvenida:</label>
                  <textarea
                    id="welcome_text"
                    name="welcome_text"
                    onChange={handleChange}
                    value={values.welcome_text}
                    className="form-control"
                  />
                <div className="text-danger">{errors.welcome_text}</div>
                <div className="d-grid d-md-flex justify-content-md-end py-3">
                    <button className="btn btn-primary" type="submit">Guardar</button>
                </div>
                </form>
            </div>
      </>
    );
};

export default HomeForm;
