import React from "react";
import "bootstrap/js/dist/carousel";

import slide1 from "../../assets/Toys/3.jpg";
import slide2 from "../../assets/Toys/4.jpg";

import styles from "./slider.module.css";

const slide1Text = "¡Festejamos juntos el día del niño!";
const slide2Text = "Un juguete, una sonrisa";

const Slider = () => {
  return (
    <>
      <div
        className={`carousel slide ${styles["slide-container"]}`}
        data-bs-ride="carousel"
        id="carouselExampleCaptions"
      >
        <div className="carousel-inner">
          <div className={`carousel-item active ${styles["slide-image-container"]}`}>
            <img
              alt="slide-toys"
              className={`d-block w-100 ${styles["slide-image"]} `}
              src={slide1}
            />
            <div className={`carousel-caption d-lg-block ${styles["slider-caption"]}`}>
              <p className="text-white fs-3 text">{slide1Text}</p>
            </div>
          </div>
          <div className={`carousel-item ${styles["slide-image-container"]}`}>
            <img
              alt="slide-toys"
              className={`d-block w-100 ${styles["slide-image"]} `}
              src={slide2}
            />
            <div className={`carousel-caption d-lg-block ${styles["slider-caption"]}`}>
              <p className="text-white fs-3 text">{slide2Text}</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          data-bs-slide="prev"
          data-bs-target="#carouselExampleCaptions"
          type="button"
        >
          <span
            aria-hidden="true"
            className="carousel-control-prev-icon bg-secondary opacity-75 p-3 rounded"
          />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          data-bs-slide="next"
          data-bs-target="#carouselExampleCaptions"
          type="button"
        >
          <span
            aria-hidden="true"
            className="carousel-control-next-icon bg-secondary opacity-75 p-3 rounded"
          />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Slider;
