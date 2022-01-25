import React, { useState } from "react";

import styles from "./PreviewImage.module.css";

// eslint-disable-next-line react/prop-types
const PreviewImage = (props) => {
  // eslint-disable-next-line no-console

  return (
    <div className={styles.previewCtn}>
      {/*eslint-disable-next-line prettier/prettier*/}
      <img
        alt="pre visualizacion imagen"
        className={styles.previewImg}
        // eslint-disable-next-line react/prop-types
        src={props.file}
      />
    </div>
  );
};

export default PreviewImage;
