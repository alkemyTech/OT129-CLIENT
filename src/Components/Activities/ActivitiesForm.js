import React, { useState } from "react";
import "../FormStyles.css";

const ActivitiesForm = () => {
  const [initialValues, setInitialValues] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setInitialValues({ ...initialValues, name: e.target.value });
    }
    if (e.target.name === "description") {
      setInitialValues({ ...initialValues, description: e.target.value });
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
        placeholder="Activity Title"
        type="text"
        value={initialValues.name}
        onChange={handleChange}
      />
      <input
        className="input-field"
        name="description"
        placeholder="Write some activity description"
        type="text"
        value={initialValues.description}
        onChange={handleChange}
      />
      <button className="submit-btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default ActivitiesForm;
