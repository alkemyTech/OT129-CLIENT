import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const HomeForm = () => {
    const [image1, setImage1] = useState()
    const [image2, setImage2] = useState()
    const [image3, setImage3] = useState()

    const formSchema = Yup.object().shape({
        welcome_text: Yup.string()
        .required("Campo Requerido")
        .min(20, `Mínimo 20 caracteres`)
        .max(255, `Máximo 255 caracteres`),
    });

    const formik = useFormik({
        initialValues: {
            welcome_text: '',
            slides:[{
                image:'',
                description:''
            }]
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
          },
        validationSchema:formSchema,
        
    });
    const handleImageChange = (state, e) =>{
        if (e.target.files && e.target.files[0]) {
            state(URL.createObjectURL(e.target.files[0]));
        }
    }

    
  return (
      <>
          <form onSubmit={formik.handleSubmit}>
             <label htmlFor="welcome_text">Bienvenida:</label>
                <input
                  id="welcome_text"
                  name="welcome_text"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.welcome_text}
                />
                <div className="row text-center">
                    <div className="col-md-4 mb-4">
                        <div className="z-depth-1-half mb-4">
                            <img src={image1} className="img-fluid" alt="example placeholder"/>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-primary ">
                                <span>Choose file</span>
                                <input 
                                    type="file" 
                                    name="slice1.image"
                                    onChange={e=>{handleImageChange(setImage1,e)}}
                                />
                            </button>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="z-depth-1-half mb-4">
                            <img src={image1} className="img-fluid" alt="example placeholder"/>
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className="btn btn-mdb-color btn-rounded float-left">
                                <span>Choose file</span>
                                <input 
                                    type="file" 
                                    name="slice1.image"
                                    onChange={e=>{handleImageChange(setImage2,e)}}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="z-depth-1-half mb-4">
                            <img src={image1} className="img-fluid" alt="example placeholder"/>
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className="btn btn-mdb-color btn-rounded float-left">
                                <span>Choose file</span>
                                <input 
                                    type="file" 
                                    name="slice1.image"
                                    onChange={e=>{handleImageChange(setImage3,e)}}
                                />
                            </div>
                        </div>
                    </div>
                </div>
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
