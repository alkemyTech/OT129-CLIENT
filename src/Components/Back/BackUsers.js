import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.css";

const BackUsers = ({ data }) => {
  const [users, setUsers] = useState(data);

  console.log(data);

  return (
    <div className="d-flex justify-content-between">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

BackUsers.propTypes = {
  data: PropTypes.array,
};

export default BackUsers;
