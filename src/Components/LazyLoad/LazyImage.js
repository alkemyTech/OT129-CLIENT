import React, { useRef } from "react";
import PropTypes from "prop-types";

import LazyLoad from "react-lazyload";

import styles from './LazyImage.module.css'

const LazyImage = ({ src, alt }) => {
    const refPlaceholder = useRef();

    const removePlaceholder = () => {
        refPlaceholder.current.remove();
    };

  return (
    <div style={styles.lazyCtn}>
      <div ref={refPlaceholder} style={styles.lazyPlaceholder}>
          <LazyLoad>
           <img alt={alt} src={src} style={styles.lazyImg} onError={removePlaceholder} onLoad={removePlaceholder}/>
          </LazyLoad>
      </div>
    </div>
  );
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default LazyImage;
