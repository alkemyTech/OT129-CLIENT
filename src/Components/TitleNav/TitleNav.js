import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const TitleNav = ({ title, link, linkTitle }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h4 className="text-uppercase mb-0">{title}</h4>
      <Link className="general-btn fill-black-btn text-decoration-none" to={link}>
        {linkTitle}
      </Link>
    </div>
  );
};

TitleNav.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string.isRequired,
  linkTitle: PropTypes.string.isRequired,
};

export default TitleNav;
