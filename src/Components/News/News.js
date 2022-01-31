import React from "react";
import PropTypes from "prop-types";

const News = ({ text }) => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row row-donation d-flex justify-content-between align-items-center mx-auto">
          <div className="col-8">
            <p className="text">{text}</p>
            <p className="text">text</p>
          </div>
          {/* <div className="col-4 col-button">
            <button className="general-btn fill-btn">Contribuye</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

News.propTypes = {
  text: PropTypes.string,
};

export default News;
