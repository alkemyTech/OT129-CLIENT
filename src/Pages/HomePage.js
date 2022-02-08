import React from "react";

import HomeSlide from "../Containers/HomeSlide/HomeSlide";
import HomeCards from "../Containers/HomeCards/HomeCards";

const HomePage = () => {
  const cardNews = "Cards Desde la API Novedades";
  const welcomeText = "Texto de Bienvenida";

  return (
    <div className="container">
      <h1 className="text-center mt-3">Home Page</h1>
      <HomeSlide />
      <h2> {welcomeText}</h2>
      <HomeCards card={cardNews} />
    </div>
  );
};

export default HomePage;
