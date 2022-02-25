import React from "react";
import "./Organization.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Organization = ({ data }) => {
  return (
    <div className="container-bg">
      <h1 className="pb-2">Organización</h1>
      <div className="container card-bg">
        <div className="d-flex flex-column">
          <h2 className="text-center">{data.name}</h2>
          <div className="d-flex justify-content-center">
            <img alt={data.name} src={data.logo} className="image-preview" />
          </div>
          <h5 className="text-center">{data.short_description}</h5>
        </div>
        <div className="d-flex justify-content-between my-3">
          <Link className="btn btn-secondary " to="/backoffice">
            Volver
          </Link>
          <Link className="btn btn-primary " to="/backoffice/organization/edit">
            Editar
          </Link>
        </div>
      </div>
    </div>
  );
};

Organization.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    short_description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Organization;
