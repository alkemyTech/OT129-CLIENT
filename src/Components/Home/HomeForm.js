import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const HomeForm = () => {

    const formSchema = Yup.object().shape({
        name: Yup.string()
        .required("Campo Requerido")
        .min(3, `Mínimo 3 caracteres`)
        .max(25, `Máximo 25 caracteres`),
        image: Yup.string()
        .min(5, `Mínimo 5 caracteres`)
        .max(25, `Máximo 25 caracteres`)
        .required("Campo Requerido"),
        shortDescription: Yup.string()
        .required("Campo Requerido")
        .max(120, `Máximo 120 caracteres`),
    });

    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
          },
        validationSchema:formSchema,
    });

    
  return (
      <>
          <form onSubmit={formik.handleSubmit}>
             <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                />
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
            <button type="submit">Submit</button>
     </form>
      </>
  );
};

export default HomeForm;
