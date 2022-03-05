import React from "react";

import HomeSlidesContainer from "../Containers/HomeSlide/HomeSlidesContainer";
import HomeOrganizationText from "../Components/Home/HomeOrganizationText/HomeOrganizationText";
import HomeNewsCards from "../Components/Home/HomeNewsCards/HomeNewsCards";
import HomeTestimonialsCards from "../Components/Home/HomeTestimonialsCards/HomeTestimonialsCards";

const HomePage = () => {
  return (
    <>
      <HomeSlidesContainer />
      <HomeOrganizationText />
      <HomeNewsCards />
      <HomeTestimonialsCards />
    </>
  );
};

export default HomePage;
