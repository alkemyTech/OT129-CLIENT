import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import MemberCard from "../../Components/About/MemberCard";
import StatusHandler from "../../Components/StatusHandler/StatusHandler";
import { fetchMembers, selectorMembers } from "../../features/Members/membersSlice";

import "./MemberCardContainer.css";

const MemberCardContainer = () => {
  const dispatch = useDispatch();
  const { members } = useSelector(selectorMembers);
  const { status } = useSelector(selectorMembers);

  useEffect(() => {
    dispatch(fetchMembers());
  }, [dispatch]);

  return (
    <div className="container my-5">
      <h3 className="text-center mb-5">MIEMBROS</h3>
      <div className="member-card-container">
        {members && members.map((member) => <MemberCard key={member.id} {...member} />)}
        <StatusHandler status={status} />
      </div>
    </div>
  );
};

export default MemberCardContainer;
