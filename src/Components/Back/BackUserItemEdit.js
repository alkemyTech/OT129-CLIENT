import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.css";

const BackUserItemEdit = ({ editFormData, onEditFormChange, onCancelClick }) => {
  return (
    <tr>
      <td>
        <input
          name="name"
          placeholder="Editar nombre..."
          required="required"
          type="text"
          value={editFormData.name}
          onChange={onEditFormChange}
        />
      </td>
      <td>
        <input
          name="email"
          placeholder="Editar email..."
          required="required"
          type="email"
          value={editFormData.email}
          onChange={onEditFormChange}
        />
      </td>
      <td>
        <button className="btn btn-success" type="submit">
          <i className="fas fa-check" />
          <span className="ms-2">Aceptar</span>
        </button>
      </td>
      <td>
        <button className="btn btn-danger" type="button" onClick={onCancelClick}>
          <i className="fas fa-times" />
          <span className="ms-2">Cancelar</span>
        </button>
      </td>
    </tr>
  );
};

BackUserItemEdit.propTypes = {
  editFormData: PropTypes.object,
  onEditFormChange: PropTypes.func,
  onCancelClick: PropTypes.func,
};

export default BackUserItemEdit;
