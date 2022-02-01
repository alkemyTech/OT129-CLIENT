import React from "react";
import PropTypes from "prop-types";

function ListTable({ data }) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
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
              <td className="d-flex flex-row">
                <img alt={el.name} className="mx-1 " src={el.image} style={{ width: "8vw" }} />
              </td>
              <td className="align-middle">{el.created_at}</td>
              <td className="align-middle">
                <button className="btn btn-secondary mx-1">Editar</button>
                <button className="btn btn-danger mx-1">Borrar</button>
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
