import React from "react";
import PropTypes from "prop-types";

const ActivitiesDetail = ({ data }) => {
  return (
    <div className="container">
      <h1>{data.name}</h1>
      <div className="d-grid d-md-flex justify-content-md-center py-3">
        <img alt={data.name} src={data.image} className="mw-100" />
      </div>
      <h5 className="text-center">{data.description}</h5>
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
