import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import ListTable from "../../ListTable/ListTable";

function ActivitiesIndex({ data }) {
  return (
    <div className="container">
      <h1>Gestor de actividades</h1>
      <div className="d-grid d-md-flex justify-content-md-end py-3">
        <Link className="btn btn-primary" to="/backoffice/activities/create">
          Crear
        </Link>
      </div>
      <ListTable data={data} />
    </div>
  );
}

ActivitiesIndex.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ActivitiesIndex;
