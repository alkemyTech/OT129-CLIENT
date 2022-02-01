import React from "react";
import PropTypes from "prop-types";

import SlidesItem from "./SlidesItem";

const SlidesList = ({ slides }) => {
  return (
    <table className="table table-striped table-list">
      <thead className="thead-list">
        <tr>
          <th scope="col">Titulo</th>
          <th className="text-center" scope="col">
            Imagen
          </th>
          <th className="text-center" scope="col">
            Orden
          </th>
          <th className="text-center" scope="col">
            Acciones
          </th>
        </tr>
      </thead>
      <tbody>
        {slides?.map((slide) => (
          <SlidesItem key={slide.id} slide={slide} />
        ))}
      </tbody>
    </table>
  );
};

SlidesList.propTypes = {
  slides: PropTypes.array,
};

export default SlidesList;
