import React from "react";
import PropTypes from "prop-types";

import "./MemberCard.css";

const MemberCard = ({ member }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img alt="Member Image" className="card-img-top" src={member.image} />
      <div className="card-body">
        <h5 className="card-title">{member.name}</h5>
        <p className="card-text">{member.description}</p>
        <div className="d-flex justify-content-around">
          <a href={member.facebookUrl} rel="noreferrer" target="_blank">
            <i className="fab fa-facebook-f" />
          </a>
          <a href={member.linkedinUrl} rel="noreferrer" target="_blank">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </div>
    </div>
  );
};

MemberCard.propTypes = {
  member: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    facebookUrl: PropTypes.string,
    linkedinUrl: PropTypes.string,
  }),
};

export default MemberCard;
