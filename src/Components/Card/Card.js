import React from "react";
import PropTypes from "prop-types";

const Card = ({ title, image, description }) => {
  return (
    <div className="card">
      {image ? (
        <img alt="Card image cap" className="card-img-top" src={image} />
      ) : (
        <img alt="Placeholder" className="card-img-top" src="\images\placeholder\emptyImage.png" />
      )}
      <div className="card-body">
        <h5 className="card-title text-uppercase">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
