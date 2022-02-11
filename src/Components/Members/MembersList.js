import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { deleteMember } from "../../Services/MembersService";

const MembersList = ({ data }) => {
  return (
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
                <img alt="member" className="img-list" src={member.photo} />
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
                  onClick={() => deleteMember(member.id)}
                >
                  <i className="fas fa-trash-alt" />
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

MembersList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      photo: PropTypes.string,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default MembersList;
