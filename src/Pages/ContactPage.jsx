import React from "react";
import PropTypes from "prop-types";

import ContactForm from "../Components/Contact/ContactForm";
import Titles from "../Components/Titles/Titles";

const ContactPage = ({ props }) => {
  return (
    <div>
      <Titles title="Contacto" />
      <h3 className="text-center">Acá va a ir el contenido de esta pagina</h3>
      {props}
      <ContactForm />
    </div>
  );
};

ContactPage.propTypes = {
  props: PropTypes.array,
};
export default ContactPage;
