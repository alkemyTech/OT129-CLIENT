import React from "react";
import PropTypes from "prop-types";

import styles from "./MemberCard.module.css";

const MemberCard = ({ name, image, description, facebookUrl, linkedinUrl }) => {
  return (
    <div className={`card ${styles.memberCard}`}>
      <img alt="Member Image" className={styles.cardImgTop} src={image} />
      <div className={`card-body`}>
        <h5 className="card-title">{name}</h5>
        <p dangerouslySetInnerHTML={{ __html: `${description}` }} className="card-text" />
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
