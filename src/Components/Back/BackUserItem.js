import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.css";

const BackUserItem = ({ user, onEdit, onDeleteClick }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <button className="btn btn-primary" onClick={(event) => onEdit(event, user)} type="button">
          <i className="fas fa-user-edit" />
          <span className="ms-2">Editar</span>
        </button>
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => onDeleteClick(user.id)} type="button">
          <i className="fas fa-eraser" />
          <span className="ms-2">Eliminar</span>
        </button>
      </td>
    </tr>
  );
};

BackUserItem.propTypes = {
  user: PropTypes.object,
  onEdit: PropTypes.func,
  onDeleteClick: PropTypes.func,
};

export default BackUserItem;
