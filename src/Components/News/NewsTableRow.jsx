import React from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const NewsTableRow = ({ data, onDelete }) => {
  return (
    <tr>
      <td className="align-middle">{data.id}</td>
      <td className="align-middle">{data.name}</td>
      <td className="align-middle">
        <img alt="" className="img-table" src={data.image} />
      </td>
      <td className="align-middle">{format(new Date(data.created_at), "dd/MM/yyyy")}</td>
      <td className="align-middle">
        <Link to={`/backoffice/news/edit/${data.id}`}>
          <button className="btn-list btn-edit" title="Editar">
            <i className="fas fa-pencil-alt" />
          </button>
        </Link>
        <button className="btn-list btn-delete" title="Eliminar" onClick={() => onDelete(data.id)}>
          <i className="fas fa-trash-alt" />
        </button>
      </td>
    </tr>
  );
};

NewsTableRow.propTypes = {
  onDelete: PropTypes.func,
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    created_at: PropTypes.string,
  }),
};
export default NewsTableRow;
