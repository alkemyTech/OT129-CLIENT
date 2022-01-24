import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "./HomeForm.css"

const formSchema = Yup.object().shape({
    welcome_text: Yup.string()
      .required("Campo Requerido")
      .min(20, "Mínimo 20 caracteres")
      .max(255, "Máximo 255 caracteres"), 
  });
const {handleSubmit, handleChange, values, errors} = useFormik({

    initialValues: {
        welcome_text: "",
    },
    onSubmit: (values) => {
      console.log(values)
    },
    validationSchema: formSchema,

});
const defaultImage = "https://via.placeholder.com/250"

const HomeForm = () => {
  const [image1, setImage1] = useState(defaultImage);
  const [image2, setImage2] = useState(defaultImage);
  const [image3, setImage3] = useState(defaultImage);


  const handleImageChange = (slide, targetState, e) => {
    setFieldValue(`${slide}.image`, e.target.files[0])
    if (e.target.files && e.target.files[0]) {
      targetState(URL.createObjectURL(e.target.files[0]));
    }
  };
  console.log(errors)
  return (
    <div className="container">
        <h1>Editor de Home</h1>
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
          <div className="row text-center  my-3">
            <div className="col-md-4 mb-4">
              <div className="z-depth-1-half mb-4 d-flex flex-column align-items-center">
                <img src={image1} className="img-fluid" alt="example placeholder" />
                <textarea 
                    rows={3}
                    className="form-control"
                    name="slide1[description]"
                    className="form-control m-3"
                    onChange={handleChange}
                />
                <div className="text-danger">{errors.slide1 && errors.slide1.description}</div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="input-group mb-3">
                    <input 
                        type="file" 
                        className="form-control"
                        name="slide1.image"
                        onChange={(e) => { handleImageChange("slide1", setImage1, e); }}
                        accept=".png, .jpg"
                        required
                    /> 
                </div>
                <div className="text-danger">{errors.slide1 && errors.slide1.image}</div>
              </div>
            </div>
            <div className="col-md-4 mb-4 ">
              <div className="z-depth-1-half mb-4 d-flex flex-column align-items-center">
                <img src={image2} className="img-fluid" alt="example placeholder" />
                <textarea 
                    rows={3}
                    className="form-control"
                    name="slide2.description"
                    className="form-control m-3"
                    onChange={handleChange}
                />
              </div>
              <div className="d-flex justify-content-center">
                <div className="input-group mb-3">
                    <input 
                        type="file" 
                        className="form-control"
                        name="slide2.image"
                        onChange={(e) => { handleImageChange("slide2", setImage2, e); }}
                        accept=".png, .jpg"
                        required
                    />
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="z-depth-1-half mb-4 d-flex flex-column align-items-center">
                <img src={image3} className="img-fluid" alt="example placeholder" />
                <textarea 
                    rows={3}
                    className="form-control"
                    name="slide3.description"
                    className="form-control m-3"
                    onChange={handleChange}
                />
              </div>
              <div className="d-flex justify-content-center">
                <div className="input-group mb-3">
                    <input 
                        type="file" 
                        className="form-control"
                        name="slice3.image"
                        onChange={(e) => { handleImageChange("slide3", setImage3, e); }}
                        accept=".png, .jpg"
                        required
                        />
                </div>
              </div>
            </div>
          </div>
          <button className="btn btn-primary float-end" type="submit">Guardar</button>
        </form>
    </div>
  );
};

export default HomeForm;
