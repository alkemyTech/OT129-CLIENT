src/Components/Auth/LoginForm.jsimport React, { useState } from "react";
import "../FormStyles.css";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Field Required")
    .min(4, "Must have at least 4 characters"),
  email: Yup.string().required("Field Required").email("Is not a valid format"),
  role_id: Yup.string().required("Field Required"),
  profile_image: Yup.string().required("Field Required"),
});

const isDesktop = window.innerWidth > 768;

const UserForm = ({  id = '' }) => {
  const isAddMode = id === "";

  const startValues = {
    name: "",
    email: "",
    role_id: "",
    profile_image: "",
  };

  const [user, setUser] = useState({});

  const onSubmit = async (formValues) => {
    if (isAddMode) {
      const result = await toBase64(formValues.profile_image);
      const dataUser = {
        name: formValues.name,
        email: formValues.email,
        role_id: formValues.role_id,
        profile_image: result,
      };
      axios.post("http://ongapi.alkemy.org/api/users", dataUser).then((user)=>{
        setUser(user.data)
      })
    } else {
      const result = await toBase64(formValues.profile_image);
      const dataUser = {
        name: formValues.name,
        email: formValues.email,
        role_id: formValues.role_id,
        profile_image: result,
      };
      axios.put(`http://ongapi.alkemy.org/api/users/${id}`, dataUser).then((user)=>{
        setUser(user.data)
      })
    }
  };

  const SetFields = (setValue) => {
    useEffect(() => { 
      if (!isAddMode) {
        axios.get(`http://ongapi.alkemy.org/api/users/${id}`).then((user) => { 
          setUser(user.data)})
          if (user) {
            const fields = ["name", "email", "role_id", "profile_image"];
            fields.forEach((field) => setValue(field, user[field]));
          }
      }
    }, []);
  };

  return (
    <div
      className={`${
        isDesktop ? "w-25" : "w-75"
      } mt-5 m-auto border border-light shadow-lg rounded px-4 py-4`}
    >
      <Formik
        initialValues={startValues}
        validationSchema={validationSchema}
        onSubmit={(formValues) => {
          onSubmit(formValues);
        }}
      >
        {({ errors, handleSubmit, setFieldValue }) => {
          SetFields(setFieldValue);

          return (
            <form className="mt-3" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name:
                </label>
                <Field
                  className="form-control mb-3"
                  type="text"
                  name="name"
                  placeholder="Enter name"
                />
                <ErrorMessage
                  name="name"
                  component={() => (
                    <div className="alert alert-danger" role="alert">
                      {errors.name}
                    </div>
                  )}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <Field
                  className="form-control mb-3"
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                />
                <ErrorMessage
                  name="email"
                  component={() => (
                    <div className="alert alert-danger" role="alert">
                      {errors.email}
                    </div>
                  )}
                />
              </div>
              <input
                className="form-control mb-3"
                name="profile_image"
                type="file"
                onChange={(event) => {
                  setFieldValue("profile_image", event.currentTarget.files[0]);
                }}
              />
              <ErrorMessage
                name="profile_image"
                component={() => (
                  <div className="alert alert-danger" role="alert">
                    {errors.profile_image}
                  </div>
                )}
                className="text-danger"
              />
              <div className="mb-3">
                <Field className="form-select" name="role_id" as="select">
                  <option defaultValue>Choose</option>
                  <option value="1">Admin</option>
                  <option value="2">User</option>
                </Field>
              </div>
              <ErrorMessage
                name="role_id"
                component={() => (
                  <div className="alert alert-danger" role="alert">
                    {errors.role_id}
                  </div>
                )}
              />

              <div className="mb-3">
                <button className="btn btn-primary w-100" type="submit">
                  Send
                </button>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};



export default UserForm;
