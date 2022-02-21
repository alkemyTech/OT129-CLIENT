import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import { selectAuth } from "../../features/auth/authSlice";

import "./Donation.css";
import DonationAmountModal from "./DonationAmountModal";

const Donation = ({ text }) => {
  const {
    auth,
    user: { role_id },
  } = useSelector(selectAuth);
  const history = useHistory();

  useEffect(() => {
    if (!auth || (auth && role_id === 1)) {
      history.push("/");
    }
  }, [history]);

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
