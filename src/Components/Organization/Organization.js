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
            <img alt={data.name} className="preview-image" src={data.logo} />
          </div>
          <h5 className="text-center">{data.short_description}</h5>
        </div>
        <div className="d-flex justify-content-between my-3">
          <Link className="general-btn fill-black-btn text-decoration-none" to="/backoffice">
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
