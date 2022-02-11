import React from "react";

import ContactForm from "../Components/Contact/ContactForm";
import Titles from "../Components/Titles/Titles";
import LeaFlet from "../Components/Leaflet/LeaFlet";

const ContactPage = () => {
  return (
    <div>
      <Titles title="Contacto" />
      <LeaFlet />

      <ContactForm />
    </div>
  );
};

export default ContactPage;
