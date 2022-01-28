import React from "react";
import PropTypes from "prop-types";
import "./ThankYou.css";

const ThankYou = ({ text }) => {
  return (
    <div className="container-fluid container-donation">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-container">
              <h2 className="mb-5 title">¡Gracias!</h2>
              <p className="text">{text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ThankYou.propTypes = {
  text: PropTypes.string,
};

export default ThankYou;
