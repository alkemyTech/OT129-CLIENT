import React from "react";
import PropTypes from "prop-types";

import BackNavBar from "../../Components/BackNavBar/BackNavBar";

const LayoutBackoffice = ({ children }) => {
  return (
    <>
      <BackNavBar />
      <main> {children} </main>
    </>
  );
};

LayoutBackoffice.propTypes = {
  children: PropTypes.element,
};

export default LayoutBackoffice;
