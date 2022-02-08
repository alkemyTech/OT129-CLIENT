import React from "react";
import PropTypes from "prop-types";

import "../../index.css";
import "./Progress.css";

const Progress = ({ height, width, margin }) => {
  return (
    <div className="progress-container">
      <progress
        className="progress-linear"
        style={{
          height: `${height ?? "5px"}`,
          width: `${width ?? "100px"}`,
          margin: `${margin ?? "auto"}`,
        }}
      />
    </div>
  );
};

Progress.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  margin: PropTypes.string.isRequired,
};

export default Progress;
