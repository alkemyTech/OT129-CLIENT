import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const BackUserItem = ({ user, pathCreate, onDeleteClick }) => {
  const history = useHistory();

  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <button
          className="btn-list btn-edit"
          title="Editar"
          type="button"
          onClick={() => history.push(pathCreate)}
        >
          <i className="fas fa-pencil-alt" />
        </button>
        <button
          className="btn-list btn-delete"
          title="Eliminar"
          type="button"
          onClick={() => onDeleteClick(user.id)}
        >
          <i className="far fa-trash-alt" />
        </button>
      </td>
    </tr>
  );
};

BackUserItem.propTypes = {
  user: PropTypes.object,
  pathCreate: PropTypes.string,
  onDeleteClick: PropTypes.func,
};

export default BackUserItem;
