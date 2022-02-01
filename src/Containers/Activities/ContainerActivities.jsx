import React from "react";
import PropTypes from "prop-types";

const ContainerActivities = ({ content }) => {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

ContainerActivities.propTypes = {
  content: PropTypes.string,
};

export default ContainerActivities;
