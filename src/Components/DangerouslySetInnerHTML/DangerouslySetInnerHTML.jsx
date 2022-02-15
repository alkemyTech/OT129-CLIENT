import React from "react";
import PropTypes from "prop-types";

const DangerouslySetInnerHTML = ({ content }) => {
  return <p dangerouslySetInnerHTML={{ __html: content }} />;
};

DangerouslySetInnerHTML.propTypes = {
  content: PropTypes.string,
};

export default DangerouslySetInnerHTML;
