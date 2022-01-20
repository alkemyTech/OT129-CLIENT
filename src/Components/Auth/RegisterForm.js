import React from 'react';

import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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

const Alert = ({children}) => {
    return (
        <div className='alert alert-danger'>
            {children}
        </div>
    )
}
const RegisterForm = () => {
    return (
        <div className="container">
            <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(formData) => console.log(formData)}
            >
            {((formik) => (
            <form noValidate className="mt-3" onSubmit={formik.handleSubmit}>
                <div className="form-group mb-3">
                    <label htmlFor='email' className='form-label'>Email:</label>
                    <input 
                    className="form-control mb-3"
                    id='email' 
                    type='email' 
                    placeholder='Enter your email'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    />      
                    <ErrorMessage name='email' component={Alert} className='alert-danger' />         
                </div>
                <div className="form-group mb-3">
                    <label htmlFor='password' className='form-label'>Password:</label>
                    <input
                    className="form-control mb-3" 
                    id='password' 
                    type='password' 
                    placeholder='Enter your password'
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    />                
                    <ErrorMessage name='password' component={Alert} className='alert-danger' />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor='confirmPassword' className='form-label'>Confirm password:</label>
                    <input
                    className="form-control mb-3"
                    id='confirmPassword' 
                    type='password' 
                    placeholder='Confirm your password'
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                    />                
                   <ErrorMessage name='confirmPassword' component={Alert} />
                </div>
                <button className='btn btn-primary' type='submit'>Submit</button>
            </form>
            ))}
            </Formik>
        </div>
    )
}
 
export default RegisterForm;