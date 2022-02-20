import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchLastTestimonials,
  selectorTestimonials,
} from "../../../features/Testimonials/testimonialsSlice";
import StatusHandler from "../../StatusHandler/StatusHandler";

import CardsTestimonials from "./CardsTestimonials";

import "./HomeTestimonialsCards.css";

const HomeCards = () => {
  const { lastTestimonials, state } = useSelector(selectorTestimonials);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLastTestimonials("2"));
  }, [dispatch]);

  return (
    <div className="container-fluid container-home-testimonials d-grid gap-3">
      <div className="container-title mb-4">
        <h2 className="text-center text-uppercase title-home-testimonials">Testimonios</h2>
      </div>
      <div className="container text-end p-0">
        <div className="container-cards-testimonials">
          {lastTestimonials &&
            lastTestimonials.map((el) => (
              <CardsTestimonials
                key={el.id}
                description={el.description}
                id={el.id}
                image={el.image}
                title={el.name}
              />
            ))}
        </div>
        <Link className="link-testimonials" to="/testimonios">
          Ver Testimonios
        </Link>
      </div>
      <StatusHandler status={state} />
    </div>
  );
};

export default HomeCards;

HomeCards.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
};
