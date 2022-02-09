import React, { useEffect, useState } from "react";

import HomeSlides from "../../Components/Home/HomeSlides";
import Spinner from "../../Components/Spinner/Spinner";
import { getSlides } from "../../Services/SlidesServices";
import { alerts } from "../../utils/alerts";

const HomeSlidesContainer = () => {
  const [slides, setSlides] = useState([]);
  const [dataExist, setDataExist] = useState(false);
  const [spinnerShow, setSpinnerShow] = useState(true);

  useEffect(() => {
    getSlides()
      .then((response) => {
        const result = response.data.data;
        const slides = result.map((slide) => {
          const { id, image, name, description } = slide;

          return { id, image, name, description };
        });

        setSlides(slides);
        setDataExist(true);
        setSpinnerShow(false);
      })
      .catch(() => {
        alerts("Ocurrio un error al intentar obtener los datos", "error");
        setSpinnerShow(false);
      });
  }, []);

  return (
    <div className="container my-5">
      <div className="row">
        {dataExist && <HomeSlides data={slides} />}
        {spinnerShow && <Spinner />}
      </div>
    </div>
  );
};

export default HomeSlidesContainer;
