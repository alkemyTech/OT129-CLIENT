import React from "react";
import PropTypes from "prop-types";

import "./Titles.css";
import background from "./background-title.jpg";

const Titles = ({ title, description, image = background }) => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center banner py-5">
      <img alt={title} className="image-banner" src={image} />
      <div className="row">
        <div className="container text-banner">
          <div className="row row-banner">
            <div className="col-12">
              <h1 className="mb-0 title-banner">{title}</h1>
              {description && <p className="mb-0 mt-3">{description}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Titles.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default Titles;
