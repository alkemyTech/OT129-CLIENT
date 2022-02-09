import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { formatDate } from "../../../utils/formatDate";
import { confirmAlerts, alerts } from "../../../utils/alerts";
import { deleteActivity } from "../../../Services/ActivitiesService";

function ListTable({ data }) {
  const handleDelete = (id) => {
    confirmAlerts(
      "¿Estás seguro?",
      `La actividad id: ${id} se eliminará permanentemente`,
      function (response) {
        // callback function, if user clicks on confirm button, response is true
        if (response) {
          deleteActivity(id)
            .then(() => {
              alerts(`La actividad id: ${id} se eliminó correctamente`, "success");
            })
            .catch(() => {
              alerts(`Ocurrió un error al eliminar la actividad id: ${id} `, "error");
            });
        }
      }
    );
  };

  return (
    <table className="table table-striped table-list">
      <thead className="thead-list">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Nombre</th>
          <th scope="col">Imágen</th>
          <th scope="col">Creado</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.map((el, index) => {
          return (
            <tr key={index}>
              <th className="align-middle" scope="row">
                {el.id}
              </th>
              <td className="align-middle">{el.name}</td>
              <td className="align-middle">
                <img alt={el.name} className="img-table" src={el.image} />
              </td>
              <td className="align-middle">{formatDate(el.created_at)}</td>
              <td className="align-middle">
                <Link to={`/backoffice/activities/${el.id}`}>
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
          );
        })}
      </tbody>
    </table>
  );
}

ListTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      image: PropTypes.string,
      created_at: PropTypes.string,
    })
  ).isRequired,
};

export default ListTable;
