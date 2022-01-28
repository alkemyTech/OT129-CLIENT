import React from "react";
import PropTypes from "prop-types";

import TitleNav from "../TitleNav/TitleNav";

const MembersList = ({ content }) => {
  return (
    <div className="container-fluid mt-3">
      <TitleNav link="/backoffice/members/create" linkTitle="New member" title="Members" />
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="text-center">ID</th>
            <th className="text-center">Name</th>
            <th className="text-center">Photo</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {content.map((member) => {
            return (
              <tr key={member.id}>
                <th className="text-center" scope="row">
                  <p className="mt-3">{member.id}</p>
                </th>
                <td className="text-center">
                  <p className="mt-3">{member.name}</p>
                </td>
                <td className="text-center">
                  <img alt="member" className="img-thumbnail" src={member.photo} />
                </td>
                <td>
                  <div className="d-flex flex-column">
                    <button className="btn btn-info mt-3 mx-auto">
                      <i className="fas fa-pencil-alt" />
                    </button>
                    <button className="btn btn-danger mt-3 mx-auto">
                      <i className="fas fa-trash-alt" />
                    </button>
                  </div>
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
  content: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
    })
  ),
};

export default MembersList;
