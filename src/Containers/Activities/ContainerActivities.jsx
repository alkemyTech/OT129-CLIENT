import React from "react";
import PropTypes from "prop-types";

const ContainerActivities = ({ content }) => {
  return <>{content}</>;
};

ContainerActivities.propTypes = {
  content: PropTypes.string,
};

export default ContainerActivities;
