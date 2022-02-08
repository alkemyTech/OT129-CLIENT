import React from "react";
import PropTypes from "prop-types";

import "../../index.css";
import "./Progress.css";

const Progress = ({ height, width }) => {
  return (
    <div className="progress-container">
      <progress className="progress-linear" style={{ height: `${height}`, width: `${width}` }} />
    </div>
  );
};

Progress.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

export default Progress;
