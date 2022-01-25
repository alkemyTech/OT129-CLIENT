import React from "react";
import PropTypes from "prop-types";
import Carousel from "bootstrap";

const HomeSlides = ({ data }) => {
  return (
    <div className="carousel slide" data-bs-ride="carousel" id="carousel">
      <div className="carousel-inner">
        {data.map((el, index) => {
          return (
            <div key={index} className={index === 0 ? "carousel-item active" : "carousel-item"}>
              <img alt="ong-carousel" className="d-block w-100" src={el.image} />
              <div className="carousel-caption d-none d-md-block">
                <p>{el.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button
        className="carousel-control-prev"
        data-bs-slide="prev"
        data-bs-target="#carouselExampleControls"
        type="button"
      >
        <span aria-hidden="true" className="carousel-control-prev-icon" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        data-bs-slide="next"
        data-bs-target="#carouselExampleControls"
        type="button"
      >
        <span aria-hidden="true" className="carousel-control-next-icon" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

HomeSlides.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default HomeSlides;
