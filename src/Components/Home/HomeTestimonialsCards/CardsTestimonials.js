import React from "react";
import PropTypes from "prop-types";

import "./CardsTestimonials.css";

import DangerouslySetInnerHTML from "../../DangerouslySetInnerHTML/DangerouslySetInnerHTML";

const CardsTestimonials = ({ title, image, description }) => {
  return (
    <div className="testimonials-card text-center">
      {image ? (
        <img alt={title} className="img-testimonials-card" src={image} />
      ) : (
        <img
          alt="Placeholder"
          className="img-testimonials-card"
          src="\images\placeholder\emptyImage.png"
        />
      )}
      <div className="card-body testimonials-card-body">
        <h5 className="card-title text-uppercase mb-4">{title}</h5>
        {description && (
          <p className="quote-description">
            <DangerouslySetInnerHTML content={description} />
          </p>
        )}
      </div>
    </div>
  );
};

CardsTestimonials.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default CardsTestimonials;
