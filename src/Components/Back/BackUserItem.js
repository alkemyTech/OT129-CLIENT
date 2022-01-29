import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.css";

const BackUserItem = ({ user, onDeleteClick }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <button className="btn btn-primary" type="button">
          <i className="fas fa-user-edit" />
          <span className="ms-2">Editar</span>
        </button>
      </td>
      <td>
        <button className="btn btn-danger" type="button" onClick={() => onDeleteClick(user.id)}>
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
