import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { deleteUsers } from "../../Services/UsersService";

const BackUsersList = ({ data }) => {
  return (
    <div className="container mt-5">
      <table className="table table-striped table-list">
        <thead className="thead-list">
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Imagen</th>
            <th>Rol</th>
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
                  <img alt="img" className="img-list" src={users.imagen} />
                </td>
                <td className="align-middle">
                  <p className="mt-3">{users.email}</p>
                </td>
                <td className="align-middle">
                  <img alt="img" className="mt-3" src={users.role_id} />
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
                    onClick={() => deleteUsers(users.id)}
                  >
                    <i className="fas fa-trash-alt" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

BackUsersList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequiered,
      email: PropTypes.string.isRequiered,
      imagen: PropTypes.string.isRequiered,
      role_id: PropTypes.number.isRequiered,
      id: PropTypes.number.isRequiered,
    })
  ),
};

export default BackUsersList;
