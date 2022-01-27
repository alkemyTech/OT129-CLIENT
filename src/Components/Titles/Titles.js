import React from "react";
import PropTypes from "prop-types";

import "./Titles.css";
import background from "./background-title.jpg";

const Titles = ({ title, image = background }) => {
  return (
    <div className="container-fluid banner">
      <img alt={title} className="image-banner" src={image} />
      <div className="row">
        <div className="container text-banner">
          <div className="row row-banner">
            <div className="col-12">
              <h1 className="title-banner">{title}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Titles.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};

export default Titles;
