import React from "react";
import PropTypes from "prop-types";

import DangerouslySetInnerHTML from "../../DangerouslySetInnerHTML/DangerouslySetInnerHTML";

import styles from "./ActivitiesDetail.module.css";

const ActivitiesDetail = ({ data }) => {
  return (
    <div className="container my-5">
      <div className={styles.containerActivitiesDetail}>
        <img alt={data.name} className={styles.imgActivitiesDetail} src={data.image} />
        <p className={`text-center ${styles.textActivitiesDetail}`}>
          <DangerouslySetInnerHTML content={data.description} />
        </p>
      </div>
    </div>
  );
};

ActivitiesDetail.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ActivitiesDetail;
