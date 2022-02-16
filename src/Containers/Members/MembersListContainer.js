import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { fetchMembers, selectorMembers, removeMember } from "../../features/Members/membersSlice";
import MembersList from "../../Components/Members/MembersList";
import TitleNav from "../../Components/TitleNav/TitleNav";
import { confirmAlerts, alerts } from "../../utils/alerts";

const MembersListContainer = () => {
  const dispatch = useDispatch();
  const { members } = useSelector(selectorMembers);

  const onDelete = (id) => {
    confirmAlerts(
      ";Estas Seguro?",
      `El id: ${id} se eliminará permanentemente`,
      function (response) {
        if (response) {
          dispatch(removeMember(id)).then((response) => {
            if (response.error) {
              alerts(`Ocurrió un error al eliminar el id: ${id} `, "error");
            } else {
              alerts(`El id: ${id} se eliminó correctamente`, "success");
            }
          });
        }
      }
    );
  };

  useEffect(() => {
    dispatch(fetchMembers());
  }, [dispatch]);

  return (
    <div className="container mt-5">
      <TitleNav link="/backoffice/members/create" linkTitle="Crear" title="Miembros" />
      <MembersList data={members} onDelete={onDelete} />
    </div>
  );
};

export default MembersListContainer;
