import React from "react";
import PropTypes from "prop-types";

const ContainerFormCard = ({ children }) => {
  return (
    <div className="mt-5 w-50 m-auto border border-light shadow-lg bg-body rounded">{children}</div>
  );
};

ContainerFormCard.propTypes = {
  children: PropTypes.node,
};

export default ContainerFormCard;
