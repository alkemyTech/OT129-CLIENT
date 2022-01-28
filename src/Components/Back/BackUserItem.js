import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.css";

const BackUserItem = ({ user }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <button className="btn btn-warning" type="button">
          Editar
        </button>
      </td>
      <td>
        <button className="btn btn-danger" type="button">
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
