import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchMemberById, selectorMembers } from "../../features/Members/membersSlice";
import MembersForm from "../../Components/Members/MembersForm";
import StatusHandler from "../../Components/StatusHandler/StatusHandler";

const MembersFormContainer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { members, status } = useSelector(selectorMembers);

  useEffect(() => {
    if (id) {
      dispatch(fetchMemberById(id));
    }
  }, [id, dispatch]);

  return (
    <>
      <MembersForm member={members} />
      <StatusHandler status={status} />
    </>
  );
};

export default MembersFormContainer;
