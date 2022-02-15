import React from "react";
import PropTypes from "prop-types";

import "./Donation.css";
import DonationAmountModal from "./DonationAmountModal";

const Donation = ({ text }) => {
  return (
    <div className="container-fluid container-donation">
      <div className="container">
        <div className="row row-donation d-flex justify-content-between align-items-center mx-auto">
          <div className="col-8">
            <p className="text">{text}</p>
          </div>
          <div className="col-4 col-button">
            <DonationAmountModal />
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
