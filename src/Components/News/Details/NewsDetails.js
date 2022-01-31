import React from "react";
import PropTypes from "prop-types";

const NewsDetails = ({ data }) => {
  return (
    <div className="container">
      <h1>{data.name}</h1>
      <div className="d-grid d-md-flex justify-content-md-center py-3">
        <img alt={data.name} className="mw-100" src={data.image} />
      </div>
      <h5 className="text-center">{data.content}</h5>
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
