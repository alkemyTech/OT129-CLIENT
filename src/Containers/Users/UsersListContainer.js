import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUsers, removeUser, selectorUsers } from "../../features/user/users-slice";
import BackUsersList from "../../Components/Users/BackUsersList";
import TitleNav from "../../Components/TitleNav/TitleNav";
import Spinner from "../../Components/Spinner/Spinner";
import { confirmAlerts } from "../../utils/alerts";

const UsersListContainer = () => {
  const { users, status } = useSelector(selectorUsers);
  const dispatch = useDispatch();

  const onDelete = (id) => {
    confirmAlerts(
      ";Estas Seguro?",
      `La categoría id: ${id} se eliminará permanentemente`,
      function (response) {
        if (response) {
          dispatch(removeUser(id))
            .then(() => {
              alerts(`La categoría id: ${id} se eliminó correctamente`, "success");
            })
            .catch(() => {
              alerts(`Ocurrió un error al eliminar la categoría id: ${id} `, "error");
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
      {status === "loading" ? <Spinner /> : null}
    </div>
  );
};

export default UsersListContainer;
