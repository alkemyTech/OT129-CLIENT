import React from 'react';

import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Container, Form, FormGroup, FormLabel, FormControl, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import '../FormStyles.css';

// const validate = (values) => {
//     const errors = {};
//     if (!values.email) {
//         errors.email = "The field is required"
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email = "This is not a valid email format"
//     }

//     if (!values.password) {
//         errors.password = "The field is required"
//     } else if (values.password.length < 6) {
//         errors.password = "Password must be at least 6 characters"
//     } else if (!/^[a-zA-Z0-9 ]*$/.test(values.password)) {
//         errors.password = "Password must have at least one special character"
//     } else if (values.password !== values.passwordConfirm) {
//         errors.passwordConfirm = "Passwords do not match"
//     }

//     if (!values.confirmPassword) {
//         errors.confirmPassword = "The field is required"
//     } else if (values.confirmPassword.length < 6) {
//         errors.confirmPassword = "Password must be at least 6 characters"
//     } else if (!/^[a-zA-Z0-9 ]*$/.test(values.confirmPassword)) {
//         errors.confirmPassword = "Password must have at least one special character"
//     }
// }

const RegisterForm = () => {

    const initialValues = {
        email: '',
        password: '',
        confirmPassword: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string().required('The field is required').email('This is not a valid email format'),
        password: Yup.string().required('The field is required').min(6, 'Password must be at least 6 characters').matches(/^[A-Za-z!@#$%^&*()_+]$/, 'Password must have at least one special character'),
        confirmPassword: Yup.string().required('The field is required').min(6, 'Password must be at least 6 characters').matches(!/^[A-Za-z!@#$%^&*()_+]$/, 'Password must have at least one special character')
    })

    return (
        <Container>
            <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(formData) => console.log(formData)}
            >
            {((formik) => (
            <Form noValidate className="mt-3" onSubmit={formik.handleSubmit}>
                <FormGroup className="mb-3">
                    <FormLabel htmlFor='email'>Email:</FormLabel>
                    <FormControl 
                    className="mb-3"
                    id='email' 
                    type='email' 
                    placeholder='Enter your email'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    />      
                    <ErrorMessage name='email' component={Alert} className='alert-danger' />         
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormLabel htmlFor='password'>Password:</FormLabel>
                    <FormControl
                    className="mb-3" 
                    id='password' 
                    type='password' 
                    placeholder='Enter your password'
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    />                
                    <ErrorMessage name='password' component={Alert} className='alert-danger' />
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormLabel htmlFor='confirmPassword'>Confirm password:</FormLabel>
                    <FormControl 
                    className="mb-3"
                    id='confirmPassword' 
                    type='password' 
                    placeholder='Confirm your password'
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                    />                
                   <ErrorMessage name='confirmPassword' component={Alert} className='alert-danger' />
                </FormGroup>
                <Button type='submit'>Submit</Button>
            </Form>
            ))}
            </Formik>
        </Container>
    )
}
 
export default RegisterForm;