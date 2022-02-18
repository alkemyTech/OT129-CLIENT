import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { getLastTestimonials } from "../../../Services/TestimonialsService";
import Spinner from "../../Spinner/Spinner";
import { alerts } from "../../../utils/alerts";

import CardsTestimonials from "./CardsTestimonials";

import "./HomeTestimonialsCards.css";

const HomeCards = () => {
  const [lastTestimonialData, setLastTestimonialData] = useState([]);
  const [testimonialDataExist, setTestimonialDataExist] = useState(false);
  const [spinnerShow, setSpinnerShow] = useState(true);

  useEffect(() => {
    getLastTestimonials("2")
      .then((response) => {
        setLastTestimonialData(response.data.data);
        setTestimonialDataExist(true);
        setSpinnerShow(false);
      })
      .catch(() => {
        alerts("Lo sentimos! La información no se encuentra disponible.", "error");
        setSpinnerShow(false);
      });
  }, []);

  return (
    <div className="container-fluid container-home-testimonials d-grid gap-3">
      <div className="container-title mb-4">
        <h2 className="text-center text-uppercase title-home-testimonials">Testimonios</h2>
      </div>
      <div className="container text-end">
        <div className="container-cards-testimonials">
          {testimonialDataExist &&
            lastTestimonialData.map((el) => (
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
      {spinnerShow && <Spinner />}
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
