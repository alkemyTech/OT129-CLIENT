import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./ContactForm.css";
import * as Yup from "yup";

const ErrorComponent = (props) => {
    return(
        <p>{props.children}</p>
    );
}

const ContactForm = () => {

    const initialValues = {
        name: "",
        email: "",
        phone: "",
        message: ""
    }

    const onSubmit = ( values, {resetForm} ) => {
        resetForm();
    }

    const validationSchema = Yup.object({
        name: Yup.string().required("Requerido"),
        email: Yup.string().email("Formato de email incorrecto").required("Requerido"),
        phone: Yup.string().matches(/^\d+$/, "Formato incorrecto").min(8, "Debe ingresar un mínimo de 8 números.").required("Requerido"),
        message: Yup.string().required("Requerido")
    });

    return(
        <Formik
            initialValues = {initialValues}
            validationSchema = {validationSchema}
            onSubmit = {onSubmit}
        >
            <Form className="form-container">
                <Field
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    className="input-field"
                />
                <ErrorMessage name="name" component={ErrorComponent} />
                <Field
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="input-field"
                />
                <ErrorMessage name="email" component={ErrorComponent} />
                <Field
                    type="tel"
                    name="phone"
                    placeholder="Teléfono"
                    className="input-field"
                />
                <ErrorMessage name="phone" component={ErrorComponent} />
                <Field
                    as="textarea"
                    name="message"
                    placeholder="Escribe tu mensaje"
                    className="input-field"
                />
                <ErrorMessage name="message" component={ErrorComponent} />
                <button type="submit" className="submit-btn">Enviar</button>
            </Form>
        </Formik>
    );
}

export default ContactForm;