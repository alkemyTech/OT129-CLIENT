import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { fetchSlides, removeSlide } from "../../features/slides/slidesSlice";
import { alerts, confirmAlerts } from "../../utils/alerts";

const SlidesItem = ({ slide }) => {
  const dispatch = useDispatch();

  const onDelete = (id) => {
    confirmAlerts(
      "¿Estás seguro?",
      `El slide id: ${id} se eliminará permanentemente`,
      function (response) {
        if (response) {
          dispatch(removeSlide(id))
            .then(() => {
              alerts(`el slide id: ${id} se eliminó correctamente`, "success");
            })
            .catch(() => {
              alerts(`Ocurrió un error al eliminar el slide id: ${id} `, "error");
            });
        }
      }
    );
  };

  useEffect(() => {
    dispatch(fetchSlides());
  }, [dispatch]);

  return (
    <tr>
      <td className="align-middle">{slide.id}</td>
      <td className="align-middle">{slide.name}</td>
      <td className="align-middle">
        <img className="img-table" src={slide.image} />
      </td>
      <td className="align-middle">{slide.order}</td>
      <td className="align-middle">
        <Link className="text-decoration-none mb-2" to={`/backoffice/slides/${slide.id}`}>
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
};

export default SlidesItem;
