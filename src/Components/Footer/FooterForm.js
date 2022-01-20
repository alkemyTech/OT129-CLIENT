import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "../FormStyles.css";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const FooterForm = () => {
  const [formSend, setFormSend] = useState(false);
  const [valueNombre, setValueNombre] = useLocalStorage("nombre", "");
  const [valueApellido, setValueApellido] = useLocalStorage("apellido", "");
  const [valueCorreo, setValueCorreo] = useLocalStorage("correo", "");

  return (
    <Formik
      initialValues={{
        nombre: "",
        apellido: "",
        correo: "",
      }}
      validate={(valores) => {
        let errores = {};
        //Validacion nombre
        if (!valores.nombre) {
          errores.nombre = "Por favor ingrese un nombre";
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
          errores.nombre = "El nombre solo puede contener letras y espacios";
        }

        //Validacion apellido
        if (!valores.apellido) {
          errores.apellido = "Por favor ingrese un apellido";
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellido)) {
          errores.apellido =
            "El apellido solo puede contener letras y espacios";
        }

        //Validacion correo
        if (!valores.correo) {
          errores.correo = "Por favor ingrese un correo electronico";
        } else if (
          !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
            valores.correo
          )
        ) {
          errores.correo =
            "El correo solo puede contener letras, numeros, puntos, guines y guion bajo";
        }

        return errores;
      }}
      onSubmit={(valores, { resetForm }) => {
        console.log(valores);
        setFormSend(true);
        setTimeout(() => setFormSend(false), 5000); //ver validacion
        resetForm();
        //los valores se colocan en localstorage
        setValueNombre(valores.nombre);
        setValueApellido(valores.apellido);
        setValueCorreo(valores.correo);
      }}
    >
      {({ errors }) => (
        <Form className="form-container">
          <div>
            <label htmlFor="nombre">Nombre</label>
            <Field
              className="input-field"
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Nombre"

              //   onChange={(event) => setValue(event.targe.value)}
            />
            <ErrorMessage
              name="nombre"
              component={() => <p>{errors.nombre}</p>}
            />
          </div>
          <div>
            <label htmlFor="apellido">Apellido</label>
            <Field
              className="input-field"
              type="text"
              id="apellido"
              name="apellido"
              placeholder="Apellido"
            />
            <ErrorMessage
              name="apellido"
              component={() => <p>{errors.apellido}</p>}
            />
          </div>
          <div>
            <label htmlFor="correo">Correo</label>
            <Field
              className="input-field"
              type="text"
              id="correo"
              name="correo"
              placeholder="correo"
            />
            <ErrorMessage
              name="correo"
              component={() => <p>{errors.correo}</p>}
            />
          </div>
          <button type="submit" className="submit-btn">
            Enviar
          </button>
          {formSend && <p>Formulario enviado con exito</p>}
        </Form>
      )}
    </Formik>
  );
};

export default FooterForm;
