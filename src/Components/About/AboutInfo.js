import React from "react";
import PropTypes from "prop-types";

const AboutInfo = ({ description }) => {
  return (
    <div className="container">
      <p>{description}</p>
    </div>
  );
};

AboutInfo.propTypes = {
  description: PropTypes.string.isRequired,
};

export default AboutInfo;
