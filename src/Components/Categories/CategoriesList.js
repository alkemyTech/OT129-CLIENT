import React from "react";
import PropTypes from "prop-types";

const CategoriesList = ({ data }) => {
  return (
    <table className="table table-striped table-list">
      <thead className="thead-list">
        <tr>
          <th>Título</th>
          <th>Creado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.map((el, i) => (
          <tr key={i}>
            <td>{el.name}</td>
            <td>{el.created_at}</td>
            <td>
              <button className="btn-list btn-edit" title="Editar">
                <i className="fas fa-pencil-alt" />
              </button>
              <button className="btn-list btn-delete" title="Eliminar">
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
