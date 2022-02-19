import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import HomeSlidesContainer from "../Containers/HomeSlide/HomeSlidesContainer";
import HomeNewsCards from "../Containers/HomeCards/HomeNewsCards";
import { fetchOrganization } from "../features/Organization/organizationSlice";

const HomePage = () => {
  const welcomeText = "Texto de Bienvenida";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrganization());
  });

  return (
    <div className="container">
      <h1 className="text-center mt-3">Home Page</h1>
      <HomeSlidesContainer />
      <h2> {welcomeText}</h2>
      <HomeNewsCards />
    </div>
  );
};

export default HomePage;
