import React from "react";
import PropTypes from "prop-types";

import { alerts } from "../../utils/alerts";
import Spinner from "../Spinner/Spinner";

const ErrorHandler = ({ status }) => {
  if (status === "loading") {
    return (
      <div className="container">
        <Spinner />
      </div>
    );
  } else if (status === "failed") {
    alerts("Lo sentimos! La infrmación no se encuentra disponible.", "error");
  } else {
    return null;
  }
};

ErrorHandler.propTypes = {
  status: PropTypes.string,
};

export default ErrorHandler;
