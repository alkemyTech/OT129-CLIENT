import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUsers, selectorUsers } from "../../features/user/users-slice";
import BackUsersList from "../../Components/Users/BackUsersList";
import TitleNav from "../../Components/TitleNav/TitleNav";

const UsersListContainer = () => {
  const { users } = useSelector(selectorUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="container mt-5">
      <TitleNav link="/backoffice/users/create" linkTitle="Crear" title="Users" />
      <BackUsersList data={users} />
    </div>
  );
};

export default UsersListContainer;
