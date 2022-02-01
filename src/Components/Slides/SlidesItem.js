import React from "react";
import PropTypes from "prop-types";

const SlidesItem = ({ slide }) => {
  return (
    <tr>
      <td className="align-middle">{slide.name}</td>
      <td className="w-25 align-middle text-center">
        <img className="w-25" src={slide.image} />
      </td>
      <td className="align-middle text-center">{slide.order}</td>
      <td className="align-middle text-center">
        <button className="btn-list btn-edit" title="Editar">
          <i className="fas fa-pencil-alt" />
        </button>
        <button className="btn-list btn-delete" title="Eliminar">
          <i className="far fa-trash-alt" />
        </button>
      </td>
    </tr>
  );
};

SlidesItem.propTypes = {
  slide: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    order: PropTypes.number,
  }),
};

export default SlidesItem;
