import React from "react";
import PropTypes from "prop-types";

const Alert = ({ children }) => {
  return <div className="alert alert-danger">{children}</div>;
};

Alert.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Alert;
