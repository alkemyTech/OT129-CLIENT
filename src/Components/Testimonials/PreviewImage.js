import React from "react";
import PropTypes from "prop-types";
import styles from "./PreviewImage.module.css";

const PreviewImage = ({ file }) => {
  return (
    <div className={styles.previewCtn}>
      <img alt="pre visualizacion imagen" className={styles.previewImg} src={file} />
    </div>
  );
};

PreviewImage.propTypes = {
  file: PropTypes.string,
};

export default PreviewImage;
