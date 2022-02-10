import React from "react";
import PropTypes from "prop-types";

import "./MembersList.css";

import MemberCard from "./MemberCard";

const MembersList = ({ members }) => {
  return (
    <div className="row mt-5">
      <div className="container container-cards">
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
