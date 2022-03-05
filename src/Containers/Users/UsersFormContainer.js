import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { alerts, confirmAlerts } from "../../utils/alerts";
import UsersForm from "../../Components/Users/UsersForm";
import { newUser, selectorUsers, fetchUsersById, putUser } from "../../features/user/users-slice";
import TitleNav from "../../Components/TitleNav/TitleNav";

const UsersFormContainer = () => {
  const { id } = useParams();
  const { user } = useSelector(selectorUsers);
  const dispatch = useDispatch();

  const handleSub = (data) => {
    if (!id) {
      dispatch(newUser(data)).then((response) => {
        if (response.error) {
          alerts("Ups! ocurrió un error inesperado al crear el usuario", "error");
        } else {
          alerts(`Usuario creado correctamente`, "success");
        }
      });
    } else {
      confirmAlerts("¿Estás seguro?", `Se editará el user id: ${user.id}`, function (response) {
        if (response) {
          dispatch(putUser({ data, id: user.id })).then((response) => {
            if (response.error) {
              alerts(`Ocurrió un error al editar el usuario id: ${user.id} `, "error");
            } else {
              alerts(`El user id: ${user.id} se editó correctamente`, "success");
            }
          });
        }
      });
    }
  };

  useEffect(() => {
    if (id) {
      dispatch(fetchUsersById(id));
    }
  }, [id]);

  return (
    <div className="container mt-3">
      <TitleNav link="/backoffice/users" linkTitle="Volver" />
      <UsersForm handleSub={handleSub} users={user} />
    </div>
  );
};

export default UsersFormContainer;
