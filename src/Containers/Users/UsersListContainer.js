import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUsers, removeUser, selectorUsers } from "../../features/user/users-slice";
import BackUsersList from "../../Components/Users/BackUsersList";
import TitleNav from "../../Components/TitleNav/TitleNav";
import { confirmAlerts, alerts } from "../../utils/alerts";

const UsersListContainer = () => {
  const { users } = useSelector(selectorUsers);
  const dispatch = useDispatch();

  const onDelete = (id) => {
    confirmAlerts(
      ";Estas Seguro?",
      `El usuario id: ${id} se eliminará permanentemente`,
      function (response) {
        if (response) {
          dispatch(removeUser(id)).then((response) => {
            if (response.error) {
              alerts(`Ocurrió un error al eliminar el usuario id: ${id} `, "error");
            } else {
              alerts(`El usuario id: ${id} se eliminó correctamente`, "success");
            }
          });
        }
      }
    );
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="container mt-5">
      <TitleNav link="/backoffice/users/create" linkTitle="Crear" title="Users" />
      <BackUsersList data={users} onDelete={onDelete} />
    </div>
  );
};

export default UsersListContainer;
