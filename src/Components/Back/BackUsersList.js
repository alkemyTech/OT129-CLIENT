import React, { useState } from "react";
import PropTypes from "prop-types";

import TitleNav from "../../Components/TitleNav/TitleNav";

import BackUserItem from "./BackUserItem";

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
    <div className="container mt-5">
      <TitleNav link={linkUrl} linkTitle="Crear" title="Usuarios" />
      <table className="table table-striped table-list">
        <thead className="thead-list">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Email</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <BackUserItem
                key={user.id}
                pathCreate="/create-user"
                user={user}
                onDeleteClick={deleteClickHandler}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

BackUsersList.propTypes = {
  data: PropTypes.array,
  linkUrl: PropTypes.string,
};

export default BackUsersList;
