import React, { useState } from "react";
import "../FormStyles.css";

const ProjectsForm = () => {
  const [initialValues, setInitialValues] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "title") {
      setInitialValues({ ...initialValues, title: e.target.value });
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
        name="title"
        placeholder="Title"
        type="text"
        value={initialValues.title}
        onChange={handleChange}
      />
      <input
        className="input-field"
        name="description"
        placeholder="Write some description"
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

export default ProjectsForm;
