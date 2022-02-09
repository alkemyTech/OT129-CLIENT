import React from "react";
import PropTypes from "prop-types";

import "./MemberCard.css";

const MemberCard = ({ name, image, description, facebookUrl, linkedinUrl }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img alt="Member Image" className="card-img-top" src={image} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <div className="d-flex justify-content-around">
          <a href={facebookUrl} rel="noreferrer" target="_blank">
            <i className="fab fa-facebook-f" />
          </a>
          <a href={linkedinUrl} rel="noreferrer" target="_blank">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </div>
    </div>
  );
};

MemberCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  facebookUrl: PropTypes.string,
  linkedinUrl: PropTypes.string,
};

export default MemberCard;
