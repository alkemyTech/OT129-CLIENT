import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../FormStyles.css';

const ActivitiesForm = ({ activities }) => {   
    
    const validationSchema = Yup.object({
        name: Yup
            .string()
            .required('The activity name is required'),
        image: Yup
            .mixed()
            .required('A file is required')
            .test('fileType', "Unsupported file type", (value) => {               
                if (value) return ["image/jpeg", "image/png"].includes(value.type)
                else return true
            })
    })

    let initialValues = {
        name: activities?.name || "",
        description: activities?.description || "",
        image: activities?.image || "",
    }


    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log(values);
            }}
            className="form-container">
            {({ errors, setFieldValue }) => (
                <Form>
                    <Field
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Activity Title"
                    />
                    <ErrorMessage name='name' component={() => (<div className="error">{errors.name}</div>)} className='alert-danger' />
                    <Field
                        id="description"
                        type="text"
                        name="description"
                        placeholder="Write some activity description"
                    />
                    
                    <input
                        id="image"
                        type="file"
                        name="image"
                        accept="image/png, image/jpeg"
                        onChange={(event) => {
                            setFieldValue("image", event.currentTarget.files[0]);
                        }}
                    />
                    <ErrorMessage name='file' component={() => (<div className="error">{errors.image}</div>)} className='alert-danger' />
                    <button className="submit-btn" type="submit">Send</button>
                </Form>
            )}
        </Formik>
    );
}

export default ActivitiesForm;
