import React, { useState } from "react";
import BackUserItem from "./BackUserItem";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.css";

const BackUsersList = ({ data }) => {
  const [users, setUsers] = useState(data);

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
            return <BackUserItem user={user} key={index} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

BackUsersList.propTypes = {
  data: PropTypes.array,
};

export default BackUsersList;
