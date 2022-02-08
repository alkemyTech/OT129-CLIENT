import React, { useEffect, useState } from "react";

import BackUsersList from "../../Components/Users/BackUsersList";
import TitleNav from "../../Components/TitleNav/TitleNav";
import { getUsers } from "../../Services/UsersService";

const UsersListContainer = () => {
  const [dataUsers, setDataUsers] = useState([]);

  useEffect(() => {
    const data = async () => {
      const users = await getUsers();

      setDataUsers(users.data.data);
    };

    data();
  }, []);

  return (
    <div className="container mt-5">
      <TitleNav link="/backoffice/users/create" linkTitle="Crear" title="Users" />
      <BackUsersList data={dataUsers} />
    </div>
  );
};

export default UsersListContainer;
