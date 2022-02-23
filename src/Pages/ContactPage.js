import React from "react";

import Titles from "../Components/Titles/Titles";
import ContentContainer from "../Components/Contact/ContentContainer";

const ContactPage = () => {
  return (
    <div className="pb-5">
      <Titles title="Contacto" />
      <ContentContainer />
    </div>
  );
};

export default ContactPage;
