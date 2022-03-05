import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import MemberCard from "../../Components/About/MemberCard";
import StatusHandler from "../../Components/StatusHandler/StatusHandler";
import { fetchMembers, selectorMembers } from "../../features/Members/membersSlice";

import "./MemberCardContainer.css";

const MemberCardContainer = () => {
  const dispatch = useDispatch();
  const { members, status } = useSelector(selectorMembers);

  useEffect(() => {
    dispatch(fetchMembers());
  }, [dispatch]);

  return (
    <div className="container mt-5">
      <div className="row row-title">
        <h3 className="text-center">MIEMBROS</h3>
      </div>
      <div className="row row-card">
        <StatusHandler status={status} />
        <div className="container member-card-container">
          {members && members.map((member) => <MemberCard key={member.id} {...member} />)}
        </div>
      </div>
    </div>
  );
};

export default MemberCardContainer;
