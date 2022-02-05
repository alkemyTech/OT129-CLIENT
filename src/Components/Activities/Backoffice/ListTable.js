import React from "react";
import PropTypes from "prop-types";

import { formatDate } from "../../../utils/formatDate";

function ListTable({ data }) {
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
                <button className="btn-list btn-edit" title="Editar">
                  <i className="fas fa-pencil-alt" />
                </button>
                <button className="btn-list btn-delete" title="Eliminar">
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
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ListTable;
