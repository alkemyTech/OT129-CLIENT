import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { fetchMembers, selectorMembers } from "../../features/Members/membersSlice";

const MemberCardContainer = () => {
  const dispatch = useDispatch();
  const members = useSelector(selectorMembers);

  console.log(members);

  useEffect(() => {
    dispatch(fetchMembers());
  }, [dispatch]);

  return (
    <div className="container my-5">
      <h3 className="text-center mb-5">MIEMBROS</h3>
    </div>
  );
};

export default MemberCardContainer;
