import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { deleteCategory } from "../../Services/CategoriesService";
import { formatDate } from "../../utils/formatDate";
import { alerts, confirmAlerts } from "../../utils/alerts";

const CategoriesList = ({ data }) => {
  const handleDelete = (id) => {
    confirmAlerts(
      "¿Estás seguro?",
      `La categoría id: ${id} se eliminará permanentemente`,
      function (response) {
        if (response) {
          deleteCategory(id)
            .then(() => {
              alerts(`La categoría id: ${id} se eliminó correctamente`, "success");
            })
            .catch(() => {
              alerts(`Ocurrió un error al eliminar la categoría id: ${id} `, "error");
            });
        }
      }
    );
  };

  return (
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
              <Link to={`/backoffice/categories/${el.id}`}>
                <button className="btn-list btn-edit" title="Editar">
                  <i className="fas fa-pencil-alt" />
                </button>
              </Link>
              <button
                className="btn-list btn-delete"
                title="Eliminar"
                onClick={() => handleDelete(el.id)}
              >
                <i className="far fa-trash-alt" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

CategoriesList.propTypes = {
  data: PropTypes.array,
};

export default CategoriesList;
