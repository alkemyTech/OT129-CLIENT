import React from "react";

import SlidesForm from "../../Components/Slides/SlidesForm";
import TitleNav from "../../Components/TitleNav/TitleNav";

const SlidesBackofficeContainer = () => {
  return (
    <div className="container mt-3">
      <TitleNav link="/backoffice/slides" linkTitle="Volver" />
      <SlidesForm />
    </div>
  );
};

export default SlidesBackofficeContainer;
