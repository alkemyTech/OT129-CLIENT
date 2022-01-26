import React, { useState } from "react";
import "../FormStyles.css";

const UserForm = () => {
  const [initialValues, setInitialValues] = useState({
    name: "",
    email: "",
    roleId: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setInitialValues({ ...initialValues, name: e.target.value });
    }
    if (e.target.name === "email") {
      setInitialValues({ ...initialValues, email: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(initialValues);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        className="input-field"
        name="name"
        placeholder="Name"
        type="text"
        value={initialValues.name || ""}
        onChange={handleChange}
      />
      <input
        className="input-field"
        name="email"
        placeholder="Email"
        type="text"
        value={initialValues.description || ""}
        onChange={handleChange}
      />
      <select
        className="input-field"
        value={initialValues.roleId || ""}
        onChange={(e) => setInitialValues({ ...initialValues, roleId: e.target.value })}
      >
        <option disabled value="">
          Select the role
        </option>
        <option value="1">Admin</option>
        <option value="2">User</option>
      </select>
      <button className="submit-btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default UserForm;
