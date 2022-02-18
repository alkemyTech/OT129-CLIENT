import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchSlides, selectorSlides } from "../../features/slides/slidesSlice";
import TitleNav from "../../Components/TitleNav/TitleNav";
import SlidesList from "../../Components/Slides/SlidesList";

const SlidesContainer = () => {
  const dispatch = useDispatch();
  const { slides } = useSelector(selectorSlides);

  useEffect(() => {
    dispatch(fetchSlides());
  }, []);

  console.log(slides);

  return (
    <div className="container mt-5">
      <TitleNav link="/backoffice/slides/create" linkTitle="Crear" title="Slides" />
      <SlidesList slides={slides} />
    </div>
  );
};

export default SlidesContainer;
