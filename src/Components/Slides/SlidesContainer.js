import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { fetchSlides, selectorSlides } from "../../features/slides/slidesSlice";

import SlidesList from "./SlidesList";

const SlidesContainer = () => {
  const dispatch = useDispatch();
  const { slides } = useSelector(selectorSlides);

  useEffect(() => {
    dispatch(fetchSlides());
  }, [dispatch]);

  return (
    <div className="container">
      <h1 className="text-center mt-3">Slides</h1>
      <div className=" d-flex justify-content-end">
        <Link className="text-decoration-none mb-2" to="/backoffice/slides/create">
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
