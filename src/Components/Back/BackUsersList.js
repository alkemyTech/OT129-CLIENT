import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import BackUserItem from "./BackUserItem";
import "bootstrap/dist/css/bootstrap.css";

const BackUsersList = ({ data, linkUrl }) => {
  const [users, setUsers] = useState(data);

  //funcion para eliminar usuario
  const deleteClickHandler = (userId) => {
    const newUsers = [...users];

    const index = users.findIndex((user) => user.id === userId);

    newUsers.splice(index, 1);

    setUsers(newUsers);
  };

  return (
    <>
      <Link className="btn btn-secondary btn-sm mb-3" to={linkUrl}>
        <i className="fas fa-plus" />
        <span className="ms-2">Crear Usuario</span>
      </Link>
      <div className="d-flex justify-content-between">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Email</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return <BackUserItem key={user.id} user={user} onDeleteClick={deleteClickHandler} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

BackUsersList.propTypes = {
  data: PropTypes.array,
  linkUrl: PropTypes.string,
};

export default BackUsersList;
