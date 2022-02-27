import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { formatDate } from "../../utils/formatDate";

const CategoriesList = ({ data, onDelete }) => {
  return (
    <div className="table-container">
      <table className="table table-striped table-list">
        <thead className="thead-list">
          <tr>
            <th>Id</th>
            <th>Título</th>
            <th>Creado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el, i) => (
            <tr key={i}>
              <td>{el.id}</td>
              <td>{el.name}</td>
              <td>{formatDate(el.created_at)}</td>
              <td>
                <Link to={`/backoffice/categories/edit/${el.id}`}>
                  <button className="btn-list btn-edit" title="Editar">
                    <i className="fas fa-pencil-alt" />
                  </button>
                </Link>
                <button
                  className="btn-list btn-delete"
                  title="Eliminar"
                  onClick={() => onDelete(el.id)}
                >
                  <i className="far fa-trash-alt" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

CategoriesList.propTypes = {
  data: PropTypes.array,
  onDelete: PropTypes.func,
};

export default CategoriesList;
