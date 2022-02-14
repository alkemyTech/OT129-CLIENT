import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BackUsersList = ({ data, onDelete }) => {
  return (
    <table className="table table-striped table-list">
      <thead className="thead-list">
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((users) => {
          return (
            <tr key={users.id}>
              <th className="align-middle" scope="row">
                <p className="mt-3">{users.id}</p>
              </th>
              <td className="align-middle">
                <p className="mt-3">{users.name}</p>
              </td>
              <td className="align-middle">
                <p className="mt-3">{users.email}</p>
              </td>
              <td className="align-middle">
                <Link to={`/backoffice/users/${users.id}`}>
                  <button className="btn-list btn-edit" title="Editar">
                    <i className="fas fa-pencil-alt" />
                  </button>
                </Link>
                <button
                  className="btn-list btn-delete"
                  title="Eliminar"
                  onClick={() => onDelete(users.id)}
                >
                  <i className="fas fa-trash-alt" />
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

BackUsersList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      email: PropTypes.string,
    })
  ).isRequired,
  onDelete: PropTypes.func,
};

export default BackUsersList;
