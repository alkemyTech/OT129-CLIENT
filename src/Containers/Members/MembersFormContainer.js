import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { alerts, confirmAlerts } from "../../utils/alerts";
import {
  fetchMemberById,
  selectorMembers,
  putMember,
  newMember,
} from "../../features/Members/membersSlice";
import TitleNav from "../../Components/TitleNav/TitleNav";
import MembersForm from "../../Components/Members/MembersForm";

const MembersFormContainer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { members } = useSelector(selectorMembers);

  const handleSub = (data) => {
    if (!id) {
      dispatch(newMember(data)).then((response) => {
        if (response.error) {
          alerts("Ups! ocurrió un error inesperado", "error");
        } else {
          alerts(`creado correctamente`, "success");
        }
      });
    } else {
      confirmAlerts("¿Estás seguro?", `Se editará el id: ${member.id}`, function (response) {
        if (response) {
          dispatch(putMember({ data, id: member.id })).then((response) => {
            if (response.error) {
              alerts(`Ocurrió un error al editar el id: ${member.id} `, "error");
            } else {
              alerts(`El id: ${member.id} se editó correctamente`, "success");
            }
          });
        }
      });
    }
  };

  useEffect(() => {
    if (id) {
      dispatch(fetchMemberById(id));
    }
  }, [id, dispatch]);

  return (
    <div className="container mt-3">
      <TitleNav link="/backoffice/members" linkTitle="Volver" />
      <MembersForm handleSub={handleSub} member={members} />
    </div>
  );
};

export default MembersFormContainer;
