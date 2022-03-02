import React from "react";
import PropTypes from "prop-types";

import Footer from "../../Containers/Footer/FooterContainer";
import Header from "../Header/Header";

const LayoutPublic = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

LayoutPublic.propTypes = {
  children: PropTypes.element,
};

export default LayoutPublic;
