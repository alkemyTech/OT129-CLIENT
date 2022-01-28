import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.css";

const BackUserItem = ({ user, onEdit, onDeleteClick }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <button className="btn btn-warning" onClick={(event) => onEdit(event, user)} type="button">
          <i className="fas fa-user-edit" />
          Editar
        </button>
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => onDeleteClick(user.id)} type="button">
          <i className="fas fa-eraser" />
          Eliminar
        </button>
      </td>
    </tr>
  );
};

BackUserItem.propTypes = {
  user: PropTypes.object,
};

export default BackUserItem;
