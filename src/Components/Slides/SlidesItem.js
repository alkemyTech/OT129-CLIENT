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
        <button className="btn btn-primary ">
          <i className="fas fa-pencil-alt" />
        </button>
        <button className="btn btn-danger ms-2">
          <i className="fas fa-trash-alt" />
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
