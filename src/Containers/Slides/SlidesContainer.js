import React, { useEffect, useState } from "react";

import { getSlides } from "../../Services/SlidesServices";
import SlidesList from "../../Components/Slides/SlidesList";
import TitleNav from "../../Components/TitleNav/TitleNav";

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
    <div className="container mt-5">
      <TitleNav link="/backoffice/slides/create" linkTitle="Crear" title="Slides" />
      <SlidesList slides={slides} />
    </div>
  );
};

export default SlidesContainer;
