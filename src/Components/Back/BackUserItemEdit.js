import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.css";

const BackUserItemEdit = ({ editFormData, onEditFormChange, onCancelClick }) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Editar nombre..."
          name="name"
          onChange={onEditFormChange}
          value={editFormData.name}
        />
      </td>
      <td>
        <input
          type="email"
          required="required"
          placeholder="Editar email..."
          name="email"
          onChange={onEditFormChange}
          value={editFormData.email}
        />
      </td>
      <td>
        <button className="btn btn-success" type="submit">
          Aceptar
        </button>
        <button className="btn btn-danger" type="button" onClick={onCancelClick}>
          Cancelar
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
