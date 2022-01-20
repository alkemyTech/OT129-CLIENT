import React from 'react';

import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Container, Form, FormGroup, FormLabel, FormControl, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import '../FormStyles.css';

const PASSWORD_REGEX = new RegExp("(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})");

const initialValues = {
    email: '',
    password: '',
    confirmPassword: ''
}

const validationSchema = Yup.object({
    email: Yup.string().required('The field is required').email('This is not a valid email format'),
    password: Yup.string().required('The field is required').min(6, 'Password must be at least 6 characters').matches(PASSWORD_REGEX, 'Password must have at least one special character and a number'),
    confirmPassword: Yup.string().required('The field is required').min(6, 'Password must be at least 6 characters').matches(PASSWORD_REGEX, 'Password must have at least one special character and a number').oneOf([Yup.ref('password'), null], 'Passwords must match')
})

const RegisterForm = () => {
    console.log("render");
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