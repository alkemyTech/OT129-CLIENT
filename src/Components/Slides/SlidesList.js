import React from "react";
import PropTypes from "prop-types";

import SlidesItem from "./SlidesItem";

const SlidesList = ({ slides, onDelete }) => {
  return (
    <div className="table-container">
      <table className="table table-striped table-list">
        <thead className="thead-list">
          <tr>
            <th scope="col">Id</th>
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
            <SlidesItem key={slide.id} slide={slide} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

SlidesList.propTypes = {
  slides: PropTypes.array,
  onDelete: PropTypes.func,
};

export default SlidesList;
