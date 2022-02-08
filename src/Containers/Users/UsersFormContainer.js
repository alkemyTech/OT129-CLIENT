import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import UsersForm from "../../Components/Users/UsersForm";
import { getUsersByID } from "../../Services/UsersService";

const UsersFormContainer = () => {
  const { id } = useParams();
  const [users, setUsers] = useState({});

  useEffect(() => {
    if (id) {
      getUsersByID(id).then((result) => {
        const response = result.data.data;

        setUsers(response);
      });
    }
  }, [id]);

  return <UsersForm users={users} />;
};

export default UsersFormContainer;
