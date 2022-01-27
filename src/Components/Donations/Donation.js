import React from "react";
import PropTypes from "prop-types";
import "./Donation.css";

const Donation = ({ text }) => {
  return (
    <div className="container-fluid container-donation">
      <div className="container">
        <div className="row row-donation">
          <div className="col-8">
            <p className="text">
              Cada método es adecuado para una situación concreta y, por ello, es necesario saber
              cómo funcionan todas.
            </p>
          </div>
          <div className="col-4 col-button">
            <button className="general-btn fill-btn">Contribuye</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Donation.propTypes = {
  text: PropTypes.string,
};

export default Donation;
