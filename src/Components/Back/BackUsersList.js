import React, { useState } from "react";
import BackUserItem from "./BackUserItem";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.css";
import BackUserItemEdit from "./BackUserItemEdit";

const BackUsersList = ({ data, linkUrl }) => {
  const [users, setUsers] = useState(data);

  const [editUserId, setEditUserId] = useState(null);

  const [editFormData, setEditFormData] = useState({
    email: "",
    name: "",
  });

  //funcion para que el boton al dar click, edite los campos
  const editHandler = (event, data) => {
    event.preventDefault();
    setEditUserId(data.id);

    const formValues = {
      email: data.email,
      name: data.name,
    };

    setEditFormData(formValues);
  };

  //funcion para actualizar datos de los campos
  const editFormHandler = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };

    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  //funcion para que se haga submit y se actualicen los cambios
  const submitFormHandler = (event) => {
    event.preventDefault();

    const editedUser = {
      id: editUserId,
      name: editFormData.name,
      email: editFormData.email,
    };

    const newUsers = [...users];

    const index = users.findIndex((user) => user.id === editUserId);

    newUsers[index] = editedUser;

    setUsers(newUsers);
    setEditUserId(null);
  };

  //funcion para cuando el usuario no quiere realizar cambios a los campos
  const cancelClickHandler = () => {
    setEditUserId(null);
  };

  //funcion para eliminar usuario
  const deleteClickHandler = (userId) => {
    const newUsers = [...users];

    const index = users.findIndex((user) => user.id === userId);

    newUsers.splice(index, 1);

    setUsers(newUsers);
  };

  return (
    <>
      <Link className="btn btn-primary btn-sm mb-3" to={linkUrl}>
        <i className="fas fa-plus" />
        <span className="ms-2">Crear Usuario</span>
      </Link>
      <div className="d-flex justify-content-between">
        {/* se coloca form asi, por problema de child en linea 23 */}
        <form onSubmit={submitFormHandler}>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Email</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                return (
                  <React.Fragment key={index}>
                    {editUserId === user.id ? (
                      <BackUserItemEdit
                        editFormData={editFormData}
                        onEditFormChange={editFormHandler}
                        onCancelClick={cancelClickHandler}
                        key={index}
                      />
                    ) : (
                      <BackUserItem
                        user={user}
                        key={user.id}
                        onEdit={editHandler}
                        onDeleteClick={deleteClickHandler}
                      />
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
};

BackUsersList.propTypes = {
  data: PropTypes.array,
  linkUrl: PropTypes.string,
};

export default BackUsersList;
