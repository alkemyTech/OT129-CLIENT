import React, { useState } from "react";
import "../FormStyles.css";

const LoginForm = () => {
  const [initialValues, setInitialValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setInitialValues({ ...initialValues, email: e.target.value });
    }
    if (e.target.name === "password") {
      setInitialValues({ ...initialValues, password: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(initialValues);
    localStorage.setItem("token", "tokenValueExample");
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        className="input-field"
        name="email"
        placeholder="Enter email"
        type="text"
        value={initialValues.name}
        onChange={handleChange}
      />
      <input
        className="input-field"
        name="password"
        placeholder="Enter password"
        type="text"
        value={initialValues.password}
        onChange={handleChange}
      />
      <button className="submit-btn" type="submit">
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
