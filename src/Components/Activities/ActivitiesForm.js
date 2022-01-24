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
<<<<<<< HEAD
      <input className="input-field" type="text" name="name" value={initialValues.name} onChange={handleChange} placeholder="Activity Title" />
      <input className="input-field" type="text" name="description" value={initialValues.description} onChange={handleChange} placeholder="Write some activity description" />
      <button className="submit-btn" type="submit">Send</button>
=======
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
>>>>>>> development
    </form>
  );
};

export default ActivitiesForm;
