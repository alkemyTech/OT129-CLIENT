import React from "react";
import PropTypes from "prop-types";

import DangerouslySetInnerHTML from "../../DangerouslySetInnerHTML/DangerouslySetInnerHTML";

import styles from "./NewsDetails.module.css";

const NewsDetails = ({ data }) => {
  return (
    <div className="container mt-5">
      <div className={styles.containerNewsDetail}>
        <img alt={data.name} className={styles.imgNewsDetail} src={data.image} />
        <p className={`text-center mt-4 ${styles.textNewsDetail}`}>
          <DangerouslySetInnerHTML content={data.content} />
        </p>
      </div>
    </div>
  );
};

NewsDetails.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default NewsDetails;
