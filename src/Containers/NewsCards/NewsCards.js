import React from "react";
import PropTypes from "prop-types";

import Card from "../../Components/Card/Card";

const NewsCards = ({ data }) => {
  return (
    <div className="container my-5 d-grid gap-3">
      <div className="row">
        {data.map((el) => (
          <div key={el.id} className="col">
            <Card description={el.description} image={el.image} title={el.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsCards;

NewsCards.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
};