import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { fetchMembers, selectorMembers } from "../../features/Members/membersSlice";
import MembersList from "../../Components/Members/MembersList";
import TitleNav from "../../Components/TitleNav/TitleNav";
import StatusHandler from "../../Components/StatusHandler/StatusHandler";

const MembersListContainer = () => {
  const dispatch = useDispatch();
  const { members, status } = useSelector(selectorMembers);

  useEffect(() => {
    dispatch(fetchMembers());
  }, [dispatch]);

  return (
    <div className="container mt-5">
      <TitleNav link="/backoffice/members/create" linkTitle="Crear" title="Miembros" />
      <MembersList data={members} />
      <StatusHandler status={status} />
    </div>
  );
};

export default MembersListContainer;
