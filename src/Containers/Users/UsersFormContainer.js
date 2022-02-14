import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { alerts, confirmAlerts } from "../../utils/alerts";
import UsersForm from "../../Components/Users/UsersForm";
import { newUser, selectorUsers, fetchUsersById, putUser } from "../../features/user/users-slice";

const UsersFormContainer = () => {
  const { id } = useParams();
  const { user } = useSelector(selectorUsers);
  const dispatch = useDispatch();

  const handleSub = (data) => {
    if (!id) {
      dispatch(newUser(data))
        .then(() => {
          alerts(`Usuario creado correctamente`, "success");
        })
        .catch(() => {
          alerts("Ups! ocurrió un error inesperado al crear el usuario", "error");
        });
    } else {
      confirmAlerts("¿Estás seguro?", `Se editará el user id: ${user.id}`, function (response) {
        if (response) {
          dispatch(putUser({ data, id: user.id }))
            .then(() => {
              alerts(`El user id: ${user.id} se editó correctamente`, "success");
            })
            .catch(() => {
              alerts(`Ocurrió un error al editar el usuario id: ${user.id} `, "error");
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

  return <UsersForm handleSub={handleSub} users={user} />;
};

export default UsersFormContainer;
