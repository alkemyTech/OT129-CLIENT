import React from "react";

import Titles from "../Components/Titles/Titles";
import AboutInfoContainer from "../Containers/About/AboutInfoContainer";
import MemberCardContainer from "../Containers/Members/MemberCardContainer";

const AboutPage = () => {
  return (
    <>
      <Titles title="Nosotros" />
      <AboutInfoContainer />
      <MemberCardContainer />
    </>
  );
};

export default AboutPage;
