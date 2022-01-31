import React from "react";
import PropTypes from "prop-types";

import MemberCard from "./MemberCard";

const MembersList = ({ members }) => {
  return (
    <div className="container">
      <h1 className="text-center">Miembros</h1>
      <div className="row d-flex justify-content-around mt-5">
        {members.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

MembersList.propTypes = {
  members: PropTypes.array,
};

export default MembersList;
