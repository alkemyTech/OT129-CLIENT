import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MembersList = ({ data, onDelete }) => {
  return (
    <div className="table-container">
      <table className="table table-striped table-list">
        <thead className="thead-list">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Photo</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((member) => {
            return (
              <tr key={member.id}>
                <th className="align-middle" scope="row">
                  <p className="mt-3">{member.id}</p>
                </th>
                <td className="align-middle">
                  <p className="mt-3">{member.name}</p>
                </td>
                <td className="align-middle">
                  <img alt="member" className="img-table" src={member.image} />
                </td>
                <td className="align-middle">
                  <Link to={`/backoffice/members/edit/${member.id}`}>
                    <button className="btn-list btn-edit" title="Editar">
                      <i className="fas fa-pencil-alt" />
                    </button>
                  </Link>
                  <button
                    className="btn-list btn-delete"
                    title="Eliminar"
                    onClick={() => onDelete(member.id)}
                  >
                    <i className="fas fa-trash-alt" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

MembersList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      photo: PropTypes.string,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func,
};

export default MembersList;
