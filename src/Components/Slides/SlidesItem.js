import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SlidesItem = ({ slide, onDelete }) => {
  return (
    <tr>
      <td className="align-middle">{slide.id}</td>
      <td className="align-middle">{slide.name}</td>
      <td className="align-middle">
        <img className="img-table" src={slide.image} />
      </td>
      <td className="align-middle">{slide.order}</td>
      <td className="align-middle">
        <Link className="text-decoration-none mb-2" to={`/backoffice/slides/edit/${slide.id}`}>
          <button className="btn-list btn-edit" title="Editar">
            <i className="fas fa-pencil-alt" />
          </button>
        </Link>
        <button className="btn-list btn-delete" title="Eliminar" onClick={() => onDelete(slide.id)}>
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
  onDelete: PropTypes.func,
};

export default SlidesItem;
