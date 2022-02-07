import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getSlides } from "../../Services/SlidesServices";

import SlidesList from "./SlidesList";

const SlidesContainer = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const data = async () => {
      const slides = await getSlides();

      setSlides(slides.data.data);
    };

    data();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center mt-3">Slides</h1>
      <div className=" d-flex justify-content-end">
        <Link className="text-decoration-none " to="/backoffice/slides/create">
          <span className="general-btn fill-btn ">
            <i className="fas fa-plus me-2" />
            CREAR SLIDE
          </span>
        </Link>
      </div>
      <SlidesList slides={slides} />
    </div>
  );
};

export default SlidesContainer;
