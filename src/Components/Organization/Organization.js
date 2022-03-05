import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import DangerouslySetInnerHTML from "../DangerouslySetInnerHTML/DangerouslySetInnerHTML";

import styles from "./Organization.module.css";

const Organization = ({ data }) => {
  return (
    <div className={`container-fluid ${styles.containerBg}`}>
      <div className={styles.containerSm}>
        <div className={styles.cardBg}>
          <div className="d-flex flex-column">
            <h1 className={styles.title}>{data.name}</h1>
            <div className="d-flex justify-content-center">
              <img alt={data.name} className={styles.logo} src={data.logo} />
            </div>
            <p className={styles.description}>
              <DangerouslySetInnerHTML content={data.short_description} />
            </p>
          </div>
          <div className="d-flex justify-content-between mt-4">
            <Link className="general-btn fill-black-btn text-decoration-none" to={"/backoffice"}>
              Volver
            </Link>
            <Link
              className="general-btn fill-btn text-decoration-none"
              to={`/backoffice/organization/edit/${data.id}`}
            >
              Editar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Organization.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    logo: PropTypes.string,
    short_description: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default Organization;
