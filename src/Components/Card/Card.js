import React from "react";
import PropTypes from "prop-types";
import "./ShowCard.css";
import { Link } from "react-router-dom";

import "./Card.css";

const Card = ({ id, title, image, description, url }) => {
  return (
    <div className="card">
      {image ? (
        <img alt="Card image cap" className="card-img-top img-card" src={image} />
      ) : (
        <img
          alt="Placeholder"
          className="card-img-top img-card"
          src="\images\placeholder\emptyImage.png"
        />
      )}
      <div className="card-body">
        <h5 className="card-title text-uppercase">{title}</h5>
        <p className="card-text">{description}</p>
        <Link className="general-btn fill-btn text-decoration-none" to={`/${url}/${id}`}>
          Leer más
        </Link>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string.isRequired,
};

export default Card;
