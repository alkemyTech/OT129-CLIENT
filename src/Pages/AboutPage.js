import React from "react";

import Titles from "../Components/Titles/Titles";
import AboutInfoContainer from "../Containers/About/AboutInfoContainer";
import MemberCardContainer from "../Containers/Members/MemberCardContainer";
import SocialWidgets from "../Components/SocialWidgets/SocialWidgets";

const AboutPage = () => {
  return (
    <>
      <Titles title="Nosotros" />
      <AboutInfoContainer />
      <MemberCardContainer />
      <SocialWidgets />
    </>
  );
};

export default AboutPage;
