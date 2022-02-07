import React, { useEffect, useState } from "react";

import HomeSlides from "../../Components/Home/HomeSlides";
import { getSlides } from "../../Services/SlidesServices";
import { alerts } from "../../utils/alerts";

const HomeContainer = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    getSlides()
      .then((response) => {
        const result = response.data.data;
        const slides = result.map((slide) => {
          const { id, image, name, description } = slide;

          return { id, image, name, description };
        });

        setSlides(slides);
      })
      .catch((_) => {
        alerts("Ocurrio un error al intentar obtener los datos", error);
      });
  }, []);

  return <HomeSlides data={slides} />;
};

export default HomeContainer;
