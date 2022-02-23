import React from "react";
import { PropTypes } from "prop-types";

import CardsTestimonials from "../../../Components/Home/HomeTestimonialsCards/CardsTestimonials";

import styles from "./Testimonials.module.css";

const Testimonials = ({ testimonials }) => {
  return (
    <div className={`container p-0 ${styles.testimonialsContainer}`}>
      {testimonials &&
        testimonials.map((el) => (
          <CardsTestimonials
            key={el.id}
            description={el.description}
            image={el.image}
            title={el.name}
          />
        ))}
    </div>
  );
};

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

export default Testimonials;
